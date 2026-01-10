import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./components/Page";
import Notfound from "./components/Notfound";

// Define router outside the component to prevent recreation on re-renders
const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <Notfound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
