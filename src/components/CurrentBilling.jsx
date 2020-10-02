import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css"

class CurrentBilling extends Component {
    state = {
        inventoryData:[]
    };

    componentDidMount()
    {
        fetch("/items")
            .then((res)=>(
                res.json()
            ))
            .then((res)=>this.setState({inventoryData : res}))
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div>
            <div className="table-responsive">
                <table className="table table-striped">
                        <tbody>
                        {this.state.inventoryData.map(inventoryItem=>
                            <tr key={inventoryItem.id}>
                                <td>{inventoryItem.id}</td>
                                <td>{inventoryItem.itemsSpecification}</td>
                                <td>{inventoryItem.dateOfOrder}</td>
                                <td>{inventoryItem.orderedBy}</td>
                                <td>{inventoryItem.deliveryDate}</td>
                                <td>{inventoryItem.supervisedBy}</td>
                                <td>{inventoryItem.quantity}</td>
                                <td>{inventoryItem.rate}</td>
                                <td>{inventoryItem.gst}</td>
                                <td>{inventoryItem.paidBy}</td>
                                <td>{inventoryItem.paidAmount}</td>
                                <td>{inventoryItem.paidRemarks}</td>
                                <td>{inventoryItem.selectedUnit}</td>
                                <td>{inventoryItem.selectedPaymentMode}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                </div>
        );
    }
}

export default CurrentBilling;