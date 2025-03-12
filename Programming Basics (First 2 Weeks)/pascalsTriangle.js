// Generate Pascal’s Triangle
// Implement pascalTriangle(rows), which prints Pascal’s Triangle up to rows rows.

function pascalTriangle(rows) {
    // Outer loop to go through each row
    for (let i = 0; i < rows; i++) {
        // Create an empty array for the current row
        let row = new Array(i + 1).fill(1); // Initialize all elements to 1

        // Calculate the intermediate values of the row (if i > 1)
        for (let j = 1; j < i; j++) {
            row[j] = row[j - 1] + row[j];
        }

        // Print the row
        console.log(row.join(' ')); // Join the elements with spaces for a nice print format
    }
}

// Test the function
pascalTriangle(5);



function testPascalTriangle(rows, expected) {
    console.log(`Pascal’s Triangle for ${rows} rows:`);
    pascalTriangle(rows);
    console.log('---');
}

// Test cases for Pascal's Triangle:
testPascalTriangle(3);  // Test with 3 rows
testPascalTriangle(5);  // Test with 5 rows
testPascalTriangle(7);  // Test with 7 rows
testPascalTriangle(1);  // Test with 1 row
