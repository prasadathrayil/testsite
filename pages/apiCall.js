import React from 'react';

// This function runs server-side, fetching data during page load
export async function getServerSideProps() {
  // Call your AWS API (replace with your actual AWS API URL)
  const apiUrl = "https://ijozt8u9jg.execute-api.ap-south-1.amazonaws.com/testAPIDB/readDB";
  
  let data = null;

  try {
    const res = await fetch(apiUrl);
    console.log(res);
    data = await res.json();
  } catch (error) {
    console.error("Failed to fetch from AWS API:", error);
    data = { error: "Failed to fetch from AWS API" };
  }

  // Return the data as props to the component
  return {
    props: {
      data
    }
  };
}

// Component to display the data returned by the API
const ApiCallPage = ({ data }) => {
  return (
    <div>
      <h1>AWS API Result</h1>
      {data.error ? (
        <p>Error: {data.error}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default ApiCallPage;
