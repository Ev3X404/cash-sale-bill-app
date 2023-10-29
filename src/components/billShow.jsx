// BillShow.js
import { useBill } from "../contexts/BillContext";
import React from 'react';
import "./billShow.css"

const BillShow = (props) => {
  const { name, quantity, price, status, mapIndex } = props.data;
  console.log("props.mapIndex:", props.mapIndex);
  const {formatMoney } = useBill();

  return (
    <div className='table' >
      <p className='print-number'>{props.mapIndex + 1}</p>
        <p className='print-name'>{name}</p>
        <p className='print-quantity'>{quantity}</p>
        <p className='print-price'> {formatMoney(price)}</p>
        <p className='print-amount'>{formatMoney(price * quantity)}</p>
    </div>
  );
};

export default BillShow;
