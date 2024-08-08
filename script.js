function highlightGridItems() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const gridItems = document.querySelectorAll('.grid-item');
    const originalColor = '#004276'; 
    const highlightColor = '#0082A8'; 
    let highlightedItem = null;
    

    if (filter === '') {
        
        gridItems.forEach(item => {
            item.style.backgroundColor = originalColor;
            item.querySelector('a').style.color = 'white';
        });
        return; 
    }

    gridItems.forEach(item => {
        item.style.backgroundColor = originalColor;
        item.querySelector('a').style.color = 'white';
    });

    let highlightCount = 0;
    gridItems.forEach(item => {
        const name = item.getAttribute('data-name').toLowerCase();
        if (name.includes(filter)) {
            item.style.backgroundColor = highlightColor;
            item.querySelector('a').style.color = 'white';
            highlightedItem = item;
            highlightCount++;
        }
    });

    if (highlightCount === 1) {
        highlightedItem.classList.add('single-highlight');
    } else {
        gridItems.forEach(item => item.classList.remove('single-highlight'));
    }
}

document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const highlightedItem = document.querySelector('.grid-item.single-highlight');
        if (highlightedItem) {
            const link = highlightedItem.querySelector('a');
            if (link) {
                link.click(); 
            }
        }
    }
});

document.getElementById('search-input').addEventListener('input', highlightGridItems);
