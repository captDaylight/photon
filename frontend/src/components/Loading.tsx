import { Flex, Spinner } from '@chakra-ui/react';

const Loading = () => (
  <Flex width="full" justifyContent="center" p={20}>
    <Spinner color="red.500" />
  </Flex>
);

export default Loading;
