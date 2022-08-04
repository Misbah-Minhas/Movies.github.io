$(document).ready(function(){
    getDefaultData();
    $("button").click(function(){
      var text = $("#moviename").val();
      movieNameField=text.trim();
      var str = movieNameField.toLowerCase();
      getAPIData(str);
      });
    function getDefaultData(){
      var str = "red";
      getAPIData(str);
    }
    function getAPIData(str){
      if(str=="red" || str=="green" || str=="blue" || str=="yellow"){
        $("#showData").empty();
      $.ajax({url: "https://www.omdbapi.com/?s="+str+"&apikey=6cb1bb82", 
      
      success: function(result)
      {
   //    var Movietable = document.getElementById("showData");
       var MovieData = document.getElementById("showData");
       
        var movieCard = document.createElement("div");
        $(movieCard).attr("id","movieCard");
        for (var i = 0; i < result.Search.length; i++) {
          var cards = document.createElement("div");
        $(cards).attr("class","cards");
          var itemCard = document.createElement("div");
          $(itemCard).attr("class","col-md-4");
          var thumbwrapper = document.createElement("div");
          var imgbox = document.createElement("div");
          var posterimg= document.createElement("img");
          var thumbcontent = document.createElement("div");
          var imgbox = document.createElement("div");
          var headigcontent = document.createElement("h5");
          $(headigcontent).attr("class",str);
          var othercontent = document.createElement("p");
          othercontent.innerHTML =  result.Search[i].Year;          
          headigcontent.innerHTML =  result.Search[i].Title;
          posterimg.src=   result.Search[i].Poster;
          $(thumbwrapper).attr("class","thumb-wrapper");
          $(thumbcontent).attr("class","thumb-content");
          
          $(imgbox).attr("class","img-boox");
          thumbcontent.appendChild(headigcontent);
          thumbcontent.appendChild(othercontent);
          thumbwrapper.appendChild(imgbox);
          imgbox.appendChild(posterimg);
          itemCard.appendChild(cards);
          cards.appendChild(thumbwrapper);
          cards.appendChild(thumbcontent);
          MovieData.appendChild(itemCard);

        }
      }
    
    });
  }
    else {
      alert("Enter Valid Color");
    } 
    }
      });
      $(document).on({
        ajaxStart: function(){
            $("body").addClass("loading"); 
        },
        ajaxStop: function(){ 
            $("body").removeClass("loading"); 
        }    
    });