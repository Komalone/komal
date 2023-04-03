import React from 'react';
import {Table } from 'react-bootstrap';
import MedList from './MedList';

const DUMMY= [
    {
        id:"m1",
        name:"Paracetamol",
        price:20,
        amount:40
    },
    {
        id:"m2",
        name:"Asprin",
        price:120,
        amount:20
    },
    {
        id:"m3",
        name:"cough medicine",
        price:80,
        amount:10
    },
    {
        id:"m4",
        name:"Antacid",
        price:40,
        amount:50
    },
    {
        id:"m5",
        name:"Eye drop",
        price:150,
        amount:20
    },
]
const AvailableMedList=()=>{
    const medList= DUMMY.map((med)=>(
        <MedList
        key={med.id}
        id={med.id}
        name={med.name}
        price={med.price}
        amount={med.amount}
        />
    ))

    return (
        <section >
        <Table className='medlist'>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
        {medList}
        </Table>
        </section>
        
    );
}
export default AvailableMedList;