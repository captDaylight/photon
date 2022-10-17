import { useQuery } from '@apollo/client';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { graphql } from '../../gql';
import Loading from '../../src/components/Loading';

const PRESCRIPTION_QUERY = graphql(/* GraphQL */ `
  query PrescriptionQuery($id: ID!) {
    prescription(id: $id) {
      id
      patientId
      medication
      dosage
      status
      patient {
        id
        firstName
        lastName
      }
    }
  }
`);

const Patient: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useQuery(PRESCRIPTION_QUERY, {
    variables: { id: id as string },
  });

  return (
    <>
      {loading && <Loading />}

      {data?.prescription && (
        <>
          <Heading pb={10}>
            Prescription: {data.prescription.medication},{' '}
            {data.prescription.dosage}
          </Heading>
          <Heading size="md" pb={4}>
            Patient:{' '}
            <Link href={`/patient/${data.prescription.patient.id}`}>
              <a>
                {data.prescription.patient.firstName}{' '}
                {data.prescription.patient.lastName} <ExternalLinkIcon />
              </a>
            </Link>
          </Heading>
          <Heading size="md" pb={4}>
            Status: {data.prescription.status}
          </Heading>
        </>
      )}
    </>
  );
};

export default Patient;
