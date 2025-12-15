angular.module('jhEventApp')
.controller('HomeController', ['InventoryService', 'CartService', 
function(InventoryService, CartService) {
    var vm = this;
    
    vm.featuredItems = InventoryService.getFeaturedItems();
    vm.services = [
        {
            icon: 'fas fa-calendar-alt',
            title: 'Event Planning',
            description: 'Full-service event coordination from concept to completion'
        },
        {
            icon: 'fas fa-truck',
            title: 'Delivery & Setup',
            description: 'Professional delivery, setup, and breakdown included'
        },
        {
            icon: 'fas fa-users',
            title: 'On-site Staff',
            description: 'Trained event staff available for your occasion'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Insurance',
            description: 'All rentals include damage protection insurance'
        }
    ];

    vm.testimonials = [
        {
            name: 'Sarah Johnson',
            event: 'Wedding',
            quote: 'JH Event Services made our wedding day perfect! The gold chiavari chairs were stunning.'
        },
        {
            name: 'Michael Chen',
            event: 'Corporate Gala',
            quote: 'Professional, reliable, and beautiful equipment. The LED dance floor was a huge hit!'
        },
        {
            name: 'The Rodriguez Family',
            event: 'Quinceañera',
            quote: 'Everything we needed for our daughter\'s celebration. Excellent service and quality!'
        }
    ];

    vm.addToCart = function(item) {
        CartService.addToCart(item, 1);
        vm.cartCount = CartService.getCartCount();
    };
}]);