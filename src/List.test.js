import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List
                        key={1}
                        id={1}
                        header='first list'
                        cards={[{'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
                                'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
                                'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
                        }]}
                    />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<List 
                    key={1}
                    id={1}
                    header='first list'
                    cards={[{'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
                            'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
                            'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
                    }]}
                />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})