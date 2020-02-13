import React from "react";
import Styles from "./Marker.module.css";

class Marker extends React.Component {

    state = {
        showTooltip: true
    };

    toggleTooltip = () => this.setState({showTooltip: !this.state.showTooltip});

    render() {

        return (
            <div className={Styles.marker} onClick={this.toggleTooltip}>
                {this.state.showTooltip ? this.props.tooltip : null}
            </div>
        )
    }
}

export default Marker;
