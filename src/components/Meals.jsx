import {useEffect, useState} from "react";
import MealItem from "./MealItem.jsx";

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


    return (
        <>
            {/*{meals ? <ul id='meals'></ul> : null }*/}
            <ul id='meals'>
                {loadedMeals.map(meal => (<MealItem key={meal.id} meal={meal} />) )}
            </ul>
        </>

    )
}