if (!localStorage.getItem('cookiesAccepted')) {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-btn');
    const declineBtn = document.getElementById('decline-btn');
  
    // Exibe a caixa de cookies
    cookieBanner.style.display = 'block';
  
    // Ação ao aceitar os cookies
    acceptBtn.addEventListener('click', function() {
      cookieBanner.style.display = 'none';
      localStorage.setItem('cookiesAccepted', true);
    });
  
    // Ação ao recusar os cookies
    declineBtn.addEventListener('click', function() {
      cookieBanner.style.display = 'none';
      localStorage.setItem('cookiesAccepted', false);
      // Aqui você pode adicionar o código para desabilitar os cookies ou qualquer ação que desejar
    });
  }