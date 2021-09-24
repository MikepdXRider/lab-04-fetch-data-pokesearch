import React, { Component } from 'react'


export default class Sort extends Component {
    render() {
        const handleSort = this.props.handleSort
        const sortData = this.props.sortData
        return (
            <>
                <span>Sort:</span>  
                <select onChange={handleSort}>
                    {
                        sortData.map((sortItem) => <option key={sortItem} value={sortItem}>{sortItem.toLocaleUpperCase()}</option>)
                    }
                </select>
            </>
        )
    }
}


