import React from 'react';

export default function CountryInfo({ data, key }) {
  return (
    <div className="country-single" key={key}>
      <img src={data.flag} />
      <h1>Country: {data.name}</h1>
    </div>
  )
};