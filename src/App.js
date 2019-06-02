import React from 'react';
import List from './List.js';
import './App.css'

class App extends React.Component {
  render() {
    let storeList = Object.keys(this.props.store.lists)
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {
            storeList.map((list) => {
              let cardArrays = this.props.store.lists[list].cardIds
              return <List 
              key={this.props.store.lists[list].id}
              id={this.props.store.lists[list].id}
              header={this.props.store.lists[list].header}
              cards={cardArrays.map(id => this.props.store.allCards[id])} />
              })
          }
        </div>
      </main>
    );
  }
}

export default App;