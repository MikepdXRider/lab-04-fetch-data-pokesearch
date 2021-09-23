import React, { Component } from 'react'

export default class PokeList extends Component {
    render() {
        const dataArr = this.props.dataArr
        return (
            <section>
                <ul className="poke-list">
                    {
                        dataArr.map((dataObj => {
                            return(
                                <li key={dataObj.id}>
                                    {/* more data here */}
                                </li>
                            )
                        }))
                    }
                </ul>
            </section>
        )
    }
}
