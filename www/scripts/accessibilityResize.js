// Change Font Size
function changeFontSize(target) {
    // To get default font size
    var aboutElement = document.getElementById("aboutDescription");

    var computedStyle = window.getComputedStyle ? getComputedStyle(aboutElement) : aboutElement.currentStyle;
    var fontSize = parseFloat(computedStyle && computedStyle.fontSize);

    if (target == document.getElementById("btn-decrease")) {
        decreaseFontSize(fontSize);
        decreaseAddButtonSize();
        decreaseMenuFontSize();
        decreaseOriginalButtonSize();
        decreaseSelectOptionSize();
    } else if (target == document.getElementById("btn-increase")) {
        increaseFontSize(fontSize);
        increaseAddButtonSize();
        increaseMenuFontSize();
        increaseOriginalButtonSize();
        increaseSelectOptionSize();
    } else if (target == document.getElementById("btn-minus")) {
        decreaseModalSize(fontSize);
        decreaseButtonsSize();
    } else if (target == document.getElementById("btn-plus")) {
        increaseModalSize(fontSize);
        increaseButtonsSize();
    }
}

/* CONTENT FONT SIZE */

// Decrease Content Font Size
function decreaseFontSize(fontSize) {
    var titleElement = document.getElementById("homeTitle").className.slice(0, 2);
    fontSize -= 5;

    switch (titleElement) {
        case "h1":
            setTitleSize("h2");
            break;
        case "h2":
            setTitleSize("h3");
            break;
        case "h3":
            setTitleSize("h4");
            break;
        case "h4":
            setTitleSize("h5");
            break;
        case "h5":
            setTitleSize("h6");
            break;
    }

    setAboutSize(fontSize);
    setNewsSize(fontSize);
    setContactsSize(fontSize);
}

// Increase Content Font Size
function increaseFontSize(fontSize) {
    var titleElement = document.getElementById("homeTitle").className.slice(0, 2);
    fontSize += 5;

    switch (titleElement) {
        case "h2":
            setTitleSize("h1");
            break;
        case "h3":
            setTitleSize("h2");
            break;
        case "h4":
            setTitleSize("h3");
            break;
        case "h5":
            setTitleSize("h4");
            break;
        case "h6":
            setTitleSize("h5");
            break;
    }

    setAboutSize(fontSize);
    setNewsSize(fontSize);
    setContactsSize(fontSize);
}

// Set Titles Font Size
function setTitleSize(fontSize) {
    var section1 = document.getElementById("homeTitle");
    var section2 = document.getElementById("aboutTitle");
    var section3 = document.getElementById("newTitle");
    var section4 = document.getElementById("contactsTitle");

    section1.className = fontSize;
    section2.className = fontSize;
    section3.className = fontSize;
    section4.className = fontSize;
}

// Set About Font Size
function setAboutSize(fontSize) {
    var aboutElement = document.getElementById("aboutDescription");

    aboutElement.style.fontSize = fontSize + "px";
}

// Set News Font Size
function setNewsSize(fontSize) {
    for (var i = 1; i <= getNewsDivCount(); i++) {
        document.getElementById("newsDiv" + i).style.fontSize = fontSize + "px";
    }
}

// Set Contacts Font Size
function setContactsSize(fontSize) {
    var contactBElement = document.getElementById("cardB");
    var contactJElement = document.getElementById("cardJ");

    contactBElement.style.fontSize = fontSize + "px";
    contactJElement.style.fontSize = fontSize + "px";
}

/* ADD BUTTON FONT SIZE */

// Decrease Add Button Font Size
function decreaseAddButtonSize() {
    var btnElement = document.getElementById("btn-add").className.slice(26, 32);

    if (btnElement == "btn-lg") {
        setButtonSize("btn btn-outline-secondary btn-sm");
    }
}

// Increase Add Button Font Size
function increaseAddButtonSize() {
    var btnElement = document.getElementById("btn-add").className.slice(26, 32);

    if (btnElement == "btn-sm") {
        setButtonSize("btn btn-outline-secondary btn-lg");
    }
}

// Set Button Font Size
function setButtonSize(value) {
    var element = document.getElementById("btn-add");

    element.className = value;
}

/* MODAL SIZE */

// Decrease Modal Size
function decreaseModalSize(fontSize) {
    fontSize -= 5;
    setModalTitleSize(fontSize);
    setModalContentSize(fontSize);
}

// Increase Modal Size
function increaseModalSize(fontSize) {
    fontSize += 5;
    setModalTitleSize(fontSize);
    setModalContentSize(fontSize);
}

// Set Modal Title Font Size
function setModalTitleSize(fontSize) {
    var modalTitleElement = document.getElementById("modalTitle");

    modalTitleElement.style.fontSize = fontSize + "px";
}

