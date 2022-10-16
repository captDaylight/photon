import { Flex, Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      w="full"
      py={4}
      px={10}
      border="1px"
      borderColor="gray.200"
      bg="white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/logotype.svg" alt="photon logo" width={100} />
    </Flex>
  );
};

export default Header;
