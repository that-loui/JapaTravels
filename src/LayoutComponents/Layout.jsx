import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation';
import Footer from './Footer';

const Container = styled.div`
  width: 95%;
  margin: 0 auto;

  @media (min-width:768px) {
    width: 90%;
  }
`;

function Layout() {
  return (
    <Container>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
}

export default Layout;
