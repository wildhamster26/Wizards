// When we call goToPage('about'), it will only display the 'about' page
function goToPage(link) {
  // // Solution 1
  // $('[data-page]').hide()
  // $('[data-page='+link+']').show()

  // Solution 2
  $('[data-page]').each(function() {
    var page = $(this).data('page')
    if (page === link)
      $(this).show()
    else 
      $(this).hide()
  });

  // Add the class active in the navbar
  $('li.nav-item').each(function(){
    var href = $(this).find('a.nav-link').attr('href')
    if (href === link) 
      $(this).addClass('active')
    else
      $(this).removeClass('active')
  })
}
// Go to main page
// goToPage('home')
goToPage('play')

// Listen for click events on <a> and redirect to the right page
$('a').click(function(event){
  event.preventDefault()
  var href = $(this).attr('href')
  goToPage(href)
  if (href === "play")
        startGame();
})
