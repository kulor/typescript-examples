class Greeter<T> {
    greeting: T;
    constructor(message: T) {
        this.greeting = message;
    }
    greet(): T {
        return this.greeting;
    }
}

var greeter = new Greeter<Number>(13);

var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet().toString());
}

document.body.appendChild(button);