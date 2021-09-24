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
                        ? <img src='https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340' alt='loading...'/>
                        : dataArr.map((dataObj => {
                            return(
                                <li style={{backgroundColor: `${dataObj.color_1}`}} key={dataObj.id} className="poke-item" >
                                    <div className='flex-cont'>
                                    <h3>{dataObj.pokemon}</h3>
                                            <p>HP: {dataObj.hp}</p>

                                    </div>
                                        <div className='poke-item-img-cont flex-cont'>
                                            <img classname="poke-item-img" src={dataObj.url_image} alt={dataObj.id} />
                                        </div>    
                                        <section className='poke-item-info flex-cont'>
                                        <div>
                                            <p>Ability: {dataObj.ability_1}</p>
                                            <p>Hidden-Ability: {dataObj.ability_hidden}</p>
                                            <p><span>Type:</span> {dataObj.type_1}</p>
                                        </div>
                                        <div>
                                            <p>Attack: {dataObj.attack}</p>
                                            <p>Speed: {dataObj.speed}</p>
                                            <p>Defence: {dataObj.defense}</p>
                                        </div>
                                    </section>
                                </li>
                            )
                        }))
                    }
                </ul>
            </section>
        )
    }
}
