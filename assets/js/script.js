$ (document).ready(function(){

    $ ('a').click(function(){
    var gato = this.hash
    
    $ ("html, body").animate(
      { scrollTop: $(gato).offset().top - 40
        
      },
      3000
      )
    })
    
    })
    
    
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
    
    const myCarouselElement = document.querySelector('#myCarousel')
    const carousel = new bootstrap.Carousel(myCarouselElement, {
      interval: 3000,
      wrap: false
    })