// js/main.js

// Example function to handle a click event
function handleClick() {
    alert('Button clicked!');
}

// Add event listener to a button element
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('click-me-button');
    if (button) {
        button.addEventListener('click', handleClick);
    }
});

// Example function to fetch data from an API
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Form submitted with data:', formData);
}

// Add event listener to a form element (if applicable)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('example-form');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});
