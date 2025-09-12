import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import React from 'react'
import { Login } from "../pages/Login"
import { Signup } from "../pages/Signup"

export const AllRoutes = () => {
    return (
    <>
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/" element={< Header />} /> */}
            <Route path="/" element={< Home />} />
            <Route path="/login" element={< Login />} />
            <Route path="/signup" element={< Signup />} />
        </Routes>
    </>
    )
}