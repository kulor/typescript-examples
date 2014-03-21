Run notes
==========

Run some code
-------------
1. Run code [http://www.typescriptlang.org/Playground/]
* "Press Run"


Lets not string the compiler along
-----------------------------------
Fix property type to not show `[object]`

1. "Set type on Greeter to `greeter:string`"
* "Change `{message: 'world'}` to just world"


An objective argument
---------------------
Support original object param

1. "change type on Greeter to `: {message: string}`"
* "change calling param to `{message: "world"}`"


Interface off
---------
Introducing interfaces

1. "create GreeterMessage using `message: string` contents"
* "change Greeter's signature to use interface"
* Show how function can take multiple arguments (none, string)
    1. show that when you change the calling signature you get different options
* Optional properties
    1. "add `foo?`"


Generic introduction (pun not intended)
---------------------------------------
    
1. "add generic `<T>` to the Greeter class"
* "set `<Type>` on call to `<String>`, then `<Number>`"


IDE like to help you
--------------------
Smarter IDE support

1. Hover over `button.textContent` to show it knows about `Document` object
* "Rename "message" property in Interface to "msg"". Notice the inner reference also updates
* Error messages when removing required properties
* Auto completion


A more classy JS
----------------
    
1. Refactor `function Greeter` to `class Greeter`
* Extend `Greeter` with `InformalGreeter`
    1. Overload `greet` method with a new `greet` and message "Hi,"


Being less selfish / this and that / scope creep
------------------------------------------------
Arrow functions

1. `event (e) => { console.log(this); /*now able to use  closure's this*/ }`


Mod-u-like
--------------
Modules

1. Wrap `Greeter` class and interface in a module
* Export both


May the Source (maps) be with you
---------------------------------
    
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