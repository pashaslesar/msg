let data = localStorage.getItem('msgList');
let msgList = [];

if (data !== "" && data !== null) {
    msgList = JSON.parse(data);
}

function createNewMsg(obj) {
    // const itemMsg = document.createElement('li');
    // itemMsg.classList.add('list-group-item');

    // const itemTitle = document.createElement('p');
    // itemTitle.classList.add('h2');
    // itemTitle.textContent = obj.name;

    // const itemText = document.createElement('p');
    // itemText.classList.add('lead');
    // itemText.textContent = obj.msg;

    // itemMsg.append(itemTitle);
    // itemMsg.append(itemText);

    // document.getElementById('msg-list').append(itemMsg);

    let msgList = document.getElementById('msg-list');

    msgList.innerHTML += `
        <li class="list-group-item">
            <p class="h2">${obj.name}</p>
            <p class="lead">${obj.msg}</p>
        </li>
    `;

    document.getElementById('name-inp').value = '';
    document.getElementById('msg-inp').value = '';
}

for (const msg of msgList) {
    createNewMsg(msg);
}

document.getElementById('add-msg-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let userName = document.getElementById('name-inp').value;
    let msg = document.getElementById('msg-inp').value;

    let msgObj = {
        name: userName,
        msg: msg
    }

    msgList.push(msgObj);

    localStorage.setItem('msgList', JSON.stringify(msgList));

    createNewMsg(msgObj);
});
