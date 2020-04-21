import React from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux"
class InputScreen extends React.Component {
  state = {
    username: "",
    email: "",
    textbox: "",
  };
  inputHandler = (event, field) => {
    this.setState({ [field]: event.target.value });
  };
  render() {
    const { username, email, textbox } = this.state;



    return (
      <div>
        <h1>Input Screen</h1>
        <h3>Username: {username} </h3>
        <h3>Email: {email} </h3>
        <input
          onChange={(e) => this.inputHandler(e, "username")}
          // onChange={inputHandler}
          type="text"
          placeholder="Username"
        />
        <br />
        <input
          onChange={(e) => this.inputHandler(e, "email")}
          type="text"
          placeholder="Email"
        />
        <br />
        <textarea
          onChange={(e) => this.inputHandler(e, "textbox")}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <p> {textbox.length} / 140</p>
        <Link to={"/profile/" + username}>
          <input className="btn" type="button" value="Submit" />
        </Link>
        <h3>{this.props.Helloworld}</h3>
        <h3>{this.props.namaPengguna}</h3>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Helloworld: state.haha.todoInput,
    namaPengguna: state.user.username,
  }
}
export default connect(mapStateToProps)(InputScreen);