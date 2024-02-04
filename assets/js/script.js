$(".nav-link").click(function (event) {

    if (this.hash !== "") {

        event.preventDefault();

        var hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 1000); 
    }
});

$("#btn_submit").click(function (e){
    e.preventDefault();
    alert("Su mensaje fue enviado satisfactoriamente")
});

// Habilitamos tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Habilitamos popover
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const popover = new bootstrap.Popover('.btn_popover', {
    container: '.box_popover'
  })