import React from 'react';

//React functional components to display the already existing items
let TodoItems = (props) => {

    let checkMark = (id) => {
        let newArray = [...props.items]
        newArray[id].crossed = !newArray[id].crossed
        props.setItems(newArray)
    }

    return <>
        <div className="todo-item">
            {/* Ternary statement for if checkbox is checked or not*/}
            {!props.isCrossed ?
            <>
                <div className="checker"><input type="checkbox" onChange={() => checkMark(props.id)} /></div>
                <span> {props.itemName} </span>
            </> :
            
            <>
                <div className="checker"><input type="checkbox" checked onChange={() => checkMark(props.id)} /></div>
                <s><span> {props.itemName} </span></s>
            </>
            }
            
            <a href="" className="float-right remove-todo-item"><i className="icon-close"></i></a>
        </div>
    </>
}

export default TodoItems;