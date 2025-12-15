angular.module('jhEventApp')
.service('InventoryService', function() {
    this.items = [
        {
            id: 1,
            name: 'Chiavari Chair (Gold)',
            description: 'Elegant gold chiavari chair for weddings and formal events',
            price: 8.99,
            category: 'Furniture',
            quantity: 100,
            image: 'chair-gold.jpg',
            featured: true
        },
        {
            id: 2,
            name: '10x20 White Tent',
            description: 'Professional grade party tent with sidewalls',
            price: 299.99,
            category: 'Tents',
            quantity: 15,
            image: 'tent-white.jpg',
            featured: true
        },
        {
            id: 3,
            name: 'Round Banquet Table (72")',
            description: 'Large round table for 10-12 guests',
            price: 24.99,
            category: 'Tables',
            quantity: 50,
            image: 'table-round.jpg'
        },
        {
            id: 4,
            name: 'LED Dance Floor (12x12)',
            description: 'Interactive LED lighted dance floor with remote control',
            price: 499.99,
            category: 'Lighting',
            quantity: 5,
            image: 'dance-floor.jpg',
            featured: true
        },
        {
            id: 5,
            name: 'Portable Sound System',
            description: 'Professional PA system with wireless microphone',
            price: 89.99,
            category: 'Audio',
            quantity: 20,
            image: 'sound-system.jpg'
        },
        {
            id: 6,
            name: 'Champagne Fountain',
            description: '3-tier stainless steel champagne fountain',
            price: 79.99,
            category: 'Beverage',
            quantity: 8,
            image: 'fountain.jpg'
        },
        {
            id: 7,
            name: 'Linen Package (White)',
            description: 'Includes tablecloth and napkins for 10 guests',
            price: 19.99,
            category: 'Linens',
            quantity: 200,
            image: 'linen.jpg'
        },
        {
            id: 8,
            name: 'Inflatable Bounce House',
            description: '15x15 bounce house with safety netting',
            price: 149.99,
            category: 'Kids',
            quantity: 12,
            image: 'bounce-house.jpg'
        }
    ];

    this.getInventory = function() {
        return this.items;
    };

    this.getItemById = function(id) {
        return this.items.find(item => item.id === id);
    };

    this.getFeaturedItems = function() {
        return this.items.filter(item => item.featured);
    };

    this.getCategories = function() {
        const categories = [...new Set(this.items.map(item => item.category))];
        return categories;
    };

    this.updateQuantity = function(id, quantity) {
        const item = this.getItemById(id);
        if (item) {
            item.quantity = quantity;
        }
    };
});