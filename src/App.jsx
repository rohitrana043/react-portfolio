import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Credentials from './pages/Credentials';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'credentials',
        element: <Credentials />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      // {
      //   path: 'contact',
      //   element: <Contact />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
