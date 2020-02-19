/*==Preload screen==*/
window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-finish');
});

/* =jQuery a scrollos opacity változáshoz= */
$(document).ready(function () {
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    $('.scrollDiv').each(function () {
      var el = $(this);
      var offsetTop = el.offset().top;
      if (scrollTop > offsetTop - 100) {
        el.addClass('scrolled');
      }
    });
  });
});

/* =Hide/Show a skillekhez minden eges gomb külön-külön definiálva= */
$(document).ready(() => {
  $('#web').on('click', () => {
    $('#adobe-skills').css('display', 'none');
    $('#office-skills').css('display', 'none');
    $('#quality-skills').css('display', 'none');

    $('#web-skills').toggleClass('show-web');
    $('#web-skills').toggle(500, 'linear');
  });
  $('#adobe').on('click', () => {
    $('#web-skills').css('display', 'none');
    $('#office-skills').css('display', 'none');
    $('#quality-skills').css('display', 'none');

    $('#adobe-skills').toggleClass('show-adobe');
    $('#adobe-skills').toggle(500, 'linear');
  });
  $('#office').on('click', () => {
    $('#web-skills').css('display', 'none');
    $('#adobe-skills').css('display', 'none');
    $('#quality-skills').css('display', 'none');

    $('#office-skills').toggleClass('show-office');
    $('#office-skills').toggle(500, 'linear');
  });
  $('#quality').on('click', () => {
    $('#web-skills').css('display', 'none');
    $('#adobe-skills').css('display', 'none');
    $('#office-skills').css('display', 'none');

    $('#quality-skills').toggleClass('show-quality');
    $('#quality-skills').toggle(500, 'linear');
  });
});

$(document).ready(() => {
  $('.schools').hover(() => {
    $(this).css('background-color', 'yellow');
  });
});

/* == Napszámláló == */

/* = Aktuális Év a footerben (copyrighthoz) = */
getDate = () => {
  var currentDate = new Date();

  var year = currentDate.getFullYear();
  document.getElementById('currentDate').innerHTML = year;
};
getDate();
/* == Smooth scroll elvileg minden böngészőhöz browsers == */

smootScroll = (target, duration) => {
  var target = document.querySelector(target); // nem adunk meg neki pontos target-et csak a function paramétereként
  var targetPosition = target.getBoundingClientRect().top - 40; // a target pozícióját adja meg a top-hoz képest
  var startPosition = window.pageYOffset;
  var startTime = null;

  animation = currentTime => {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  requestAnimationFrame(animation);
};

/*== A smoothScroll function meghívása ==*/
var aboutme = document.getElementById('aboutme-btn');
var resume = document.getElementById('resume-btn');
var schools = document.getElementById('schools-btn');
var skills = document.getElementById('skills-btn');
var contact = document.getElementById('contact-btn');

function clickedLink(clicked, direction) {
  clicked.addEventListener('click', () => {
    smootScroll(direction, 1000);
  });
}
clickedLink(aboutme, '#aboutme');
clickedLink(schools, '#schools');
clickedLink(resume, '#resume');
clickedLink(skills, '#skills');
clickedLink(contact, '#contact');

/* == Darkmode ==*/
$(document).ready(function () {
  $('.toggle').click(function () {
    $('.toggle').toggleClass('active');
    $('body').toggleClass('night');
    $('section').toggleClass('night');
    $('.dark-text').toggleClass('light-text');
    $('.note-2').removeClass('text-dark');
    $('.lightmode').toggleClass('dark-mode');
    $('.note-1').toggleClass('dark-mode');
    $('.note-2').toggleClass('dark-mode');
    $('.footer').toggleClass('dark-mode');
    $('.info').toggleClass('dark-mode');
    $('.introduce-day').toggleClass('introduce-night');
    $('.navbar').toggleClass('bg-dark navbar-dark');
    $('.dayschool').toggleClass('nightschool');
    $('.daywork').toggleClass('nightwork');
    $('.dayskills').toggleClass('nightskills');
    $('#show-web').toggleClass('darkmode');
  });
});