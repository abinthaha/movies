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
import { store } from "../../store";
import { addUser } from "../../redux/action";
import PositionedSnackbar from "../../common/Toaster/Toaster";

class SignUpComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      password: "",
      isSnackBarOpen: false,
      snackBarMessage: "",
    };
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    let { username, password, firstName } = this.state;
    store.dispatch(
      addUser({
        name: firstName,
        username: username,
        password: password,
      })
    );
    this.setState(
      {
        ...this.state,
        isSnackBarOpen: true,
        snackBarMessage: "User added",
      },
      () => {
        this.props.history.push("/login");
      }
    );
  };

  onInputChange = (type, ev) => {
    this.setState({
      [type]: ev.target.value,
    });
  };

  closeSnackBar = () => {
    this.setState(
      {
        isSnackBarOpen: false,
      },
      () => {}
    );
  };

  render() {
    const {
      username,
      password,
      firstName,
      isSnackBarOpen,
      snackBarMessage,
    } = this.state;

    return (
      <section className="form-wrapper">
        <form onSubmit={(ev) => this.onSubmit(ev)}>
          <h4 className="header">SIGN UP</h4>
          <PositionedSnackbar
            open={isSnackBarOpen}
            message={snackBarMessage}
            closeSnackBar={this.closeSnackBar}
          />
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                id="firstName"
                onChange={(ev) => this.onInputChange("firstName", ev)}
                value={firstName}
                aria-describedby="my-helper-text"
              />
            </FormControl>
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
                SIGN UP
              </Button>
            </FormControl>
            <FormControl className="sign-up-wrapper">
              <Link to="/login">Login</Link>
            </FormControl>
          </FormGroup>
        </form>
      </section>
    );
  }
}

export default SignUpComponent;
