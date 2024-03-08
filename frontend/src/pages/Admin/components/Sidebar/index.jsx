import KeyboardDoubleArrowLeftOutlined from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from 'react-router-dom';

import { useBasicData } from '../../../../hooks';
import { sections } from '../../sections';
import { StyledButton, StyledContainer } from './styles';

export function Sidebar({ activeSection, setActiveSection }) {
  const navigate = useNavigate();
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
        <div>
          <StyledButton onClick={() => navigate('/')}>
            <KeyboardDoubleArrowLeftOutlined />
            <span>Loja</span>
          </StyledButton>
          <StyledButton onClick={logout}>
            <LogoutOutlinedIcon />
            <span>Sair</span>
          </StyledButton>
        </div>
      </div>
    </StyledContainer>
  );
}
