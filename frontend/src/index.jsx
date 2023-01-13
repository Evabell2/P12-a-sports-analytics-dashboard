import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import UserProfile from "./pages/UserProfile"
import HorizontalMenu from "./Composants/HorizontalMenu"
import VerticalMenu from "./Composants/VerticalMenu"

import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <BrowserRouter>

        <HorizontalMenu />
        <VerticalMenu />
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user/:userID' element={<UserProfile />} />
        </Routes>

    </BrowserRouter>,
)