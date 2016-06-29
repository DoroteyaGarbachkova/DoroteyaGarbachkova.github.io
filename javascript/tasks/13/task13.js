////Task 1/////
function creatList() {
    var $ul = $('<ul/>')
        .addClass(".item-list")
        .prependTo(document.body)

    var count = 10;

    try {
        if (count > 1) {
            console.log('The bigger than 1!');
        } else {
            console.log('The less than 1!');
        }
        if (typeof count === 'number') {
            console.log('Valid content type!');
        } else {
            console.log('Invalid content type!');
        }
    } catch (e) {
        console.log(e);
    }

    for (var i = 0; i < count; i++) {
        var li = '<li>Item #' + i + '</li>';
        $(li).appendTo($ul).addClass(".list-list");
    }
}
creatList()

////Task 2/////
function eventButton(cont) {
    var $buttons = $(".button");
    var $contents = $(".content");

    try {
        if (typeof(selector) !== 'string' || $(selector).size() === 0) {
            console.log('invalid selector');
        } else {
            console.log('Valid selector');
        }

    } catch (e) {
        console.log(e);
    }

    $buttons.text("Hide");
    $(document).ready(function() {
        $buttons.click(function() {
            $(this).next($contents).slideToggle();
            if ($(this).text() == 'Hide') {
                $(this).text('Show');
            } else {
                $(this).text('Hide');
            }
        });
    });


}
eventButton()
