 import React, { useEffect, useState } from 'react';

function Countrystatecity() {

    const countries = [
        { id: 1, name: 'India' },
        { id: 2, name: 'US' },
    ];

    const states = [
        {id: 1, countryId: 1, name:'Gujrat'},
        {id: 2, countryId: 1, name:'Goa'},
        {id: 3, countryId: 2, name:'Colorado'},
        {id: 4, countryId: 2, name:'Texas'},

    ];

    const citys = [
        {id: 1, stateId: 1, name: 'Junagadh'},
        {id: 2, stateId: 1, name: 'Somnath'},
        {id: 3, stateId: 2, name: 'Saligao'},
        {id: 4, stateId: 2, name: 'Margoa'},
        {id: 5, stateId: 3, name: 'Canon City'},
        {id: 6, stateId: 3, name: 'Holly'},
        {id: 7, stateId: 4, name: 'Alvin'},
        {id: 8, stateId: 4, name: 'Cedar Hill'},

    ];

    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);


    useEffect(() => {
        setCountry(countries);
        setState('');
        setCity('');
    }, [])


    const handleContery = (id) => {
        const filterState = states.filter(s => s.countryId == id);
        setState(filterState);
        setCity('');
    }

    const handleSate = (id) => {
        const filterCitey = citys.filter(c => c.stateId == id);
        setCity(filterCitey);
    }

    return (
        <>
            <div className="country_state_city">
                <select onChange={(e)=> handleContery(e.target.value)}>
                    <option value="0">Section Country</option>
                    {country && country !== undefined ? country.map((ctr, index) => {
                        return (
                            <option key={index} value={ctr.id}>{ctr.name}</option>
                        )
                    })
                        :
                        "No Countery"
                    }
                </select>
                <br/>
                <select onChange={(e)=> handleSate(e.target.value)}>
                    <option value="0">Section State</option>
                    {state && state !== undefined ? state.map((sta, index) => {
                        return (
                            <option key={index} value={sta.id}>{sta.name}</option>
                        )
                    })
                        :
                        "No State"
                    }
                </select>
                <br/>
                <select>
                    <option value="0">Section City</option>
                    {city && city !== undefined ? city.map((cit, index) => {
                        return (
                            <option key={index} value={cit.id}>{cit.name}</option>
                        )
                    })
                        :
                        "No City"
                    }
                </select>
            </div>
        </>
    )
}

export default Countrystatecity;