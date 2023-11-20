document.getElementById('student-info').textContent = 'Student ID: 200533731 | Name: Sneha Rugmini';

document.getElementById('order-btn').addEventListener('click', function () {
    
    const pizzaSize = document.getElementById('pizza-size').value;
    const toppings = getSelectedToppings();
    const specialInstructions = document.getElementById('special-instructions').value;

    
    const pizzaOrder = new Pizza(pizzaSize, toppings, specialInstructions);

    
    document.getElementById('pizza-description').textContent = pizzaOrder.getDescription();
});


function getSelectedToppings() {
    const toppingCheckboxes = document.querySelectorAll('input[name="topping"]:checked');
    const toppings = Array.from(toppingCheckboxes).map(checkbox => checkbox.value);
    return toppings;
}


class Pizza {
    constructor(size, toppings, specialInstructions) {
        this.size = size;
        this.toppings = toppings;
        this.specialInstructions = specialInstructions;
    }

    getDescription() {
        
        return `Size: ${this.size} | Toppings: ${this.toppings.join(', ')} | Special Instructions: ${this.specialInstructions}`;
    }
}
