# Shaping Up With AngularJS: Level 3: Forms, Models and Validation

## Concepts

. Validations
    . HTML validations should be turned off to provide consistency across browsers. This is done including the novalidate attribute on the form tag:
        <form name="reviewForm" ... novalidate>
    
    . Then you should mark the required fields using the required attribute:
        <textarea ... required></textarea>

    Angular will bound a $valid property for you to check that the form is valid:
        reviewForm.$valid

    When user interacts with the form, Angular adjusts the class of the element so that you can use it to provide visual feedback to the user:
        CSS classes:
        .ng-dirty: user has interacted with the form element
        .ng-valid: the current contents are valid
        .ng-invalid: the current contents are invalid

    Angular includes built-in validations for email fields, urls and numbers:
        <input type="email" name="email">
        <input type="url" name="homepage">
        <input type="number" name="email"> 
        <input type="number" min=1 max=10 name="email">

. New Directives: 
    . ng-model: binds the form element value to the property, so that it can be used with {{}}

    . ng-submit: allows us to call a function when the form is submitted

## Examples
A Gruntfile has been created to easily deploy the html + JS files in a static server. Use `grunt serve`to do that.

* 009-displaying reviews: In this example we display on the page reviews that are part of our gems object. This is the starting point for the rest of the examples.

* 010-reviews-form: In this example, a form is added to 009-displaying-reviews to let the user include reviews. The ng-model directive is used on the form elements to bind the values selected to the user to properties so that they can be displayed while the user is typing them.

* 011-review-controller: In this example, we build a review controller on top of 010-reviews-form so that the review variable that we were using gets properly defined and initialized. We also leverage on the controller recently defined to push the recent review to the product's review, and clear the form after the submission.

* 012-validations: In this example, we add validations on top of 011-review-controller. Those are used in logic terms (form is not submitted if invalid), but also to provide visual feedback to the user using the CSS classes that Angular gives to the form elements.
We also use the controller to add a new property (createdOn) when the user submits a new review. Then in the HTML we use the date filter to appropriately format the date value.
