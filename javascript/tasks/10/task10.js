console.log('Problem 1')

String.prototype.format = function(options) {
    var option,
        regex,
        format = this;
    for (option in options) {
        regex = new RegExp("#{" + option + "}", "gi");
        format = format.replace(regex, options[option]);

    }
    return format;

}
var options = { name: 'John' };
console.log('Hello, there! Are you #{name}?'.format(options));
var options = { name: 'John', age: 13 };
console.log('My name is #{name} and I am #{age}-years-old'.format(options));

console.log('Problem 2')

String.prototype.binding = function(output, parameters) {
	
    output = this;
    for (prop in parameters) {
        var regexContent = new RegExp('(<.*?data-bind-content="' + prop + '".*?>)(.*?)(<\\s*/.*?>)', 'g');
        var regexHref = new RegExp('(<.*?data-bind-href="' + prop + '".*?)>', 'g');
        var regexClass = new RegExp('(<.*?data-bind-class="(' + prop + ')".*?)>', 'g');

        output = output.replace(regexContent, function(element, openingTag, content, closingTag) {
            return openingTag + parameters[prop] + closingTag;
        });
        output = output.replace(regexHref, function(tag, contentBeforeClosing) {
            return contentBeforeClosing + ' href="' + parameters[prop] + '">';
        });
        output = output.replace(regexClass, function(tag, contentBeforeClosing) {
            return contentBeforeClosing + ' class="' + parameters[prop] + '">';
        });


    }
    return output;

}
console.log('<div data-bind-content="name"></div>'.binding('', { name: 'Steven' }));
console.log('<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></div>'.binding('', { name: 'Elena', link: 'http://telerikacademy.com' }));
