function usernameChange() {
    const username = document.getElementById('usernameInput').value;

    if (username.length < 2){
        document.getElementById('usernameInput').value = "";
    }
    if (username.includes("<") || username.includes(">")){
        document.getElementById('usernameInput').value = "New User";
    }
}

function outputMessages(username, text, time) {
    const messageContainer = document.querySelector('.chat-messages');
    const messageBox = document.getElementById('msg');

    if (username.includes("adminaccess")){
        var username = username.replace("adminaccess","");
        
        if (text.startsWith('!')) {
            if (text.startsWith('!echo ')){
                text.replace('!echo ', ''); 
                html = '';
                html += `<div class="message">`;
                html += `<p style="color: var(--theme-color)" class="meta">Bot <span style="color: var(--dark-color-d)">${time}</span></p>`;
                html += `<p class="text">${text.replace('!echo ', '')}</p>`;
                html += `</div>`;
              
                messageContainer.insertAdjacentHTML('beforeend', html);
                messageContainer.scrollTop = messageContainer.scrollHeight;
                
                document.querySelector('.message:last-child').scrollIntoView({
                    behavior: 'smooth'
                });
                messageBox.value = '';
            }
        } else {
            if (text.length > 0){
                var html = '';
                html += '<div class="message">';
                html += `<p style="color: var(--error-color)" class="meta">${username} <span style="color: var(--dark-color-d)">${time}</span></p>`;
                html += '<p class="text">' + text +'</p>';
                html += '</div>';
        
                messageContainer.insertAdjacentHTML('beforeend', html);
                messageContainer.scrollTop = messageContainer.scrollHeight;
            
                document.querySelector('.message:last-child').scrollIntoView({
                    behavior: 'smooth'
                });
                messageBox.value = '';
            } else {
                messageBox.value = '';        
            }
        } 
    } else {
        if (text.includes("<") || text.includes(">")){
            html = '';
            html += `<div class="message">`;
            html += `<p style="color: var(--theme-color)" class="meta">Bot <span style="color: var(--dark-color-d)">${time}</span></p>`;
            html += `<p class="text"><b>@${username}</b>, that message contains words or phrases that are banned!</p>`;
            html += `</div>`;
        } if (text.length > 0){
            var html = '';
            html += '<div class="message">';
            html += '<p class="meta">' + username + ' <span style="color: var(--dark-color-d)">' + time +'</span></p>';
            html += '<p class="text">' + text +'</p>';
            html += '</div>';
    
            messageContainer.insertAdjacentHTML('beforeend', html);
            messageContainer.scrollTop = messageContainer.scrollHeight;
        
            document.querySelector('.message:last-child').scrollIntoView({
                behavior: 'smooth'
            });
            messageBox.value = '';
        } else {
            messageBox.value = '';        
        }
    }
}