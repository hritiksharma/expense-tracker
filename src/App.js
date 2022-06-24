import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "New Tv",
      amount: 1500,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e3",
      title: "Grocery",
      amount: 600,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e4",
      title: "Electricity",
      amount: 300,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In app .js ");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
