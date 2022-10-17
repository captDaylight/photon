import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { ReactNode } from 'react';

type RedTableProps = {
  headers: string[];
  children: ReactNode;
};

const RedTable = ({ headers, children }: RedTableProps) => (
  <TableContainer>
    <Table
      size="md"
      variant="simple"
      backgroundColor="red.50"
      colorScheme="red"
    >
      <Thead>
        <Tr>
          {headers.map((header) => (
            <Th key={`header-${header}`} color="red.600">
              {header}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>{children}</Tbody>
    </Table>
  </TableContainer>
);

export default RedTable;
