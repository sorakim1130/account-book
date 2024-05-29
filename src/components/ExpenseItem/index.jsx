import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const ExpenseItem = ({ expense, setSelectedExpense }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedExpense(expense);
    navigate(`/expense/${expense.id}`);
  };

  return (
    <Container onClick={handleClick}>
      <li>
        <div>날짜 : {expense.date}</div>
        <div>항목 : {expense.item}</div>
        <div>금액 : {expense.amount}</div>
        <div>내용 : {expense.description}</div>
      </li>
    </Container>
  );
};

const Container = styled.ul`
  font-size: 22px;
  background-color: #fff;
  padding: 20px;
  border-radius: 16px;
  color: #666;
  li {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default ExpenseItem;
