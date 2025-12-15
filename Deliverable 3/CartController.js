angular.module('jhEventApp')
.controller('CartController', ['CartService', function(CartService) {
    var vm = this;
    
    vm.cart = CartService.getCart();
    
    vm.updateQuantity = function(itemId, quantity) {
        CartService.updateQuantity(itemId, quantity);
        vm.cart = CartService.getCart();
    };
    
    vm.removeItem = function(itemId) {
        CartService.removeFromCart(itemId);
        vm.cart = CartService.getCart();
    };
    
    vm.clearCart = function() {
        if (confirm('Are you sure you want to clear your cart?')) {
            CartService.clearCart();
            vm.cart = CartService.getCart();
        }
    };
    
    vm.getCartCount = function() {
        return CartService.getCartCount();
    };
    
    vm.checkout = function() {
        if (vm.cart.items.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        var message = 'Thank you for your rental order!\n\n';
        message += 'Order Summary:\n';
        vm.cart.items.forEach(item => {
            message += `${item.name} x${item.quantity}: $${(item.price * item.quantity).toFixed(2)}\n`;
        });
        message += `\nSubtotal: $${vm.cart.subtotal.toFixed(2)}`;
        message += `\nTax (8%): $${vm.cart.tax.toFixed(2)}`;
        message += `\nTotal: $${vm.cart.total.toFixed(2)}`;
        message += '\n\nOur team will contact you within 24 hours to confirm delivery details.';
        
        alert(message);
        CartService.clearCart();
        vm.cart = CartService.getCart();
    };
}]);