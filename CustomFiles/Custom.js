$(document).ready(function () {
    //Init Page Load
    $(document).ready(function () {
        $('#content').load('Logo.html');
    });
    //Home func
    $("#homeLink").click(function () {
        $('#content').load('Logo.html');
    });
    //Our Story func
    $("#ourStoryLink").click(function () {
        $('#content').load('OurStory.html');
    });
    //Breakfast func
    $("#breakfastLink").click(function () {
        $('#content').load('Breakfast.html');
    });
    //Lunch func
    $("#lunchLink").click(function () {
        $('#content').load('Lunch.html');
    });
    //Dinner func
    $("#dinnerLink").click(function () {
        $('#content').load('Dinner.html');
    });
    //Gallery func
    $("#galleryLink").click(function () {
        $('#content').load('Gallery.html');
    });
    //Location func
    $("#locationLink").click(function () {
        $('#content').load('Location.html');
    });
    //About func
    $("#aboutLink").click(function () {
        $('#content').load('About.html');
    });
});
