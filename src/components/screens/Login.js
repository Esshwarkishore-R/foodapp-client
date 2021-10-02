import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../actions/userAction'
import Error from '../Error'
import Loading from '../Loading'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginState = useSelector(state => state.loginUserReducer)
    const { loading, error } = loginState;
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }
    }, [])
    function login() {
        const user = {
            email, password
        }
        console.log(user, "Data for login sent to backend")
        dispatch(loginUser(user))
    }
    return (
        <div>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded mt-5">
                <div className="col-md-5 mt-5">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}> LOGIN </h2>
                    {loading && <Loading />}
                    {error && <Error error='Invalid Credintals' />}
                    <div>
                        <input required type="text" placeholder="Email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input required type="password" placeholder="Password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <button className="btn mt-3 mb-3" onClick={login}> LOGIN </button>
                        <br />
                        <a href="/register" style={{ color: 'black' }}>Click here to Register</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
