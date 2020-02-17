import React from "react";
import {MenuItem, Select, withStyles} from "@material-ui/core";

const StyledSelect = withStyles({
    root: {
        padding: '10px'
    }
})(Select);

class DropDown extends React.Component {

    state = {
        value: this.props.value
    };

    handleChange = (event, child) => {
        const newValue = event.target.value;
        this.setState({value: newValue});
        this.props.onChange && this.props.onChange(newValue);
    };

    render() {

        return (
            <StyledSelect variant="filled" fullWidth value={this.state.value} onChange={this.handleChange}>
                {(this.props.data || []).map((item, index) => (
                    <MenuItem key={`item-${index}`} value={item.value}>{item.label}</MenuItem>
                ))}
            </StyledSelect>
        )
    }
}

export default DropDown;
