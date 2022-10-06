import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles/Login.css';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React, { useState, } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { setappAuthentication } from '../redux/actions/Product-actions'

const Login =()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const setAuthenticationFlag = () => {
        dispatch(setappAuthentication(false));
    }
    const OnSubmitHandler = () => {
        navigate("/products");
        dispatch(setappAuthentication(true));
    }

    useEffect(() => {
        setAuthenticationFlag();
    }, []);

    return(
        <div className='real-container'>
        <div className='login-container'>
            <h2 className="text-center">Welcome To AwDeal Business</h2>
            <Card>
            <Card.Header className="text-center login-header" as="h3">Log In</Card.Header>
            <Card.Body className="text-left">
                 <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <p>
                        We'll never share your email with anyone else.
                        </p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Password" />
                    </Form.Group>
                    
                </Form>
             </Card.Body>
             <Card.Footer>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="lg" onClick={OnSubmitHandler} >
                    Submit
                    </Button>
                </div>
               
             </Card.Footer>
            </Card>
        </div>
        </div>

    )
}

export default Login;