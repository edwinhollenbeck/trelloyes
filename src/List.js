import React from 'react';
import Card from './Card.js'
import './List.css'

class List extends React.Component {
    render() {
        let cards = this.props.cards
        return (
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                    {
                        cards.map((card) => {
                            return <Card 
                                    title={card.title} 
                                    content={card.content}
                                    key={card.id} />
                        })
                    }
                  <button
                    type='button'
                    className='List-add-button'
                  >
                  + Add Random Card
                  </button>
                </div>
            </section>
        )
    }
}

export default List;