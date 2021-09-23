import React, { Component } from 'react'

export default class PokeList extends Component {
    render() {
        const dataArr = this.props.dataArr
        const isLoading = this.props.isLoading
        return (
            <section>
                <ul className="poke-list">
                    {
                        isLoading
                        ? <h1>Loading...</h1>
                        : 
                        dataArr.map((dataObj => {
                            return(
                                <li key={dataObj.id}>
                                    <img src={dataObj.url_image} alt={dataObj.id} />
                                </li>
                            )
                        }))
                    }
                </ul>
            </section>
        )
    }
}
