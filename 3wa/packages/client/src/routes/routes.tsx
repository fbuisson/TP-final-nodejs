import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import BookPage from "../pages/Book";
import Main from "../pages/Main";
import Genre from "../pages/Genre";
import AuthorPage from "../pages/Author";

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
  {
    path: "/genres",
    element: (
      <Layout>
        <Genre />
      </Layout>
    ),
  },
  {
    path: "/authors",
    element: (
      <Layout>
        <AuthorPage />
      </Layout>
    ),
  },
]);
