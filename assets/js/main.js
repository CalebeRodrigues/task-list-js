const inputTarefa = document.querySelector('.input-task');
const btnTarefa = document.querySelector('.btn-task');
const tarefa = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;

    createTask(inputTarefa.value);
});

document.addEventListener ('click', function(e) {
    const elem = e.target;

    btnApagarClick(elem.classList.contains('apagar'), elem);   
});

inputTarefa.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (!inputTarefa.value) return;
        createTask(inputTarefa.value);
    }
});

function btnApagarClick (e, elem) {
    if (e) elem.parentElement.remove();

    saveTasks();
}

function createTask (text) {
    const li = createLi();
    li.innerText = text;
    tarefa.appendChild(li);
    createDeleteButton(li);

    saveTasks();
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

function saveTasks () {
    const arrayTarefas = [];

    for (let task of tarefa.querySelectorAll('li')){
        let txt = task.innerText.replace('Apagar', '').trim();
        arrayTarefas.push(txt);
    }

    const tarefaJSON = JSON.stringify(arrayTarefas);
    localStorage.setItem('tarefas', tarefaJSON);

}

function recoverTasks () {
    const listTarefa = localStorage.getItem('tarefas');
    const array = JSON.parse(listTarefa);

    for (let task of array) {
        createTask(task);
    }
}

recoverTasks();