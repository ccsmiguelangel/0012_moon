function parallax (elem, rateN = 0, direction = 'v', typeValue = 'px') {
  let el = document.querySelectorAll(elem);
  window.addEventListener('scroll', ()=>{
    let scrolled = window.pageYOffset;
    let rate = direction === 'v'? 'translate3d(0,'+ (rateN * scrolled) + typeValue +', 0)' : direction === 'h'? 'translate3d('+ (rateN * scrolled) + typeValue +', 0, 0)' : undefined;
    rate? el.forEach(el => el.style.transform = rate) : console.log(mDirectionError);
  });
}
let elements = {
  el:  ['#bg', '#moon', '#mountain', '#road', '#S1__text'],
  val: [0.5, -1, -0.25, -0.15, 0.2],
  direction: ['v', 'h', 'v', 'v', 'v']
};
elements.el.forEach((el, i) => parallax(el, elements.val[i], elements.direction[i])); 