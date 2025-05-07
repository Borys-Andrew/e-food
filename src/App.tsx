import { useRoutes } from "react-router-dom";

import { AppLayout } from "./components";
import {
  AboutPage,
  BlogPage,
  ContactsPage,
  HomePage,
  RecipePage,
  RecipiesPage,
} from "./pages";
import { NotFoundPage } from "./pages/notFoundPage";
import { Paths } from "./settings";

function App() {
  const element = useRoutes([
    {
      path: Paths.index,
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: Paths.recipies.index,
          element: <RecipiesPage />,
          children: [
            {
              path: Paths.recipies.id.index,
              element: <RecipePage />,
            },
          ],
        },
        {
          path: Paths.blog.index,
          element: <BlogPage />,
        },
        {
          path: Paths.contacts.index,
          element: <ContactsPage />,
        },
        {
          path: Paths.about.index,
          element: <AboutPage />,
        },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return <>{element}</>;
}

export default App;
