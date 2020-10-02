import React, { Component } from "react";
class BillingCell extends Component {
  state = {};

  render() {
    return (
      <td>
        <input
          type="text"
          id={this.props.data.id}
          value={this.props.data.value}
          name={this.props.data.inventoryItemID}
          onChange={this.props.handleUpdate}
        />
      </td>
    );
  }
}

export default BillingCell;
