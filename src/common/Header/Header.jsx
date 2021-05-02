import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import UserProvider, { UserContext } from "../../Provider";

class HeaderComponent extends React.Component {
  render() {
    return (
      <UserProvider>
        <header>
          <UserContext.Consumer>
            {(context) =>
              context && context.userData ? (
                <React.Fragment>
                  <div className="link-section">
                    <Link to="/search">Movies Search </Link>
                    <Link to="/mymovies">My Movies</Link>
                  </div>
                  <div className="user-details">
                    {context.userData.firstName}
                  </div>
                </React.Fragment>
              ) : null
            }
          </UserContext.Consumer>
        </header>
      </UserProvider>
    );
  }
}

export default HeaderComponent;
