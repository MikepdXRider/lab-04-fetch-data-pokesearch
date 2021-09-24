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
                                <li style={{backgroundColor: `${dataObj.color_1}`}} key={dataObj.id} className="poke-item">
                                    <h2>{dataObj.pokemon}</h2>
                                    <p><span>Type:</span> {dataObj.type_1}</p>
                                    <img src={dataObj.url_image} alt={dataObj.id} />
                                    <section className='poke-item-info flex-cont'>
                                        <div>
                                            <p>HP: {dataObj.hp}</p>
                                            <p>Ability: {dataObj.ability_1}</p>
                                            <p>Hidden-Ability: {dataObj.ability_hidden}</p>
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
