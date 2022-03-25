import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './Admin/component/Navbar'
import Main from "./Main/Main";
import Product from "./Admin/Product";
import ProductCreate from "./Admin/ProductCreate";
import ProductEdit from "./Admin/ProductEdit";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/admin/products" exact component={Product} />
        <Route path="/admin/products/create" exact component={ProductCreate} />
        <Route path="/admin/products/:id/edit" exact component={ProductEdit} />
      </BrowserRouter>
    </div>
  );
}

export default App;
