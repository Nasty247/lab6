function showMessage() {
    const messages = [
        "WebView работает отлично! 🚀",
        "Данные загружены с GitHub Pages! 📦",
        "JavaScript внутри WebView тоже работает! ⚡"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}