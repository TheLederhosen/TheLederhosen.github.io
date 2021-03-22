
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " opacity-off";
}

function switchpics1() {
        var elem1 = document.getElementById('TBoxPic');
		
		document.getElementById('pic1').src='Pictures/4.jpg';
		document.getElementById('pic1.5').src='Pictures/4.jpg';
		document.getElementById('pic2').src='Pictures/5.jpg';
		document.getElementById('pic2.5').src='Pictures/5.jpg';
		document.getElementById('pic3').src='Pictures/6.jpg';
		document.getElementById('pic3.5').src='Pictures/6.jpg';
		
		/* elem1.style.animation = "opac 1s linear 0s";  Does not work properly due to the animation only going off once*/
	
	}

function switchpics2() {
         var elem2 = document.getElementById('TBoxPic');
		 
        document.getElementById('pic1').src='Pictures/1.jpg';
		document.getElementById('pic1.5').src='Pictures/1.jpg';
		document.getElementById('pic2').src='Pictures/2.jpg';
		document.getElementById('pic2.5').src='Pictures/2.jpg';
		document.getElementById('pic3').src='Pictures/3.jpg';
		document.getElementById('pic3.5').src='Pictures/3.jpg';
		
		/* elem2.style.animation = "opac 1s linear 0s"; Does not work properly due to the animation only going off once*/
}