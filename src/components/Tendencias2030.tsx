import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const Section = styled.section`
  margin-bottom: 2rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const DestaqueCard = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  box-shadow: 0 2px 8px #1b243330;
  padding: 1.5rem;
  text-align: left;
  font-size: 1.08rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.35rem;
  font-weight: 700;
  margin: 2rem 0 1rem;
  letter-spacing: 0.5px;
`;

const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 14px;
  padding: 1.5rem 1.2rem;
  box-shadow: 0 4px 16px #1b243320;
  text-align: left;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
  position: relative;
  &:hover {
    box-shadow: 0 8px 24px #1dc3d440;
    transform: translateY(-4px) scale(1.03);
    border-color: #00c853;
  }
`;

const CardIcon = styled.span`
  display: inline-block;
  font-size: 1.7rem;
  margin-right: 0.7rem;
  vertical-align: middle;
`;

const destaqueCards = [
  {
    title: 'Projeção Global: Tecnologias de Purificação',
    value: 'US$ 414,5 milhões (2025) → US$ 2,157 bilhões (2033)',
    detail: 'Crescimento anual (CAGR): 22,9%'
  },
  {
    title: 'Rotas Tecnológicas',
    value: 'Separação por membranas, PSA',
    detail: 'Eficiência na purificação do biogás'
  },
  {
    title: 'Empresas de Tecnologia no Brasil',
    value: 'UBE, 3DI Engenharia, Evonik',
    detail: 'Sistemas de membranas e reatores avançados'
  }
];

const crescimentoData = [
  { ano: '2025', biometano: 75 },
  { ano: '2026', biometano: 90 },
  { ano: '2027', biometano: 110 },
  { ano: '2028', biometano: 140 },
  { ano: '2029', biometano: 180 },
  { ano: '2030', biometano: 230 },
];

const modelosNegocio = [
  {
    title: 'Clusters e Hubs de Biometano',
    desc: 'Agregação de produtores rurais em unidades centralizadas para ganho de escala e acesso à infraestrutura.'
  },
  {
    title: 'Parcerias Público-Privadas (PPPs)',
    desc: 'Instrumento eficaz para grandes projetos, como ecoparques e concessões de serviços de tratamento de resíduos.'
  },
  {
    title: 'Parcerias Internacionais',
    desc: 'Exemplo: Brasil-Alemanha no Paraná para hidrogênio verde a partir de biogás.'
  },
  {
    title: 'Modelo Resíduo Zero',
    desc: 'Exemplo: Gás Verde utiliza tail gas para energia elétrica e vende CO₂ purificado.'
  }
];

const fontesFinanciamento = [
  {
    title: 'BNDES (Fundo Clima)',
    desc: 'Linhas de crédito e subvenção econômica para projetos de biocombustíveis e transição energética.'
  },
  {
    title: 'FINEP (Mais Inovação)',
    desc: 'Recursos não reembolsáveis para inovação em biogás e biometano.'
  },
  {
    title: 'Investidores Privados',
    desc: 'Private equity e institucionais focados em ESG e descarbonização.'
  },
  {
    title: 'Exemplo: Grupo Piracanjuba',
    desc: 'R$ 150 milhões para quatro plantas de biogás a partir de efluentes industriais.'
  }
];

const Tendencias2030 = () => (
  <Section id="tendencias">
    <SectionTitle>Tendências e Vetores de Crescimento até 2030</SectionTitle>
    <CardsGrid>
      {destaqueCards.map((card, idx) => (
        <DestaqueCard key={idx}>
          <div style={{ fontWeight: 700 }}>{card.title}</div>
          <div style={{ fontSize: '1.25rem', margin: '0.5rem 0', color: '#FFD600' }}>{card.value}</div>
          <div style={{ fontSize: '0.98rem', opacity: 0.85 }}>{card.detail}</div>
        </DestaqueCard>
      ))}
    </CardsGrid>
    <SectionTitle>Projeção de Crescimento do Mercado de Biometano</SectionTitle>
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={crescimentoData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ano" />
        <YAxis label={{ value: 'Milhões m³/ano', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Line type="monotone" dataKey="biometano" stroke="#1dc3d4" strokeWidth={3} dot={{ r: 5 }} name="Biometano" />
      </LineChart>
    </ResponsiveContainer>
    <SectionTitle>Novos Modelos de Negócio</SectionTitle>
    <CardsGrid>
      {modelosNegocio.map((item, idx) => (
        <InfoCard key={idx} tabIndex={0} aria-label={item.title} title={item.title}>
          <CardIcon>{idx === 0 ? '🔗' : idx === 1 ? '🤝' : idx === 2 ? '🌎' : '♻️'}</CardIcon>
          <strong style={{ color: '#1dc3d4', fontSize: '1.08rem' }}>{item.title}</strong>
          <div style={{ marginTop: '0.5rem', fontSize: '0.98rem' }}>{item.desc}</div>
        </InfoCard>
      ))}
    </CardsGrid>
    <SectionTitle>Fontes de Financiamento</SectionTitle>
    <CardsGrid>
      {fontesFinanciamento.map((item, idx) => (
        <InfoCard key={idx} tabIndex={0} aria-label={item.title} title={item.title}>
          <CardIcon>{idx === 0 ? '💰' : idx === 1 ? '🚀' : idx === 2 ? '🌱' : '🏭'}</CardIcon>
          <strong style={{ color: '#00C853', fontSize: '1.08rem' }}>{item.title}</strong>
          <div style={{ marginTop: '0.5rem', fontSize: '0.98rem' }}>{item.desc}</div>
        </InfoCard>
      ))}
    </CardsGrid>
  </Section>
);

export default Tendencias2030;
