import {
  createBrowserRouter
} from 'react-router-dom';
import App from 'App';
import {
  ErrorPage,
  Home,
  Courses,
  Examples,
  QnA,
  About,
} from 'pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'courses',
        element: <Courses />
      },
      {
        path: 'examples',
        element: <Examples />
      },
      {
        path: 'qna',
        element: <QnA />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);

export default router;