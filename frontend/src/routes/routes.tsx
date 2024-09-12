import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import BookPage from "../pages/Book";
import Main from "../pages/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Main />
      </Layout>
    ),
  },
  {
    path: "/books",
    element: (
      <Layout>
        <BookPage />
      </Layout>
    ),
  },
]);
