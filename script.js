let lastScrollTop = 0;

window.addEventListener('wheel', function (e) {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  const scrollingDown = e.deltaY > 0;
  const scrollingUp = e.deltaY < 0;

  const atTop = scrollTop <= 0;
  const atBottom = scrollTop + windowHeight >= scrollHeight;

  if (scrollingUp && atTop) {
    showScrollError('top');
  } else if (scrollingDown && atBottom) {
    showScrollError('bottom');
  }
});

function showScrollError(position) {
  const el = document.getElementById(
    position === 'top' ? 'scrollErrorTop' : 'scrollErrorBottom'
  );
  el.style.display = 'block';

  setTimeout(() => {
    el.style.display = 'none';
  }, 1000);
}
