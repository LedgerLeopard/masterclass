import React, { Component } from 'react';
import { Alert, Modal, ModalBody } from 'reactstrap';

import addressConfig from './../addresses.json';

class Coinbase extends Component {
  render() {
    console.log(addressConfig, this.props);
    var showAlert = false;
    var acc = addressConfig.filter(i => i.value === this.props.role);
    console.log(acc)
    if (this.props.coinbase) {
      showAlert = !(acc.length && acc[0].key === this.props.coinbase);
    }

    return (
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        display: "inline-block",
        padding: "0 10px",
        color: "white",
        fontSize: 12
      }}>
        <Modal isOpen={showAlert} className={this.props.className}>
          <ModalBody>
            <Alert color="danger">
              Please change account
            </Alert>
          </ModalBody>
        </Modal>
        Coinbase: {this.props.coinbase}
      </div>);
  }
}

export default Coinbase;