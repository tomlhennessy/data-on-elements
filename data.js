document.addEventListener("DOMContentLoaded", () => {

    // select the necessary elements
    const addButton = document.getElementById("add");
    const shoppingList = document.getElementById("shopping-list");

    // add event listener to the "Add" button
    addButton.addEventListener("click", event => {
        event.preventDefault(); // prevent form from submitting

        // get the values of the input fields
        const name = document.getElementById("name").value;
        const type = document.getElementById("type").value;

        // create a new <li> element
        const listItem = document.createElement("li");

        // set the text of the <li> to the name
        listItem.innerText = name;

        // set the data-type attribute to the value of type
        listItem.setAttribute("data-type", type);

        // append the <li> element to the shopping list
        shoppingList.append(listItem);
    })
})
