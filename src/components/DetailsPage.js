import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class DetailsPage extends Component {
    render() {
        return (
            <header>
                <h1>Welcome to details...</h1>
                <div className="nav-cont">
                    <NavLink activeClassName="active-link" to="/">
                        Home
                    </NavLink>
                    <NavLink activeClassName="active-link" to="/search-page">
                        SearchPage
                    </NavLink>
                </div>
            </header>
        )
    }
}
