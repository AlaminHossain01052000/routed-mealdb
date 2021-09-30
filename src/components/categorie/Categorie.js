import React, { useEffect, useState } from 'react';
import ShowCategorie from './ShowCategorie/ShowCategorie';
import "./Categorie.css";
import { Container } from 'react-bootstrap';

const Categorie = () => {
    const [categorie, setCategorie] = useState([]);
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(res => res.json())
            .then(data => setCategorie(data.categories))
    }, [])
    return (
        <Container fluid>
            <div className="categorie-container">
                {categorie.map(cat => <ShowCategorie cat={cat}></ShowCategorie>)}
            </div>
        </Container>
    );
};

export default Categorie;