import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { darkTheme, lightTheme } from './themes/themes';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import SignUpPage from './pages/SignUpPage';
import { Container } from './components/common/common';
import MovieList from './pages/MovieListPage';
import NotFound from './pages/NotFound';

// Router 외부에서 location을 선언하면 에러가남
// 그렇기에 별도의 컴포넌트로 분리
const AppContent = () => {
  const location = useLocation();
  const hideHeaderPaths = ['/login', '/signup'];
  const isShowHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <Container>
      {isShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/moviePage" element={<MovieList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
