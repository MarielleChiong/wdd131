// Select the input, button, and list elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


// When the button is clicked, add a new chapter to the list
button.addEventListener('click', function () {
    // Check if the input is not empty or just whitespace
    if (input.value.trim() !== '') {
        // Create a new list item and set its text to the input value 
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create a delete button for the list item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // When the delete button is clicked, remove the list item
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Add the delete button to the list item
        li.append(deleteButton);
        list.append(li); // Add the list item to the list


        // Clear the input field and set focus back to it
        input.value = '';
        input.focus();
    }
});

