document.addEventListener('DOMContentLoaded', function () {
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyMsg = document.getElementById('copyEmailMsg');
  if (copyBtn && copyMsg) {
    copyBtn.addEventListener('click', function () {
      const email = copyBtn.getAttribute('data-email');
      navigator.clipboard.writeText(email).then(function () {
        copyMsg.style.display = 'inline';
        setTimeout(() => {
          copyMsg.style.display = 'none';
        }, 1500);
      });
    });
  }
});
