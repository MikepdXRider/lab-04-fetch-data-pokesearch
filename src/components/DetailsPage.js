import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import request from 'superagent'

export default class DetailsPage extends Component {
    state = {
        isLoading: false,
        dataObj: {}
    }
    

    componentDidMount = async () => {
        await this.fetchData()
    }


    fetchData = async () => {
        try{
            this.setState({isLoading: true})

            const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.query}`)

            this.setState({dataObj: response.body})

            this.setState({isLoading: false})

        } catch(e){
            console.error(e)
        }
    }
    

    render() {
        const currentDataObj = this.state.dataObj
        return (
            <>
                <header>
                    <h1>{currentDataObj.pokemon}</h1>
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
                <section style={{transform: `translateY(${-80}px)`}}className="search-cont">
                </section>
                    <ul className="poke-list">
                        {
                            this.state.isLoading
                            ? <img src='https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340' alt='loading...'/>
                            : (
                                <li style={{backgroundColor: `${currentDataObj.color_1}`}} key={currentDataObj.id} className="poke-item" >
                                    <div className='flex-cont'>
                                        <h3>{currentDataObj.pokemon}</h3>
                                        <p className='hp-text'>HP: {currentDataObj.hp}</p>
                                    </div>
                                    <div className='poke-item-img-cont flex-cont'>
                                        <img className="poke-item-img" src={currentDataObj.url_image} alt={currentDataObj.id} />
                                    </div>    
                                    <section className='poke-item-info flex-cont'>
                                        <div>
                                            <p>Ability: {currentDataObj.ability_1}</p>
                                            <p>Hidden-Ability: {currentDataObj.ability_hidden}</p>
                                            <p><span>Type:</span> {currentDataObj.type_1}</p>
                                        </div>
                                        <div>
                                            <p>Attack: {currentDataObj.attack}</p>
                                            <p>Speed: {currentDataObj.speed}</p>
                                            <p>Defence: {currentDataObj.defense}</p>
                                        </div>
                                    </section>
                                </li>
                                )
                            }
                    </ul>
                </main>
            </>
        )
    }
}
