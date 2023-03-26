
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/authentication/login';
import Register from './components/pages/authentication/register';
import Home from './components/pages/homepage';

export default function Routing() {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} >
                    <Route exact path=':role' element={<Login />} />
                </Route>
                <Route exact path='/register' element={<Register />} >
                    <Route exact path=':role' element={<Register />} ></Route>
                </Route>
            </Routes>
        </div>
    )
}