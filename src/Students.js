import React, { useState } from "react";
import JsonData from './students.json'
import {  Form,Table,Button } from "react-bootstrap";
import Select from 'react-select';

const App = () => {
  const [selected, setSelected] = useState(null);
  const [response, setResponse] = useState("");

  const handleChange = event => {
    setSelected(event);
    console.log(`Option selected:`, event.label);
  };
  var result_array = [];
  const handleSubmit = (event) => {    
    event.preventDefault();
    const nilai1 = Array.from(event.target.elements)
    .filter((el) => el.name.substring(0,1)  === "1")
    .reduce((accumulator, element) => {
      accumulator[element.name.substring(1,100)] = element.value;
      return accumulator;
    }, {});
    const nilai2 = Array.from(event.target.elements)
    .filter((el) => el.name.substring(0,1)  === "2")
    .reduce((accumulator, element) => {
      accumulator[element.name.substring(1,100)] = element.value;
      return accumulator;
    }, {});
    const nilai3 = Array.from(event.target.elements)
    .filter((el) => el.name.substring(0,1)  === "3")
    .reduce((accumulator, element) => {
      accumulator[element.name.substring(1,100)] = element.value;
      return accumulator;
    }, {});
    const nilai4 = Array.from(event.target.elements)
    .filter((el) => el.name.substring(0,1)  === "4")
    .reduce((accumulator, element) => {
      accumulator[element.name.substring(1,100)] = element.value;
      return accumulator;
    }, {});
    const obj = {
      "aspek_penilaian_1": nilai1,
      "aspek_penilaian_2": nilai2,
      "aspek_penilaian_3": nilai3,
      "aspek_penilaian_4": nilai4,
    };
    setResponse(JSON.stringify(obj,null, 2));
  };
  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];
  const DisplayData=JsonData.map(
    (students)=>{
      const nameElNilai1 = `1${students.name}`;
      const nameElNilai2 = `2${students.name}`;
      const nameElNilai3 = `3${students.name}`;
      const nameElNilai4 = `4${students.name}`;

        return(
          <tr key={students.id}>
          <td>{students.name}</td>
          <td>
          <Select 
                    name={nameElNilai1}
                    options={options} 
                    onChange={handleChange} autoFocus={true}
                    >
                      </Select></td>
                      <td>
                      <Select 
                    name={nameElNilai2}
                    options={options} 
                    onChange={handleChange} autoFocus={true}
                    >
                      </Select></td>
                      <td>
                      <Select 
                    name={nameElNilai3}
                    options={options} 
                    onChange={handleChange} autoFocus={true}
                    >
                      </Select></td>
                      <td>
                      <Select 
                    name={nameElNilai4}
                    options={options} 
                    onChange={handleChange} autoFocus={true}
                    >
                      </Select></td>
                      
        </tr>);
    });
  return (
    <div>
      <h1>Aplikasi Penerimaaan Mahasiswa</h1>
      <Form onSubmit={handleSubmit}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Aspek Penilaian 1</th>
              <th>Aspek Penilaian 2</th>
              <th>Aspek Penilaian 3</th>
              <th>Aspek Penilaian 4</th>
            </tr>
          </thead>
          <tbody>
          {DisplayData}
          </tbody>
        </Table>
        <Button type="submit">Submit</Button>
      </Form>
      
    <p>{response}</p>
    </div>
  );
};

export default App;
