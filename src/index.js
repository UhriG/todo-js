import './styles.css';
import { TodoList } from './classes';
import { crearTodoHtml, todoPendientes } from './js/componentes';

export const todoList = new TodoList();

/* todoList.todos.forEach((todo) => {
	crearTodoHtml(todo);
}); 
 Es lo mismo qe la linea de abajo
*/

todoList.todos.forEach(crearTodoHtml);
