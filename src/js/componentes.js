import { todoList } from '..';
import { Todo } from '../classes';

// Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrarCompletados = document.querySelector('.clear-completed');
const ulFilter = document.querySelector('.filters');
const aFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {
	const htmlTodo = `
    <li class="${todo.completado ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${
				todo.completado ? 'checked' : ''
			} />
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
    </li>`;

	const div = document.createElement('div');
	div.innerHTML = htmlTodo;

	divTodoList.append(div.firstElementChild); // Inserta el primer hijo del elemento div, en este caso en vez de insertar <div><li>.. inserta directamente el <li> que es lo que queríamos lograr

	return div.firstElementChild;
};

// EVENTOS

txtInput.addEventListener('keyup', (event) => {
	if (event.keyCode === 13 && txtInput.value.length > 0) {
		const nuevoTodo = new Todo(txtInput.value);
		todoList.nuevoTodo(nuevoTodo);

		crearTodoHtml(nuevoTodo);
		txtInput.value = '';
	}
});

divTodoList.addEventListener('click', (event) => {
	const nombreElemento = event.target.localName; //input, label o boton
	const todoElemento = event.target.parentElement.parentElement;
	const todoId = parseInt(todoElemento.getAttribute('data-id'));
	// const todoId2 = parseInt(todoElemento.dataset.id); otra forma de obtener un atributo data-

	if (nombreElemento.includes('input')) {
		// Click en el check
		todoList.estadoTodo(todoId);
		todoElemento.classList.toggle('completed');
	} else if (nombreElemento.includes('button')) {
		// Click en el botón de cerrar
		todoList.eliminarTodo(todoId);
		divTodoList.removeChild(todoElemento);
	}

	console.log(todoList);
});

btnBorrarCompletados.addEventListener('click', () => {
	todoList.eliminarCompletados();

	for (let i = divTodoList.children.length - 1; i >= 0; i--) {
		const elemento = divTodoList.children[i];

		if (elemento.classList.contains('completed')) {
			divTodoList.removeChild(elemento);
		}
	}
});

ulFilter.addEventListener('click', (event) => {
	const filtro = event.target.text;
	if (!filtro) {
		return;
	}

	aFiltros.forEach((e) => e.classList.remove('selected'));
	event.target.classList.add('selected');

	for (const elemento of divTodoList.children) {
		elemento.classList.remove('hidden');
		const completado = elemento.classList.contains('completed');

		switch (filtro) {
			case 'Pendientes':
				if (completado) {
					elemento.classList.add('hidden');
				}
				break;
			case 'Completados':
				if (!completado) {
					elemento.classList.add('hidden');
				}
				break;
		}
	}
});
