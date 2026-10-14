(() => {
  const button = document.getElementById("open-studio");
  const status = document.getElementById("deployment-status");
  try {
    const url = new URL(window.AUTONEWS_SITE?.appUrl || "");
    if (url.protocol !== "https:" || !/^[a-z0-9-]+\.streamlit\.app$/i.test(url.hostname)
        || url.username || url.password || url.port) return;
    button.href = url.href;
    button.removeAttribute("aria-disabled");
    button.removeAttribute("tabindex");
    button.textContent = "Deschide studioul →";
    status.textContent = "Autentifică-te cu contul autorizat pentru a continua.";
  } catch {
    // Fără adresă confirmată, păstrăm explicit starea de pregătire.
  }
})();
