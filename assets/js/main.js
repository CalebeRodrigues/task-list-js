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
    tarefa.appendChild(document.createElement('br'));
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

    localStorage.setItem('tarefas', JSON.stringify(arrayTarefas));

}

function recoverTasks () {
    const listTarefa = JSON.parse(localStorage.getItem('tarefas'));

    for (let task of listTarefa) {
        createTask(task);
    }
}

recoverTasks();