// Простая логика для будущей формы поиска
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('#search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchForm.querySelector('input[type="text"]').value;
            alert('Поиск: ' + query); // Здесь будет логика поиска
        });
    }
});