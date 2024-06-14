import React from 'react';
import './Stylesheet/address.css';


const address = () => {
// ................ShowHide...................
var display = 1;
function hideShow() {
    var div = document.getElementById('form-form');
    if (display === 0) {
        div.style.display = "block"
        display = 1;
    }
    else {
        div.style.display = "none"
        display = 0;
    }
    
}
var display = 0;
function showHide() {
    var div = document.getElementById('address-con')
    if (display === 1) {
        div.style.display = "none"
        display = 0;
    }
    else {
        div.style.display = "block"
        display = 1;
    }
    
}
// ................ShowHide...................

// .....................Get Pofile............................


// .....................Get Pofile............................

    return (
        <>
            <div className="container-fluid  main-section">
                <div className="row">
                    <div className="col-md-12 mt-3 chaild-section">
                        <span>Home</span>
                        <span>/</span>
                        <span> My Address</span>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="main-heading-6">
                        <h6>MANAGE PROFILE </h6>
                    </div>
                    <div className="col-12 form-section" >
                        <form className='form-form' id='form-form'>
                            <label htmlFor="">Name</label><br />
                            <input type="text" /> <br />
                            <label htmlFor="">Phone</label><br />
                            <input type="text" /><br />
                            <label>Gender</label><br />
                            <label>Male <input type="radio" name='gender' className='form-contorl' />
                            </label>
                            <label>Female <input type="radio" name='gender' />
                            </label><br />
                            <input type="checkbox" /> <span>set as Default Address?</span><br />
                            <button> UPDATE PROFILE</button>
                            <button type='reset'>CANCLE</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 edit-profile-section">
                        <div className="row">
                            <div className="col-md-1 profile-account">
                                <div className='user-icon'>
                                    <span><i className="fa fa-user"></i></span>
                                </div>
                            </div>
                            <div className="col-md-10 profile-account">
                                <div className='user-detail'>
                                    <span>Jin Alkaid</span>
                                    <span>Jin@gmail.com</span>
                                </div>
                                <div className='user-edit'>
                                    <button id='btn' onClick={hideShow}>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        </div>
                        <p>Ung Van Khiem, Ho Chi Minh City, Vietnam</p>
                        <div className="btn btn-light" onClick={showHide}>
                            MANAGER ADDRESS
                        </div>
                    </div>
                </div>
                <div className="address-con" id='address-con'>
                    <div className="row">
                        <div className="col-md-12 add-row">
                            <div className="add-heading">
                                <h6>MANAGE ADDRESS </h6>
                            </div>
                            <div className="col-12 form-section" >
                                <form className='form-form' id='form-form'>
                                    <label htmlFor="">Name</label><br />
                                    <input type="text" /> <br />
                                    <label htmlFor="">Phone</label><br />
                                    <input type="text" /><br />
                                    <label>Gender</label><br />
                                    <label>Male <input type="radio" name='gender' className='form-contorl' />
                                    </label>
                                    <label>Female <input type="radio" name='gender' />
                                    </label><br />
                                    <input type="checkbox" /> <span>set as Default Address?</span><br />
                                    <button> UPDATE ADDRESS</button>
                                    <button> CANCLE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default address
