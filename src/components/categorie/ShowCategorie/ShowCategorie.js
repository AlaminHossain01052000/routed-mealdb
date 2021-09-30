import React from 'react';
import "./ShowCategorie.css";
const ShowCategorie = props => {
    const { strCategoryThumb, strCategory, strCategoryDescription } = props.cat;
    return (
        <div className="categorie">
            <img src={strCategoryThumb} alt="" title={strCategoryDescription} />
            <h1>{strCategory}</h1>
        </div>
    );
};

export default ShowCategorie;