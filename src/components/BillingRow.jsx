import React, { Component } from "react";
import BillingCell from "./BillingCell";
class BillingRow extends Component {
  render() {
    return (
      <tr>
        <BillingCell
          data={{
            id: "id",
            value: this.props.id,
            inventoryItemID: this.props.id,
          }}
          handleUpdate={this.props.handleUpdate}
        ></BillingCell>

        <BillingCell
          data={{
            id: "itemsSpecification",
            value: this.props.itemsSpecification,
            inventoryItemID: this.props.id,
          }}
          handleUpdate={this.props.handleUpdate}
        ></BillingCell>
        
        <BillingCell
          data={{
            id: "dateOfOrder",
            value: this.props.dateOfOrder,
            inventoryItemID: this.props.id,
          }}
          handleUpdate={this.props.handleUpdate}
        ></BillingCell>

        <BillingCell
          data={{
            id: "orderedBy",
            value: this.props.orderedBy,
            inventoryItemID: this.props.id,
          }}
          handleUpdate={this.props.handleUpdate}
        ></BillingCell>

        <BillingCell
          data={{
            id: "deliveryDate",
            value: this.props.deliveryDate,
            inventoryItemID: this.props.id,
          }}
          handleUpdate={this.props.handleUpdate}
        ></BillingCell>

        <BillingCell
          data={{
            id: "supervisedBy",
            value: this.props.supervisedBy,
            inventoryItemID: this.props.id,
          }}
          handleUpdate={this.props.handleUpdate}
        ></BillingCell>

        <BillingCell
          data={{
            id: "quantity",
            value: this.props.quantity,
            inventoryItemID: this.props.id,
          }}
          handleUpdate={this.props.handleUpdate}
        ></BillingCell>

        <BillingCell
          data={{
            id: "rate",
            value: this.props.rate,
            inventoryItemID: this.props.id,
          }}
          handleUpdate={this.props.handleUpdate}
        ></BillingCell>

        <BillingCell
          data={{
            id: "gst",
            value: this.props.gst,
            inventoryItemID: this.props.id,
          }}
          handleUpdate={this.props.handleUpdate}
        ></BillingCell>

        <BillingCell
          data={{
            id: "paidBy",
            value: this.props.paidBy,
            inventoryItemID: this.props.id,
          }}
          handleUpdate={this.props.handleUpdate}
        ></BillingCell>

        <BillingCell
          data={{
            id: "paidAmount",
            value: this.props.paidAmount,
            inventoryItemID: this.props.id,
          }}
          handleUpdate={this.props.handleUpdate}
        ></BillingCell>

        <BillingCell
          data={{
            id: "paidRemarks",
            value: this.props.paidRemarks,
            inventoryItemID: this.props.id,
          }}
          handleUpdate={this.props.handleUpdate}
        ></BillingCell>

        <BillingCell
          data={{
            id: "selectedUnit",
            value: this.props.selectedUnit,
            inventoryItemID: this.props.id,
          }}
          handleUpdate={this.props.handleUpdate}
        ></BillingCell>

        <BillingCell
          data={{
            id: "selectedPaymentMode",
            value: this.props.selectedPaymentMode,
            inventoryItemID: this.props.id,
          }}
          handleUpdate={this.props.handleUpdate}
        ></BillingCell>
      </tr>
    );
  }
}

export default BillingRow;
