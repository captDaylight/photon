import { useQuery } from '@apollo/client';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Heading, Td, Tr } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { graphql } from '../../gql';
import Loading from '../../src/components/Loading';
import RedTable from '../../src/components/RedTable';

const PRESCRIPTIONS_QUERY = graphql(/* GraphQL */ `
  query PrescriptionsQuery {
    prescriptions {
      id
      medication
      status
      dosage
      status
      patient {
        id
      }
    }
  }
`);

const Pharmacist: NextPage = () => {
  const { data, loading } = useQuery(PRESCRIPTIONS_QUERY);

  return (
    <>
      <>
        <Heading pb={10}>Pharmacist Portal</Heading>
        <Heading size="md" pb={4}>
          Prescriptions
        </Heading>
        {loading && <Loading />}
        {data?.prescriptions && (
          <RedTable
            headers={[
              'Medication',
              'Dosage',
              'Status',
              'Identifier',
              'Patient Id',
              '',
            ]}
          >
            {data.prescriptions.map((prescription) => (
              <Tr key={prescription.id}>
                <Td>{prescription.medication}</Td>
                <Td>{prescription.dosage}</Td>
                <Td>{prescription.status}</Td>
                <Td>{prescription.medication}</Td>
                <Td>{prescription.patient.id}</Td>
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
        )}
      </>
    </>
  );
};

export default Pharmacist;
