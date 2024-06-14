import React, { useEffect, useState, } from 'react'
import { Link, json, useNavigate } from 'react-router-dom' 
import './Sign.css'
 

const Sign = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        const email = localStorage.getItem('email')
        if (email) {
            navigate('/')
        }
    })

    const handlerChange = async (e) => {
        e.preventDefault()
        const form = ({ name, email, password })

        
        try {
            const response = await fetch("http://localhost:5000/Reg", {

                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            })

            if (response.ok) {
                const data = await response.json()
                console.log(data)
                alert(data.message)
                localStorage.setItem("email", form.email)
                navigate('/')

            }
            else {
                const error = await response.json()
                alert(error.message)
                console.log(error)

            }

        } catch (error) {
            console.log(error)
  
        }
    }

    return (
        <>
           <div className="form-section">
            <div className="conatiner">
                <div><h2>SingUp Hare</h2></div>
                <form className='SingForm' onSubmit={handlerChange}>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" name='name' onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div>
                        <button>Register</button>
                    </div>
                </form>
                <div><p>Already have an account</p></div>
                <Link to="/log"> <button>LogIn</button> </Link>
            </div>
            </div>

        </>
    )
}

export default Sign