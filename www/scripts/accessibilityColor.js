// Change Color
function changeColor(color) {
    switch (color) {
        // White
        case "1":
            setColors("container-fluid bg-white", "card", "jumbotron", "btn btn-outline-secondary btn-sm",
                "modal-content", "navbar navbar-expand-sm bg-dark navbar-dark ", "#f9f9f9", "#000000",
                "btn btn-outline-light btn-sm", "btn btn-outline-dark btn-sm", "#ffffff");
            break;
        // Grey
        case "2":
            setColors("container-fluid bg-secondary text-white", "card bg-secondary text-white",
                "jumbotron bg-white text-secondary", "btn btn-outline-light btn-sm", "modal-content bg-secondary text-white",
                "navbar navbar-expand-sm bg-light navbar-light ", "#f9f9f9", "#868e96",
                "btn btn-outline-dark btn-sm", "btn btn-outline-light btn-sm", "#6D767B");
            break;
        // Turquoise
        case "3":
            setColors("container-fluid bg-info text-danger", "card bg-info text-danger",
                "jumbotron bg-danger text-info", "btn btn-outline-danger btn-sm", "modal-content bg-info text-danger",
                "navbar navbar-expand-sm bg-danger navbar-dark ", "#dc3545", "#17a2b8",
                "btn btn-outline-light btn-sm", "btn btn-outline-danger btn-sm", "#17a2b8");
            break;
        // Blue
        case "4":
            setColors("container-fluid bg-primary text-warning", "card bg-primary text-warning",
                "jumbotron bg-warning text-primary", "btn btn-outline-warning btn-sm", "modal-content bg-primary text-warning",
                "navbar navbar-expand-sm bg-warning navbar-primary ", "#ffc107", "#007bff",
                "btn btn-outline-primary btn-sm", "btn btn-outline-warning btn-sm", "#007bff");
            break;
        // Brown
        case "5":
            setColors("container-fluid bg-warning text-secondary", "card bg-warning text-secondary",
                "jumbotron bg-secondary text-warning", "btn btn-outline-secondary btn-sm", "modal-content bg-warning text-secondary",
                "navbar navbar-expand-sm bg-secondary navbar-dark ", "#868e96", "#ffc107",
                "btn btn-outline-light btn-sm", "btn btn-outline-secondary btn-sm", "#ffc107");
            break;
        // Black
        case "6":
            setColors("container-fluid bg-dark text-white", "card bg-dark text-white",
                "jumbotron bg-white text-dark", "btn btn-outline-light btn-sm", "modal-content bg-dark text-white",
                "navbar navbar-expand-sm bg-light navbar-light ", "#f9f9f9", "#343a40",
                "btn btn-outline-dark btn-sm", "btn btn-outline-light btn-sm", "#343a40");
            break;
    }
}

// Change section color (bg-color and text-color)
function setSectionColor(classDescription) {
    for (var i = 1; i <= 4; i++) {
        document.getElementById("section" + i).className = classDescription;
    }
}

// Change contact color (bg-color and text-color)
function setContactColor(classDescription) {
    document.getElementById("card-b").className = classDescription;
    document.getElementById("card-j").className = classDescription;
}

// Change news color (bg-color and text-color)
function setNewsColor(classDescription) {
    for (var i = 1; i <= getNewsDivCount(); i++) {
        document.getElementById("newsDiv" + i).className = classDescription;
    }
}

// Change button color (bg-color and text-color)
function setButtonColor(classDescription) {
    // Button Add News
    document.getElementById("btn-add").className = classDescription;
    // Button Add
    document.getElementById("btn-add-modal").className = classDescription;
    // Button Close
    document.getElementById("btn-close-modal").className = classDescription;
}

// Change modal color (bg-color and text-color)
function setModalColor(classDescription) {
    document.getElementById("modal").className = classDescription;
}

// Change menu color (bg-color and text-color)
function setMenuColor(classDescription) {
    if (document.getElementById("position").value == "bottom") {
        document.getElementById("menu").className = classDescription + "fixed-bottom";
    } else {
        document.getElementById("menu").className = classDescription + "fixed-top";
    }
}

// Change input field color (bg-color and text-color)
function setInputColor(bgColor, textColor) {
    // Title (input)
    document.getElementById("newsTitle").style.backgroundColor = bgColor;
    document.getElementById("newsTitle").style.color = textColor;

    // Content (input)
    document.getElementById("newsContent").style.backgroundColor = bgColor;
    document.getElementById("newsContent").style.color = textColor;
}

// Change original button color (bg-color and text-color)
function setOriginalButtonColor(classDescription) {
    document.getElementById("btn-original").className = classDescription;
}

// Change decrease and increase button color (bg-color and text-color)
function setDecreaseIncreaseButtonColor(classDescription) {
    document.getElementById("btn-decrease").className = classDescription;
    document.getElementById("btn-increase").className = classDescription;
}

// Change resize area color (bg-color)
function setResizeAreaColor(bgColor) {
    document.getElementById("resizeArea").style.backgroundColor = bgColor;
}

// Change all colors
function setColors(sectionColor, contactColor, newsColor, buttonColor, modalColor, menuColor, bgColor, textColor, buttonOriginalColor, buttonDecreaseIncreaseColor, resizeAreaColor) {
    var positionSelected = document.getElementById("position").value;
    var menuPosition = document.getElementById("menu").className.slice(44, 56);

    setSectionColor(sectionColor);
    setContactColor(contactColor);
    setNewsColor(newsColor);
    setButtonColor(buttonColor);
    setModalColor(modalColor);
    setInputColor(bgColor, textColor);
    setOriginalButtonColor(buttonOriginalColor);
    setDecreaseIncreaseButtonColor(buttonDecreaseIncreaseColor);

    setMenuColor(menuColor);

    setResizeAreaColor(resizeAreaColor);
}