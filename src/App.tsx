import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import PanoramaAtual from './components/PanoramaAtual';
import Tendencias2030 from './components/Tendencias2030';
import Concorrencia from './components/Concorrencia';
import Oportunidades from './components/Oportunidades';

const Layout = styled.div`
  display: flex;
`;

const Content = styled.main`
  margin-left: 240px;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.light};
  min-height: 100vh;
`;

function App() {
  return (
    <Layout>
      <Sidebar />
      <Content>
        <PanoramaAtual />
        <Tendencias2030 />
        <Concorrencia />
        <Oportunidades />
      </Content>
    </Layout>
  );
}

export default App;
