# Shaping Up With AngularJS: Level 4: Directives

## Concepts

. Custom Directives: Directives allow you to write HTML that expresses the behavior of your application: you should be able to understand the behavior and intent of your application just by looking at the HTML.

    There are several types of custom directives:
    . Template-expanding directives: defines a custom tag or attribute that is expanded or replaced. Can include controller logic if needed.
    . There are other more complicated types for expressing complex UI, calling events and registering event handlers or reusing common components.

    A custom directive is defined using:
        // this defines a product-title directive (note the camelCase to dash notation translation)
        app.directive('productTitle', function(){
            return {// A configuration object defining how the directive will work}
            });

    For example:
        app.directive('productTitle', function() {
            return {
                restrict: 'E',      // defining a new element
                templateUrl: 'product-title.html'
            };
        });

    You can define directives for elements ('E') and attributes ('A'). Typically, you will use elements for UI widgets and snippets and attributes for mixins, like a tooltip.

    Refrain from using self-closing tags for custom directives as many browsers do not like those.

    Note that a custom directive is like any other HTML element, so you can add angular directives to it too:
        <product-description ng-show="product.description"></product-description>

. New Directives: 
    . ng-include: lets you include an HTML snippet located on a separate file. The ng-include directive expects the name of the file as a variable, so you will have to type something like:
        <h3 ng-include="'product-title.html'"></h3>


## Examples
A Gruntfile has been created to easily deploy the html + JS files in a static server. Use `grunt serve`to do that.

* 013-including-html: Illustrates how to include an HTML template (html snippet) using the ng-include directive.

* 014-template-expanding-directive: Illustrates how to do the same as in 013-including-html but with a custom directive instead.

* 015-directives-with-controller: Illustrates how to create a directive with a controller attached to it. In essence, we move to a template the section in which all the tab behavior is being handled. This was managed by a panelController. Thus, we create a custom directive and attach the panelController inside it. By doing this, the panelController definition dissapears from the app.js and the panel behavior and structure is summarized in a minimal <product-panels></product-panels> directive.
