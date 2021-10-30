import { useState, useEffect } from "react";

const Test = () => {
  const [testData, setTestData] = useState({});

  useEffect(() => {
    const URL = "/api/test/";
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      console.log("data", data);
      setTestData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>{testData?.[0]?.name}</h1>
      <h2>{testData?.[0]?.description}</h2>
    </>
  );
};

export default Test;
