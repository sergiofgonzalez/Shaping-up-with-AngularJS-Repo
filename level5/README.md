# Shaping Up With AngularJS: Level 5: Services

## Concepts

. Refactoring into modules:
    . Modules should be created around functionality:
        . app-js: top-level module, attached using ng-app directive in the index.html page.
        . products.js: functionality related to products.

. Services: Services give your controller additional functionality:
    such as...
    . Fetching JSON data from a web service using $http service:
        makes an async request to a server
            $http({ method: 'GET', url: '/products.json'}) or $http.get('/products.json', {queryParam1: 'value1'})
        
        Returns a Promise object with .success() and .error()

        JSON will be automatically decoded into JavaScript objects and arrays.

    . Log messages to the JavaScript console using $log service
    . Filter out an array with $filter service

. Dependency Injection: It is used to provide, for example, a controller with the services it needs.
        app.controller('SomeController', ['$http', function($http)]{
            // now i can use $http service here
        });

    Another example with two arguments:
         app.controller('SomeController', ['$http', '$log', function($http, $log)]{
            // now i can use $http service here
        });

. New Directives: 
    . ng-include: lets you include an HTML snippet located on a separate file. The ng-include directive expects the name of the file as a variable, so you will have to type something like:
        <h3 ng-include="'product-title.html'"></h3>


## Examples
A Gruntfile has been created to easily deploy the html + JS files in a static server. Use `grunt serve`to do that.


* 016-module-refactoring: this example illustrates how to refactor the application by creating another module in products.js so that all the things related to products are stored in its own separate module. Then, it is also necessary to include this new module as a dependency in the gemStore module, and also include the products.js in the index.html.

* 017-dependency-injection: To demonstrate the dependency injection, the products defined in the app.js are taken to a products.json, and the StoreController is given the $http service to be able to retrieve the products using a GET call.