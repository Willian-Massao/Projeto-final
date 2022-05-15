var image = ["Atacadista.png","Atacadista2.png","Atacadista3.png"];
var select = 0;

for (let i = 0;i < 99;i++) {
    task(i);
}

function expand(bb){
    document.getElementById("contato").style.height = `${bb}`;
}

function Switch(prevback){
    var spanbackground = document.getElementById("span-background").style.backgroundImage = `url(src/${image[select]})`;
    if(prevback == 0){
        select--;
        select < 0? ((select = 2),(spanbackground)) : spanbackground;
    }else{
        select++;
        select > 2? ((select = 0),(spanbackground)) : spanbackground;
    }
}

function task(i) {
    setTimeout(function() {
        Switch(1);
    }, 3000 * i);
}

function hideShow(myClass, visible) {	
    let display = document.getElementsByClassName(myClass);
    visible == false? [].forEach.call(display, function (el) { el.style.display = "none";}):[].forEach.call(display, function (el) { el.style.display = "flex";});
}

function checkAll(myClass) {	
    let checkbox = document.getElementsByClassName(myClass);
    [].forEach.call(checkbox, function (el) {el.click();});  
}

function aa(){
    window.scrollTo(0,0);
}

function apper(nsei){
    document.getElementById("menu").style.marginLeft = `${nsei}px`;
}