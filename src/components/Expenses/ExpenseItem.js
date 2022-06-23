import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./expenseItem.css";
import Card from "../UI/Card";
const ExpenseItem = ({ title, amount, date }) => {
  const [titleValue, setTitleValue] = useState(title);

  const handleChange = () => {
    console.log("Clicked");
    setTitleValue("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleValue}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
      <button onClick={handleChange}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
