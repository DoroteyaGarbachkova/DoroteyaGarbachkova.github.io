(function($) {
    $.fn.dropdownList = function() {

        var $div = $('<div/>')
            .addClass('dropdown-list')
            .prependTo(document.body)

        $("#the-select")
            .css("display", "none")
            .prependTo($div);

        var $div1 = $('<div/>')
            .addClass('current')
            .attr("data-value", " ")
            .html("Option 1")
            .appendTo($div)

        var $div2 = $('<div/>')
            .addClass('options-container')
            .css({
                position: "absolute",
                display: "none"
            })
            .appendTo($div)

        for (var i = 0; i < 5; i++) {
            var div = '<div>Option ' + (i+1) + '</div>';
            $(div).appendTo($div2).addClass(".dropdown-item").attr({
                "data-value": "value-" + (i + 1),
                "data-index": "value-" + i
            });

        }
        return this;
    }
}(jQuery));
