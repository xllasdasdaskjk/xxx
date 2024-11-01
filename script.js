document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    document.getElementById('formMessage').innerText = '感谢您的留言，我们会尽快与您联系！';
});
