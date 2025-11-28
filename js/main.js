// JS cho Bài 01 - TODO MATRIX
})();


// DOM
const form = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskName');
const prioritySelect = document.getElementById('priority');


let tasks = []; // cấu trúc: {id, name, priority}


function saveTasks(){
localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}


function loadTasks(){
const raw = localStorage.getItem(STORAGE_KEY);
if (raw){
try{
tasks = JSON.parse(raw);
}catch(e){ tasks = []; }
} else tasks = [];
}


function render(){
// xóa các list
[1,2,3,4].forEach(n => {
const ul = document.getElementById('cell-' + n);
ul.innerHTML = '';
});


tasks.forEach(task => {
const ul = document.getElementById('cell-' + task.priority);
if (!ul) return;
const li = document.createElement('li');
li.className = 'task-item';
const span = document.createElement('span');
span.className = 'task-text';
span.textContent = task.name;


// Logic chống AI: nếu độ dài tên > 10 ký tự, đổi màu theo chữ số cuối MSSV
if (task.name.length > 10){
if (lastDigit % 2 === 0){
span.style.color = 'red';
} else {
span.style.color = 'blue';
}
}


const btn = document.createElement('button');
btn.className = 'task-delete';
btn.textContent = 'X';
btn.title = 'Xóa';
btn.addEventListener('click', ()=>{
tasks