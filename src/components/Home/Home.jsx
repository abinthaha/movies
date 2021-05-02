import React from "react";
import "./styles.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iframeClicked: false,
    };
  }

  componentDidMount = () => {
    var iframe = document.getElementById("profile");
    var myConfObj = {
      iframeMouseOver: false,
    };
    window.addEventListener("blur", (ev) => {
      if (myConfObj.iframeMouseOver) {
        this.setState({
          iframeClicked: true,
        });
      }
    });

    document
      .getElementById("profile")
      .addEventListener("mouseover", function () {
        myConfObj.iframeMouseOver = true;
      });
    document
      .getElementById("profile")
      .addEventListener("mouseout", function () {
        myConfObj.iframeMouseOver = false;
      });
  };
  render() {
    const { iframeClicked } = this.state;
    return (
      <section>
        <h4>Is iframe clicked: {iframeClicked ? 'Clicked' : 'No'}</h4>
        <iframe
          id="profile"
          src="https://abinthaha.github.io/Dashboard"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
      </section>
    );
  }
}

export default HomePage;
