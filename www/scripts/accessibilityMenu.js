// Change Menu Position
function changeMenuPosition(position) {
    var menuColor = document.getElementById("menu").className.slice(0, 43);
    switch (position) {
        // Top
        case "top":
            document.getElementById("menu").className = menuColor + " fixed-top";
            document.getElementById("resizeArea").className = "fixed-bottom";
            break;
        // Bottom
        case "bottom":
            document.getElementById("menu").className = menuColor + " fixed-bottom";
            document.getElementById("resizeArea").className = "fixed-top";
            break;
    }
}