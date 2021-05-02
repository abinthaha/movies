import React from "react";
import "./styles.scss";
import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import HeaderComponent from "../../common/Header/Header";
import Container from "@material-ui/core/Container";

class MoviesSearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      year: "",
      dataRow: [],
      userName: "",
      iframeClicked: false,
    };
  }

  componentDidMount = () => {
    const { location } = this.props;
    if (
      location &&
      location.state &&
      location.state.data &&
      location.state.data.name
    ) {
      this.setState({
        ...this.state,
        userName: location.state.data.name,
      });
    } else {
      this.props.history.push("/login");
    }

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

  onInputChange = (type, ev) => {
    this.setState({
      [type]: ev.target.value,
    });
  };

  onSubmit = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    this.getGitHubUserWithFetch().then((data) => {
      this.setState({
        ...this.state,
        dataRow: [
          { id: "Name", title: data.Title },
          { id: "Year", title: data.Year },
          { id: "Actors", title: data.Actors },
          { id: "Director", title: data.Director },
          { id: "Country", title: data.Country },
          { id: "Released", title: data.Released },
          { id: "Runtime", title: data.Runtime },
          { id: "imdbID", title: data.imdbID },
          { id: "Awards", title: data.Awards },
          { id: "Poster", title: data.Poster },
        ],
      });
    });
  };

  getGitHubUserWithFetch = async () => {
    const { movie, year } = this.state;
    const response = await fetch(
      "http://www.omdbapi.com/?t=" + movie + "&y=" + year + "&apikey=c7256108"
    );
    const jsonData = await response.json();
    return jsonData;
  };

  render() {
    const { movie, year, dataRow, iframeClicked, userName } = this.state;
    const imgSrc = dataRow.filter((item) => item.id === "Poster");
    return (
      <main>
        <HeaderComponent userName={userName} />
        <Container fixed>
          <h4>Is iframe clicked: {iframeClicked ? "Clicked" : "No"}</h4>
          <iframe
            id="profile"
            src="https://abinthaha.github.io/Dashboard"
            title="W3Schools Free Online Web Tutorials"
          ></iframe>
          <h4 className="header">Search Movie</h4>
          <form onSubmit={(ev) => this.onSubmit(ev)}>
            <FormGroup>
              <FormControl>
                <InputLabel htmlFor="movie">Movie Title</InputLabel>
                <Input
                  id="movie"
                  onChange={(ev) => this.onInputChange("movie", ev)}
                  value={movie}
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="year">Year</InputLabel>
                <Input
                  id="year"
                  onChange={(ev) => this.onInputChange("year", ev)}
                  value={year}
                  aria-describedby="my-helper-text"
                />
              </FormControl>

              <FormControl>
                <Button type="submit" variant="contained" color="primary">
                  SUBMIT
                </Button>
              </FormControl>
            </FormGroup>
          </form>
          {dataRow && dataRow.length > 0 ? (
            <div style={{ height: 400, width: "100%" }}>
              <img src={imgSrc.title} />
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    {dataRow.map((row, index) => (
                      <TableRow key={row.name} key={index}>
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell>{row.title}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          ) : null}
        </Container>
      </main>
    );
  }
}

export default MoviesSearchComponent;
