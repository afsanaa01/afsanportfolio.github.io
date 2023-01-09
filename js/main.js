$(document).ready(function () {
  startAnimation();

  function startAnimation() {
    jQuery(".skills").each(function () {
      jQuery(this)
        .find(".skillbar")
        .animate(
          {
            width: jQuery(this).attr("data-percent"),
          },
          6000
        );
    });
  }
});

const appRoot = document.getElementById("page");
const nav = document.querySelector(".navigation");
const root = document.documentElement;
const endTransition = () => {
  const loader = document.querySelector(".loader");
  loader.addEventListener("transitionend", () => {
    loader.style.transform = "translateX(100%)";
    root.classList.remove("disable-hover");
  });
  loader.style.transform = "";
};

const startTransition = () => {
  const loader = document.querySelector(".loader");
  loader.style.transform = "translateX(100%)";
  appRoot.dataset.route = "a";
};
// declares variables for big circle and small circle in cursor
var cursorBig = document.querySelector('.big');
var cursorSmall = document.querySelector('.small');
var a = document.querySelectorAll('a');

// positions the two circles in a desired placement
document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorBig.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorSmall.style.left = x + 'px';
  cursorSmall.style.top = y + 'px';
});

// adds class when cursor clicks
document.addEventListener('mousedown', function(){
  cursorBig.classList.add('click');
  cursorSmall.classList.add('hover__small')
});

// removes class when cursor stops clicking
document.addEventListener('mouseup', function(){
  cursorBig.classList.remove('click')
  cursorSmall.classList.remove('hover__small')
});

// adds and removes class when mouse hovers and stops hovering
a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursorBig.classList.add('hover__big');
    cursorSmall.classList.add('hover__small');
  });
  item.addEventListener('mouseleave', () => {
    cursorBig.classList.remove('hover__big');
    cursorSmall.classList.remove('hover__small');
  });
})

nav.addEventListener("click", (e) => {
  if (e.target.nodeName === "A") {
    let a = Array.from(nav.children).find((v) => v.closest(".active"));
    root.classList.add("disable-hover");
    a.classList.remove("active");
    e.target.classList.add("active");
    e.preventDefault();
  }
});

const onRouteClick = (route) => {
  if (appRoot.dataset.route === route) return;
  appRoot.dataset.route = route;
  endTransition();
};

window.addEventListener("load", () => {
  startTransition();
});

