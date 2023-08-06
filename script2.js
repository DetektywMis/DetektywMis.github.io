var names = [];
var extensions = [];

var input = document.getElementById("search1");
document.addEventListener('keydown', evt =>{
  if (evt.key ==="Escape"){
    evt.preventDefault();
    closeModal();
  }
})

input.addEventListener("keypress",function(event){
  // console.log(event.key);
  if(event.key ==="Enter"){

    event.preventDefault();
    document.getElementById("myBtn").click();
  }
  
});

function filesParse() {
  var request = new XMLHttpRequest();

  request.open("GET", "files.json", false);
  request.send(null);

  var JSONobj = JSON.parse(request.responseText);
  // console.log();
  // for (let i =0;i<=Object.keys(JSONobj.files).length;i++){
  // names.push (JSONobj.files[i].name);
  // extensions.push(JSONobj.files[i].ext);

  //}

  // var names = JSON.parse(JSONobj.files.name);

  // for (let i=0; i<=20;i++){
  //   let j = i;
  //   // console.log(JSONobj[j].name);
  //   names.push(JSONobj[2].name);
  // }

  JSONobj.forEach(function (value) {
    names.push(value.name);
    extensions.push(value.ext);
  });
  // console.log(extensions[names.indexOf("@691A")]);


  // console.log(extensions);





}

function report(){

  a=closeModal();
  var modal = document.getElementById("reportModal");
  modal.style.display = "block";
}

function openModal() {
  a = closeModal();
  let ext;
  var error = document.getElementById("errorModal");
  var close = document.getElementById("closeBtn");
  close.style.display = "inline"

  wart = document.getElementById("search1").value;
  // console.log(wart);


  if (names.indexOf(wart) === -1) {
    error.style.display = "block";

  } else {
    ext = extensions[names.indexOf(wart)];



    switch (ext) {

      case ".glb":
        var modal = document.getElementById("modelViewer");
        document.getElementById("model-viewer").src = "./resources/Akta/" + wart + ext;
        modal.style.display = "block";

        break;

      case ".jpg":


        var modal = document.getElementById("imgViewer");
        document.getElementById("myimage").src = "./resources/Akta/"+wart+ext;
        modal.style.display = "block";
        //magnify("myimage",2);

        break;

        case ".png":


        var modal = document.getElementById("imgViewer");
        document.getElementById("myimage").src = "./resources/Akta/"+wart+ext;
        modal.style.display = "block";
        //magnify("myimage",2);

        break;

        case ".webm":


        var modal = document.getElementById("videoViewer");
        document.getElementById("videoSource").src = "./resources/Akta/"+wart+ext;
        var video = document.getElementById("myVideo");
        video.load();
        modal.style.display = "block";
        //magnify("myimage",2);

        break;






    }







  }

}

function closeModal() {
  var modal = document.getElementById("modelViewer");
  var modal2 = document.getElementById("errorModal");
  var modal3 = document.getElementById("imgViewer");
  var modal4 = document.getElementById("videoViewer");
  var video = document.getElementById("myVideo");
  var modal5 = document.getElementById("reportModal");


  modal.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
  modal4.style.display = "none";
  modal5.style.display = "none";
  video.pause();
  video.load();


}



function magnify(imgID, zoom) {

  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize =
    img.width * zoom + "px " + img.height * zoom + "px";
  bw = 3;
  w = glass.offsetWidth / 8;
  h = glass.offsetHeight / 8;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - w / zoom) {
      x = img.width - w / zoom;
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - h / zoom) {
      y = img.height - h / zoom;
    }
    if (y < h / zoom) {
      y = h / zoom;
    }
    /* Set the position of the magnifier glass: */
    glass.style.left = x - w + "px";
    glass.style.top = y - h + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition =
      "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}

function startGame(){
  document.getElementById("start-id").style.backgroundColor = "rgba(255, 255, 255, 0)";
  document.getElementById("start-button").style.display = "none";
  document.getElementById("start-image-container").classList.toggle("start-image-class-clicked");
 
 setTimeout(function(){
  document.getElementById("start-id").style.display = "none";


 },3000);


}




