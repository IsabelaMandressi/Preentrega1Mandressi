import Header from "./componentes/Header/Header"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Home from "./componentes/home/Home";

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="catalogo" element={<ItemListContainer/>}/>
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<h1>Carrito</h1>}/>
          <Route path="*" element={<h1>Error</h1>}/>
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
