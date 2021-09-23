import React, { Component } from 'react'

export default class PokeList extends Component {
    render() {
        const dataArr = this.props.dataArr
        const isLoading = this.props.isLoading
        return (
            <section>
                <ul className="poke-list">
                    {
                        !isLoading
                        ? <img className="loading-anim" src="" alt="loading img" />
                        : dataArr.map((dataObj => {
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
