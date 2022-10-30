function outputMessages(username, text, time) {
    const messageContainer = document.querySelector('.chat-messages');
    const messageBox = document.getElementById('msg');

    var html = '';
    html += '<div class="message">';
    html += '<p class="meta">' + username + ' <span>' + time +'</span></p>';
    html += '<p class="text">' + text +'</p>';
    html += '</div>';

    messageContainer.insertAdjacentHTML('beforeend', html);
    messageContainer.scrollTop = messageContainer.scrollHeight;

    document.querySelector('.message:last-child').scrollIntoView({
        behavior: 'smooth'
    });
    messageBox.value = '';
}
