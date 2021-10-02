import axios from 'axios'
import { BASE_URL } from '../constants';
export const getAllFood = () => async dispatch => {
    dispatch({ type: 'GET_FOOD_REQUEST' })
    try {
        const response = await axios.get(BASE_URL + '/api/food/getAllFood', { headers: { isLogin: false } })
        console.log(response);
        dispatch({
            type: 'GET_FOOD_SUCCESS',
            payload: response.data
        })
    }
    catch (error) {
        dispatch({
            type: 'GET_FOOD_FAILED',
            payload: error
        })
    }
}

export const getAllRestaurant = () => async dispatch => {
    dispatch({ type: 'GET_FOOD_REQUEST' })
    try {
        const response = await axios.get(BASE_URL + '/api/food/getAllRestaurant', { headers: { isLogin: false } })
        console.log(response);
        dispatch({
            type: 'GET_FOOD_SUCCESS',
            payload: response.data
        })
    }
    catch (error) {
        dispatch({
            type: 'GET_FOOD_FAILED',
            payload: error
        })
    }
}

export const filterFood = (search, category) => async dispatch => {
    var filteredFood;
    dispatch({ type: 'GET_FOOD_REQUEST' })
    try {
        const response = await axios.get('/api/food/getAllFood')
        console.log(response.data, "Response for the filter");
        filteredFood = response.data.filter(food => food.name.toLowerCase().includes(search))
        if (category != 'all') {
            filteredFood = response.data.filter(food => food.category.toLowerCase() === (category))
        }
        dispatch({
            type: 'GET_FOOD_SUCCESS',
            payload: filteredFood
        })
    }
    catch (error) {
        dispatch({
            type: 'GET_FOOD_FAILED',
            payload: error
        })
    }
}
export const filterRestaurant = (search, category, filter) => async dispatch => {
    var filteredFood;
    dispatch({ type: 'GET_FOOD_REQUEST' })
    try {
        let response = await axios.get('/api/food/getAllRestaurant')
        console.log(response.data, "Response for the filter");

        if (search) {
            filteredFood = response.data.filter(food => food.restaurant_name.toLowerCase().includes(search))
            if (category != 'all') {
                filteredFood = response.data.filter(food => food.cuisine
                    .toLowerCase() === (category))
            }
        }
        else if (filter == 'high') {
            filteredFood = response.data.sort(function (a, b) {
                return b.average_price - a.average_price;
            });
            console.log("🚀 ~ file: foodActions.js ~ line 78 ~ filteredFood", response, filteredFood)

        }
        else if (filter == 'low') {
            filteredFood = response.data.sort(function (a, b) {
                return a.average_price - b.average_price;
            });

        }
        dispatch({
            type: 'GET_FOOD_SUCCESS',
            payload: filteredFood
        })
    }
    catch (error) {
        dispatch({
            type: 'GET_FOOD_FAILED',
            payload: error
        })
    }
}