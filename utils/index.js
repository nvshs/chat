function usernameChange() {
    const usernameInput = document.getElementById('usernameInput').value;
    if (usernameInput.length > 2){
        var username = usernameInput;
    }
    if (usernameInput.includes("<") || usernameInput.includes(">")){
        document.getElementById('usernameInput').value = "New User";
    }
    else {
        document.getElementById('usernameInput').value = "";
    }
}

function outputMessages(username, text, time) {
    const messageContainer = document.querySelector('.chat-messages');
    const messageBox = document.getElementById('msg');
    var html = '';
    html += '<div class="message">';
    html += '<p class="meta">' + username + ' <span style="color: var(--dark-color-d)">' + time +'</span></p>';
    html += '<p class="text">' + text +'</p>';
    html += '</div>';

    if (username.length == 0){
        username = "New User"
        document.getElementById('usernameInput').value = "New User";
    }
    if (text.includes("<") || text.includes(">")){
        html = '';
        html += `<div class="message">`;
        html += `<p style="color: var(--theme-color)" class="meta">Bot <span style="color: var(--dark-color-d)">${time}</span></p>`;
        html += `<p class="text"><b>@${username}</b>, that message contains words or phrases that are banned!</p>`;
        html += `</div>`;
    }
    if (text.length > 0){
        messageContainer.insertAdjacentHTML('beforeend', html);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    
        document.querySelector('.message:last-child').scrollIntoView({
            behavior: 'smooth'
        });
        messageBox.value = '';
    }
    else {
        messageBox.value = '';        
    }
}