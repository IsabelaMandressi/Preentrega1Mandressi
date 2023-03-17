
import { useState } from 'react'
import Swal from 'sweetalert2'
import {serverTimestamp, addDoc, collection} from 'firebase/firestore'
import { db } from '../../FirebaseConfig'



const FormCart = ({cart, total, clearCart, setOrderId}) => {

    const [user, setUser] = useState({nombre:"",documento:"",email:"",celular:"",domicilio:""})

    const handleSubmit = (e) =>{
        e.preventDefault()
        Swal.fire({
            position: 'middle',
            icon: 'success',
            title: 'Su pedido ha sido procesado con éxito. Le enviaremos un correo para coordinar la entrega. Gracias',
            showConfirmButton: false,
            timer: 3000
        })
        const order = {
            buyer:user,
            items:cart,
            total:total,
            date:serverTimestamp()
        }

        const orderCollection = collection(db,"orders")
        addDoc(orderCollection, order)

        console.log(orderCollection)
        clearCart()

    };
            
return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Nombre completo'onChange={(e)=>setUser({...user, nombre:e.target.value})} name="nombre"/>
            <input type="number" placeholder='Número de documento'onChange={(e)=>setUser({...user, documento:e.target.value})} name="documento"/>
            <input type="email" placeholder='Correo electrónico'onChange={(e)=>setUser({...user, email:e.target.value})} name="email"/>
            <input type="number" placeholder='Número de celular'onChange={(e)=>setUser({...user, celular:e.target.value})} name="celular"/>
            <input type="text" placeholder='Domicilio'onChange={(e)=>setUser({...user, domicilio:e.target.value})} name="domicilio"/>
            <button>Comprar</button>
        </form>
    </div>
)
}

export default FormCart