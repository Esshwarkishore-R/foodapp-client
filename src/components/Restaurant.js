import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const Restaurant = ({ restaurant }) => {
    const [quantity, setQuantity] = useState(1);
    const [variant, setVariant] = useState('small');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='m-2 shadow-lg p-3 mb-5 bg-body rounded'>
            <div onClick={handleShow}>
                <h1 h1 > {restaurant.name}</h1 >
                <img src={restaurant.image} className="img-fluid" style={{ height: '200px', width: '200px' }} alt="pizza" />
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className='form-control' value={variant} onChange={(e) => { setVariant(e.target.value) }}>{restaurant.varients.map(varient => {
                        return <option value={varient}>{varient}</option>
                    })}</select>
                </div>
                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className="m-1 w-100">
                    <h1 className='m-1'>Prices: {restaurant.prices[0][variant] * [quantity]}Rs/-</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className="btn">ADD TO CART</button>
                </div>
            </div>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{restaurant.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={restaurant.image} className='img-fluid' style={{ width: '100%' }} />
                    <p>{restaurant.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default Restaurant
