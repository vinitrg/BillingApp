import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BillingRow from "./BillingRow";
import "../styles/common.css";
class BillingSummary extends Component {
  state = {
    inventoryData: [],
    filterText: "",
    warning: "",
  };
  componentDidMount() {
    console.log("Inside Component Did Mount!!");

    fetch("/inventoryData.json")
      .then((response) => response.json())
      .then((response) => this.setState({ inventoryData: response }))
      .catch((error) => console.log(error));
  }

  F1 = () => {
    this.setState({ no: this.state.no + 1 });
  };

  handleUpdate = (evt) => {
    //We will have to do updation in DB

    //Below code is for UI Updation.
    //Created a replica of collection
    let inventoryDataReplica = this.state.inventoryData.slice();

    //Find which record from the replica needs to be changed.
    var filteredProduct = inventoryDataReplica.filter((inventoryDataItem) => {
      return inventoryDataItem.id == evt.target.name;
    });

    //Get the record's Index from the replica
    var index = inventoryDataReplica.indexOf(filteredProduct[0]);

    inventoryDataReplica[index][evt.target.id] = evt.target.value;

    //Now we have replica of the collection which consists of
    //one updated record. Now, re-set original collection to changed replica
    //so that re-rendering can happen
    this.setState({ inventoryData: inventoryDataReplica });
  };

  search = (evt) => {
    this.setState({ filterText: evt.target.value });
    console.log("You are searching for " + evt.target.value);
  };

  render() {
    return (
      <div>
        <h1>Billing Summary</h1>

        <input
          className="searchStyle"
          type="text"
          id="txtSearch"
          name="txtSearch"
          value={this.state.filterText}
          onChange={this.search}
        />
        <span className="alert alert-danger">{this.state.warning}</span>
        <div className="table-responsive">
          <table className="table table-bordered">
            <tbody>
              {this.state.inventoryData.map((inventoryItem) => {
                if (this.state.filterText != "") {
                  if (
                    inventoryItem.itemsSpecification.indexOf(
                      this.state.filterText
                    ) == -1
                  ) {
                    //this.setState({ warning: "No Items Found!" });
                    console.log("No Items Found!");
                  } else {
                    return (
                      <BillingRow
                        handleUpdate={this.handleUpdate}
                        key={inventoryItem.id}
                        {...inventoryItem}
                      ></BillingRow>
                    );
                  }
                } else {
                  return (
                    <BillingRow
                      handleUpdate={this.handleUpdate}
                      key={inventoryItem.id}
                      {...inventoryItem}
                    ></BillingRow>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
        <button onClick={this.F1}>Click Me</button>
      </div>
    );
  }
}
export default BillingSummary;
