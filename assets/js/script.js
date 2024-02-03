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