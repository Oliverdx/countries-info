import React, { useState, useEffect } from 'react';
import './assets/css/main.scss';

//COMPONENTS
import CountryInfo from './components/country-info/index.jsx';
import Loading from './components/loading/index.jsx';
import Header from './components/header/index.jsx';
import FilterSelector from './components/filter-selector/index.jsx';

function App(props) {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState({});
    const [countriesList, setCountriesList] = useState({});
    const [mode, setMode] = useState('light');

    useEffect(() => {

        async function fetchData() {
            const url = props.data;
            const response = await fetch(url);
            const data = await response.json();

            setCountries(data);
            setCountriesList(data);
            setTimeout(() => setLoading(false), 500);
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

    const filterRegion = (region) => {
        let countriesList = countries;

        if (region === 'all')
            return setCountriesList(countriesList);

        let filter = countriesList.filter(country => country.region === region);
        return setCountriesList(filter);
    }

    const searchCountry = (term) => {
        let countriesList = countries;
        const searchTerm = term.toLowerCase();

        if (searchTerm === '')
            return setCountriesList(countriesList);

        let filter = countriesList.filter(country => {
            const name = country.name.toLowerCase();
            return name.indexOf(searchTerm) >= 0
        });
        return setCountriesList(filter);
    }

    return (
        loading ? <Loading /> :
            <div className={`${mode}-mode`}>
                <Header mode={mode} changeMode={changeAppMode} />
                <FilterSelector searchFilter={searchCountry} regionFilter={filterRegion} />
                <main className="countries-wrapper">
                    {countriesList.map((country, index) =>
                        <CountryInfo
                            key={index}
                            data={country}
                            borders={borderCountries(country.borders)}
                        />)
                    }
                    {countriesList.length === 0 && <div> Sorry no countries to show</div>}

                </main>
            </div>
    );
}

export default App;