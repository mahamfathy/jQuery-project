$(document).ready(function () {
    let offset = {offset:"80%"};
    $('.table_content_title').waypoint(function () {
        $('.table_content_title').addClass('animate__animated animate__fadeInLeft')
       },offset
    );
    $('#intro').waypoint(function () {
        $('#intro').addClass('animate__animated animate__fadeInLeft')
       },offset
    );
    $('#history').waypoint(function () {
        $('#history').addClass('animate__animated animate__fadeInLeft')
       },offset
    );
    $('#features').waypoint(function () {
        $('#features').addClass('animate__animated animate__fadeInLeft')
       },offset
    );
    
    $('.list_link_1').waypoint(function () {
        $('.list_link_1').addClass('animate__animated animate__fadeInRight')
       },offset
    ); 
     $('.list_link_2').waypoint(function () {
        $('.list_link_2').addClass('animate__animated animate__fadeInRight')
       },offset
    );  
    $('.list_link_3').waypoint(function () {
        $('.list_link_3').addClass('animate__animated animate__fadeInRight')
       },offset
    );
    $('.article1_image').waypoint(function () {
        $('.article1_image').addClass('animate__animated animate__zoomIn')
       },offset
    );
    $('.article2_image').waypoint(function () {
        $('.article2_image').addClass('animate__animated animate__zoomIn')
       },offset
    );

    
})