function addElement (tag, className){
    const div = document.createElement(tag);
    const parrent = document.getElementById('parrent');
    parrent.appendChild(div);
    div.innerHTML = "А вот и я!!!";
    div.style.textAlign = "left";
    div.style.fontSize = "32px";
    className ? div.classList.add(className): div.style.color = "red";
}
addElement ('div');
addElement ('p','green');
addElement ('p','blue');