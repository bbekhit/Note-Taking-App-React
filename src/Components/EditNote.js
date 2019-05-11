import React, { Component } from "react";
import * as actions from "../actions/noteActions";
import { connect } from "react-redux";

class EditNote extends Component {
  state = {
    note: ""
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getNote(id);
  }

  componentWillReceiveProps(nextProps) {
    const { note } = nextProps.notes.note;
    this.setState({
      note
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const note = this.state.note;
    const { id } = this.props.match.params;
    const newData = {
      id,
      note
    };
    this.props.editNote(newData);
    this.props.history.push("/");
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="main-wrapper">
        <form onSubmit={this.onSubmit}>
          <div className="input-wrapper">
            <input
              name="note"
              placeholder="Add Note"
              value={this.state.note}
              onChange={this.onChange}
            />
            <button className="btn">Update Note</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  notes: state.notes
});
export default connect(
  mapStateToProps,
  actions
)(EditNote);
