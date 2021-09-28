import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PokeList extends Component {
    render() {
        const dataArr = this.props.dataArr
        const isLoading = this.props.isLoading
        return (
            <section>
                <ul className="poke-list">
                    {
                        isLoading
                        ? <img src='https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340' alt='loading...'/>
                        : dataArr.map((dataObj => {
                            return(
                                <Link to={`/details-page/${dataObj._id}`}>
                                    <li style={{backgroundColor: `${dataObj.color_1}`}} key={dataObj.id} className="poke-item" >

                                            <h3>{dataObj.pokemon.toUpperCase()}</h3>

                                            <p className='hp-text'>HP: {dataObj.hp}</p>
                                        
                                            <div className='poke-item-img-cont flex-cont'>
                                                <img className="poke-item-img" src={dataObj.url_image} alt={dataObj.id} />
                                            </div>   

                                            <div className='poke-item-yellow-banner'>
                                                <p>{dataObj.egg_group_2} pokemon / Height: {dataObj.height}"/ Weight: {dataObj.weight}lbs</p>
                                            </div> 

                                            <p className='poke-item-ability-text'><b>{dataObj.ability_1.toUpperCase()}</b> dolor sit amet, consectetur adipiscing elit, sed do.</p>

                                            <p className= 'poke-item-attack-damage'>{dataObj.attack}</p>

                                            <div className='poke-item-design-el-cont'>
                                                <div className="design-el design-el-1"></div>
                                                <div className="design-el design-el-2"></div>
                                                <div className="design-el design-el-3"></div>
                                            </div>
                                    </li>
                                </Link>
                            )
                        }))
                    }
                </ul>
            </section>
        )
    }
}
