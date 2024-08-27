import './App.css';
import { NavBar } from './components/example/NavBar';
import State from './components/State';
import Count from './components/example/Count';
import DarkMode from './components/DarkMode';
import { useState } from "react";
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import TodoContainer from './components/todo-list/TodoContainer';
import TodoList from './components/todo-list/TodoList';
import TimerContainer from './components/timer/TimerContainer';
import TodoListEffect from './components/todo-useEffect/TodoListEffect';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import NavBarEcommer from './components/ecommerce/NavBarEcommer';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage'
import { CartProvider } from './hooks/CartContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBarEcommer />
        <Link to="/product">Product List</Link>
      </div>
    ),
  },
  {
    path: "/product",
    element: (
      <div>
        <NavBarEcommer />
        <ProductListPage />
      </div>
    ),
  },
  {
    path: "/cart",
    element: (
      <div>
        <NavBarEcommer />
        <CartPage />
      </div>
    ),
  }

]);
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  //ProductListPage
  //ProductDetailPage
  //CartPage

  return (
    // <div className="App">

    //   {/* <NavBar />
    //   <State />
    //   <Count />
    //   <DarkMode />
    //   {isLoggedIn ? <UserList /> : <LoginForm onLogin={handleLogin}/>} */}
    //   {/* <TodoList /> */}
    //   {/* <TodoListEffect /> */}
    //   {/* <TimerContainer/> */}
    // </div>
    // <RouterProvider router={router} />
    <CartProvider>
      <BrowserRouter>
        <NavBarEcommer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
