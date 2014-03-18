var Sayings;
(function (Sayings) {
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    })();
    Sayings.Greeter = Greeter;

    Sayings.foo = 'bar';
})(Sayings || (Sayings = {}));
var greeter = new Sayings.Greeter("world");

console.log(Sayings.foo);

var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};

document.body.appendChild(button);
//# sourceMappingURL=modules.js.map
