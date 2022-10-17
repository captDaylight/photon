import { useQuery } from '@apollo/client';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Heading, Tr, Td } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { graphql } from '../../gql';
import Loading from '../../src/components/Loading';
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
  const { data, loading } = useQuery(PATIENT_QUERY, {
    variables: { id: id as string },
  });

  return (
    <>
      {loading && <Loading />}
      {data?.patient && (
        <>
          <Heading pb={10}>
            Patient: {data.patient.firstName} {data.patient.lastName}
          </Heading>
          <Heading size="md" pb={4}>
            Prescriptions
          </Heading>

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
    </>
  );
};

export default Patient;
