import React, { useState, useEffect } from 'react';

//COMPONENTS
import CountryInfo from './components/country-info/index.jsx';
import Loading from './components/loading/index.jsx';
import Header from './components/header/index.jsx';

import './assets/css/index.scss';

function App(props) {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState({});
    const [mode, setMode] = useState('light');

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

    const changeAppMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
    }

    return (
        loading ? <Loading /> :
            <div className={`${mode}-mode`}>
                <Header mode={mode} changeMode={changeAppMode} />
                <main className="countries-wrapper">
                    {countries.map((country, index) =>
                        <CountryInfo
                            key={index}
                            data={country}
                            borders={borderCountries(country.borders)}
                        />)
                    }

                </main>
            </div>
    );
}

export default App;