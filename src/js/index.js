///<reference types="../@types/jquery" />//
$(".fa-solid").on("click", function () {
  $(".side-bar").hide(3000);
});
$(".open").on("click", function () {
  $(".side-bar").show(3000);
});
$(".Singer").on("click", function () {
  $(".pppp").slideToggle(1000);
});
$(".Singer2").on("click", function () {
  $(".ppp").slideToggle(1000);
});
$(".Singer3").on("click", function () {
  $(".pp").slideToggle(1000);
});
$(".Singer4").on("click", function () {
  $(".p").slideToggle(1000);
});
$(".navLink").on("click", function (e) {
  let clickedLink = $(e.target).attr("href");
  console.log(clickedLink);
  let sectionOffset = $(clickedLink).offset().top;
  $("html,body").animate({ scrollTop: sectionOffset }, 2000);
});
let countDown = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(function () {
  let dateNow = new Date().getTime();
  let dateDiff = countDown - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  $(".days").text(days);
  $(".hours").text(hours);
  $(".minutes").text(minutes);
  $(".seconds").text(seconds);
}, 1000);
$("#textarea").on("input", function () {
  var remainingChars = 100 - $(this).val().length;
  $("#chars").text(remainingChars);

  if (remainingChars < 0) {
    $(".spanText").css("display", "block");
    $("#chars").css("display", "none");
    $("#Reamining").css("display", "none");
  } else {
    $(".spanText").css("display", "none");
    $("#chars").css("display", "flex");
    $("#Reamining").css("display", "flex");
  }
});
