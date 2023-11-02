import { useState } from 'react';
import InputTodo from './listaEj2';
import ListTodo from './listaTodo';

const initialTodos = [
    {id: 0, name: "Todo1", isCompleted: false},
    {id: 1, name: "Todo2", isCompleted: false}
];

const Todo = () => {

    const [todos, addTodos] = useState(initialTodos);
    const [value, setValue] = useState("");
  
    function saveValue(event) {
        setValue(event.target.value)
    }

    let contador = todos.length

    function addList(){
        addTodos([...todos, {id: contador, name: value, isCompleted: false}])
    }

    return (
        <div>
            <InputTodo ChangeInput={saveValue} Value={value} ClickButton={addList}/>
            <ListTodo Todos={todos} setTodos={addTodos}/>
        </div>
    )
}

export default Todo;