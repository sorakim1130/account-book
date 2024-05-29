import styled from "@emotion/styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "../pages/Expenses.jsx";

const Router = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path={"/expenses"} element={<Expenses />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

const Container = styled.div``;

export default Router;
