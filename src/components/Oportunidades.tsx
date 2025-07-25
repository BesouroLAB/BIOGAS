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

const Oportunidades = () => (
  <Section id="oportunidades">
    <h1>Oportunidades e Gaps Estratégicos</h1>
    <Placeholder>
      [Gráfico de barras: Matérias-primas subutilizadas]<br />
      [Infográfico: Integração com agroindústria e logística]<br />
      [Card: Gaps estratégicos e oportunidades regionais]
    </Placeholder>
  </Section>
);

export default Oportunidades;
