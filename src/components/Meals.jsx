import {useEffect, useState} from "react";
import MealItem from "./MealItem.jsx";
import useHTTP from "../hooks/useHTTP.js";

const requestConfig = {}
export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([])
    useEffect(() => {
        async function fetchMeals() {
                const response = await fetch('http://localhost:3000/meals')
                const meals = await response.json()
                setLoadedMeals(meals)

        }
        fetchMeals()
    }, []);
    // const {data: loadedMeals, isLoading, error } =useHTTP('http://localhost:3000/meals',requestConfig,[])
    //
    // if(isLoading){
    //     return <p>Fetching meals.......</p>
    // }


    return (
        <>
            {/*{meals ? <ul id='meals'></ul> : null }*/}
            <ul id='meals'>
                {loadedMeals.map(meal => (<MealItem key={meal.id} meal={meal} />) )}
            </ul>
        </>

    )
}