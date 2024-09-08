function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    let currentSeconds = today.getSeconds();
    document.getElementById('time').innerHTML = currentTime;
        
    // Обновляем секунды в центре страницы
    document.getElementById('seconds').innerHTML = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;
    
    const seconds = today.getSeconds();
    const secondsDisplay = document.getElementById('seconds');
    const secondHand = document.getElementById('second-hand');
    // Расчёт вращения стрелки
    const secondsDegree = ((seconds / 60) * 360) + 90; // Смещение на 90 градусов для начала с 12:00
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
}
setInterval(showTime, 1000);