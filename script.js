function highlightGridItems() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const gridItems = document.querySelectorAll('.grid-item');
    const originalColor = '#004276'; 
    const highlightColor = '#35b6b4'; 

    gridItems.forEach(item => {
        const name = item.getAttribute('data-name').toLowerCase();
        if (filter === '') {
            item.style.backgroundColor = originalColor;
        } else if (name.includes(filter)) {
            item.style.backgroundColor = highlightColor;
        } else {
            item.style.backgroundColor = originalColor;
        }
    });
}



document.addEventListener('DOMContentLoaded', function() {
    var resetButton = document.querySelector('.resetbtn');

    var resetPasswordURL = 'https://selfheal.maxhealthcare.com/resetaccount/';
  
    resetButton.addEventListener('click', function() {
      window.open(resetPasswordURL, '_blank');
    });
  });
  