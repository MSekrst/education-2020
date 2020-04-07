import React from 'react'

const data = [
  { name: 'Sofa', surname: 'Score' },
  { name: 'Frontend', surname: 'Academy' },
]

// this example is forced to showcase React Fragment use case. Architecture is bad for the purpose of this example 😄

export function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Data data={data[0]} />
        </tr>
        <tr>
          <Data data={data[1]} />
        </tr>
      </tbody>
    </table>
  )
}

function Data({ data }) {
  return (
    <>
      <td>{data.name}</td>
      <td>{data.surname}</td>
    </>
  )
}
