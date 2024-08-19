function removeFromArray(array, item) {
    return array.filter(elemento => elemento.trim() !== item.trim());
    //trim elimina los espacios en blanco
}

function handleRemove() {
    const arrayInput = document.getElementById("arrayInput").value.split(",");
    const itemInput = document.getElementById("itemInput").value;

    const arrayFinal = removeFromArray(arrayInput, itemInput);
    document.getElementById("removeResult").textContent = "Resultado: " + arrayFinal.join(", ");
}

function getTheTitles(books) {
    return books.map(book => book.title);
}

function handleGetTitles() {
    const booksInput = document.getElementById("booksInput").value;

    try {
        const books = JSON.parse(booksInput);
        const titles = getTheTitles(books);
        document.getElementById("titlesResult").textContent = "Títulos: " + titles.join(", ");
    } catch (error) {
        document.getElementById("titlesResult").textContent = "Error en el formato JSON.";
    }
}