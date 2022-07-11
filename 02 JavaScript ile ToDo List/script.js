let add = document.querySelector("#button-addon2")
let datas = document.querySelector("#data")
let liLength = document.getElementsByTagName("li")

const ListDOM = document.querySelector("#list")

add.addEventListener("click", () => {
    addTask();
})


counter = 0
for (; counter <= liLength.length; counter++) {
    liSelect(counter)
}

function check() {
    this.classList.toggle("checked"); // toggle switch genelde iki şıklı (evet, hayır veya aktif pasif) gibi durumları belirtmek için kullanılır. burda toggle("checked")'i kullanarak tıklanan maddenin üstünü çiz ve yanına tik işareti koy demiş olduk.
}

function removeButton() {
    this.parentElement.remove();  // burda maddeyi silmek için yanı çarpının bulunduğu maddeyi silmek için parentElement.remove classını kullandık.
    $('.remove').toast('show');
}

function liSelect(i) {
    let closeButton = document.createElement("span")
    closeButton.textContent = "X";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    liLength[i].append(closeButton);
    liLength[i].onclick = check;
}


function isEmpty(datas) {
    return !datas.trim().length;
}

function addTask() {


    if (isEmpty(datas.value)) 
    {
        $('.error').toast('show');
    }
    else {

        let li = document.createElement("li")
        li.textContent = datas.value;
        ListDOM.appendChild(li);
        datas.value = "";

        li.onclick = check;

        let closeButton = document.createElement("span");
        closeButton.textContent = "X";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;

        li.append(closeButton);
        ListDOM.append(li);
        datas.value = ("");

        $('.success').toast('show');


    }
}