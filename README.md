# React & TanStack Router Test

This project is a small React application built with TypeScript, Vite, and TanStack Router. The goal of this test is to demonstrate the ability to manage application state within the URL and render data on the home page based on URL search parameters.

## Project Overview

### Features

- **Fetch Data**: The application fetches data from an API endpoint.
- **Manage State in URL**: Instead of using `useState` for managing data, the state is stored and managed directly in the URL's search parameters.
- **Render Data from URL**: The data is extracted from the URL and rendered on the home page.

### API Used

- The application fetches data from `https://jsonplaceholder.typicode.com/todos/1`. The expected response structure is as follows:
  ```json
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }
  ```

## Getting Started

### Prerequisites

- **Node.js**: Ensure that you have Node.js installed on your system.
- **Yarn**: This project uses Yarn as the package manager. If you don't have Yarn installed, you can install it globally using npm:
  ```bash
  npm install -g yarn
  ```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DavidQuartz/tanstack-react-test.git
   ```

2. Navigate to the project directory:
   ```bash
   cd tanstack-react-test
   ```

3. Install the dependencies:
   ```bash
   yarn
   ```

### Running the Project

To start the development server and view the project in your browser:

```bash
yarn dev
```

The development server will start, and you can access the application in your web browser by navigating to `http://localhost:5173`. Please note that the server does not automatically open the browser.

### How It Works

1. **Home Page**:
   - On the initial render, the application checks if the data is present in the URL's search parameters.
   - If the data is not present, the application fetches the data from the API, stores it in the URL, and then renders the fetched data.
   - If the data is already present in the URL, the application skips the API call and directly renders the data from the URL.

2. **Managing State in URL**:
   - The `useSearch` hook is used to access the current search parameters from the URL.
   - The fetched data is stored in the URL as a serialized JSON object under the `data` key.

### Example URL

After the data is fetched, the URL will look something like this:

```
http://localhost:5173/?data={"userId":1,"id":1,"title":"delectus%20aut%20autem","completed":false}
```

### Folder Structure

- **src/routes/index.tsx**: Contains the main component that fetches data, manages state in the URL, and renders the data.
- **src/App.tsx**: Renders the routing setup for the application.

## Additional Information

- **Vite**: The project is set up using Vite for a fast development experience.
- **TanStack Router**: This project uses TanStack Router to manage routes and URL state. For more information, you can refer to the [official TanStack Router documentation](https://tanstack.com/router/v1/docs/framework/react/overview).
