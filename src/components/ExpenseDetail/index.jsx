import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const ExpenseDetail = ({ expenses, deleteExpense, updateExpense }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const expense = expenses.find((exp) => exp.id === parseInt(id, 10));
  const [date, setDate] = useState(expense.date);
  const [item, setItem] = useState(expense.item);
  const [amount, setAmount] = useState(expense.amount);
  const [description, setDescription] = useState(expense.description);

  const handleUpdate = () => {
    updateExpense({ ...expense, date, item, amount, description });
    navigate("/");
  };

  return (
    <div>
      <button onClick={() => navigate("/")}>뒤로가기</button>
      <button onClick={() => deleteExpense(expense.id)}>삭제</button>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleUpdate}>확인</button>
      </div>
    </div>
  );
};

export default ExpenseDetail;
