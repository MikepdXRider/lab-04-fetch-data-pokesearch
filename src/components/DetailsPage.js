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
                        {
                            this.state.isLoading
                            ?  <img src='https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340' alt='loading...'/>
                            :   (
                                    <div className='detail-cont'>
                                        <img src={currentDataObj.url_image} alt={currentDataObj.id} />
                                        <section className='data-display'>
                                            <p>pokemon: {currentDataObj.pokemon}</p>
                                            <p>base_experience: {currentDataObj.base_experience}xp</p>
                                            <p>type_1: {currentDataObj.type_1}</p>
                                            <p>type_2: {currentDataObj.type_2}</p>
                                            <p>hp: {currentDataObj.hp}"</p>
                                            <p>height: {currentDataObj.height}"</p>
                                            <p>weight: {currentDataObj.weight}lbs</p>
                                            <p>attack: {currentDataObj.attack}</p>
                                            <p>defence: {currentDataObj.defence}</p>
                                            <p>special_attack: {currentDataObj.special_attack}</p>
                                            <p>special_defence: {currentDataObj.special_defence}</p>
                                            <p>speed: {currentDataObj.speed}</p>
                                            <p>ability_1: {currentDataObj.ability_1}</p>
                                            <p>ability_2: {currentDataObj.ability_2}</p>
                                            <p>ability_hidden: {currentDataObj.ability_hidden}</p>
                                            <p>egg_group_1: {currentDataObj.egg_group_1}</p>
                                            <p>egg_group_2: {currentDataObj.egg_group_2}</p>
                                            <p>pokebase: {currentDataObj.pokebase}</p>
                                            <p>pokedex: <a href={currentDataObj.pokedex}>{currentDataObj.pokedex}</a></p>
                                            <br />
                                            <p>[ash]pokedex(v.2.4.0)... <span className='text-indicator-anim'>|</span></p>
                                        </section>
                                    </div>
                                )
                            }
                </main>
            </>
        )
    }
}
