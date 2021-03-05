let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
    var tables = JSON.parse(xhr.responseText);
    console.log(tables);
    var statusHTML = '<ul class="list">';
    for(var i = 0; i<tables.length; i++) {
    if(tables[i].occupied === true) {
        statusHTML += '<li class="occupied">';
    } else {
        statusHTML += '<li class="vacant">';
    }
    statusHTML += tables[i].number;
    statusHTML += '</li>';
}

statusHTML += '</ul>';
document.getElementById('tables').innerHTML = statusHTML;
    }
};
xhr.open('GET', 'tables.json');
xhr.send();