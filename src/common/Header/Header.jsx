import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class HeaderComponent extends React.Component {
  render() {
    const { userName } = this.props;
    return (
      <header>
        <div className="link-section">
          <Link to="/search">Movies Search </Link>
          <Link to="/mymovies">My Movies</Link>
        </div>
        <div className="user-details">{userName}</div>
      </header>
    );
  }
}

export default HeaderComponent;
