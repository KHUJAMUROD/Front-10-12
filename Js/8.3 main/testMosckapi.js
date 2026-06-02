async function loadData() {
    try {
        const response = await fetch('/data.json'); // путь к файлу
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        return console.log(json);
        // Пример обработки: берем массив объектов внутри data
        // const items = json.data;
        // console.log(items);
    } catch (err) {
        document.getElementById('output').textContent = 'Ошибка: ' + err;
    }
}

loadData();
