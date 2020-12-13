import React from 'react';
import GridItem from '../GridItem';
import './style.css';
export default class GridRow extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        const gridItemArray = [<GridItem/>, <GridItem/>, <GridItem/>];
        return (<div className = "grid-row">
            {this.props.row.map((boardCell, colIdx) => (
                <GridItem
                    key = {colIdx}
                    value = {boardCell}
                    colIdx = {colIdx}
                    rowIdx = {this.props.rowIdx}
                    playerClickCallBack = {this.props.playerClickCallBack}
                />
            ))}
            </div>
        );
    }
}