import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { useBasicData } from '../../../../hooks';
import { sections } from '../../sections';
import { StyledButton, StyledContainer } from './styles';

export function Sidebar({ activeSection, setActiveSection }) {
  const { logout } = useBasicData();

  return (
    <StyledContainer>
      <div>
        <nav>
          {sections.map(({ Icon, label }, i) => (
            <StyledButton
              key={label}
              onClick={() => setActiveSection(i)}
              $isActive={activeSection === i}
            >
              <Icon />
              <span>{label}</span>
            </StyledButton>
          ))}
        </nav>
        <StyledButton onClick={logout}>
          <LogoutOutlinedIcon />
          <span>Sair</span>
        </StyledButton>
      </div>
    </StyledContainer>
  );
}
