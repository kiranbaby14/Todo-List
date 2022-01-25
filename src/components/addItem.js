import React, {useState} from 'react';

// React functional component to add new items onto the list

let AddItem = (props) =>{
    //useState to update value entered on input box
    let [val, setVal] = useState('');

    //Add the newly entered value onto the items list
    let addTodo = () => {
        // Clear the input box upon pressing Enter
        document.getElementById('inpBtn').value = ''
        let newObj = {
                        name: val,
                        crossed: false
                     }
        let newArray = [...props.items, newObj];
        props.setItems(newArray)

    };

    return <>
            <input type="text" 
                   id='inpBtn'
                   className="form-control add-task" 
                   placeholder="New Task..." 
                   onChange={ e => { setVal(e.target.value) }}
                    //once Enter key is pressed call addTodo function
                   onKeyUp={ event => {
                       if(event.key === 'Enter'){
                
                           addTodo();
                           
                       }
                    }}/>
    </>
}

export default AddItem;