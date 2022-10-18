# Photon

The application is written with Next.js and Apollo client. I used a serverless route to serve as a graphql gateway between the backend with GraphQL Yoga. Types for the queries, mutations, schema, and resolvers are generated and provide typesafe code throughout the frontend.

## Running the code

First, in one tab run the backend. This will also initialize some mock data.

```
cd backend
yarn
yarn start
```

And in another tab run the frontend

```
cd frontend
yarn
yarn dev
```

Now access the graphql playground and schema are at `http://localhost:3000/api/graphql`. You can navigate through the provider and pharmacist portals at `http://localhost:3000/`.
