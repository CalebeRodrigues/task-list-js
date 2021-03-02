const inputTarefa = document.querySelector('.input-task');
const btnTarefa = document.querySelector('.btn-task');
const tarefa = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', function (e) {
    const txt = inputTarefa.value;
    
    if(txt.length > 0) {
        console.log(txt);
    }
    else {
        console.log('Nada digitado');
    }
})