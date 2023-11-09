const ws = new WebSocket('ws://localhost:3003');

const messagesList = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const userNameInput = document.getElementById('userName');
const userList = document.getElementById('userList');

ws.onmessage = function (event) {
    event.data.text().then(function (text) {
        try {
            const messageData = JSON.parse(text);
            if (messageData.text) {
                const message = document.createElement('li');
                message.textContent = messageData.text;
                messagesList.appendChild(message);
            }
        } catch (error) {
            console.error('Error parsing message as JSON:', error);
        }
    }).catch(function (error) {
        console.error('Error reading Blob as text:', error);
    });
};


function sendMessage() {
    const message = messageInput.value;
    ws.send(JSON.stringify({text: message}));
    messageInput.value = '';
}

function createUser() {
    const name = userNameInput.value;
    fetch('/api/resource', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: name}),
    })
        .then(response => response.json())
        .then(data => {
            console.log('User created:', data);
            userNameInput.value = '';
            getAllUsers();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function getAllUsers() {
    fetch('/api/resource')
        .then(response => response.json())
        .then(users => {
            userList.innerHTML = '';
            users.forEach(user => {
                let li = document.createElement('li');
                li.textContent = user.name + ' - ' + new Date(user.date).toLocaleString();
                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.onclick = function () {
                    deleteUser(user._id);
                };
                li.appendChild(deleteBtn);
                userList.appendChild(li);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function deleteUser(userId) {
    console.log('Deleting user with ID:', userId);
    fetch('/api/resource/' + userId, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            console.log('User deleted:', data);
            getAllUsers();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

getAllUsers();
