import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

/**
 * creates each individual image
 *
 * @component Image
 *
 */
export default class Image extends Component {
  state = {
    show: false,
  };

  showModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <li>
          <img
            className="image"
            src={this.props.url}
            alt=" "
            onClick={() => this.showModal()}
          />
        </li>
        <span>
          <Modal
            show={this.state.show}
            onClose={this.showModal}
            src={this.props.url}
            title={this.props.title}
          />
        </span>
      </div>
    );
  }
}

Image.propTypes = {
  url: PropTypes.string,
};
