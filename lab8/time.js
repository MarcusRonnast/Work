function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    let currentSeconds = today.getSeconds();
    document.getElementById('time').innerHTML = currentTime;
        
    // Обновляем секунды в центре страницы
    document.getElementById('seconds').innerHTML = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;
}
setInterval(showTime, 1000);