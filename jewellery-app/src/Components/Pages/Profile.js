import React ,{useEffect,useState} from 'react'
import './Stylesheet/profile.css'
import { Link } from 'react-router-dom'

function Profile() {
	const [profileinfo, setProfileinfo] = useState([]);
    const email = localStorage.getItem('email')
      useEffect(() => {
        getprofile();
    })
	
    async function getprofile(){
        
        // const form = ({email})
        try {
            const response = await fetch("http://localhost:5000/getmyprofile", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email})
            })

            if (response.ok) {
				setProfileinfo(await response.json());
                //console.log(profile_info.email)
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
            <div className="blog-container">
                <ul className='blog-list'>
                    <li className='navItems'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='navItems'>
                        <Link to=""> My Account</Link>
                    </li>
                </ul>
            </div>
      {/* ....................profile section.............  */}
            <div className="container-fluid profile">
                <div className="row">
                    <div className="col-md-3 profile-section">
                        <div className='profile-heading'>
                            <h6> MY ACCOUNT </h6>
                            <h6>ACCOUNT DETAILS</h6>
                            <div className="row">
                                <div className="col-md-2 profile-account">
                                    <div className='user-icon'>
                                        <span><i className="fa fa-user"></i></span>
                                    </div>
                                </div> 
                                <div className="col-md-10 profile-account">
                                    <div className='user-detail'>
                                        <span >{profileinfo.name}</span> 
										
                                         <span>{profileinfo.email}</span>
                                    </div>
                                </div>
                            </div>
                            <p>Ung Van Khiem, Ho Chi Minh City, Vietnam</p>
                            <Link to="/add"><div className="btn btn-light">
                                MANAGER ADDRESS
                            </div>
                           </Link>
                        </div>
                    </div>
                {/* <div className="col-md-8 table-section">

                </div> */}
                </div>
            </div>
            {/* ....................profile section.............  */}
        </>
    )
	
}

export default Profile