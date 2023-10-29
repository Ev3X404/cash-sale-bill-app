// bill.js
import { useBill } from "../contexts/BillContext";
import React from 'react';
import "./bill.css"

const Bill = (props) => {
  const { id, name, quantity, price } = props.data;
  const {formatMoney } = useBill();

  const handleDeleteBill = () => {
    props.handleDeleteBill(id);
  };

  return (
    <div className='addList'>

      {/* <div className='line-label'> */}
      <div className='innerBlock'>
      <h4>ชื่อ:</h4>
      <p>{name} </p>
      </div>

      <div className='innerBlock'>
      <h4>จำนวน :</h4>
      <p> {quantity}  </p>
      </div>

      <div className='innerBlock'>
      <h4>ราคา :</h4>
      <p> {formatMoney(price)} </p>
      </div>

      <div className='innerBlock'>
      <h4>รวมของรายการ :</h4>
      <p> {formatMoney(price*quantity)}  </p>

      </div>
      <button onClick={handleDeleteBill} className='deleteButton'>X</button>
      {/* </div> */}
    </div>
  );
};

export default Bill;
