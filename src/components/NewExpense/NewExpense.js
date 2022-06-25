import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const handleAddExpense = () => {
    setisEditing(true);
  };
  const handleCollapseExpense = () => {
    setisEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <div>
          <button onClick={handleAddExpense}>Add Expense</button>
        </div>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          handleCollapseExpense={handleCollapseExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
