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
}

function createLi () {
    return document.createElement('li');
}