//Addbillist
import { Link } from 'react-router-dom';
import { useBill } from "../../contexts/BillContext";
import "./addBillList.css"

import Bill from "../../components/bill";
import Addbill from "../../components/addbill";

const AddBillList = () => {
  const { bills, addBill,handleDeleteBill,getTotalAmount,formatMoney} = useBill();
  const totalAmount = getTotalAmount()

  return (
    <div className='Addform'>
      <Addbill onAddBill={addBill} />
      <p className='totalAmount'> ยอดรวม : {formatMoney(totalAmount)}</p>
      {bills.map((bill, index) => (
  bill.status !== 0 && <Bill key={index} data={bill} handleDeleteBill={handleDeleteBill} />
))}
  <div className='tab-link'>
  <Link to="/"> ⇐ previous page</Link>
  <Link to="/3">next page ⇒</Link>
  </div>
    </div>
  );
}

export default AddBillList;
