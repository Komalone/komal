import { useContext } from "react";
import Modal from "../Modal";
import './cart.css';
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

const Cart=(props)=>{

  const cartCtx= useContext(CartContext);

  const totalAmount= `$ ${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
    
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item });
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
      ))}
    </ul>
  );

    return (
        <Modal onClose={props.onClose}>
        <div >
          {cartItems}
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div >
        <button  onClick={props.onClose}>
          Close
        </button>
        </div>
        </Modal>
    );
}

export default Cart;