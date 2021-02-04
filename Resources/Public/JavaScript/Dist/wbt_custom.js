// add sr-texts for external links
document.querySelectorAll('a').forEach(function (element) {
    var ownPathStart = location.protocol + '//' + location.hostname;
    if (element.href.indexOf('http') === 0 && element.href.indexOf(ownPathStart) === -1) {
        if (element.target === '_blank') {
            element.innerHTML += '<span class="sr-only">externer Link in neuem Tab</span>';
        } else {
            element.innerHTML += '<span class="sr-only">externer Link</span>';
        }
    }
});