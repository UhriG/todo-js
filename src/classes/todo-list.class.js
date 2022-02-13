import { Todo } from '.';

export class TodoList {
	constructor() {
		this.cargarLocalStorage();
	}

	nuevoTodo(todo) {
		this.todos.push(todo);
		this.guardarLocalStorage();
	}

	eliminarTodo(id) {
		this.todos = this.todos.filter((todo) => todo.id !== id);
		this.guardarLocalStorage();
	}

	estadoTodo(id) {
		for (const todo of this.todos) {
			if (todo.id === id) {
				todo.completado = !todo.completado; // si es true pasa a false, si es false para a true
				break;
			}
		}
		this.guardarLocalStorage();
	}

	eliminarCompletados() {
		this.todos = this.todos.filter((todo) => !todo.completado);
		this.guardarLocalStorage();
	}

	guardarLocalStorage() {
		localStorage.setItem('todo', JSON.stringify(this.todos));
	}

	cargarLocalStorage() {
		this.todos = localStorage.getItem('todo')
			? JSON.parse(localStorage.getItem('todo'))
			: [];

		this.todos = this.todos.map((obj) => Todo.fromJSON(obj));
		// this.todos = this.todos.map(Todo.fromJSON);
	}
}
