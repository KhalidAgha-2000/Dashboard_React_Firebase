import './Login.css'
import { useState } from 'react';
import { auth } from "../../Config/Config";
import infinity from "../../../src/assets/Infinity Symbol.png";
import warning from "../../../src/assets/warning.png";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [username, setUsername] = useState('')
    const [newUser, setNewUser] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [errMsg, setErrMsg] = useState(false)

    const hadnleSubmit = (e) => {
        e.preventDefault()
        setError(false)
        if (newUser) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    localStorage.setItem('username', username)
                })
                .catch((error) => {
                    setError(true)
                    const errorMessage = error.message
                    setErrMsg(errorMessage)
                })
        }
        else {
            signInWithEmailAndPassword(auth, email, password).catch((error) => {
                setError(true)
                const errorMessage = error.message
                setErrMsg(errorMessage)
            })
        }
    }
    return (
        <div className='login--page'>

            <h2 className="login--tilte">
                ADMIN <br /> Dasboard
            </h2>

            <form onSubmit={hadnleSubmit}>
                {newUser && (

                    <div className="username">
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            type="username"
                            id="username"
                            required
                        />
                        <label htmlFor="username">username</label>
                    </div>
                )}

                <div className="email">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        required
                    />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="password">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        required
                    />
                    <label htmlFor="password">Password</label>
                </div>

                {error && <img src={warning} className="status" alt="warning" />}
                {error && <span className="error">Process Faild</span>}
                {error && <span className="error">{errMsg}</span>}

                <button type="submit">{newUser ? "Signin" : "Login"}</button>

                {newUser ?
                    <span className="user--state">Already have an account?
                        <b onClick={() => {
                            setNewUser(false)
                            setError(false)
                        }}>Login</b>
                    </span>
                    :
                    <span className="user--state">Don`t have an account?
                        <b onClick={() => {
                            setNewUser(true)
                            setError(false)
                        }}>Signin</b>
                    </span>
                }
            </form>
        </div>
    )
}

export default Login