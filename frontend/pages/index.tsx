import { Button, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Flex justifyContent="center">
      <Link href="/provider">
        <a>
          <Button mr={5}>Provider Portal</Button>
        </a>
      </Link>
      <Link href="/pharmacist">
        <a>
          <Button ml={5}>Pharmacist Portal</Button>
        </a>
      </Link>
    </Flex>
  );
};

export default Home;
