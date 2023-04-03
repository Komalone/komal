import React, { useRef, useContext} from 'react';
import {Button, Card} from 'react-bootstrap';
import CartContext from '../store/CartContext';

const MedForm=(props)=>{
    const medName=useRef();
    const amount= useRef();
    const medPrice=useRef();

    const cartCtx= useContext(CartContext);

    const addMedicine=(event)=>{
        event.preventDefault();

        const medData= {
            name: medName.current.value,
            price: medPrice.current.value,
            amount: amount.current.value
        }
        console.log(medData);
       // props.onAddMedData(medData);
    }

    const addtoCart=()=>{
        const cartitem= cartCtx.addItem({
        id: Math.random().toString(),
        name: medName.current.value ,
        amount: amount.current.value ,
        price:medPrice.current.value
       })
       console.log(cartitem);
    }

    return (
        <Card>
        <form className='medform' >
            <div>
                <label>Medicine Name</label>
                <input type='text' ref={medName} />
            </div>
            <div>
                <label>Price</label>
                <input type='number' ref={medPrice}/>
            </div>
            <div>
                <label>Quantity</label>
                <input type='number' ref={amount} min='1' defaultValue='1' step='1'/>
            </div>
            <br/>
            <div>
                <Button className='bttn' onSubmit={addtoCart}>ADD to Cart</Button>
                <Button className='bttn' onSubmit={addMedicine}>ADD IN</Button>

            </div>
        </form>
        </Card>
    );
}
export default MedForm;