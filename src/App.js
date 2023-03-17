import Header from "./componentes/Header/Header"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Home from "./componentes/home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartcontextProvider from "./context/Cartcontext";
import Cart from "./componentes/Cart/Cart";

function App() {

  return (
    <BrowserRouter>
      <CartcontextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Todo" element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoryName" element={<ItemListContainer/>}/>
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="*" element={<h1>Error</h1>}/>
        </Routes>
      </CartcontextProvider> 
    </BrowserRouter>
  );
}

export default App;
