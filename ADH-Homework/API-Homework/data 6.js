const quoteCard = (quote) => {
    const movieCard = document.getElementById("card");
}

document.addEventListener("DOMContentLoaded", function () {
  const searchField = document.getElementById("search-field-container");
  const searchForm = document.getElementById("quoteSearch");

  searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const lower = searchField.nodeValue.toLowerCase();
      fetch(``)
  })
});

