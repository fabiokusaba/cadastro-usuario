import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../components/home/Home';
import User from '../components/user/User'
import Anonymous from '../components/anonymous/Anonymous';

export default function Rotas(props) {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<User />} />
            <Route path="/anonymous" element={<Anonymous />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}