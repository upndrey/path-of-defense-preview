// Scale the complete canvas, rather than creating a smaller scrolling viewport.
if (new URLSearchParams(location.search).has('embed')) {
  const fitCanvas = () => {
    const scale = document.documentElement.clientWidth / 405;
    document.getElementById('device').style.zoom = scale;
  };
  window.addEventListener('resize', fitCanvas);
  fitCanvas();
}
