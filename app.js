﻿$(document).ready(function() {
  const $content = $("#content");

  //Load Home
  $("#homeLink").click(function() {
    loadHome();
  });

  const loadHome = function() {
    console.info("Loaded home logo page");
    $content.load("Logo.html");
  };

  //Load Our Story
  $("#ourStoryLink").click(function() {
    $content.load("OurStory.html");
  });
  //Load Breakfast
  $("#breakfastLink").click(function() {
    $content.load("Breakfast.html");
  });
  //Load Lunch
  $("#lunchLink").click(function() {
    $content.load("Lunch.html");
  });
  //Load Dinner
  $("#dinnerLink").click(function() {
    $content.load("Dinner.html");
  });
  //Load Gallery
  $("#galleryLink").click(function() {
    $content.load("Gallery.html");
  });
  //Load Location
  $("#locationLink").click(function() {
    $content.load("Location.html");
  });
  //Load About
  $("#aboutLink").click(function() {
    $content.load("About.html");
  });

  $("#cateringLink").click(function() {
    $content.load("Catering.html");
  });

  //Init Page Load
  loadHome();
});
