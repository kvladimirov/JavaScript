let count = 0;
setInterval(function() {
    postMessage(++count);
}, 500);

onmessage = function(e) {
    if (e.data == 'reset')
        count = 0;
};
