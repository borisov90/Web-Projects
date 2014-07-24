define(['receiver'], function () {
    var receiver = (function () {
        function receiveXYZW() {
            var input = document.getElementById("xyzw-input").value;
            return Number(input);
        }

        return {
            receiveXYZW: receiveXYZW
        };
    }());
    return receiver;
});
