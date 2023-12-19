document.addEventListener('DOMContentLoaded', () => {
    const coffeeList = document.getElementById('coffeeList');

    // Fetch data from the API
    fetch('https://api.sampleapis.com/coffee/hot')
        .then(response => response.json())
        .then(data => {
            // Process the data and update the UI
            data.forEach(coffee => {
                const li = document.createElement('li');
                li.className = 'coffee-item';
                li.innerHTML = `
                    <img src="${coffee.image}" alt="${coffee.title}">
                    <h3>${coffee.title}</h3>
                    <div class="coffee-item-content">
                        <p><strong>Description:</strong> ${coffee.description}</p>
                        <p><strong>Ingredients:</strong> ${coffee.ingredients.join(', ')}</p>
                    </div>
                `;
                coffeeList.appendChild(li);

                // Add click event to toggle visibility of coffee details
                li.addEventListener('click', () => {
                    const content = li.querySelector('.coffee-item-content');
                    content.style.display = content.style.display === 'none' ? 'block' : 'none';
                });
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});