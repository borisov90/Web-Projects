define(['generator'], function () {
    var generator = (function () {
        var abcd = [],
            a,
            b,
            c,
            d;
        function generateABCD() {
            a = getRandomInt(1, 9);
            b = getRandomInt(0, 9);
            c = getRandomInt(0, 9);
            d = getRandomInt(0, 9);
            abcd.push(a, b, c, d);
            return JSON.stringify(abcd);
        }
        function getRandomInt(min, max) {

            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return {
            generateABCD: generateABCD,
            getRandomInt: getRandomInt
        }
    }());

    return generator;
});
