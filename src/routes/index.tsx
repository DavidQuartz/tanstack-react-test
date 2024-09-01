import { useEffect } from 'react';
import { createFileRoute, useNavigate, useSearch } from '@tanstack/react-router';

type ApiResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const navigate = useNavigate({ from: '/' });

  const search = useSearch({
    from: '/', // Specifying the route to match the search parameters from
  });

  useEffect(() => {
    // If data is already in the URL, no need to fetch it again
    if (search.data) return;

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((result: ApiResponse) => {
        
        // Storing the fetched data as a URL search parameter
        navigate({
          to: '/',
          search: { data: JSON.stringify(result) },
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [search, navigate]);

  // parsing the data from the URL
  const data = search.data ? JSON.parse(search.data) : null;

  return (
    <div>
      <h1>Home Page</h1>
      {data ? (
        <div>
          <p><strong>User ID:</strong> {data.userId}</p>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Completed:</strong> {data.completed ? data.completed : 'No'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
