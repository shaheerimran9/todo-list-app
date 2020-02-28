// Taking input, button, and content div into variables
const input = document.querySelector('#todoField');
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const ul = document.querySelector('ul');

// Function to add a todo
function addTodo (e) {
    // Preventing the default submit action
    e.preventDefault();
    // Checking if user's input is not blank
    if (input.value != "") {
        // Create li element
        const li = document.createElement('li');
        // Append user's input value to li element
        li.appendChild(document.createTextNode(input.value.trim()));
        // Add trash-can icon to the li
        li.innerHTML += '<i class="fas fa-trash"></i>'
        // Append li element to ul element
        ul.appendChild(li);
        // Append ul element to content div
        content.appendChild(ul);

        // Reset input field to blank
        input.value = "";
    } else {
        alert('Please check your input');
    }
}

btn.addEventListener('click', addTodo);

ul.addEventListener('click', (e) => {
    e.preventDefault(); //This is probably uncessary
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.remove();
    }
})