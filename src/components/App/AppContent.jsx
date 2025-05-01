import { Route, Routes, useLocation } from 'react-router-dom';
import { Container } from '../common/common';
import MainPage from '../../pages/MainPage';
import LoginPage from '../../pages/LoginPage';
import Header from '../header/Header';
import SignUpPage from '../../pages/SignUpPage';

const AppContent = () => {
  const location = useLocation();

  // header 숨길 경로
  const hideHeaderPaths = ['/login', '/signup'];

  const isShowHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <>
      <Container>
        {isShowHeader || <Header />}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Container>
    </>
  );
};

export default AppContent;
