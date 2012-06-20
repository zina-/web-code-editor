var Editor = function () {
    this.editorDataStructure = new EditableLinkedList();
};
Editor.prototype = {
    create: function () {
        this.id = "" + (Math.floor(Math.random() * 100000) + 1);
        this.editor = $("<div id=\"" + this.id + "\" contenteditable=\"true\"></div>");
        return this;
    },
    append: function (dom) {
        // handle jquery object
        if (!dom.nodeType) {
            dom = dom[0];
        }

        this.dom = dom.appendChild(this.editor);
        
        return this;
    }
};