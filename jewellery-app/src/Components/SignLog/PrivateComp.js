import React from "react";

import { Navigate, Outlet } from "react-router-dom";

function PrivateComp(){
    const email=localStorage.getItem('email')
    return email?<Outlet/>:<Navigate to="/sign"/>
}

export default  PrivateComp