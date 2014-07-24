define(['renderer'], function () {
    var renderer = (function () {
        var output = document.getElementById("output");
        var paragraph = document.createElement("P");

        function add(item) {
            var text = document.createTextNode(item);
            var line = document.createElement("BR");
            paragraph.appendChild(text);
            paragraph.appendChild(line);
            output.appendChild(paragraph);
        }

        return {
            add: add
        };

    }());
    return renderer;
});
