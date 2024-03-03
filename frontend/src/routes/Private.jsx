import { Navigate } from 'react-router-dom';

export function Private({ children, inverted, isAdmin }) {
  const user = localStorage.getItem('user');

  if (!user && !inverted) {
    return <Navigate to="/entrar" />;
  }

  if ((user && inverted) || (isAdmin && !JSON.parse(user)?.admin)) {
    return <Navigate to="/" />;
  }

  return children;
}
