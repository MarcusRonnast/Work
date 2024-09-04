function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    let locales = [
        { locale: 'vi-VN', label: 'Дата и время для вьетнамской локали' },
        { locale: 'sr-SP', label: 'Дата и время для сербской локали' },
        { locale: 'mk-MK', label: 'Дата и время для локали Северной Македонии' },
        { locale: 'es-ES', label: 'Дата и время для испанской локали' },
        { locale: 'de-DE', label: 'Дата и время для немецкой локали' },
        { locale: 'hi-IN', label: 'Дата и время для индийской локали' }
    ];

    let html = '';
    locales.forEach(function(localeInfo) {
        let dateStr = today.toLocaleString(localeInfo.locale);
        html += `<div class="date-container">${localeInfo.label}:<br/>${dateStr}</div>`;
    });

    out.innerHTML = html;
}
function todayDate() {
    let dt = new Date();

    let year = dt.getFullYear();

    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
                        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let month = monthNames[dt.getMonth()];

    let date = dt.getDate();

    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", 
                    "Четверг", "Пятница", "Суббота"];
    let dayOfWeek = weekDays[dt.getDay()];

    let result = 
        "Текущий год: " + year + '<br/>' +
        "Текущий месяц: " + month + '<br/>' +
        "Текущая дата: " + date + '<br/>' +
        "День недели: " + dayOfWeek + '<br/>';

    document.getElementById("output").innerHTML = result;
}
function getDayOfWeek() {
    const day = document.getElementById('some_day').value;
    const month = document.getElementById('some_month').value;
    const year = document.getElementById('some_year').value;

    if (day && month && year) {
        const date = new Date(year, month - 1, day);
        const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const dayOfWeek = daysOfWeek[date.getDay()];
        document.getElementById('result').innerText = `День недели: ${dayOfWeek}`;
    } 
    else {
        document.getElementById('result').innerText = 'Пожалуйста, заполните все поля.';
    }
}