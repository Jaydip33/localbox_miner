import React from "react";
import { Table } from "react-bootstrap";

function DispData(props) {

    // ************* local Storage *************
    const getData = localStorage.getItem("userData");

    const data = JSON.parse(getData);

    const handleDelete = (id) => {
        data.splice(id, 1)
        localStorage.setItem("userData", JSON.stringify(data));

        alert("Your data has been deleted")
    };

    
    // ***************** session Storage *****************

    // const getData = sessionStorage.getItem("userData");

    // const data = JSON.parse(getData);

    // const handleDelete = (id) => {
    //     data.splice(id, 1)
    //     sessionStorage.setItem("userData", JSON.stringify(data));

    //     alert("Your data has been deleted")
    // };

    return (
        <div className="container">
            <Table border={2}>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Action</td>
                </tr>
                {data.map((e, index) => {
                    return (
                        <tr key={index}>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.password}</td>
                            <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button></td>
                        </tr>
                    )
                })}
            </Table>
        </div>
    );
}

export default DispData;
