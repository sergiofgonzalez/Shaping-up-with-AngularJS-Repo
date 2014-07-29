(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    gems = [
        {
            name: 'gem1',
            price: 1.1,
            description: 'gem1 description'
        },
        {
            name: 'gem2',
            price: 2.22,
            description: 'gem2 description'
        },
        {
            name: 'gem3',
            price: 3.333,
            description: 'gem3 description'
        }
    ];

})();
