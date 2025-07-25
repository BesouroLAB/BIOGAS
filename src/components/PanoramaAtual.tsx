import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Section = styled.section`
  margin-bottom: 2rem;
`;

const IndicatorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const IndicatorCard = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  box-shadow: 0 2px 8px #1b243330;
  padding: 1.5rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Placeholder = styled.div`
  background: ${({ theme }) => theme.colors.primary}22;
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  font-size: 1.2rem;
`;

const substratoData = [
  { name: 'RSU/Saneamento', value: 60 },
  { name: 'Agropecuária', value: 30 },
  { name: 'Indústria', value: 10 },
];
const substratoColors = ['#1dc3d4', '#FFD600', '#00C853'];

const aplicacoes = [
  { title: 'Energia Elétrica', desc: 'Principal uso do biogás no Brasil.' },
  { title: 'Biometano', desc: 'Foco estratégico para substituir gás natural, diesel e GLP.' },
  { title: 'Geração Térmica', desc: 'Utilização em processos industriais e aquecimento.' },
];

const players = [
  'Petrobras', 'Raízen', 'Orizon', 'Solví', 'CIBiogás', 'ABiogás', 'MME', 'EPE', 'ANP'
];

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
  margin: 2rem 0;
`;

const AppCard = styled.div`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 1.2rem;
  box-shadow: 0 2px 8px #1b243320;
  text-align: left;
`;

const PlayerCard = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  box-shadow: 0 1px 4px #1b243320;
`;

const indicadores = [
  {
    label: 'Nº de Plantas de Biogás (2024)',
    value: '1.633',
    detail: '1.587 em operação / 46 em implementação',
  },
  {
    label: 'Crescimento (Nº de Plantas)',
    value: '18%',
    detail: 'vs. 2023',
  },
  {
    label: 'Capacidade Instalada (novas plantas)',
    value: '641 milhões Nm³/ano',
  },
  {
    label: 'Capacidade Instalada (total)',
    value: '4,7 bilhões Nm³/ano',
  },
  {
    label: 'Crescimento (Capacidade Instalada)',
    value: '16%',
    detail: 'vs. 2023',
  },
  {
    label: 'Produção de Biometano (2023)',
    value: '74,9 milhões m³/ano',
  },
];

const capacidadeData = [
  { ano: '2020', plantas: 1200, capacidade: 3500 },
  { ano: '2021', plantas: 1300, capacidade: 3900 },
  { ano: '2022', plantas: 1380, capacidade: 4100 },
  { ano: '2023', plantas: 1550, capacidade: 4700 },
  { ano: '2024', plantas: 1633, capacidade: 4700 },
];

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.35rem;
  font-weight: 700;
  margin: 2rem 0 1rem;
  letter-spacing: 0.5px;
`;

const IndicatorValue = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.contrastYellow};
`;

const IndicatorDetail = styled.div`
  font-size: 0.95rem;
  opacity: 0.8;
  margin-top: 0.2rem;
`;

const PanoramaAtual = () => (
  <Section id="panorama">
    <SectionTitle>Panorama Atual (2025)</SectionTitle>
    <IndicatorsGrid>
      {indicadores.map((item, idx) => (
        <IndicatorCard key={idx}>
          <div>{item.label}</div>
          <IndicatorValue>{item.value}</IndicatorValue>
          {item.detail && <IndicatorDetail>{item.detail}</IndicatorDetail>}
        </IndicatorCard>
      ))}
    </IndicatorsGrid>
    <SectionTitle>Evolução de Plantas e Capacidade Instalada</SectionTitle>
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={capacidadeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ano" />
        <YAxis yAxisId="left" orientation="left" stroke="#1dc3d4" />
        <YAxis yAxisId="right" orientation="right" stroke="#1B2433" />
        <Tooltip />
        <Bar yAxisId="left" dataKey="plantas" fill="#1dc3d4" name="Nº de Plantas" radius={[8,8,0,0]} />
        <Bar yAxisId="right" dataKey="capacidade" fill="#1B2433" name="Capacidade (milhões Nm³/ano)" radius={[8,8,0,0]} />
      </BarChart>
    </ResponsiveContainer>
    <SectionTitle>Distribuição por Substrato</SectionTitle>
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie data={substratoData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
          {substratoData.map((entry, idx) => (
            <Cell key={`cell-${idx}`} fill={substratoColors[idx % substratoColors.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
    <SectionTitle>Principais Aplicações</SectionTitle>
    <CardsGrid>
      {aplicacoes.map((app, idx) => (
        <AppCard key={idx}>
          <strong style={{ color: '#1dc3d4', fontSize: '1.08rem' }}>{app.title}</strong>
          <div style={{ marginTop: '0.5rem', fontSize: '0.98rem' }}>{app.desc}</div>
        </AppCard>
      ))}
    </CardsGrid>
    <SectionTitle>Players Iniciais</SectionTitle>
    <CardsGrid>
      {players.map((player, idx) => (
        <PlayerCard key={idx} style={{ background: idx % 2 === 0 ? '#1dc3d4' : '#00C853' }}>{player}</PlayerCard>
      ))}
    </CardsGrid>
  </Section>
);

export default PanoramaAtual;
