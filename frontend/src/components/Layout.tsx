import { Container } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Header from './Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Container maxW="container.xl" px={[4, 12, 16]} py={[16, 20, 100]}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
