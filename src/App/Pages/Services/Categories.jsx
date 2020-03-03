import React from 'react';


const Categories = ({categories, currCat, setCurrCat}) => {
    return categories.map((category,idx) => {

        const theClassName = (category === currCat) ? 'active':'inactive';

        return (
            <button
            key={ idx }
            className={ theClassName }
            onClick={ () => { setCurrCat(category) } }
            >
                { category }
            </button>
        )
    });
}

export default Categories;