(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    gems = [
        {
            name: 'gem1',
            price: 1.1,
            description: 'gem1 description',
            images: [
                    'images/gem1-01.gif',
                    'images/gem1-02.gif',
                    'images/gem1-03.gif']
        },
        {
            name: 'gem2',
            price: 2.22,
            description: 'gem2 description',
            images: [
                    'images/gem2-01.gif',
                    'images/gem2-02.gif',
                    'images/gem2-03.gif']
        },
        {
            name: 'gem3',
            price: 3.333,
            description: 'gem3 description',
            images: [
                    'images/gem3-01.gif',
                    'images/gem3-02.gif']
        },
        {
            name: 'gem4',
            price: 4.4444,
            description: 'gem4 description',
        }        
    ];

})();
