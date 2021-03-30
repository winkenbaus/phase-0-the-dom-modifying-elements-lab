const removeMain = document.getElementById("main");
removeMain.remove(removeMain.main);


const newHeader = document.createElement('h1');
newHeader.id = 'victory'
newHeader.innerHTML = '<h1>Victory</h1>';
document.body.appendChild(newHeader)
let text = document.createTextNode('Caitlin is the champion');
newHeader.appendChild(text);
