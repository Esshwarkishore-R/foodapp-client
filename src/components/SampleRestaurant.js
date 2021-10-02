import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const SampleRestaurant = ({ restaurant }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='m-2 shadow-lg p-3 mb-5 bg-body rounded'>
            <div onClick={handleShow}>
                <h1 h1 > {restaurant.restaurant_name}</h1 >
                <img src={restaurant.image} className="img-fluid" style={{ width: '100%' }} alt="Resturant Name" />
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Cuisine:{restaurant.cuisine}</p>
                </div>
                <br />
                <div className="flex-container">
                    <div className="w-100 m-1">
                        <p>Description:{restaurant.description}</p>
                    </div>
                </div>
                <br />
                <div className="flex-container">
                    <div className="w-100 m-1">
                        <p>Average Price for two:{restaurant.average_price}Rs/-</p>
                    </div>
                </div>
            </div>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{restaurant.restaurant_name}</Modal.Title>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                </Modal.Header>
                <Modal.Body>
                    <img src={restaurant.image} className='img-fluid' style={{ width: '50%' }} />
                    <p>{restaurant.description}</p>
                    {restaurant?.famous_foods?.map((foods) => (
                        <div className="food-card">
                            <img src={foods.image} className='img-fluid' style={{ width: '40%' }} />
                            <div>Food Item: {foods.name}</div>
                            <br />
                            <div>Description: {foods.description}</div>
                            <br />
                            <div>Price: {foods.price}</div>
                        </div>
                    ))}
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default SampleRestaurant;
