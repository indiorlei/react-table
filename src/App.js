import React, { useEffect, useMemo, useState } from 'react';
import Table from './Table';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch('https://randomuser.me/api/?results=100');
      const body = await response.json();
      const contacts = body.results;
      setData(contacts);
    };

    doFetch();
  });

  const columnsTable = useMemo(
    () => [
      { Header: 'First Name', accessor: 'name.first' },
      { Header: 'Last Name', accessor: 'name.last' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'City', accessor: 'location.city' },
    ],
    [],
  );

  return (
    <div>
      <Table columns={columnsTable} data={data} />
    </div>
  );
}

export default App;
