import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import { graphql } from '../../gql';
import { Button, Flex, Heading, Td, Tr, useDisclosure } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import RedTable from '../../src/components/RedTable';
import Loading from '../../src/components/Loading';
import RightDrawer from '../../src/components/RightDrawer';
import { useRef } from 'react';

const PATIENTS_QUERY = graphql(/* GraphQL */ `
  query PatientsQuery {
    patients {
      id
      firstName
      lastName
    }
  }
`);

const Home: NextPage = () => {
  const { data, loading } = useQuery(PATIENTS_QUERY);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Heading pb={10}>Provider Portal</Heading>
      <Flex justifyContent="space-between" alignItems="center" pb={4}>
        <Heading size="md">Patients</Heading>
        <Button ref={btnRef} size="sm" colorScheme="red" onClick={onOpen}>
          + Add Patient
        </Button>
      </Flex>
      {loading && <Loading />}
      {data && (
        <RedTable headers={['First Name', 'Last Name', 'Identifier', '']}>
          {data.patients.map((patient) => (
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
        </RedTable>
      )}

      <RightDrawer
        isOpen={isOpen}
        onClose={onClose}
        ref={btnRef}
        header="Add New Patient"
      >
        <p>Form goes here</p>
      </RightDrawer>
    </>
  );
};

export default Home;
