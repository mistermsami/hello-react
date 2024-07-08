import { useState } from "react";
import axios from "axios";

function Api() {
    const [countryData, setCountryData] = useState(null); // Changed initial state to null
    const [countryName, setCountryName] = useState("");

    const clickHandler = (e) => {
        e.preventDefault(); // Prevents the form from reloading the page
        axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(function (response) {
                // handle success
                console.log(response.data);
                setCountryData(response.data[0]); // Assuming the first result is the relevant country
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    };

    return (
        <div>
            <form action="" onSubmit={clickHandler}>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Country name" 
                    onChange={(e) => { 
                        console.log(e.target.value); 
                        setCountryName(e.target.value); 
                    }} 
                />
                <button type="submit">Get Data</button>
            </form>
            {countryData && ( // Check if countryData is not null
                <div className="countrydetails">
                    <div className="card">
                        <div className="card-header">
                            <img src={countryData.flags?.png} alt={`${countryData.name.common} flag`} />
                        </div>
                        <div className="card-body">
                            <h3 className="countryname">{countryData.name.common}</h3>
                            <p className="countrylanguage">Languages: {Object.values(countryData.languages).join(", ")}</p>
                            <p className="countrycurrency">Currencies: {Object.values(countryData.currencies).map(currency => currency.name).join(", ")}</p>
                            <p className="countrypopulation">Population: {countryData.population.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Api;
