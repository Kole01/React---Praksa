import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Service from "../services/services";

const Customer = props => {
    const { id } = useParams();
    let navigate = useNavigate();

    const initialCustomerState = {
        CustomerId: null,
        CustomerFirstName: "",
        CustomerLastName: "",

    };
    const [currentCustomer, setCurrentCustomer] = useState(initialCustomerState);

    const getCustomer = id => {
        Service.get(id)
            .then(response => {
                setCurrentCustomer(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id)
            getCustomer(id);
    }, [id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentCustomer({ ...currentCustomer, [name]: value });
    };

    const Update = ()  =>{

        var data = {
            id: currentCustomer.CustomerId,
            title: currentCustomer.CustomerFirstName,
            description: currentCustomer.CustomerLastName,

          };
    
        Service.update(currentCustomer.CustomerId, data)
            .then(response => {
                setCurrentCustomer({ ...currentCustomer });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    
    }

    const deleteCustomer = () => {
        Service.remove(currentCustomer.CustomerId)
            .then(response => {
                console.log(response.data);
                navigate("/Customer");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentCustomer ? (
                <div className="edit-form">
                    <h4>Customer</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="CustomerFirstName">FirstName</label>
                            <input
                                type="text"
                                className="form-control"
                                id="CustomerFirstName"
                                name="CustomerFirstName"
                                value={currentCustomer.CustomerFirstName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="CustomerLastName">LastName</label>
                            <input
                                type="text"
                                className="form-control"
                                id="CustomerLastName"
                                name="CustomerLastName"
                                value={currentCustomer.CustomerLastName}
                                onChange={handleInputChange}
                            />
                        </div>
                    </form>


                    <button className="badge badge-danger mr-2" onClick={deleteCustomer}>
                        Delete
                    </button>

                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={Update}
                    >
                        Update
                    </button>

                </div>
            ):(
                <div><p>NoUser</p></div>
            )}
        </div>
    );
};

export default Customer;