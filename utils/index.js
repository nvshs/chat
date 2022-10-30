function outputMessages(username, text, time) {
    const messageContainer = document.querySelector('.chat-messages');

    var html = '';
    html += '<div class="message">';
    html += '<p class="meta">' + username + ' <span>' + time +'</span></p>';
    html += '<p class="text">' + text +'</p>';
    html += '</div>';

    messageContainer.insertAdjacentHTML('beforeend', html);

    document.querySelector('.message:last-child').scrollIntoView({
        behavior: 'smooth'
    });
}
