import React from 'react';

export default function CountryInfo({ data, borders }) {

  const formatArray = (array) => {
    return array.map(el => el.name).join(', ');
  }

  return (
    <div className="country-single">
      <div className="country-flag">
        <img src={data.flag} />
      </div>
      <div className="country-info">
        <h2 className="country-name">Country: {data.name}</h2>
        <div className="contry-data">
          <p className="native-name"><strong>Native Name: </strong>{data.nativeName}</p>
          <p className="population"><strong>Population: </strong>{data.population}</p>
          <p className="region"><strong>Region: </strong>{data.region}</p>
          <p className="sub-region"><strong>Sub region: </strong>{data.subregion}</p>
          <p className="capital"><strong>Capital: </strong>{data.capital}</p>
          <p className="domain"><strong>Top Level Domain: </strong>{data.topLevelDomain.join(', ')}</p>
          <p className="currencies"><strong>Currencies: </strong>{formatArray(data.currencies)}</p>
          <p className="languages"><strong>Languages: </strong>{formatArray(data.languages)}</p>
        </div>
        {borders && <div className="border-countries">
          <strong>Border Countries: </strong>
          {borders.join(', ')}
        </div>}
      </div>
    </div >
  )
};