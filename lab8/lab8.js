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
