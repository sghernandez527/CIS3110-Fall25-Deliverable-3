angular.module('jhEventApp')
.controller('InventoryController', ['InventoryService', 'CartService', 
function(InventoryService, CartService) {
    var vm = this;
    
    vm.allItems = InventoryService.getInventory();
    vm.categories = InventoryService.getCategories();
    vm.selectedCategory = 'All';
    vm.searchTerm = '';
    
    vm.getFilteredItems = function() {
        var filtered = vm.allItems;
        
        if (vm.selectedCategory !== 'All') {
            filtered = filtered.filter(item => item.category === vm.selectedCategory);
        }
        
        if (vm.searchTerm) {
            var term = vm.searchTerm.toLowerCase();
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(term) || 
                item.description.toLowerCase().includes(term) ||
                item.category.toLowerCase().includes(term)
            );
        }
        
        return filtered;
    };
    
    vm.addToCart = function(item) {
        CartService.addToCart(item, 1);
        alert(item.name + ' added to cart!');
    };
    
    vm.filterByCategory = function(category) {
        vm.selectedCategory = category;
    };
}]);