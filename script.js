console.log("Welcome to The Ultimate jQuery Course!🚀");
// $(()=>{
//     console.log("jQuery Loaded");    
// }) we can use the shorthand as well
$(document).ready(()=>{

    $(`.third`).css('color', 'red')
    $("#btn_hide").click(()=>{
    // $('.first').addClass("box")
    // $('.box').removeClass("box")
    let color = $('div.box').css('background-color')

   $('.four').css('color',color)

    $('.first').toggleClass("box")

        // $('#second').hide(2000)
        // $('.third').toggle(2000)
        // $('.four').fadeOut()
        // $('.five').fadeToggle()
        // $('.six').fadeTo("slow",0.5)
        // $('.seven').slideToggle("fast")
        // $('.box').animate({
        //     height: '200px',
        //     width: '200px'})
        // console.log($('#second').text())
        // console.log($('#second').html("<em> Hello World with jQuery<em/>"))
    //    $('#second').html("<em> Hello World with jQuery<em/>")
    //     console.log($('#btn_hide').val())
    // console.log( $('#btn_hide').attr("type"))   

    //     $('#btn_hide').attr("type","submit")
    // console.log( $('#btn_hide').attr("type"))   
    //     $('#second').text("Hello World with jQuery")
    })
    $('body').keydown((e)=>{
    console.log(e.which)
    if (e.which === 72) {
        $('#second').hide()
    }if (e.which === 83) {
        $('#second').show()
        
    }
    })
})
