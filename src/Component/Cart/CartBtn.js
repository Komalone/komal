import "./cart.css"

const CartBtn=props=>{
    return (
        <button className="cartbtn" onClick={props.onClick}>
          Cart <span>0</span>
        </button>
    );
}

export default CartBtn;