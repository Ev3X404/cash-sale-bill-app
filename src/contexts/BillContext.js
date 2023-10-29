// BillContext.js

import React, { createContext, useContext, useState } from "react";

const BillContext = createContext();

export function BillProvider({ children }) {
  const [bills, setBills] = useState([]);

  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const addBill = (newBill) => {
    setBills([...bills, newBill]);
  };

  const handleDeleteBill = (id) => {
    setBills((prevBills) => prevBills.filter((bill) => bill.id !== id));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const bill of bills) {
      if (bill.status !== 0) {
        totalAmount += bill.quantity * bill.price;
      }
    }
    return totalAmount;
  };

  return (
    <BillContext.Provider
      value={{ bills, addBill, getTotalAmount, handleDeleteBill, formatMoney }}
    >
      {children}
    </BillContext.Provider>
  );
}

export function useBill() {
  return useContext(BillContext);
}
