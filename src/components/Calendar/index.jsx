import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const Calender = ({ selectedMonth, setSelectedMonth }) => {
  const navigate = useNavigate();

  return (
    <Container>
      {months.map((month) => (
        <MonthButton
          key={month}
          onClick={() => {
            setSelectedMonth(parseInt(month));
            navigate("/");
          }}
          isSelected={selectedMonth === parseInt(month)}
        >
          {month}월
        </MonthButton>
      ))}
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  background-color: olive;
  padding: 40px;
  border-radius: 16px;
`;
const MonthButton = styled.button`
  padding: 20px;
  border-radius: 12px;
  border: none;
  font-size: 22px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: aquamarine;
    color: #fff;
  }
`;

export default Calender;
