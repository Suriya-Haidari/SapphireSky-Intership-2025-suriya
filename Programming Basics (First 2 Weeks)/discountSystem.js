// Discount System Based on Membership
// Input membership type ("Gold", "Silver", "Bronze").
// Use switch to apply different discount rates on a purchase.

function discountSystem(membership) {
    let discount;
    switch (membership) {
        case "Gold":
            discount = "$3"
            break;
        case "Silver":
            discount = "$5"
            break;
        case "Bronze":
            discount = "$10"
            break;
        default:
            discount = "nothing"
            break;
    }
    return {discount};
}

console.log(discountSystem("Golds"));



function applyDiscount(membershipType, purchaseAmount) {
    let discountRate;
    let discountedPrice;

    switch (membershipType) {
        case "Gold":
            discountRate = 0.20; 
            break;
        case "Silver":
            discountRate = 0.15; 
            break;
        case "Bronze":
            discountRate = 0.10; 
            break;
        default:
            return "Invalid membership type"; 
    }

    // Calculate the discounted price
    discountedPrice = purchaseAmount - (purchaseAmount * discountRate);
    return `The discounted price for a ${membershipType} member is $${discountedPrice.toFixed(2)}`;
}


console.log(applyDiscount("Silver", 200));
console.log(applyDiscount("Bronze", 150));
console.log(applyDiscount("Platinum", 300)); 
