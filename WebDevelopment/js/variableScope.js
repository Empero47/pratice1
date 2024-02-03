// Variable Scope :
/**
 * Life cycle of the variable
 * or the Access Level of the Variable
 * We Have to type of Scope:
 * 1. Global Scope - is a variable that is declared outside of any code block.
 * 2. Local Scope - is a variable that is declared inside of a code block.
 * 
 */

let name1 = "Emma"; // Global variable
document.write(name1 + "<br>");
riceRecipe();

function riceRecipe() {
    let ingredients = "Onga"; // local variable
    document.write(ingredients);
}
document.write(ingredients); // this will not work. because ingredients is local to riceRecipe function.
