console.log("Welcome to The Ultimate jQuery Course!🚀");
// $(()=>{
//     console.log("jQuery Loaded");    
// }) we can use the shorthand as well
$(document).ready(()=>{

    $(`.third`).css('color', 'red')
    $("#btn_hide").click(()=>{
        // $('#second').hide(2000)
        // $('.third').toggle(2000)
        // $('.four').fadeOut()
        // $('.five').fadeToggle()
        // $('.six').fadeTo("slow",0.5)
        // $('.seven').slideToggle("fast")
        // $('.box').animate({
        //     height: '300px',
        //     width: '+=300px',fontSize:"50px"},2000)
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
