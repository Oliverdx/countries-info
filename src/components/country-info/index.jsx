import React from 'react';
import './style.scss';

export default function CountryInfo({ data, borders, showInfo, active }) {

  const formatArray = (array) => {
    return array.map(el => el.name).join(', ');
  }

  const handleClick = (countryName) => {
    showInfo(countryName);
  }

  const showBorder = (border) => {
    console.log('TODO change country to: ', border);
  }

  const formatPopulation = (population) => {
    return population.toLocaleString(Number, { maximumFractionDigits: 3 });
  };

  const renderCountryInfo = (country) => {
    let info = [];

    if (active) {
      info = [
        { 'Native Name': country.nativeName },
        { 'Population': formatPopulation(country.population) },
        { 'Region': country.region },
        { 'Sub region': country.subregion },
        { 'Capital': country.capital },
        { 'Top Level Domain': country.topLevelDomain.join(', ') },
        { 'Currencies': formatArray(country.currencies) },
        { 'Languages': formatArray(country.languages) }
      ];

    } else {
      info = [
        { 'Population': formatPopulation(country.population) },
        { 'Region': country.region },
        { 'Capital': country.capital }
      ];
    }

    return (
      <div className="infos">
        {info.map((el, index) =>
          <p key={index}><strong>{Object.keys(el)[0]}: </strong>{Object.values(el)[0]}</p>
        )}
      </div>);

  }

  return (
    <div className={`country-single ${active ? 'active-country' : ''}`}>
      {active && <div className="backBtn" onClick={() => showInfo('')}>Back</div>}

      <div className="info-wrapper" onClick={() => handleClick(data.name)}>
        <div className="country-flag">
          <img src={data.flag} className="flag-img" />
        </div>
        <div className="country-info">
          <h2 className="country-name">{data.name}</h2>
          {renderCountryInfo(data)}
          {(borders && active) && <div className="border-countries">
            <strong>Border Countries: </strong>
            <div className="border-btns">{borders.map((border, index) =>
              <button key={index} onClick={() => showBorder(border)}>{border}</button>
            )}</div>
          </div>}
        </div>

      </div>
    </div >
  )
};