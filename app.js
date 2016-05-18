(function () {
    var app = angular.module('store', []);
    
    app.directive('productTile', function () {
       return {
           template: 'product-title.html'
       };
    });
    
    app.controller('StoreController', function () {
        this.products = gems;
    });
    
    app.controller('PanelController', function () {
        this.tab = 1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab) {
            return this.tab == checkTab;
        };
    });
    
    app.controller('ReviewController', function(){
       this.review = {}; 
       
       this.addReview = function(product){
           product.reviews.push(this.review);
           this.review = {};
       }
    });
    
    
    
    var gems =  [
    {
        name: 'Dodecahedron',
        price: 2,
        description: 'The most familiar dodecahedron is the regular dodecahedron, which is a Platonic solid. There are also three regular star dodecahedron...',
        canPurchase: true,
        soldOut: false,
        images: [
            {
                full: 'dodecahedron-01-full.jpg',
                thump: 'dodecahedron-01-thump.jpg'
            }
        ],
        reviews: [
            {
                stars: 5,
                body: "I love this product!",
                author: "joe@thomas.com"
            },
            {
                stars: 1,
                body: "This product sucks",
                author: "tim@hater.com"
            }
        ]
    },
    {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'The most familiar dodecahedron is the regular dodecahedron, which is a Platonic solid. There are also three regular star dodecahedron...',
        canPurchase: false,
        soldOut: false,
        images: [
            {
                full: 'dodecahedron-02-full.jpg',
                thump: 'dodecahedron-02-thump.jpg'
            }
        ],
        reviews: [
            {
                stars: 5,
                body: "I love this product!",
                author: "joe@thomas.com"
            },
            {
                stars: 1,
                body: "This product sucks",
                author: "tim@hater.com"
            }
        ]
    }
    ]
})();