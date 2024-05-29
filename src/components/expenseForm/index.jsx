import styled from "@emotion/styled";
import { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    const expense = {
      date,
      category,
      amount,
      description,
    };
    console.log("@@ expense", expense);
    addExpense(expense);
    setDate("");
    setCategory("");
    setAmount("");
    setDescription("");
  };

  return (
    <Container>
      <Form onSubmit={handleExpenseSubmit}>
        <div>
          <label>날짜:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>지출 항목:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>지출 금액:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>지출 내용:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">저장</button>
      </Form>
    </Container>
  );
};

const Container = styled.section`
  background-color: olive;
  padding: 40px;
  border-radius: 16px;
  font-size: 22px;
  color: #333;
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    label {
      margin-right: 10px;
    }
    input {
      height: 40px;
      border-radius: 8px;
      border: 0;
      flex-grow: 1;
    }
  }
  button {
    height: 45px;
    font-size: 22px;
    border-radius: 8px;
    border: 0;
    color: #333;
  }
`;

export default ExpenseForm;
