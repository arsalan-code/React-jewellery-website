import React, { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 

const Log = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState() 
    const navigate = useNavigate()
    useEffect(() => {
        const email = localStorage.getItem('email')
        if (email) {
            navigate('/log')
        }
    })
    const handlerChange = async(e) => {
        e.preventDefault()
        const form=({email,password})
        try {
            if(email&&password){
                const response= await fetch("http://localhost:5000/log",{
                    method:"post",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify(form)
                })

                if(response.ok){
                 const data = await response.json()
                    console.log(data)
                    alert(data.message)
                    localStorage.setItem("email",form.email)
                    localStorage.setItem("add_id",form.id)
                    navigate('/')
                    
                }
                else
                {
                    const error=await response.json()
                    alert(error.message)
                    console.log(error)
                
        
                }
                
            }
            
        } catch (error) {
            console.log(error)
            
        }
      
    }

    return (
        <>
           <div className="form-section">
            <div className="conatiner">
                <div><h2>LogIn</h2></div>
                <form className='SingForm' onSubmit={handlerChange}>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' onChange={(e) => setPassword(e.target.value)}required />
                    </div>
                    <div>
                        <button> LogIn </button>
                    </div>
                </form>
                <div><p>Already have an account</p></div>
                <Link to="/sign"> <button> Register </button></Link>
            </div>
            </div>
        </>
    )
}

export default Log