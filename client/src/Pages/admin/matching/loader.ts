// This file can be used to define data loaders for React Router v6.4+
// For example:
// import { defer } from 'react-router-dom';

export async function matchingLoader() {
  // Simulate data fetching
  await new Promise(resolve => setTimeout(resolve, 500));
  const data = { message: 'Data loaded for matching page!' };
  return data;
  // return defer({ data }); // Use defer for suspense
}
