define(['jquery'], function () {
    return $.fn.comboBox = function (divsForDropdown) {
        var $divsForDropdown = $(divsForDropdown);
        console.log(divsForDropdown);
        var $this = $(this);
        var selectedDiv = $('<div id="selected" />');
        $this.append(selectedDiv);
        $this.append(divsForDropdown);
        $divsForDropdown.on('click', '.person-item', function () {
            selectedDiv.html($(this).html());
            $divsForDropdown.hide();
        });
        selectedDiv.on('click', function () {
            $divsForDropdown.show();
        });
        $divsForDropdown.children('.person-item').first().click();
        return $this;
    };
});