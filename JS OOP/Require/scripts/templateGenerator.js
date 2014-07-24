define(['jquery', 'handlebars'], function () {
    var TemplateGenerator = function (templateId, data) {
        var templateId = '#' + templateId;
        var htmlTemplate = $(templateId).html();
        var template = Handlebars.compile(htmlTemplate);
        var generatedDiv = $('<div id="dropdown-list"/>');
        for (var i = 0; i < data.length; i++) {
            generatedDiv.append(template(data[i]));
        }

        return {
            getDropdownDiv: function () {
                return generatedDiv;
            }
        }
    }

    return TemplateGenerator;