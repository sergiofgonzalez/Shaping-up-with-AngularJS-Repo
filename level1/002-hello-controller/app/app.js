(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function() {
        this.product = gem;
    });

    gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'my first gem'
    };

})();
