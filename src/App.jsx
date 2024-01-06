import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import ErrorPage from "./routes/error-page.jsx";
import { Countries } from "./routes/Countries.jsx";
import { CountryDetails } from "./routes/CountryDetails.jsx";
import "./App.css";

/*
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install -D prettier prettier-plugin-tailwindcss
npm install react-icons --save
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Countries />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/country/:name",
    element: <CountryDetails />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
