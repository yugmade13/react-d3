import React from 'react';
import BarChart from './components/BarChart';

const data = {
  "Building": [
    {
      "id": 14,
      "name": "Create",
      "html_id": "building.create"
    },
    {
      "id": 14,
      "name": "Delete",
      "html_id": "building.delete"
    },
    {
      "id": 14,
      "name": "Edit",
      "html_id": "building.edit"
    },
    {
      "id": 14,
      "name": "Index",
      "html_id": "building.index"
    }
  ],
  "Dashboard": [
    {
      "id": 14,
      "name": "Index",
      "html_id": "dashboard.index"
    }
  ],
  "Energy": [
    {
      "id": 14,
      "name": "Create",
      "html_id": "energy.create"
    },
    {
      "id": 14,
      "name": "Delete",
      "html_id": "energy.delete"
    },
    {
      "id": 14,
      "name": "Edit",
      "html_id": "energy.edit"
    }
  ]
};

function App() {
  return (
    <div className="App">
      <h1>Bar Chart</h1>
      <BarChart data={data} />
    </div>
  );
}

export default App;
