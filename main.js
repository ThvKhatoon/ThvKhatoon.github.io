var M = Mushroom();
M.random();
M.setDarkmode(false);

var body = document.body;
var bar = document.querySelector('#top-bar');
window.onscroll = () => {
   var val = window.scrollY / (body.scrollHeight - window.innerHeight);
   bar.style.width = val * 100 + '%';
};

var sections = document.querySelectorAll('.flex');
sections.forEach(x => {
   window.addEventListener('scroll', function() {
      if (x.getBoundingClientRect().top < window.innerHeight) {
         x.style.opacity = '1';
      } else {
         x.style.opacity = '0';
      }
   });
});
