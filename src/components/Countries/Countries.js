import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Country from '../Country/Country';

const Countries = () => {
    const [searchedText, setSearchedText] = useState('');
    const [countries, setCountries] = useState([]);
    useEffect(() => {

        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchedText}`)
            .then(res => res.json())
            .then(data => setCountries(data.meals))
    }, [searchedText])
    const handleSearch = e => {
        const searchTextValue = e.target.value;
        setSearchedText(searchTextValue);
    }
    console.log(countries)
    // const { strMealThumb, strMeal } = countries.country;
    return (
        <div>
            <input type="text" onChange={handleSearch} placeholder="Search by Country Name Exg.Canadian" style={{ width: "50%", marginTop: "20px", marginBottom: "20px", marginLeft: "10px" }} />
            <Container fluid>
                <Row xs={1} md={2} lg={3}>

                    {

                        countries?.map(country => <Country country={country}></Country>)

                    }
                </Row>
            </Container>
        </div>
    );
};

export default Countries;