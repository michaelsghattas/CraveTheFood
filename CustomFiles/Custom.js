$(document).ready(function () {
    //Init Page Load
    $('#content').load('Logo.html');

    //Load Home
    $("#homeLink").click(function () {
        $('#content').load('Logo.html');
    });
    //Load Our Story
    $("#ourStoryLink").click(function () {
        $('#content').load('OurStory.html');
    });
    //Load Breakfast
    $("#breakfastLink").click(function () {
        $('#content').load('Breakfast.html');
    });
    //Load Lunch
    $("#lunchLink").click(function () {
        $('#content').load('Lunch.html');
    });
    //Load Dinner
    $("#dinnerLink").click(function () {
        $('#content').load('Dinner.html');
    });
    //Load Gallery
    $("#galleryLink").click(function () {
        $('#content').load('Gallery.html');
    });
    //Load Location
    $("#locationLink").click(function () {
        $('#content').load('Location.html');
    });
    //Load About
    $("#aboutLink").click(function () {
        $('#content').load('About.html');
    });
});