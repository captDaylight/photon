import { useQuery } from '@apollo/client';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Heading, Tr, Td, useDisclosure, Flex, Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { graphql } from '../../gql';
import Loading from '../../src/components/Loading';
import RedTable from '../../src/components/RedTable';
import RightDrawer from '../../src/components/RightDrawer';

const PATIENT_QUERY = graphql(/* GraphQL */ `
  query PatientQuery($id: ID!) {
    patient(id: $id) {
      id
      firstName
      lastName
      prescriptions {
        id
        medication
        dosage
        status
        medication
      }
    }
  }
`);

const Patient: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useQuery(PATIENT_QUERY, {
    variables: { id: id as string },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      {loading && <Loading />}
      {data?.patient && (
        <>
          <Heading pb={10}>
            Patient: {data.patient.firstName} {data.patient.lastName}
          </Heading>

          <Flex justifyContent="space-between" alignItems="center" pb={4}>
            <Heading size="md">Prescriptions</Heading>
            <Button ref={btnRef} size="sm" colorScheme="red" onClick={onOpen}>
              + Add Prescription
            </Button>
          </Flex>

          <RedTable
            headers={['Medication', 'Dosage', 'Status', 'Identifier', '']}
          >
            {data.patient.prescriptions.map((prescription) => (
              <Tr key={prescription.id}>
                <Td>{prescription.medication}</Td>
                <Td>{prescription.dosage}</Td>
                <Td>{prescription.status}</Td>
                <Td>{prescription.medication}</Td>
                <Td>
                  <Link href={`/prescription/${prescription.id}`}>
                    <a>
                      <ExternalLinkIcon />
                    </a>
                  </Link>
                </Td>
              </Tr>
            ))}
          </RedTable>
        </>
      )}

      <RightDrawer
        isOpen={isOpen}
        onClose={onClose}
        ref={btnRef}
        header={`Add New Prescription for ${data?.patient?.firstName} ${data?.patient?.lastName}`}
      >
        <p>Form goes here</p>
      </RightDrawer>
    </>
  );
};

export default Patient;
