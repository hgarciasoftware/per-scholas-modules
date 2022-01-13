import { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="box">
        <form noValidate onSubmit={event => this.props.handleSubmit(event)}>
          {/* INPUT--TITLE */}
          <div className="field">
            <label htmlFor="title">
              <span className="field-label font-weight-bold">Title</span>
            </label>
            <input type="text" id="title" name="title" />
          </div>
          {/* TEXTAREA--BODY */}
          <div className="field">
            <label htmlFor="body">
              <span className="field-label font-weight-bold">Body</span>
            </label>
            <textarea id="body" name="body" maxLength="500"></textarea>
          </div>
          {/* INPUT--USERNAME */}
          <div className="field">
            <label htmlFor="username">
              <span className="field-label font-weight-bold">Username</span>
            </label>
            <input type="text" name="username" id="username" />
          </div>
          {/* BUTTON--SUBMIT */}
          <div className="field">
            <button className="button font-weight-bold" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
