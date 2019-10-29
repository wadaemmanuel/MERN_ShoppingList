import React,{ Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 
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
        const items = this.state.items.map(({id, name}) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                    <ListGroupItem key={id}>
                    <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={()=> {
                        this.setState({
                            items: this.state.items.filter(item => item.id !== id)
                        });
                    }}
                    >&times;</Button>
                     {name} </ListGroupItem>
                </CSSTransition>
            )
        );

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
                    }}> Add Item</Button>

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