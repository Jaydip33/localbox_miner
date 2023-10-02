import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./style.css"
import DispData from "./DispData";

const arr = []

function Localstorage(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            "name": name,
            "email": email,
            "password": password,
        };

        arr.push(data);

        localStorage.setItem("userData", JSON.stringify(arr));

        alert("Successfully Submited...")

        setName("")
        setEmail("")
        setPassword("")
    };

    return (
        <>
            <div className="fromGroup">
                <br />
                <h3>Localstorage From</h3>
                <br />

                <Form onSubmit={handleSubmit}>
                    Name :
                    <input
                        className="m-2"
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <br />
                    Email :
                    <input
                        className="m-2"
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <br />
                    Password :
                    <input
                        className="m-2"
                        type="password"
                        name="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </Form>
            </div>
            <br />
            <br />
            <div className="container">
                <h2>Tabale All Data</h2>
                <br />
                <DispData />
            </div>
        </>
    );
}

export default Localstorage;
