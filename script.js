let tabList = document.querySelector('#tablist');
let tabContent = document.querySelectorAll('.tabcontent');
let tabBtns = document.querySelectorAll('.tab-btn')

// getComputedStyle - позваляет получить стили из любого css файла

tabList.addEventListener('click', (event)=> {
    let targetBtn = event.target; // Кнопка, на которой произошел клик
  
    // Свойство dataset - содержит пользовательские (data) атрибуты указанного элемента
    let dataLang = targetBtn.dataset.lang
    console.log(dataLang);
  
    // Удалить классы .active у всех вкладок с контентом
    for(let tab of tabContent) {
        tab.classList.remove('active');
    }

    for(let tab of tabContent) {
        // Проверяем, что id вкладки такой же как data атрибут у кнопки
        if(tab.id === dataLang){
            // Добавляем класс active вкладке, чтобы отобразить ее
            tab.classList.add('active');

            // удаляем класс active у всех кнопок, чтобы сбросить цвет
            for(let tab of tabBtns) {
                tab.classList.remove('active');
            }
            // добавляем цвет, кнопке, на которую кликнули
            targetBtn.classList.add('active');
        }
    }
})