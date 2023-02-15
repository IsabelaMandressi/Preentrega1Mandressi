import Header from "./componentes/Header/Header"
import ItemCount from "./componentes/ItemCount/ItemCount";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
function App() {

const onAdd = (cantidad)=>{
  console.log(`Se agregaron al carrito ${cantidad} productos`)
}

  return (
    <div>
      <Header/>
      <ItemListContainer/>
      <ItemCount stock = {20} initial = {0} onAdd={onAdd}/>
    </div>
  );
}

export default App;
