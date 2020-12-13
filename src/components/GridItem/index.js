import React from 'react';
import './style.css';
export default class GridItem extends React.Component {
    constructor(props) {
        super(props);
        this.clickFn = this.clickFn.bind(this);
    }

    clickFn() {
        this.props.playerClickCallBack(this.props.rowIdx, this.props.colIdx);
    }

    render () {
    return (
        <div className="grid-item" onClick={this.clickFn}>
            {this.props.value}
        </div>);
    }
}