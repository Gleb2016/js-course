function log(massage) {
    console.log(massage);
    log = function(msg) {
        console.log('[повтор]' + msg);
    };
}

log('первое');
log('второе');
log('третье');