import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import { graphql } from '../src/gql';

const PATIENT_QUERY = graphql(/* GraphQL */ `
  query {
    patients {
      id
      firstName
      lastName
    }
  }
`);

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(PATIENT_QUERY);
  
  return <div>
    {data && (
      data.patients.map((patient) => (
    )}
  </div>;
};

export default Home;
