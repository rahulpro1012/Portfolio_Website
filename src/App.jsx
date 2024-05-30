import Page from "./components/Page";
import Notfound from "./components/Notfound";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page />,
      errorElement: <Notfound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
