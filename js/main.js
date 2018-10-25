function goToPage(link) {
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

goToPage('home')

$('a').click(function(event){
  event.preventDefault()
  var href = $(this).attr('href')
  goToPage(href)
  if (href === "play")
          startGame();
})
