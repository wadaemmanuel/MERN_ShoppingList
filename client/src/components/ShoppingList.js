import React,{ Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransitions, TransitionGroup } from 'react-transition-group'; 
import uuid from 'uuid';


class ShoppingList extends Component {
    state = { 
        items:[
            {id: uuid(), name: 'Eggs'},
            {id: uuid(), name: 'Milk'}
        ]
     }
    render() { 
        // const items = this.state; 
        const items = this.state.items.map(item => {
            return(
                <ListGroupItem key={item.id}> {item.name} </ListGroupItem>
            )
        });
        return ( 
            <div>
                <Container>
                    <Button 
                    color="dark"
                    style={{marginBottom:'2rem'}}
                    onClick={()=>{
                        const name = prompt('enter item')
                        if (name){
                            this.setState({items: [...this.state.items, {id:uuid(), name}]})
                        }
                    }}
                    >Add Item</Button>

                    <ListGroup>
                        <TransitionGroup  className="shopping-list">
                            {items}
                        </TransitionGroup >    
                    </ListGroup>
                </Container>
            </div>
         );
    }
}
 
export default ShoppingList;