import React, { useState } from "react";

import services from "../services/services";




const AddCustomer = () => {
    const initialCustomerState = {
        CustomerId: null,
        CustomerFirstName: "",
        CustomerLastName: ""
    };
    const [customer, setCustomer] = useState(initialCustomerState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCustomer({ ...customer, [name]: value });
    };


    const saveCustomer = () => {

        
        var data = {
            CustomerId: customer.CustomerId,
            CustomerFirstName: customer.CustomerFirstName,
            CustomerLastName: customer.CustomerLastName
        };


        services.create(data)
            .then(response => {
                setCustomer({
                    CustomerId: response.data.CustomerId,
                    CustomerFirstName: response.data.CustomerFirstName,
                    CustomerLastName: response.data.CustomerLastName
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newCustomer = () => {
        setCustomer(initialCustomerState);
        setSubmitted(false);
    };
    return (
        <div className="submit-form">
            {submitted ? (
                
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newCustomer}>
                        Add
                    </button>

                   
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="title">FirstName</label>
                        <input
                            type="text"
                            className="form-control"
                            id="CustomerFirstName"
                            required
                            value={customer.CustomerFirstName}
                            onChange={handleInputChange}
                            name="CustomerFirstName"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">LastName</label>
                        <input
                            type="text"
                            className="form-control"
                            id="CustomerLastName"
                            required
                            value={customer.CustomerLastName}
                            onChange={handleInputChange}
                            name="CustomerLastName"
                        />
                    </div>

                    <button onClick={saveCustomer} className="btn btn-success">
                        Submit
                    </button>
                   
                </div>
            )}
        </div>
    );
};



export default AddCustomer;