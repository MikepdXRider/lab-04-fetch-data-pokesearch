import React, { Component } from 'react'

export default class SearchOrder extends Component {
    render() {
        const handleSearchOrder = this.props.handleSearchOrder
        return (
            <select onChange={handleSearchOrder}>
                <option key='asc' value='asc'>Ascending</option>
                <option key='desc' value='desc'>Descending</option>
            </select>
        )
    }
}
