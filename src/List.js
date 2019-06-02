import React from 'react';
import Card from './Card.js'

class List extends React.Component {
    render() {
        let cards = this.props.cards
        console.log(cards)
        return (
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                    {
                        cards.map((card) => {
                            console.log(card)
                            return <Card title={card.title} content={card.content} />
                        })
                    }
                </div>
            </section>
        )
    }
}
export default List;