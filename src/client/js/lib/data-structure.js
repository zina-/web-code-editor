/*
** head - node - node - tail
** node
**   a b c d e f g  - lineLength 7
**  0 1 2 3 4 5 6 7 - charactorCaret
**
**
** data structure class of code editor is based on editor provides that :
** - can get current line number
** - can get current caret position
*/
var EditableLinkedList = function () {
    this.head = new EditableNode();
    this.tail = new EditableNode();
    this.lineCaret = null;

    this.head.prev = null;
    this.tail.next = null;
    this.head.lineNumber = 0;
    this.tail.lineNumber = 0;

    this.charactorCaret = 0;

    this.tabCharactor = "    ";

    this.init();
};
EditableLinkedList.prototype = {
    init: function () {
        var node = new EditableNode();
        this.lineCaret = node;

        this.head.next = node;
        node.next = this.tail;
        node.prev = this.head;
        this.tail.prev = node;
    },
    lineScanner: function (start_line) {
    },
    addNode: function (node) {
        this.tail.prev.next = node;
        node.prev = this.tail.prev;
        this.tail.prev = node;
        node.next = this.tail;
    },
    addNodeCurrentCaret: function (node) {
    },
    moveUp: function () {
        if (this.lineCaret.prev != this.head) {
            this.lineCaret = this.lineCaret.prev;

            // caret is move to end of line if its position was out of line.
            if (this.charactorCaret > this.lineCaret.lineLength) {
                this.charactorCaret = this.lineCaret.lineLength;
            }
        }
    },
    moveDown: function () {
        if (this.lineCaret.next != this.tail) {
            this.lineCaret = this.lineCaret.next;

            // caret is move to end of line if its position was out of line.
            if (this.charactorCaret > this.lineCaret.lineLength) {
                this.charactorCaret = this.lineCaret.lineLength;
            }
        }
    },
    moveRight: function () {
        if (this.charactorCaret == this.lineCaret.lineLength) {
            this.lineCaret = this.lineCaret.next;
            this.charactorCaret = 0;
        }
        else {
            this.charactorCaret += 1;
        }
    },
    moveLeft: function () {
        if (this.charactorCaret == 0) {
            this.lineCaret = this.lineCaret.prev;
            this.charactorCaret = this.lineCaret.lineLength;
        }
        else {
            this.charactorCaret -= 1;
        }
    },


    toString: function () {
        var indexer = this.head.next;
        var result = "";
        while (indexer != this.tail) {
            result += indexer.line;
            // todo : add the carriege return charactor
            indexer = indexer.next;
        }
        return result;
    }
};

var FunctionalTree = function () {
};

var FunctionalMatcher = "";
var FunctionalParser = function () {
};
var FunctionalScanner = function () {
};

var EditableNode = function (line) {
    this.line = line || "";
    this.lineLength = this.line.length;
    this.lineNumber = 0;
};
EditableNode.prototype = {
};