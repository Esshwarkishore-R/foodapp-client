import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userAction';

const Navbar = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.loginUserReducer)
    console.log(userState, "userState")
    const { currentUser } = userState
    console.log(currentUser, "currentuser")
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Food Application</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {currentUser ? (
                                <div className="dropdown">
                                    <a className="dropdown-toggle nav-link" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {currentUser?.user[0]?.name}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#" onClick={() => { dispatch(logoutUser()) }}>Logout</a></li>
                                    </ul>
                                </div>
                            ) : (
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/login">Login</a>
                                </li>
                            )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
