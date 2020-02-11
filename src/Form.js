import React, { Component } from "react";
import "./Form.css";
import FormDetails from "./FormDetails";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "ABC",
      gender: "",
      number: "",
      address: "",
      two: "No",
      four: "No",
      isNext: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = event => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  };

  clickHandler = event => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  };

  handleSubmit(event) {
    event.preventDefault();
    alert(
      "Name:" +
        this.state.name +
        "\nGender:" +
        this.state.gender +
        "\nCategory:" +
        this.state.category +
        "\nPhoneNumber:" +
        this.state.number +
        "\nAddress:" +
        this.state.address +
        "\nVehicle Owned:" +
        this.state.two +
        this.state.four
    );
    this.setState({ isNext: true });
  }

  handleReset() {
    this.setState({
      name: "",
      category: "",
      gender: "",
      number: "",
      address: "",
      two: "",
      four: "",
      isNext: false
    });
  }

  render() {
    if (!this.state.isNext) {
      return (
        <div className="formStart">
          <center>
            <form
              onSubmit={this.handleSubmit}
              onreset={this.handleReset}
              action="/details"
              className="form"
            >
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>
                      <input
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={this.changeHandler}
                      />
                      Male
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={this.changeHandler}
                      />
                      Female
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        onChange={this.changeHandler}
                      />
                      Other
                    </td>
                  </tr>
                  <tr>
                    <th>Category</th>
                    <td>
                      <select
                        value={this.state.category}
                        onChange={this.changeHandler}
                        name="category"
                      >
                        <option value="ABC">ABC</option>
                        <option value="XYZ">XYZ</option>
                        <option value="UVW">UVW</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>PhoneNumber</th>
                    <td>
                      <input
                        type="PhoneNumber"
                        name="number"
                        onChange={this.changeHandler}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>
                      <input
                        type="text"
                        name="address"
                        onChange={this.changeHandler}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Vehicle Owned</th>
                    <td>
                      <input
                        type="checkbox"
                        name="two"
                        value="TwoWheeler"
                        onClick={this.clickHandler}
                      />
                      Two Wheeler
                      <input
                        type="checkbox"
                        name="four"
                        value="FourWheeler"
                        onClick={this.clickHandler}
                      />
                      Four Wheeler
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <input type="submit" /> <input type="reset" />
            </form>
          </center>
        </div>
      );
    } else if (this.state.isNext) {
      // console.log(isNext);
      return (
        <FormDetails
          name={this.state.name}
          number={this.state.number}
          gender={this.state.gender}
          category={this.state.category}
          address={this.state.address}
          two={this.state.two}
          four={this.state.four}
        />
      );
    }
  }
}

export default Form;
