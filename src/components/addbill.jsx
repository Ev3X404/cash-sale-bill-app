// Addbill.jsx

import React, { useState } from "react";
import "./addbill.css"

const Addbill = (props) => {
  const [order, setOrder] = useState(1);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("ราคา");

  const handleAddBill = () => {
    if (quantity === "" || isNaN(Number(quantity)) || price === "" || isNaN(Number(price))) {
      alert("กรุณากรอกข้อมูลให้ถูกต้อง");
      return;
    }

    const newBill = {
      id: order,
      name: name,
      quantity: Number(quantity),
      price: Number(price),
      status: 1, // เริ่มต้นสถานะเป็น 1
    };

    props.onAddBill(newBill);

    setOrder(order + 1);
    setName("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div className="addBill-tab">

      <p>เพิ่มรายการบิล</p>

      <input className="addBill-input"
        type="text"
        placeholder="ชื่อ"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input className="addBill-input"
        type="number"
        placeholder="จำนวน"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input className="addBill-input"
        type="number"
        placeholder="ราคา"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleAddBill} className="addBill-button">เพิ่มบิล</button>
    </div>
  );
};

export default Addbill;
