const fs = require('fs');
const filePath = "./tasks.json";

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
}

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({ind: tasks.length, task: task});
    saveTasks(tasks);
    console.log("Task added...", task);
}

const listTasks = () => {
    const tasks = loadTasks();
    tasks.forEach((task) => {
        console.log(`${task.ind} - ${task.task}`);
    });
}

const removeTask = () => {
    const tasks = loadTasks();
    tasks.pop();
    saveTasks(tasks);
    console.log("Task removed...");
}

const command = process.argv[2];
const arg = process.argv[3];

if(command === 'add'){
    addTask(arg);
}
else if(command === 'list'){
    listTasks();
}
else if(command === 'remove'){
    removeTask();
}
else{
    console.log("Command not found !!");
}