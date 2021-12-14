import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import { BASE_URL } from '../globals';

export default function Form(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [date, setDate] = useState('');
    const [submit, setSubmit] = useState(false);
    const [entryFee, setEntryFee] = useState(0);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(parseInt(e.target.value));
    }

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (submit === true){
            return
        }
        setSubmit(true)
        await axios.post(`${BASE_URL}visitor`, {
            firstName: firstName,
            lastName: lastName,
            age: age,
            height: height,
            dateEntry: date
        })
       const res = await axios.get(`${BASE_URL}entryfee/${age}`)
       setEntryFee(res.data.fee)
    }
    let feeDisplay = undefined
        if (submit === true){
            feeDisplay = 'Your ticket will cost $' + entryFee
        } 

    return (
        <div>

        <form onSubmit={handleSubmit}>
            <input onChange = {handleFirstNameChange} type = 'text' placeholder = 'first name' value = {firstName}/>
            <input onChange = {handleLastNameChange} type = 'text' placeholder = 'last name' value = {lastName}/>
            <input onChange = {handleAgeChange} type = 'number' placeholder = 'age' value = {age}/>
            <input onChange = {handleHeightChange} type = 'text' placeholder = 'height' value = {height}/>
            <input onChange = {handleDateChange} type = 'date' placeholder = 'visit date' value = {date}/>
            <button type = 'submit'>Submit</button>
        </form>
        {feeDisplay}
        </div>
    )
}
