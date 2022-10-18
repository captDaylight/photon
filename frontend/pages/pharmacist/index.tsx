import { useMutation, useQuery } from '@apollo/client';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Heading, Select, Td, Tr } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useCallback } from 'react';
import { graphql } from '../../gql';
import { PrescriptionStatus } from '../../gql/graphql';
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

const UPDATE_PRESCRIPTION_MUTATION = graphql(/* GraphQL */ `
  mutation UpdatePrescription($id: ID!, $status: PrescriptionStatus!) {
    updatePrescription(id: $id, status: $status) {
      id
      status
    }
  }
`);

const Pharmacist: NextPage = () => {
  const { data, loading } = useQuery(PRESCRIPTIONS_QUERY);
  const [updatePrescription] = useMutation(UPDATE_PRESCRIPTION_MUTATION);

  const handleStatusChange = useCallback(
    (id: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      updatePrescription({
        variables: { id, status: e.target.value as PrescriptionStatus },
      });
    },
    [updatePrescription]
  );

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
                <Td>
                  <Select
                    variant="outline"
                    borderColor="red.200"
                    value={prescription.status}
                    onChange={handleStatusChange(prescription.id)}
                  >
                    <option value="PENDING">Pending</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="FILLED">Filled</option>
                  </Select>
                </Td>
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
