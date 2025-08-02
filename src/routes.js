import { createBrowserRouter } from "react-router-dom";
import App from './App';
import ApplicationWrapper from './webpages/ApplicationWrapper';
import ProductListPage from './webpages/ProductListPage/ProductListPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationWrapper />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path:"/women",
        element:<ProductListPage categoryType={'WOMEN'}/>,
      },
      {
        path:"/men",
        element:<ProductListPage categoryType={'MEN'}/>,
      },
      {
        path:"/kids",
        element:<ProductListPage categoryType={'KIDS'}/>,
      },
    ]
  }
]);