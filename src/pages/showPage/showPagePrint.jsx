import React from 'react';
import { useProfile } from '../../contexts/profileContext'; // นำเข้า Context
import { useBill } from "../../contexts/BillContext";
import "./showPagePrint.css"


import BillShow from "../../components/billShow";

const ShowPagePrint = () => {
    const { profileData } = useProfile(); // ใช้ Context
    const { bills,getTotalAmount,formatMoney } = useBill(); // Use the context
    const totalAmount = getTotalAmount()
  
    return (
      <div className='print-page'>
        <div className='top-header'>
        <h1 className='black-header'>บิลเงินสด / Cash Sale</h1>
        </div>

        < div className='info'>
        <p>Name: {profileData.name}</p>
        <p>วันที่ : {profileData.date}</p>
        </div> <div className='info'> 
        <p>Address: {profileData.address}</p>
        <p>Phone Number: {profileData.phoneNumber}</p>
        </div>
  
        <div className='table'>
        <p className='print-number' style={{ color: 'white', backgroundColor: "black" }}>ลำดับ</p>

        <p className='print-name' style={{ color: 'white', backgroundColor: "black" }}>ชื่อ</p>
        <p className='print-quantity' style={{ color: 'white', backgroundColor: "black" }}>จำนวน</p>
        <p className='print-price' style={{ color: 'white', backgroundColor: "black" }}>ราคาต่อหน่วย</p>
        <p className='print-amount' style={{ color: 'white', backgroundColor: "black" }}>ราคารวม</p>
      </div>

      
      {bills.map((bill, index) => (
         bill.status !== 0 && <BillShow key={index} data={bill} mapIndex={index}/>
        ))}
        <div className='absolute-table'>
<div className='table '>
        <p className='print-number'>บาท</p>
        <p className='print-name'></p>
        <p className='print-quantity'></p>
        <p className='print-price'>รวมเงิน</p>
        <p className='print-amount'>{formatMoney(totalAmount)}</p>
        
      </div>
      <h4>ผู้รับเงิน {profileData.nameTwo}</h4>
      </div>
      </div>
    );
  };

export default ShowPagePrint