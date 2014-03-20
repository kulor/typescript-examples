Run notes
----

* Run code (http://www.typescriptlang.org/Playground/)
* "Press Run"
* Fix property type to not show [object]
    * "Set type on Greeter to greeter:string"
    * "Change {message: 'world'} to just world"
* Support original object param
    * "change type on Greeter to : {message: string}"
    * "change calling param to {message: "world"}"
* Use Interface
    * "create GreeterMessage using message: string contents"
    * "change Greeter's signature to use interface"
    * Show how function can take multiple arguments (none, string)
        * show that when you change the calling signature you get different options
* Hover over button.textContent to show it knows about Document object
* Smarter IDE
    * "Rename "message" property in Interface to "msg"". Notice the inner reference also updates
* Classes
    * Refactor Greeter to > class Greeter
    * Extend Greeter with InformalGreeter
        * Overload greet method with a new greet and message "Hi,"
* Modules
    Wrap Greeter class and interface in module
    Export both
* Source maps
    - Good for debugging in the browser

Alternatives
----
* Coffee Script
* Traceur Compiler (EcmaScript 6 now)
* Dart
* JSX
* [more](https://github.com/jashkenas/coffee-script/wiki/List-of-languages-that-compile-to-JS)