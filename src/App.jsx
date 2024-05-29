import styled from "@emotion/styled";
import Layout from "./components/Layout/index.jsx";
import { GlobalStyle } from "./GlobalStyle.jsx";
import Calendar from "./components/Calendar/index.jsx";
import { useState } from "react";
import ExpenseForm from "./components/expenseForm/index.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import ExpenseList from "./components/ExpenseList/index.jsx";
import ExpenseDetail from "./components/ExpenseDetail/index.jsx";
import expensesData from "./data/fakeData.json";

const App = () => {
  //지출 항목
  const [expenses, setExpenses] = useState(expensesData);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const navigate = useNavigate();

  //지출 항목 추가
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  //지출 항목 삭제
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    navigate("/");
  };
  const updateExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense,
      ),
    );
  };

  const filteredExpenses = expenses.filter(
    (expense) => new Date(expense.date).getMonth() + 1 === selectedMonth,
  );

  return (
    <Container>
      <Layout>
        <ExpenseForm addExpense={addExpense} />
        <Calendar
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ExpenseList
                expenses={filteredExpenses}
                setSelectedExpense={setSelectedExpense}
              />
            }
          />
          <Route
            path="/expense/:id"
            element={
              <ExpenseDetail
                expenses={expenses}
                deleteExpense={deleteExpense}
                updateExpense={updateExpense}
              />
            }
          />
        </Routes>
      </Layout>
    </Container>
  );
};

const Container = styled.div``;

export default App;
