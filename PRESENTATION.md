Run notes
----

1. Run code [http://www.typescriptlang.org/Playground/]
* "Press Run"
* Fix property type to not show `[object]`
    1. "Set type on Greeter to `greeter:string`"
    * "Change `{message: 'world'}` to just world"
* Support original object param
    1. "change type on Greeter to `: {message: string}`"
    * "change calling param to `{message: "world"}`"
* Use Interface
    1. "create GreeterMessage using `message: string` contents"
    * "change Greeter's signature to use interface"
    * Show how function can take multiple arguments (none, string)
        1. show that when you change the calling signature you get different options
    * Optional properties
        1. "add `foo?`"
* Generics
    1. "add generic `<T>` to the Greeter class"
    * "set `<Type>` on call to `<String>`, then `<Number>`"
* Hover over `button.textContent` to show it knows about `Document` object
* Smarter IDE
    1. "Rename "message" property in Interface to "msg"". Notice the inner reference also updates
* Classes
    1. Refactor `function Greeter` to `class Greeter`
    * Extend `Greeter` with `InformalGreeter`
        1. Overload `greet` method with a new `greet` and message "Hi,"

* Modules
    1. Wrap `Greeter` class and interface in a module
    * Export both

* Source maps
    1. Good for debugging in the browser
    * Go to [http://rawgithub.com/kulor/typescript-examples/master/8-source-maps/index.html]
    * Add breakpoint in `increaseClickCount`

Community modules
----
See [https://github.com/borisyankov/DefinitelyTyped/]

Alternatives
----
* Coffee Script
* Traceur Compiler (EcmaScript 6 now)
* Dart
* JSX
* [more](https://github.com/jashkenas/coffee-script/wiki/List-of-languages-that-compile-to-JS)