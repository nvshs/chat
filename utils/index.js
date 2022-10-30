function outputMessages(username, text, time) {
    const messageContainer = document.querySelector('.chat-messages');
    const messageBox = document.getElementById('msg');

    var html = '';
    html += '<div class="message">';
    html += '<p class="meta">' + username + ' <span>' + time +'</span></p>';
    html += '<p class="text">' + text +'</p>';
    html += '</div>';

    messageContainer.insertAdjacentHTML('beforeend', html);
    messageBox.value = '';

    document.querySelector('.message:last-child').scrollIntoView({
        behavior: 'smooth'
    });
}
