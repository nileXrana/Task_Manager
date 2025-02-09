function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("firstBox").innerHTML);
    localStorage.setItem("completedTasks", document.getElementById("secondBox").innerHTML);
}

function loadTasks() {
    let savedTasks = localStorage.getItem("tasks");
    let savedCompletedTasks = localStorage.getItem("completedTasks");

    if (savedTasks) {
        document.getElementById("firstBox").innerHTML = savedTasks;
    }
    if (savedCompletedTasks) {
        document.getElementById("secondBox").innerHTML = savedCompletedTasks;
    }
}

function addkardo() {
    let a = document.getElementById("input").value;
    let b = `<div class="w-[90%] p-2 m-auto pl-5 border-2 border-white rounded-lg mb-3.5">
                <div class="text-[18px]">
                    ${a}
                </div>
                <button onclick="deletekar(this)" class="bg-white text-black mr-2 text-[12px] p-[2px] pr-1 pl-1 rounded-sm cursor-pointer">delete</button>
                <button onclick="completedbro(this)" class="bg-white text-black text-[12px] p-[2px] pr-1 pl-1 rounded-sm cursor-pointer">completed</button>
            </div>`;
    if (a.length != 0) {
        document.getElementById("firstBox").insertAdjacentHTML("beforeend", b);
        document.getElementById("input").value = "";
        saveTasks();
    }
}

function deletekar(btn) {
    btn.parentElement.remove();
    saveTasks();
}

function completedbro(btn) {
    let text = btn.parentElement.firstElementChild.innerText;
    let b = `<div class="w-[90%] p-2 m-auto pl-5 border-2 border-white rounded-lg mb-3.5">
                <div class="text-[18px]">
                    ${text}
                </div>
                <button onclick="deletekar(this)" class="bg-white text-black mr-2 text-[12px] p-[2px] pr-1 pl-1 rounded-sm cursor-pointer">delete</button>
            </div>`;
    document.getElementById("secondBox").insertAdjacentHTML("beforeend", b);
    btn.parentElement.remove();
    saveTasks();
}

window.onload = loadTasks;

