import styled from 'styled-components';

const SidebarContainer = styled.nav`
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  width: 240px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;

const MenuItem = styled.a`
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Sidebar = () => (
  <SidebarContainer>
    <MenuItem href="#panorama">Panorama Atual</MenuItem>
    <MenuItem href="#tendencias">Tendências 2030</MenuItem>
    <MenuItem href="#concorrencia">Concorrência</MenuItem>
    <MenuItem href="#oportunidades">Oportunidades</MenuItem>
    {/* Futuro: Dropdown de idiomas */}
  </SidebarContainer>
);

export default Sidebar;
