import styled from "@emotion/styled";
import Layout from "./components/Layout/index.jsx";
import {GlobalStyle} from "./GlobalStyle.jsx";

const App = () => {
  
  return (
    <Container>
        <GlobalStyle />
        <Layout>
            <div>sdf</div>
        </Layout>
    </Container>
  )
}

const Container = styled.div`
  
`;


export default App