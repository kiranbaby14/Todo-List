import './App.css';
import { useState } from 'react';
import TodoItems from './components/todoItems';
import AddItem from './components/addItem';

function App() {
    
    
    let [items, setItems] = useState([
        {
            name: "Create theme",
            crossed: false 
        },

        {
            name: "Work on wordpress",
            crossed: false 
        },

        {
            name: "Organize office main department",
            crossed: false 
        },

        {
            name: "Error solve in HTML template",
            crossed: false 
        }
    ]);

    let [currState, setCurrState] = useState('allTasks');
    
    
    return <>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card card-white">
                    <div className="card-body">

                        <AddItem items = {items} setItems = {setItems}/>
                        
                        <ul className="nav nav-pills todo-nav">
                            <li role="presentation" className="nav-item all-task active"><a href="#" className="nav-link" onClick={() => setCurrState('allTasks')}>All</a></li>
                            <li role="presentation" className="nav-item active-task"><a href="#" className="nav-link" onClick={() => setCurrState('activeTasks')}>Active</a></li>
                            <li role="presentation" className="nav-item completed-task"><a href="#" className="nav-link" onClick={() => setCurrState('completedTasks')}>Completed</a></li>
                        </ul>
                        <div className="todo-list">
                            {items.map((item, index) => {

                                if(currState==='allTasks'){
                                    
                                    return <TodoItems itemName={item.name} 
                                                                isCrossed={item.crossed}
                                                                items = {items}
                                                                setItems = {setItems}
                                                                id = {index}
                                                                key={index}/>
                                }

                                else if(currState==='activeTasks' && !item.crossed){

                                    return <TodoItems itemName={item.name} 
                                                                isCrossed={item.crossed}
                                                                items = {items}
                                                                setItems = {setItems}
                                                                id = {index}
                                                                key={index}/>

                                }

                                else if(currState==='completedTasks' && item.crossed){

                                    return <TodoItems itemName={item.name} 
                                                                isCrossed={item.crossed}
                                                                items = {items}
                                                                setItems = {setItems}
                                                                id = {index}
                                                                key={index}/>

                                }

                            }
                            )}

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default App;
