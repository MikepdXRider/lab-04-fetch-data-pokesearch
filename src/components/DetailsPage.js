import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import request from 'superagent'

export default class DetailsPage extends Component {
    componentDidMount = async () => {
        await this.fetchData()
    }

    fetchData = async () => {
        try{
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.query}`)

        console.log(response.body)
        } catch(e){
            console.error(e)
        }
    }
    
    render() {
        return (
            <>
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
                <main>

                </main>
            </>
        )
    }
}
