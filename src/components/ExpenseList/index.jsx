import ExpenseItem from "../ExpenseItem/index.jsx";
import styled from "@emotion/styled";

const ExpenseList = ({ expenses, setSelectedExpense }) => {
  return (
    <Container>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          setSelectedExpense={setSelectedExpense}
        />
      ))}
    </Container>
  );
};
const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background-color: olive;
  border-radius: 16px;
`;

export default ExpenseList;
