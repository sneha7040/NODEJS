window.addEventListener("load", function() {
    var id = document.getElementById('id');
    setInterval(function() {
        id.style.display = (id.style.display == 'none' ? '' : 'none');
    }, 1000);

}, false);