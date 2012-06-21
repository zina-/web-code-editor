// node-view is view of a line of code
var NodeView = Backbone.View.extend({
    // this template code should be managed by view config file.
    template: _.template([
        "<div>",
            "<span>",
                "<%= line %>",
            "</span>",
        "</div>"
    ].join('')),
    initialize: function () {
        this.model.bind("change", this.render, this);
    },
    render: function () {
        $el.html(this.template(this.model.toJSON()));
        return this;
    },
    // node-view hook events keyboard down,press,up for line editing only
    events: {
        "keypress": "eventKeyPress",
        "keydown": "eventKeyDown",
        "keyup": "eventKeyUp"
    },
    eventKeyPress: function (e) {
    }
});