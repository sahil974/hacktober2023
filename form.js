// Get the form element
const form = document.querySelector('form');

// Listen for the form submit event
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form data as an object
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    // Convert the form data to JSON
    const jsonData = JSON.stringify(data);

    // Create a new Blob object with the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a new URL object for the Blob
    const url = URL.createObjectURL(blob);

    // Create a new link element to download the JSON file
    const link = document.createElement('a');
    link.href = url;
    link.download = 'form-data.json';

    // Click the link to download the JSON file
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);
});
