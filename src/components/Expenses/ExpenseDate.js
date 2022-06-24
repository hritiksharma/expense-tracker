import React from "react";
import "./expenseDate.css";

const ExpenseDate = (props) => {
  // const year = props.date.getFullYear();
  // const month = props.date.toLocaleDateString("en-US", { month: "long" });
  // const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expnese-date">
      <div className="expnese-date__month">{month}</div>
      <div className="expnese-date__year">{year}</div>
      <div className="expnese-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
