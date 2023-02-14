import React, { useState, useEffect } from "react";
import Service from "../services/services";
import { Link } from "react-router-dom";


const UpdateDelete = () => {
  const [customers, setCustomers] = useState([{CustomerId:'',CustomerFirstName: '',
  CustomerLastName: ''}]);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [updateCustomer, setUpdateCustomer] = useState({
    CustomerFirstName: '',
    CustomerLastName: ''
  });
  



  const handleInputChange = event => {
    const { name, value } = event.target;
    setUpdateCustomer({updateCustomer, [name]: value });
  };

  useEffect(() => {
    retrieveCustomer();
  }, []);

  const update = () => {
    Service.update(currentCustomer.CustomerId, updateCustomer)
      .then(response => {
        console.log(response.data);
        retrieveCustomer();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const remove = () => {
    console.log(currentCustomer.CustomerId)
    Service.remove(currentCustomer.CustomerId)
      .then(response => {
        console.log(response.data);
        retrieveCustomer();
      })
      .catch(e => {
        console.log(e);
      });
  };



  const retrieveCustomer = () => {
    Service.getAll()
      .then(response => {
        setCustomers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };



  const setActiveCustomer = (customer, index) => {
    console.log(customer);
    console.log(index);
    setCurrentCustomer(customer);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Customer List</h4>

        <ul className="list-group">
          {customers &&
            customers.map((customer, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveCustomer(customer, index)}
                key={index}
              >
                {customer.CustomerLastName}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentCustomer ? (
          <div>
            <h4>Customer</h4>
            <div>
              <label>
                <strong>FirstName:</strong>
              </label>{" "}
              {currentCustomer.CustomerFirstName}
            </div>
            <div>
              <label>
                <strong>LastName: :</strong>
              </label>{" "}
              {currentCustomer.CustomerLastName}
            </div>

            <div className="form-group">
              <label>FirstName</label>
              <input
                type="text"
                className="form-control"
                id="CustomerFirstName"
                value={updateCustomer.CustomerFirstName}
                onChange={handleInputChange}
       
                name="CustomerFirstName"
              />
            </div>

            <div className="form-group">
              <label>LastName</label>
              <input
                type="text"
                className="form-control"
                id="CustomerLastName"
                value={updateCustomer.CustomerLastName}
                onChange={handleInputChange}
                name="CustomerLastName"
              />
            </div>




            <button onClick={update}>Update</button>
            <button onClick={remove}>Delete</button>

          </div>

        ) : (
          <div>
            <br />
            <p>Please click on a Customer ...</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default UpdateDelete;