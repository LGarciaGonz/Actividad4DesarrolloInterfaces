
const ListTodo = ({Todos, setTodos}) => {
    return (
        <div>
          <ul>
            {Todos.map(todo =>
              
              <li  className={todo}>
              {todo.name}
              <span>  </span>
              <button onClick={() => {

                let index = Todos.indexOf(todo)
                Todos.splice(index, 1) //At position index, remove n=1 items
                setTodos([...Todos])
              
              }
            }>Eliminar</button>

<span>  </span>

            <button onClick={() => {
              let indice = Todos.indexOf(todo);           // Obtener el índice del ToDo seleccionado.
              console.log(indice)                         // Mostrar en consola el índice obtenido.
              const UpdateTodos = Todos.map((todo) => {   // Recorrer toda la lista de ToDos.
                  
                if(indice === todo.id){                   // Comprobar si el índice de la tarea corresponde con su id.
                  
                    return({...todo, isCompleted:true});  // Devolver el ToDo modificando su estado a Completado = true.
                    
                  }
                  else{
                  
                      return({...todo});                  // Devolver el ToDo sin cambiar el estado Pendiente = false.
                    
                  }

              }
                
                );
              console.log(UpdateTodos);                   // Mostrar en consola la lista de ToDos actualizada.
              setTodos(UpdateTodos);                      // Modificar la lista original de ToDos con la nueva actualizada.
            }}>Actualizar</button>

<span>  </span>

            {/* Cambiar el texto y el color del fondo si la tarea se marca como completada */}
            <span style={{ background: todo.isCompleted ? 'green' : 'red' }}>{todo.isCompleted ? 'Hecho' : 'Pendiente'}</span>

          </li>
      )}
        </ul>
       </div>
    )
  }
export default ListTodo;