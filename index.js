fetch('https://example.com/data')
    .then(response => response.json())
    .then(data => {
        // Do something with the data
        console.log(data);
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });
