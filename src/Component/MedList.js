import React from "react";
import './med.css'
import { } from 'react-bootstrap';

const MedList=(props)=>{
    

    return (
      <tbody>
        <tr>
          <td> </td>
          <td>{props.name}</td>
          <td>{props.price}</td>
          <td>{props.amount}</td>
        </tr>
      </tbody>
    );
}
export default MedList;