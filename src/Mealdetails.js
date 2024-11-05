import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';



function Mealdetails() {
    const { mealid } = useParams();
    const [mealdatainfo, setMealdatainfo] = useState("");


    useEffect(() => {
        const MealInfo = async () => {


            const getMealInfo = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
            const getInfoMealJson = await getMealInfo.json();
            console.log(getInfoMealJson);
            setMealdatainfo(getInfoMealJson.meals[0]);

        }
        if (mealid != "") {
            MealInfo();
        }


    }, [])
    return (

        <>

            <section className='means-section'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className='img-wrap'>
                                <img src={mealdatainfo.strMealThumb} />
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className='meal-details-wrap'>
                                <h2>{mealdatainfo.strMeal}</h2>
                                <h4>Category: {mealdatainfo.strCategory}</h4>
                                <p>{mealdatainfo.strInstructions}</p>
                                <Link to="/" >Back </Link>
                            </div>
                        </div>
                    </div>
                </div></section>
        </>
    )
}

export default Mealdetails