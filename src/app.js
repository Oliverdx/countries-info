import React, { useState, useEffect } from 'react';
import './assets/css/main.scss';

//COMPONENTS
import CountryInfo from './components/country-info/index.jsx';
import Loading from './components/loading/index.jsx';

function App(props) {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState({});

    useEffect(() => {

        async function fetchData() {
            const url = 'https://restcountries.eu/rest/v2/all';
            const response = await fetch(url);
            const data = await response.json();

            setCountries(data);
            setTimeout(() => setLoading(false), 1500);
        }

        fetchData();

    }, [loading]);

    const borderCountries = (borders) => {
        const elements = countries.filter(country =>
            borders.some(el => el === country.alpha3Code)
        );

        if (elements.length === 0)
            return false;

        return elements.map(el => el.name);
    }

    return (
        <div>
            {loading ? <Loading /> :
                <div className="countries-wrapper">
                    {countries.map((country, index) =>
                        <CountryInfo
                            key={index}
                            data={country}
                            borders={borderCountries(country.borders)}
                        />)
                    }

                </div>}
        </div>
    );
}

export default App;