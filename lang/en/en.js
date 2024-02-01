const messages = {
    HELLO: 'Hello',
    RESULT: '! What a beautiful day. Server current date and time is: ',
    SERVERMESSAGE: 'Server current date and time is: '
};

module.exports.greetMessage = function(name) {
    return `${messages.HELLO} ${name}${messages.RESULT}`;
};

module.exports.messages = messages;
