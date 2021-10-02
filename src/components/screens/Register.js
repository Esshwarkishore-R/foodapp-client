import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../actions/userAction'
import Error from '../Error'
import Loading from '../Loading'
import Success from "../Success"
const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const registerState = useSelector(state => state.registerUserReducer)
    const { error, loading, success } = registerState;
    const dispatch = useDispatch()
    function register() {
        if (password !== cpassword) {
            alert("password Not Matched")
        }
        else {
            const user = {
                name,
                email,
                password
            }
            console.log(user, "Data to backed user")
            dispatch(registerUser(user))
        }
    }
    return (
        <div>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded mt-5">
                <div className="col-md-5 mt-5">

                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}> Register </h2>
                    {loading && (<Loading />)}
                    {success && (<Success success='User Register Successfully' />)}
                    {error && console.log(error, "error")}
                    {error && (<Error error={error.error} />)}
                    <div>
                        <input required type="text" placeholder="Name" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <input required type="email" placeholder="Email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input required type="password" placeholder="Password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <input required type="password" placeholder="Confirm Password" className="form-control" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} />
                        <button className="btn mt-3 mb-3" onClick={register}> Register </button>
                        <br />
                        <a style={{ color: 'black' }} href="/login">Click here to Login</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register
