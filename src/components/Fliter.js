import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterFood, filterRestaurant } from "../actions/foodActions"

const Fliter = () => {
    const dispatch = useDispatch();
    const [search, setSearchKey] = useState('')
    const [category, setCategory] = useState('all')
    return (
        <div className='container'>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
                <div className="col-md-2 w-100">
                    <input value={search} onChange={(e) => (setSearchKey(e.target.value))} type="text" className="form-control" placeholder="Search For Restaurant" />
                </div>
                <div className="col-md-2 w-100">
                    <select className="form-control" value={category} onChange={(e) => (setCategory(e.target.value))}>
                        <option value="all">All</option>
                        <option value="south indian">South Indian</option>
                        <option value="north indian">North Indian</option>
                        <option value="sweets and snacks">Sweets and snacks</option>
                    </select>
                </div>
                <div className="col-md-2 w-100">
                    <button className='btn' onClick={() => { dispatch(filterRestaurant(search, category)) }}>Filter</button>
                </div>
                <div>
                    <button className="btn" onClick={() => { dispatch(filterRestaurant(search, category, 'high')) }}>Sort By Highest Price</button>
                </div>
                <div>
                    <button className="btn" onClick={() => { dispatch(filterRestaurant(search, category, 'low')) }}>Sort By Lowest Price</button>
                </div>
            </div >
        </div >
    )
}

export default Fliter
