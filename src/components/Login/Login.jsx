import React from "react";
import "./styles.scss";
import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import usersData from "../../data/users";
import { store } from "../../store";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userData: usersData,
    };
  }

  componentDidMount = () => {
    console.log(store.getState());
    this.setState({
      ...this.state,
      userData: store.getState().users,
    });
  };

  onSubmit = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    let { username, password, userData } = this.state;
    userData = userData.filter((item) => item.username === username);
    if (userData && userData.length > 0) {
      if (userData[0].password === password) {
        console.log("Success");
        this.props.history.push({
          pathname: "/search",
          state: {
            data: userData[0],
          },
        });
      } else {
        console.log("Password not matching");
      }
    } else {
      console.log("User not found");
    }
  };

  onInputChange = (type, ev) => {
    this.setState({
      [type]: ev.target.value,
    });
  };

  render() {
    const { username, password } = this.state;

    return (
      <section className="form-wrapper">
        <form onSubmit={(ev) => this.onSubmit(ev)}>
          <h4 className="login-header">LOGIN</h4>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input
                id="email"
                onChange={(ev) => this.onInputChange("username", ev)}
                value={username}
                type="email"
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                onChange={(ev) => this.onInputChange("password", ev)}
                value={password}
                type="password"
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <FormControl>
              <Button type="submit" variant="contained" color="primary">
                LOGIN
              </Button>
            </FormControl>
            <FormControl className="sign-up-wrapper">
              <div>
                Don't have an account? <Link to="/sign-up">Sign Up</Link>
              </div>
            </FormControl>
          </FormGroup>
        </form>
      </section>
    );
  }
}

export default LoginComponent;
