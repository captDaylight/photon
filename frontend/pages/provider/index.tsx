import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import { graphql } from '../../gql';
import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const PATIENT_QUERY = graphql(/* GraphQL */ `
  query Patients {
    patients {
      id
      firstName
      lastName
    }
  }
`);

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(PATIENT_QUERY);

  return (
    <>
      <Heading pb={10}>Provider Portal</Heading>
      <TableContainer>
        <Table
          size="md"
          variant="simple"
          backgroundColor="red.50"
          colorScheme="red"
        >
          <Thead>
            <Tr>
              <Th color="red.600">First Name</Th>
              <Th color="red.600">Last Name</Th>
              <Th color="red.600">Identifier</Th>
              <Th color="red.600"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.patients.map((patient) => (
                <Tr key={patient.id}>
                  <Td>{patient.firstName}</Td>
                  <Td>{patient.lastName}</Td>
                  <Td>{patient.id}</Td>
                  <Td>
                    <Link href={`/patient/${patient.id}`}>
                      <a>
                        <ExternalLinkIcon />
                      </a>
                    </Link>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