// Set Modal Content Font Size
function setModalContentSize(fontSize) {
    var modalTitleElement = document.getElementById("newsTitle");
    var modaContentElement = document.getElementById("newsContent");

    modalTitleElement.style.fontSize = fontSize + "px";
    modaContentElement.style.fontSize = fontSize + "px";
}

/* ADD MODAL BUTTONS FONT SIZE */

// Decrease Modal Buttons Font Size
function decreaseButtonsSize() {
    var addBtnElement = document.getElementById("btn-add-modal").className.slice(16, 22);
    var closeBtnElement = document.getElementById("btn-close-modal").className.slice(16, 22);

    if (addBtnElement == "btn-lg" && closeBtnElement == "btn-lg") {
        setModalButtonSize("btn btn-primary btn-sm");
    }
}

// Increase Modal Buttons Font Size
function increaseButtonsSize() {
    var addBtnElement = document.getElementById("btn-add-modal").className.slice(16, 22);
    var closeBtnElement = document.getElementById("btn-close-modal").className.slice(16, 22);

    if (addBtnElement == "btn-sm" && closeBtnElement == "btn-sm") {
        setModalButtonSize("btn btn-primary btn-lg");
    }
}

// Set Modal Buttons Font Size
function setModalButtonSize(value) {
    var addBtnElement = document.getElementById("btn-add-modal");
    var closeBtnElement = document.getElementById("btn-close-modal");

    addBtnElement.className = value;
    closeBtnElement.className = value;
}

/* MENU FONT SIZE */

// Get Menu Font Size
function getMenuFontSize() {
    // To get default font size
    var element = document.getElementById("home");
    var computedStyle = window.getComputedStyle ? getComputedStyle(element) : element.currentStyle;
    var fontSize = parseFloat(computedStyle && computedStyle.fontSize);

    return fontSize;
}

// Decrease Menu Font Size
function decreaseMenuFontSize() {
    var fontSize = getMenuFontSize();
    fontSize -= 5;

    var homeElement = document.getElementById("home");
    var aboutElement = document.getElementById("about");
    var newsElement = document.getElementById("news");
    var contactsElement = document.getElementById("contacts");


    homeElement.style.fontSize = fontSize + "px";
    aboutElement.style.fontSize = fontSize + "px";
    newsElement.style.fontSize = fontSize + "px";
    contactsElement.style.fontSize = fontSize + "px";
}

// Increase Menu Font Size
function increaseMenuFontSize(fontSize) {
    var fontSize = getMenuFontSize();
    fontSize += 5;

    var homeElement = document.getElementById("home");
    var aboutElement = document.getElementById("about");
    var newsElement = document.getElementById("news");
    var contactsElement = document.getElementById("contacts");


    homeElement.style.fontSize = fontSize + "px";
    aboutElement.style.fontSize = fontSize + "px";
    newsElement.style.fontSize = fontSize + "px";
    contactsElement.style.fontSize = fontSize + "px";
}

/* ORIGINAL BUTTON FONT SIZE */

// Decrease Original Button Font Size
function decreaseOriginalButtonSize() {
    var originalBtnElement = document.getElementById("btn-original").className.slice(22, 28);

    if (originalBtnElement == "btn-lg") {
        setModalButtonSize("btn btn-outline-light btn-sm");
    }
}

// Increase Original Button Font Size
function increaseOriginalButtonSize() {
    var originalBtnElement = document.getElementById("btn-original").className.slice(22, 28);

    if (originalBtnElement == "btn-sm") {
        setOriginalButtonSize("btn btn-outline-light btn-lg");
    }
}

// Set Original Button Font Size
function setOriginalButtonSize(value) {
    var originalBtnElement = document.getElementById("btn-original");

    originalBtnElement.className = value;
}

/* SELECT OPTION FONT SIZE */

// Get Select Option Font Size
function getSelectOptionFontSize() {
    // To get default font size
    var element = document.getElementById("position");
    var computedStyle = window.getComputedStyle ? getComputedStyle(element) : element.currentStyle;
    var fontSize = parseFloat(computedStyle && computedStyle.fontSize);

    return fontSize;
}

// Decrease Select Option Font Size
function decreaseSelectOptionSize() {
    var fontSize = getSelectOptionFontSize();
    fontSize -= 5;

    var positionElement = document.getElementById("position");
    var colorsElement = document.getElementById("color");


    positionElement.style.fontSize = fontSize + "px";
    colorsElement.style.fontSize = fontSize + "px";
}

// Increase Original Button Font Size
function increaseSelectOptionSize(fontSize) {
    var fontSize = getSelectOptionFontSize();
    fontSize += 5;

    var positionElement = document.getElementById("position");
    var colorsElement = document.getElementById("color");


    positionElement.style.fontSize = fontSize + "px";
    colorsElement.style.fontSize = fontSize + "px";
}