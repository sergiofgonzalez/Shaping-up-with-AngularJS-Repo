# Shaping Up With AngularJS: Level 1: Getting Started

## Concepts
AngularJS is a client-side JavaScript framework for adding interactivity to HTML.
. Modules: 
    Angular modules are where we write pieces of our AngularJS application. Modules can use other modules, so in modules is also where we define dependencies for our app.
    Modules are created using the syntax:
        var app = angular.module('`moduleName`', [`dependencies`]);
        Example (app.js):
            var app = angular.module('store', []);
    Typically, you'd want to include the module definition in an app.js file that will be included along all other JavaScript files such as Angular libraries, etc.

. Expressions:
    How values get displayed within the page.
    Angular expressions allow you to insert dynamic values into your HTML. Those are surrounded by mustaches:
        <p>I am {{2014-1974}} years old.</p>
        <p>{{"Hello," + " world!!!"}}</p>

. Directives:
    HTML annotations that trigger JavaScript behaviors.
    A Directive is a marker on a HTML that tells Angular to run or reference some JavaScript code. For example, to tell the HTML to run a module when a html document is loaded you would use:
        <html ng-app='angularModule'>...</html>

    Directives introduced:
        . ng-app
        . ng-controller
        . ng-show/ng-hide: display/hide an element only if the value of the expression is true
        . ng-repeat: lets you iterate over an array

. Controllers:
    Controllers are where we define our app's behavior by defining functions and values. It helps us get data into a page.
    A controller is defined using:
        app.controller('StoreController', function() {...});

    To attach the controller to a DOM element you will use something like:
        <div ng-controller="StoreController as store">
        </div>

    Inside, and only inside that DOM element you can reference the properties of the controller using expressions:
        <div ng-controller="StoreController as store">
            <h1>{{store.product.name}}</h1>
        </div>    

## Examples
A Gruntfile has been created to easily deploy the html + JS files in a static server. Use `grunt serve`to do that.

* 001-creating-the-module: The simplest AngularJS application that defines a module gemStore and includes an expression in the HTML. The expression is a simple calculation that computes the difference between two numbers (current year and my year of birth).
It illustrates:
    . how to include AngularJS and Bootstrap libraries using CDN
    . how to create a module (gemStore)
    . how to tell the html to run the Angular module when the document loads
    . how to use expressions in your HTML to produce calculations

* 002-hello-controller: A simple application with one controller StoreController which has a property product that references a gem that is also defined in app.js. Then, in the HTML we define a div that will let us reference the product data from our controller.

* 003-basic-directives: Illustrates basic built-in directives ng-show, ng-hide and ng-repeat. In the example, we have an array of three gems with different values for the properties canPurchase and isSoldOut. In the example we will iterate over the array of gems displaying an Add to Cart button only when the gem can be purchased and is not sold out. For iterating over the array we will use ng-repeat instead of statically iterating over the array of gems.