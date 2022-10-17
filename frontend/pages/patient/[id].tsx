import { useQuery } from '@apollo/client';
import { Heading, Tr, Td } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { graphql } from '../../gql';
import RedTable from '../../src/components/RedTable';

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
  const { data } = useQuery(PATIENT_QUERY, {
    variables: { id: id as string },
  });

  return (
    <>
      {data?.patient && (
        <>
          <Heading pb={10}>
            Patient: {data.patient.firstName} {data.patient.lastName}
          </Heading>
          <Heading size="md" pb={4}>
            Prescriptions
          </Heading>

          <RedTable headers={['Medication', 'Dosage', 'Status', 'Identifier']}>
            {data.patient.prescriptions.map((prescriptions) => (
              <Tr key={prescriptions.id}>
                <Td>{prescriptions.medication}</Td>
                <Td>{prescriptions.dosage}</Td>
                <Td>{prescriptions.status}</Td>
                <Td>{prescriptions.medication}</Td>
              </Tr>
            ))}
          </RedTable>
        </>
      )}
    </>
  );
};

export default Patient;
