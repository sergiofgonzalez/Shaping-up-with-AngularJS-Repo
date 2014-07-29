# Shaping Up With AngularJS: Level 2: Filters, Directives and Cleaner Code

## Concepts

. Filters: 
    Filters let you pipe data into logic that applies some functionality into the data.
        {{data | filter:options}}
    
    Examples:
        {{product.price | currency}}
        {{'1388123412323' | date:'MM/dd/YYYY @ h: mma'}}
        {{product.name | uppercase}}
        {{product.name | limitTo:8}}  // only 8 chars will be shown
        <li ng-repeat="product in store.products | limitTo:3">  // only first three elemes will be displayed
        <li ng-repeat="product in store.products | orderBy:'-price"> // order by price in desc order

. Images:
    To display an image whose source comes from information defined in the controller you have to use the ng-src directive inside the <img> element:
        Example:
            <img ng-src="{{product.images[0]}}">

. Two-way databinding:
    Expressions are re-evaluated when a property changes.

. New Directives:
    . ng-click: lets you execute an expression when a component gets clicked on.
    . ng-init: allows us to evaluate an expression in the current scope. For example, to initialize the value that selects the current selected tab.
    . ng-class: lets you dynamically select a class for an HTML element. The directive can be passed a bunch of arguments or object that will have a class and the expression to evaluate if that class should be applied or not:
        <li ng-class="{active: tab === 1}">

## Examples
A Gruntfile has been created to easily deploy the html + JS files in a static server. Use `grunt serve`to do that.

* 004-currency-filter: Illustrates how to use the built-in currency filter by which money amounts are correctly formatted automatically.

* 005-showing-images: Demonstrates how to use the ng-src directive to show images whose source is specified in data coming from the controller. The example is further improved to leverage ng-repeat and ng-show directives.

* 006-two-way-databinding: A very simple example that illustrates how 2-way data binding works. A gem is displayed on the screen with some navigation pills. When the user clicks on the pills the value of a variable tab is changed and displayed. That variable is not part of the gem, and is different for each of the gems on the screen.

* 007-tabs: An enhancement of 006-two-way-databinding that shows how to create tabs using ng-click and ng-show. Also the ng-init is used to initialize the value of the selected tab for the first time, and ng-class to dynamically apply the `active` CSS class to the tab that is currently selected for each gem.

* 008-refactoring-logic-into-controller: In this example 007-tabs is changed to refactor the tab functionality into a controller, so that the HTML looks cleaner.
