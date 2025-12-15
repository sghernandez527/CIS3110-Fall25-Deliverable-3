angular.module('jhEventApp')
.service('CartService', function() {
    var cart = {
        items: [],
        subtotal: 0,
        tax: 0,
        total: 0
    };

    function calculateTotals() {
        cart.subtotal = cart.items.reduce((sum, item) => {
            return sum + (item.price * item.quantity);
        }, 0);
        
        cart.tax = cart.subtotal * 0.08; 
        cart.total = cart.subtotal + cart.tax;
    }

    this.getCart = function() {
        calculateTotals();
        return cart;
    };

    this.addToCart = function(item, quantity = 1) {
        var existingItem = cart.items.find(i => i.id === item.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: quantity,
                image: item.image
            });
        }
        
        calculateTotals();
    };

    this.removeFromCart = function(itemId) {
        var index = cart.items.findIndex(item => item.id === itemId);
        if (index !== -1) {
            cart.items.splice(index, 1);
            calculateTotals();
        }
    };

    this.updateQuantity = function(itemId, quantity) {
        var item = cart.items.find(item => item.id === itemId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(itemId);
            } else {
                item.quantity = quantity;
                calculateTotals();
            }
        }
    };

    this.getCartCount = function() {
        return cart.items.reduce((count, item) => count + item.quantity, 0);
    };

    this.clearCart = function() {
        cart.items = [];
        calculateTotals();
    };

    this.getCartTotal = function() {
        calculateTotals();
        return cart.total;
    };
});