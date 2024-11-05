import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MealCards from './MealCards';

function Home() {
    const [searchMeal, setSearchMeal] = useState([]);
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("");
    const [notfound, setNotfound] = useState("")

    const searchHandle = (e) => {
        setSearch(e.target.value);
    }

    const myFun = async (e) => {
        e.preventDefault();
        if (search == "") {
            setMsg("Please enter somthing");
            setSearchMeal([])


        }

        else {
            const getMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await getMeals.json();


            if (jsonData.meals) {
                setSearchMeal(jsonData.meals);
                setMsg("")
            }
            else {
                setSearchMeal([])
                setNotfound("Not Found")
            }

        }

    }



    return (


        <div className="App">
            <video width="600" autoPlay loop muted controls>
                <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />

            </video>

            <div className="container">
                <div className='row'>
                    <div className='col-md-8 mx-auto'>
                        <div className='head'>
                            <h2>RecipeRover</h2>
                            <p>Explore a World of Culinary Creations</p>
                        </div>
                        <div className='search-bar'>
                            <form className="form-inline search-meal-wrap" onSubmit={myFun}>
                                <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Enter recipe name"
                                    aria-label="Search"
                                    onChange={searchHandle}
                                    value={search}
                                />

                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                    Search
                                </button>
                            </form>

                            <div className='cat-wrap'>
                                <h3>{msg}</h3>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='card-box-wrapper'>
                            <div className='row'>

                                {searchMeal && searchMeal.length > 0 ? (<MealCards details={searchMeal} />)
                                    : <p className='notfound'>{notfound}</p>
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;
