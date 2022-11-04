import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './formInput.css'

export default function FormInput({ children, value, name, inputChangeHandler }) {
    return (
        <Form.Group className="mb-4" controlId="formBasicPhone">
            <Form.Control
                name={name}
                type="text"
                placeholder={children}
                value={value}
                onChange={inputChangeHandler}
                required
            />
        </Form.Group>

    )
}
