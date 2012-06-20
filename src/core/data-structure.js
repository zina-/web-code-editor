/*
**
** THIS IS PROTOTYPE CODE
**
*/

/*
** head - node - node - tail
** node
**   a b c d e f g  - lineLength 7
**  0 1 2 3 4 5 6 7 - charactorCaret
**
**
** data structure class of code editor is based on that editor provides :
** - can get current line number
** - can get current caret position
*/
var CarriageReturnCharactors = "\n";
var EditableLinkedList = function () {
    this.head = new EditableNode();
    this.tail = new EditableNode();
    this.lineCaret = null;

    this.head.prev = null;
    this.head.next = this.tail;
    this.tail.next = null;
    this.tail.prev = this.head;
    this.head.lineNumber = 0;
    this.tail.lineNumber = 0;

    this.charactorCaret = 0;
    this.listLength = 0;
    this.tabCharactors = ["\t", "    "];

    this.init();
};
EditableLinkedList.prototype = {
    init: function () {
        var node = new EditableNode();

        this.addNode(node);
    },
    doLineScan: function () {
        var indexer = this.head.next;
        var lineNumbering = 1;
        while (indexer != this.tail) {
            indexer.lineNumber = lineNumbering;
            lineNumbering += 1;
        }
    },
    tabfy: function (node) {

    },
    addNode: function (node) {
        this.tail.prev.next = node;
        node.prev = this.tail.prev;
        this.tail.prev = node;
        node.next = this.tail;

        this.lineCaret = node;

        this.listLength += 1;
        node.lineNumber = this.listLength;
    },
    addNodeCurrentCaret: function (node) {
        var node = new EditableNode();
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
    },
    toSourceString: function () {
        var indexer = this.head.next;
        var result = "";
        while (indexer != this.tail) {
            result += "" + indexer.lineNumber + ". " + indexer.line + CarriageReturnCharactors;
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

// EditableNode object is make when
// 1. proceed new line (press ENTER key)        --+-- same process
// 1. splited line (press ENTER key in line)    --+
// 1. pasted multi line
var EditableNode = function (line) {
    //this.line = line || "";
    this.setLine(line);
    this.lineLength = this.line.length;
    this.lineNumber = 0;
    this.tabCount = 0;
};
EditableNode.prototype = {
    setLine: function (line) {
        if (line) {
            line = line.split(CarriageReturnCharactors);
            if (line.length > 1) {

            }
            else {
                this.line = line[0];
            }
        }
        else {
            this.line = "";
        }
    }
};