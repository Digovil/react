console.log('Hola mundo :D ');

const initialState = [{
    id: 1,
    todo: 'Comprar alcohol', // Significa 'que hacer'
    done: false
}];


// Esto puede ser considerado un reducer
// Porque regresa un nuevo estado
// function myFunction(params) {
//     return [];
// }

function todoReducer(state=initialState, action) { 
    // Usualmente se le va amandar un estado y una acción, es decir las acciones
    // Son las que van a modificar el estado y por defecto siempre vamos a regresar 
    // Un estado

    if(action?.type === 'agregar') {
        // return state.push() No debemos utilizar el método push porque estariamos mutando al objeto
        return [...state,action.payload] 
    }

    return state;
}

let todos = todoReducer();


const newTodo = [{
    id: 2,
    todo: 'Comprar Gasolina', // Significa 'que hacer'
    done: false
}];

// Si le voy a mandar una acción, 
// Nunca mandemos el objeto de la acción por
// Ejemplo todos = todoReducer(todos,newTodo)
// Lo que haremos es crear una acción

const action = {
    type: 'agregar', 
    // El type es una propiedad del objeto que se 
    // Enviará para determinar que tipo de acción realizará el reducer
    payload: newTodo // El objeto casi siempre se manda en el payload
}

todos = todoReducer(todos,action)

// No usar push en REACT, porque el push muta al objeto

console.log(todos);