import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import { graphql } from '../../gql';
import { Heading, Td, Tr } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import RedTable from '../../src/components/RedTable';
import Loading from '../../src/components/Loading';

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

  return (
    <>
      <Heading pb={10}>Provider Portal</Heading>
      <Heading size="md" pb={4}>
        Patients
      </Heading>
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
    </>
  );
};

export default Home;
