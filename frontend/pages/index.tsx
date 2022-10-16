import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import { graphql } from '../gql';

const PATIENT_QUERY = graphql(/* GraphQL */ `
  query Patients {
    patients {
      id
      firstName
      lastName
    }
  }
`);

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(PATIENT_QUERY);

  return (
    <div>
      {data &&
        data.patients.map((patient) => (
          <li key={patient.id}>
            {patient.firstName} {patient.lastName}
          </li>
        ))}
    </div>
  );
};

export default Home;
