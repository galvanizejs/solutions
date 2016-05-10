$(document).ready(function(){
  // #1 - Hover red/blue
  $("#hover").hover(
    function(){
      $(this).css("background-color", "red");
    },
    function(){
      $(this).css("background-color", "#39B7CD");
    }
  );

  // #1 - Toggle green
  $("#hover").click(function(){
    $(this).toggleClass('green');
  })

  // #2
  $(".hideMe").click(function(){
    $(this).hide();
  })

  // #3
  $(".changeColor").click(function(){
    $("ul li:nth-child(3)").css("color", "#8A2BE2")
  })

  // #4
  $("#removeLi").click(function(){
    $("ul li:nth-child(2)").hide();
  })

  // #5
  $("ul li:nth-child(4)").click(function(){
    $(this).append('<li>Aww jeeze! Another one!</li>')
  })

  // #6
  $("ul li:last-child").click(function(){
    $(this).css("font-size", "40px")
    $("ul li:nth-last-child(n+2)").hide();
  })

  // #7
  $(".cute").click(function(){
    for (var i = 0; i <20; i++){
      $(this).clone().appendTo(".clones");
    }
  });

  // #8
  $("*").dblclick(function() {
    $("#makeSquare").css("border-radius", "0px")
    $("#makeSquare").css("width", "120px")
  });

  // #9
  $("#dontClick").click(function(){
    alert("I asked you not to do that.")
  })

  // #10
  $('.black').click(function(){
    $('html').css('background-color', '#000');
  });

  $('.wood').click(function(){
    $('html').css('background-image', 'url(http://phandroid.s3.amazonaws.com/wp-content/uploads/2015/03/wood-wallpaper-3.jpg)');
  });

  $('.chaos').click(function(){
    $('html').css('background-image', 'url(http://www.henderson-art.co.uk/art/wallpaper/chaos.jpg)');
  });
});
