let activities = [
    { id: 1, name: "React Components", completed: false },
    { id: 2, name: "CSS Grid", completed: false },
    { id: 3, name: "API Integration", completed: false }
];

function render() {
    const list = document.getElementById('activity-list');
    list.innerHTML = '';
    let done = 0;

    activities.forEach(a => {
        if(a.completed) done++;
        list.innerHTML += `
            <div class="item">
                <span>${a.name}</span>
                <button class="btn ${a.completed ? 'completed' : 'pending'}" onclick="toggle(${a.id})">
                    ${a.completed ? 'Done ✓' : 'Pending'}
                </button>
            </div>`;
    });

    let percent = (done / activities.length) * 100;
    document.getElementById('progress').style.width = percent + '%';
    document.getElementById('progress').innerText = Math.round(percent) + '%';
    document.getElementById('summary').innerText = `${done} of ${activities.length} completed`;
}

function toggle(id) {
    activities = activities.map(a => a.id === id ? {...a, completed: !a.completed} : a);
    render();
}
render();
