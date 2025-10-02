// Select the input, button, and list elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener('click', () => {
    const chapter = input.value.trim();
    if (chapter !== '') {
        if (!chaptersArray.includes(chapter)) {
            displayList(chapter);
            chaptersArray.push(chapter);
            setChapterList();
        } else {
            alert(`"${chapter}" is already in your list.`);
        }
        input.value = '';
        input.focus();
    }
});



function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    // Handle delete button click
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(item); // Use original item, not li.textContent
        input.focus();
    });
}

// Save chapters to localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Retrieve chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Remove a chapter from the array and update localStorage
function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}








// // When the button is clicked, add a new chapter to the list
// button.addEventListener('click', function () {
//     // Check if the input is not empty or just whitespace
//     if (input.value.trim() !== '') {
//         // Create a new list item and set its text to the input value
//         const li = document.createElement('li');
//         li.textContent = input.value;

//         // Create a delete button for the list item
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = '❌';

//         // When the delete button is clicked, remove the list item
//         deleteButton.addEventListener('click', function () {
//             list.removeChild(li);
//             input.focus();
//         });

//         // Add the delete button to the list item
//         li.append(deleteButton);
//         list.append(li); // Add the list item to the list


//         // Clear the input field and set focus back to it
//         input.value = '';
//         input.focus();
//     }
// });



