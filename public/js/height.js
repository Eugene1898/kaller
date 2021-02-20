const setHeight = () => {
  document.querySelector(':root').style
    .setProperty('--vh', window.innerHeight/100 + 'px');
}
setHeight();
window.addEventListener('resize', () => {
  setHeight();
});
