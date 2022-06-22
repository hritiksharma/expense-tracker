import React from "react";
import "./expenseDate.css";

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });
  return (
    <div className="expnese-date">
      <div className="expnese-date__month">{month}</div>
      <div className="expnese-date__year">{year}</div>
      <div className="expnese-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
