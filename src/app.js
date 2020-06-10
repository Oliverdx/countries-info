import React, { useState, useEffect } from 'react';

//COMPONENTS
import CountryInfo from './components/country-info/index.jsx';
import Loading from './components/loading/index.jsx';

import './assets/css/index.scss';

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

    }, loading);

    return (
        <div>
            {loading ? <Loading /> :
                <div className="countries-wrapper">
                    {countries.map((country, index) =>
                        <CountryInfo data={country} key={index} />
                    )}

                </div>}
        </div>
    );
}

export default App;