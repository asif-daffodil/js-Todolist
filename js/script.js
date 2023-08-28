const taskForm = document.querySelector('#taskForm');
const tsakList = document.querySelector('#tsakList');
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(taskForm);
    const div = document.createElement('div');
    div.classList.add('task');
    div.textContent = formData.get('ytask');
    tsakList.appendChild(div);
    taskForm.reset();
    taskFunc();
});

const taskFunc = () => {
    const tasks = document.querySelectorAll('.task');
    Array.from(tasks).map((task) => {
        task.addEventListener('click', (e) => {
            e.target.remove();
        });
    });
}
