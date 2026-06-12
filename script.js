function switchTab(id, btn) {
  document.querySelector('.tab-content.active')?.classList.remove('active');
  document.querySelector('.tab-btn.active')?.classList.remove('active');
  document.getElementById(`tab-${id}`)?.classList.add('active');
  btn?.classList.add('active');
}

function loadYT(card, thumbId, src) {
  const thumb = document.getElementById(thumbId);
  if (!thumb) return;
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.className = 'yt-iframe'; 

  thumb.parentNode.replaceChild(iframe, thumb);
}