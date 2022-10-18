import { useMutation, useQuery } from '@apollo/client';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Stack,
  Td,
  Tr,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useRef, useState, SyntheticEvent } from 'react';
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

const CREATE_PRESCRIPTION_MUTATION = graphql(/* GraphQL */ `
  mutation CreatePrescription(
    $dosage: String!
    $medication: String!
    $patientId: ID!
  ) {
    createPrescription(
      dosage: $dosage
      medication: $medication
      patientId: $patientId
    ) {
      id
      patientId
      dosage
      status
      medication
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
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('0');
  const [unit, setUnit] = useState('mg');
  const [createPrescription] = useMutation(CREATE_PRESCRIPTION_MUTATION);

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      onClose();
      createPrescription({
        variables: {
          patientId: id as string,
          medication,
          dosage: `${dosage} ${unit}`,
        },
        update: (cache, { data }) => {
          // update the cache with the new prescription
          const patientCache = cache.readQuery({
            query: PATIENT_QUERY,
            variables: { id: id as string },
          });

          if (patientCache?.patient && data?.createPrescription) {
            cache.writeQuery({
              query: PATIENT_QUERY,
              data: {
                patient: {
                  ...patientCache.patient,
                  prescriptions: [
                    ...patientCache.patient.prescriptions,
                    data.createPrescription,
                  ],
                },
              },
            });
          }
        },
      });
    },
    [medication, dosage, unit, id, createPrescription, onClose]
  );

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
        btnRef={btnRef}
        header={`Add New Prescription for ${data?.patient?.firstName} ${data?.patient?.lastName}`}
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel>Medication</FormLabel>
              <Input
                type="text"
                onChange={(e) => setMedication(e.target.value)}
                value={medication}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Dosage</FormLabel>
              <NumberInput
                min={0}
                onChange={(value) => setDosage(value)}
                value={dosage}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <RadioGroup onChange={setUnit} value={unit}>
              <Stack direction="row">
                <Radio value="mg">mg</Radio>
                <Radio value="g">g</Radio>
                <Radio value="ml">ml</Radio>
              </Stack>
            </RadioGroup>
            <Button
              width="full"
              mt={4}
              type="submit"
              colorScheme="red"
              disabled={medication === '' || Number(dosage) === 0}
            >
              Create Patient
            </Button>
          </VStack>
        </form>
      </RightDrawer>
    </>
  );
};

export default Patient;
