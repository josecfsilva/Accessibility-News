var dragSrcEl = null;

// Handle Drag Start
this.handleDragStart = function (e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    dragSrcEl = this;
    this.style.opacity = '0.5';
};

// Handle Drag Over
this.handleDragOver = function (e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
};

// Handle Drop
this.handleDrop = function (e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
};

// Handle Drag End
this.handleDragEnd = function (e) {
    this.style.opacity = '1';
};

// Drag and Drop Function
this.dragAndDrop = function () {
    for (var i = 1; i <= getNewsDivCount(); i++) {
        document.getElementById("newsDiv" + i).setAttribute('draggable', 'true');
        document.getElementById("newsDiv" + i).addEventListener('dragstart', this.handleDragStart, false);
        document.getElementById("newsDiv" + i).addEventListener('dragover', this.handleDragOver, false);
        document.getElementById("newsDiv" + i).addEventListener('drop', this.handleDrop, false);
        document.getElementById("newsDiv" + i).addEventListener('dragend', this.handleDragEnd, false);
    }
};