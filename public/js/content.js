const form = document.querySelector('form');

function readMore() {
    document.getElementById("AboutPara").innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Pag versions of Lorem Ipsum.";
    document.getElementById("AboutPara").style.textAlign = "center";
    document.getElementById("readMore").style.display = "none";
    var readLess = document.getElementById("readLess");
    readLess.style.textAlign = "center";
    readLess.style.marginLeft = "50%-100px";
    document.getElementById("readLess").style.display = "block";
}

function readLess() {
    document.getElementById("AboutPara").innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
    document.getElementById("readMore").style.display = "block";
    var readLess = document.getElementById("readMore");
    readLess.style.textAlign = "center";
    readLess.style.marginLeft = "50%-100px";
    document.getElementById("readLess").style.display = "none";
}

var menu = 1;
function menuload() {
    if (menu == 1) {
        document.getElementById("MobileNav").style.display = "block";
        document.getElementById("menuIcon").src = "images/menuClose.svg"; document.getElementById("menuIcon").style.transform = "rotateZ(180deg)";
        document.getElementById("MobileNav").style.backgroundColor = "#24252A"
        menu = 0;
    } else {
        document.getElementById("MobileNav").style.display = "none";
        document.getElementById("menuIcon").style.transform = "rotateZ(0deg)";
        document.getElementById("menuIcon").src = "images/menu.svg";
        menu = 1;
    }
}

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    var name = form.name.value;
    var email = form.email.value;
    var from = form.compName.value;
    var msg = form.queryArea.value;
    fetch('https://us-central1-offtec-fa0f5.cloudfunctions.net/newQuery', {
        method: 'POST',
        body: JSON.stringify({
            name,email,from,msg
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(val=>{
        console.log(val)
    }).catch(err=>{
        console.log(err)
    });
})