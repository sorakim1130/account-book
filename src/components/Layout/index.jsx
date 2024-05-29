import styled from "@emotion/styled";

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin: 0 auto;
  max-width: 1280px;
  padding: 60px;
`;

export default Layout;
