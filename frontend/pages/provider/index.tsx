import type { NextPage } from 'next';
import { useMutation, useQuery } from '@apollo/client';
import { graphql } from '../../gql';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Td,
  Tr,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import RedTable from '../../src/components/RedTable';
import Loading from '../../src/components/Loading';
import RightDrawer from '../../src/components/RightDrawer';
import { useCallback, useRef, useState, SyntheticEvent } from 'react';

const PATIENTS_QUERY = graphql(/* GraphQL */ `
  query PatientsQuery {
    patients {
      id
      firstName
      lastName
    }
  }
`);

const CREATE_PATIENT_MUTATION = graphql(/* GraphQL */ `
  mutation CreatePatient($firstName: String!, $lastName: String!) {
    createPatient(firstName: $firstName, lastName: $lastName) {
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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [createPatient, { data: newPatient }] = useMutation(
    CREATE_PATIENT_MUTATION
  );

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      onClose();
      createPatient({
        variables: { firstName, lastName },
        update: (cache, { data }) => {
          // update the cache with the new user
          const patientCache = cache.readQuery({ query: PATIENTS_QUERY });

          if (patientCache?.patients && data?.createPatient) {
            cache.writeQuery({
              query: PATIENTS_QUERY,
              data: {
                patients: patientCache.patients.concat([data.createPatient]),
              },
            });
          }
        },
      });
    },
    [firstName, lastName, createPatient, onClose]
  );

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
        btnRef={btnRef}
        header="Add New Patient"
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </FormControl>
            <Button
              width="full"
              mt={4}
              type="submit"
              colorScheme="red"
              disabled={firstName === '' || lastName === ''}
            >
              Create Patient
            </Button>
          </VStack>
        </form>
      </RightDrawer>
    </>
  );
};

export default Home;
