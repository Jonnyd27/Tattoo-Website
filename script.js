//Function to allow tabs to exist on one page, only changing the content of each tab and leaving header and footer the same.
function openTab(evt, id) {
    var i, tabcontent, tablinks;

    //Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add and "active" class to the button that opened the tab
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
}

//Allows images to be enlarged when clicked in the portfollio

    function enlargeImg() {
        img = parentElement;
        img.style.transform = "scale(1.5)";
        img.style.transition = "transform 0.25s ease";
    }