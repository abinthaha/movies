import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

class PositionedSnackbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vertical: "bottom",
      horizontal: "center",
    };
  }

  handleClose = () => {
    this.props.closeSnackBar();
  };

  render() {
    const { vertical, horizontal } = this.state;
    const { open, message } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          message={message}
          key={vertical + horizontal}
        />
      </div>
    );
  }
}
export default PositionedSnackbar;
