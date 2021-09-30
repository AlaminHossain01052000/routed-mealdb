
import React, { useEffect, useState } from 'react';
import "./Restaurent.css";
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Row, Button } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';


const Restaurent = () => {

    const element = <FontAwesomeIcon icon={faSearch} />
    const [searchedText, setSearchedText] = useState('');

    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchedText])


    const handleSearch = e => {
        const searchedTextValue = e.target.value;
        setSearchedText(searchedTextValue);

    }



    return (
        <div>
            <div className="search-container">
                <Container fluid>




                    <FormControl

                        type="search"
                        placeholder="Search"

                        aria-label="Search"
                        id="searched-text"
                        onChange={handleSearch}
                    />



                </Container>
            </div>



            <Container fluid>

                <Row xs={1} sm={2} md={2} lg={3} >
                    {
                        meals.map(meal => <Meal meal={meal}></Meal>)
                    }
                </Row>
            </Container>

        </div >
    );
};


export default Restaurent;

