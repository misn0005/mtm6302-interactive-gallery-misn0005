const images = document.querySelectorAll('#gallery img');

images.forEach(img => {
  const origSrc = img.src;
  const hdSrc = img.getAttribute('data-hd');
  const caption = img.getAttribute('data-caption');

  img.addEventListener('click', function() {
    if (this.src === origSrc) {
      this.src = hdSrc;
      this.setAttribute('data-temp-src', origSrc);
      const captionElement = document.createElement('div');
      captionElement.textContent = caption;
      captionElement.className = 'caption';
      this.parentNode.insertBefore(captionElement, this.nextSibling);
    } else {
      this.src = this.getAttribute('data-temp-src') || origSrc;
      this.removeAttribute('data-temp-src');

      const captionElement = this.parentNode.querySelector('.caption');
      
      if (captionElement) {
        captionElement.parentNode.removeChild(captionElement);
      }
    }
  });
});