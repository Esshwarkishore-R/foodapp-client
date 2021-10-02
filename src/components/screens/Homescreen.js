import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFood, getAllRestaurant } from '../../actions/foodActions.js'
// import samplepizzas from "../../pizzasdata.js"
import Restaurant from '../Restaurant'
import Loading from '../Loading'
import Error from '../Error'
import Filter from '../Fliter'
import SampleRestaurant from "../SampleRestaurant"

const Homescreen = () => {
    const dispatch = useDispatch()
    const foodstate = useSelector(state => state.getAllFoodReducer)
    console.log(foodstate, "foodstate")
    const { food, error, loading } = foodstate;
    console.log(food, "food reducer")
    useEffect(() => {
        // dispatch(getAllFood())
        dispatch(getAllRestaurant())
    }, [])
    return (
        <div>
            <Filter />
            <div className="row justify-content-center m-3">
                {loading ?
                    (
                        <Loading />
                    ) : error ? (
                        <Error error='Something Went Wrong' />
                    ) : (
                        food?.map((foods) => (
                            <div className="col-md-3 p-3" key={food._id}>
                                <>
                                    <SampleRestaurant restaurant={foods} />
                                </>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default Homescreen
