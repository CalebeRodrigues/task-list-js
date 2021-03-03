const inputTarefa = document.querySelector('.input-task');
const btnTarefa = document.querySelector('.btn-task');
const tarefa = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;

    createTask(inputTarefa.value);
})

inputTarefa.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (!inputTarefa.value) return;
        createTask(inputTarefa.value);
    }
})

function createTask (text) {
    const li = createLi();
    li.innerText = text;
    tarefa.appendChild(li);
    createDeleteButton(li);

    resetInput();
}

function createLi () {
    return document.createElement('li');
}

function createDeleteButton (li) {
    const btnDelete = document.createElement('button');
    btnDelete.innerText = 'Apagar';
    li.innerText += "  ";
    btnDelete.setAttribute('class', 'apagar');
    btnDelete.setAttribute('title', 'Deletar está tarefa');
    li.appendChild(btnDelete); 
}

function resetInput () {
    inputTarefa.value = '';
    inputTarefa.focus();
}