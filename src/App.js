import logo from "./logo.svg";
import "./App.css";
import Products from "./ShoppingCart/Products";
import "bootstrap/dist/css/bootstrap.min.css";

//import classes from react-router-dom library
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//import components from react-router
import NavBar from "./ShoppingCart/NavBar";
import Dashboard from "./ShoppingCart/Dashboard";
import Cart from "./ShoppingCart/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
