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
    // tạo thẻ span
    let span = document.createElement("span");
    // gắn class close cho span
    span.classList.add("close");
    // tạo text "x"
    let spanText = document.createTextNode(" x");
    span.appendChild(spanText);
    let li = document.getElementsByTagName("li");
    li[0].appendChild(span);
    // let ul = document.getElementById("myUL");
    // let mangLi = ul.children;
    // for (let i = 0; i < mangLi.length; i++) {
    //     li[i].appendChild(span);
    // }
    
}
deleteTask();