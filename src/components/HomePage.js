import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <>
                <header>
                    <h1>Poke-Home</h1>
                    <div className="nav-cont">
                        <NavLink activeClassName="active-link" to="/">
                            Home
                        </NavLink>
                        <NavLink activeClassName="active-link" to="/search-page">
                            SearchPage
                        </NavLink>
                    </div>
                </header>
                <section style={{transform: `translateY(${-80}px)`}}className="search-cont">
                </section>
            </>
        )
    }
}
