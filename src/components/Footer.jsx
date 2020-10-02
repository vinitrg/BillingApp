import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css"

class Footer extends Component {
    state = {};
    render() {
        return (
            <div style={{width : 100 + "%", height:100 + "px"}} className="btn-warning">
                <h6>this is Footer</h6>
            </div>
        );
    }
}

export default Footer;