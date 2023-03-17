import React from 'react'
import { useState, createContext } from 'react'

export const CartContext = createContext()

const CartcontextProvider = ({children}) => { 

    const [cart, setCart] = useState([])


    const addToCart = ( product ) =>{
        let exist = isInCart(product.id)

        if(exist){
            let newCart = cart.map((element) => {
                if(element.id === product.id){
                    let newProduct = {
                        ...element,
                        quantity:product.quantity
                    }
                    return newProduct
                }else{
                    return element
                }
            })
            setCart(newCart)

        }else{
            setCart([...cart, product])
        }
    }

    const clearCart = () => { 
        setCart([]) 
    }

    const deleteProductById = (id) =>{
        let newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
    }
    
    const isInCart = (id)=> cart.some(element => element.id === id)
    

    const getQuantityById = (id) =>{

        let product = cart.find(element => element.id === id)
        return product?.quantity
    }

    const getTotalItems = () =>{

        const total = cart.reduce((acc, element)=>{
        return acc + element.quantity
        }, 0)

        return total
    }

    const getTotalPrice = ()=>{

        const total = cart.reduce((acc, element) => {
            return acc + (element.precio * element.quantity)
        }, 0)

        return total

    }





    let data = { 
        cart,
        addToCart,
        clearCart,
        deleteProductById,
        getQuantityById,
        getTotalItems,
        getTotalPrice
    
    }


    return (

            <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider>

    )
}

export default CartcontextProvider