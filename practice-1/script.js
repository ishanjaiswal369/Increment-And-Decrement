window.addEventListener("mousemove", function (details) {
  var rect = document.querySelector(".container");
  var xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    200 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (200 + rect.getBoundingClientRect().width / 2),
    details.clientX
  );

  gsap.to(".container", {
    left: xval,
    ease: Power3,
  });
});
