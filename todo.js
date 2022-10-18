function chucNangChecked() {
    let ul = document.getElementById("myUL");
    let mangLi = ul.children;
    for (let i = 0; i < mangLi.length; i++) {
        mangLi[i].onclick = function() {
            // mangLi[i].className = "checked";
            this.classList.toggle("checked");
        }
    }
}

function newElement() {
    //lấy nội dung nhập vào
    let text = document.getElementById("myInput").value;
    // tạo text node
    let textNode = document.createTextNode(text);
    // tạo thẻ li
    let li = document.createElement("li");
    // gắn textNode vào thẻ li
    li.appendChild(textNode);
    // tạo thẻ ul
    let ul = document.getElementById("myUL");
    // gắn li vào thẻ ul
    ul.appendChild(li);
}
chucNangChecked();

function deleteTask() {
    let closebtn = document.createElement("span");
    let closeTextNode = document.createTextNode("x");
    closebtn.appendChild(closeTextNode);
    
}
deleteTask();