import React, { useState, useEffect } from 'react';

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
            setLoading(false);
        }

        fetchData();

    }, loading);

    return (
        <div>
            {loading ? <div className="loading-app"><span>Loading...</span></div> :
                <div className="countries-wrapper">
                    {countries.map((country, index) =>
                        <div className="country-single" key={index}>
                            <img src={country.flag} />
                            <h1>Country: {country.name}</h1>
                        </div>
                    )}

                </div>}
        </div>
    );
}

export default App;