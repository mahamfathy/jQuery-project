console.log("Welcome to The Ultimate jQuery Course!🚀");
// $(()=>{
//     console.log("jQuery Loaded");    
// }) we can use the shorthand as well
$(document).ready(()=>{

    $(`.third`).css('color', 'red')
    $("#btn_hide").click(()=>{
        $('#second').hide(2000)
        $('.third').toggle(2000)
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
