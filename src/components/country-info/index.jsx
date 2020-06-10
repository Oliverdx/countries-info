import React from 'react';

export default function CountryInfo({ data }) {
  return (
    <div className="country-single">
      <img src={data.flag} />
      <h1>Country: {data.name}</h1>
    </div>
  )
};