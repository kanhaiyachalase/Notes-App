import React, { useState } from 'react';
import ToDoList from "./ToDoList"

const App = () => {
    const [inputList, setInputLIst] = useState();
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputLIst(event.target.value);
    };
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputLIst();
    };

    const deleteItems = (id) => {
        console.log("deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });

    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>Notes App</h1>
                    <br />
                    <input type="text" placeholder="Add a Notes" onChange={itemEvent}
                        value={inputList}
                    />
                    <button onClick={listOfItems}>+</button>

                    <ol>
                        {Items.map((itemval, index) => {
                            return <ToDoList
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteItems}
                            />
                        })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}
export default App;