import React from 'react';
import { Link } from 'react-router-dom';

function MealCards({ details }) {
    // Check if details is null or an empty array


    return (
        <>
            {details.map((meal) => (
                <div className='col-md-3' key={meal.idMeal}> {/* Added key prop */}
                    <div className='meals-card'>
                        <div className='img-wrap'>
                            <img src={meal.strMealThumb} alt={meal.strMeal} /></div>
                        <h4>{meal.strMeal}</h4>
                        <Link to={`/${meal.idMeal}`} className='readmore'>Read More</Link>
                    </div>
                </div>




            ))}

        </>

    );
}

export default MealCards;

