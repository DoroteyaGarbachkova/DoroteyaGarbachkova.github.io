var ul=document.getElementById('list');
ul.parentNode.removeChild(ul);
function lists(){
var vegetables=['tomato','potato','carrot','cabbage','cucumber'];
var list = '<ul>',
    count=5,
    i;
for (var i = 0; i < count; i++) {
    list += '<li>' + vegetables[i] + '</li>';
}
list += '</ul>';
document.body.innerHTML+=list;
}
lists()