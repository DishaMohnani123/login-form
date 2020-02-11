import React from "react";
import "./Details.css";

const FormDetails = props => {
  return (
    <div>
      <center>
        <h1>Details</h1>
        <form className="form1">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{props.name}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{props.gender}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{props.category}</td>
              </tr>
              <tr>
                <th>PhoneNumber</th>
                <td>{props.number}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{props.address}</td>
              </tr>
              <tr>
                <th>Vehicle Owned</th>
                <td>{props.two}</td>
                <td>{props.four}</td>
              </tr>
            </tbody>
          </table>
        </form>
      </center>
    </div>
  );
};

export default FormDetails;
