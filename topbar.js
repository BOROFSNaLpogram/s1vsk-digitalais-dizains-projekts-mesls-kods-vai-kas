var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '.' + mm + '.' + yyyy + '.';
document.getElementById("date").innerHTML = today;


let currentMode = true;
function mode() {
    let logo = document.getElementById('mode');
    if (currentMode) {
        document.body.style.backgroundColor = "#1c1c1c";
        logo.src = 'icon/temp.png';
        currentMode = false;
    } 
    else {
        document.body.style.backgroundColor = "#ffffff";
        logo.src = 'icon/moon.png';
        currentMode = true;
    }
}

// function mode()
//     document.getElementById("mode").style.backgroundColor = "lightblue";



// ---------------------------- SIDE MENU SKRIPTS --------------------------
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

    document.getElementById("transparent").style.visibility = "visible";

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("transparent").style.visibility = "hidden";
}