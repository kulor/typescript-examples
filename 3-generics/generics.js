var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return this.greeting;
    };
    return Greeter;
})();

var greeter = new Greeter(13);

var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet().toString());
};

document.body.appendChild(button);
//# sourceMappingURL=generics.js.map
