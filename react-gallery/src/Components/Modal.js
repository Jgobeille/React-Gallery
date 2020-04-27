import React, { Component } from "react";

export default class ModalContainer extends Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-container">
        <div className="modal">
          <button
            type="button"
            id="modal-close-btn"
            className="modal-close-btn"
            onClick={this.onClose}
          >
            <strong>X</strong>
          </button>
          <div className="modal-info-container">
            <img className="modal-img" src={this.props.src} alt={"an image"} />
            <p>{this.props.title}</p>
          </div>
        </div>
      </div>
    );
  }
}
