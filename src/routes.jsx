import App from "./App Components/App";
import HomePage from "./HomePage Components/HomePage";
import Contacts from "./Contacts Components/Contacts";
import Projects from "./Projects Components/Projects";
import Skills from "./Skills Components/Skills";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    // This is a catch-all for errors that occur within the <App /> component or its children.
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "project", element: <Projects /> },
      { path: "skills", element: <Skills /> },
      { path: "contacts", element: <Contacts /> },
    ],
  },
];

export default routes;
