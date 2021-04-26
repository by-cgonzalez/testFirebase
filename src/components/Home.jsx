import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import "antd/dist/antd.css";
import '../styles/index.css'
import { AddAccountEmailPass } from '../js/auth/authentication'
import firebase from "firebase/app";
import configFirebase from '../js/config/configFirebase'
import "firebase/auth";

firebase.initializeApp(configFirebase)

const Home = () => {
    const [state, setState] = useState(false)
    const [loading, setLoading] = useState(false)
    const [account, setAccount] = useState({
        email: '',
        names: '',
        pass: '',
    })

    const auth = AddAccountEmailPass;

    const handleClick = ()  => {
        setLoading(true)
        Promise(auth(account))
            .then(result => console.log(result))
    }

    const handleChange = {
        name: e => {
            setAccount({...account, names: e.target.value})
        },
        email: e => {
            setAccount({...account, email: e.target.value})
        },
        password: e => {
            setAccount({...account, pass: e.target.value})
        },
    }

    // useEffect(() => {
        
    // },[auth])

    return (
        <>
            <header className='header' >
                <h1>Testing Firebase Authentication</h1>
            </header>
            <section className='register' >
                <input 
                    type="text" 
                    name="nombre" 
                    id="nombre" 
                    value={account.name}
                    onChange={handleChange.name}
                    className='textbox'
                    placeholder='Usuario'
                />
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={account.email}
                    onChange={handleChange.email}
                    className='textbox'
                    placeholder='email'
                />
                <input 
                    type="password" 
                    name="passwd" 
                    id="passwd" 
                    className={account.pass}
                    onChange={handleChange.password}
                    className='textbox'
                    placeholder='Password'                
                />
                <Button 
                    className='buttons'
                    type="primary"
                    onClick={handleClick}
                    loading={loading}
                >
                    Login
                </Button>
            </section>
        </>
    )

}


export default Home;