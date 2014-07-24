(function () {
    require.config({
        paths: {
            "jquery": "libs/jquery-2.1.1.min",
            "handlebars": "libs/handlebars.min",
            "templateGenerator": "./templateGenerator",
            "comboBox": "./comboGenerator"
        }
    });
    var people = [
    { id: 1, name: "Doncho Minkov", age: 18, avatarUrl: "images/Doncho.jpg" },
    { id: 2, name: "Ivaylo Kenov", age: 20, avatarUrl: "images/kencho.jpg" },
    { id: 3, name: "Pavel Kolev", age: 21, avatarUrl: "images/Pavel.jpg" },
    ];


    require(['templateGenerator' , 'jquery' , 'comboBox'], function (tempGenerator , $) {
        var generator = new tempGenerator("person-template", people);

        $("#wrapper").comboBox(generator.getDropdownDiv());
    })

}());