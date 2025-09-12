import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import React from 'react'

export const AllRoutes = () => {
    return (
    <>
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/" element={< Header />} /> */}
            <Route path="/" element={< Home />} />
        </Routes>
    </>
    )
}