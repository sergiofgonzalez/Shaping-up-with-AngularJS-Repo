(function() {

    var app = angular.module('gemStore', ['store-products']);

    app.controller('StoreController', ['$http', function($http) {
        var store = this;
        store.products = [];

        $http.get('/products.json').success(function(data){
            store.products = data; // inside the callback, the value of this is the $http service
            console.log(store.products);
        });
    }]);

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

})();
