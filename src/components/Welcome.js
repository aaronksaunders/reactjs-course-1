import React from "react";

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: {} };

    // bind function
    this.handleChangeFirst = this.handleChangeFirst.bind(this);
  }

  // this function does not by default have access to the current
  // scope of the component "this" so we need to bind it to the
  // component
  handleChangeFirst(_event) {
    let prevNameState = this.state.name;
    this.setState({ name: { ...prevNameState, first: _event.target.value } });
  }

  // using fat arrow, we dont need binding
  // javasctipt destructuring
  handleChangeLast = _event => {
    let prevNameState = this.state.name;
    this.setState({ name: { ...prevNameState, last: _event.target.value } });
  };

  // using fat arrow, we dont need binding
  handleBtnClick = _event => {
    this.props.onWelcomeSubmit(this.state.name);
  };

  render() {
    return (
      <>
        <h1>
          Hello, {this.state.name.first} {this.state.name.last}
        </h1>
        <div>
          <input
            type="text"
            name="first"
            value={this.state.first}
            onChange={this.handleChangeFirst}
          />
          <br />
          <input
            type="text"
            name="last"
            value={this.state.last}
            onChange={this.handleChangeLast}
          />
          <button onClick={this.handleBtnClick}>CLICK ME</button>
        </div>
      </>
    );
  }
}
