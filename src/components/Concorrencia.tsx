import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Placeholder = styled.div`
  background: ${({ theme }) => theme.colors.primary}22;
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  font-size: 1.2rem;
`;

const Concorrencia = () => (
  <Section id="concorrencia">
    <h1>Concorrência e Estrutura de Mercado</h1>
    <Placeholder>
      [Mapa interativo: Localização dos principais players]<br />
      [Gráfico de pizza: Participação de mercado]<br />
      [Card: Benchmark internacional]
    </Placeholder>
  </Section>
);

export default Concorrencia;
