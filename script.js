document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("تم إرسال الرسالة بنجاح!");
});

// التوقف عند التمرير فوق الشريط
const ticker = document.querySelector('.news-ticker');
ticker.addEventListener('mouseover', () => {
    ticker.querySelector('.news-content').style.animationPlayState = 'paused';
});

// استئناف الحركة عندما يخرج الماوس من الشريط
ticker.addEventListener('mouseout', () => {
    ticker.querySelector('.news-content').style.animationPlayState = 'running';
});

