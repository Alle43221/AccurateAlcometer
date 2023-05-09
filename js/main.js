function isCollide(a, b) {
  let aRect = a.getBoundingClientRect();
  let bRect = b.getBoundingClientRect(); //circle
  let X=bRect.top+bRect.height/2;
  let Y=bRect.left+bRect.width/2;

  //alert(aRect.width + " " +aRect.height );

  return (
    ((aRect.top-X)*(aRect.top-X) + (aRect.left-Y)*(aRect.left-Y) < (bRect.width/2)*(bRect.width/2)) &&
    ((aRect.top-X)*(aRect.top-X) + (aRect.right-Y)*(aRect.right-Y) < (bRect.width/2)*(bRect.width/2)) &&
    ((aRect.bottom-X)*(aRect.bottom-X) + (aRect.left-Y)*(aRect.left-Y) < (bRect.width/2)*(bRect.width/2)) &&
    ((aRect.bottom-X)*(aRect.bottom-X) + (aRect.right-Y)*(aRect.right-Y) < (bRect.width/2)*(bRect.width/2))
  );
}

function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function circle(){
  let x =randint(0, 550);
  let y =randint(0, 1400);
  let a =document.createElement("p");
  a.innerText="X";
  a.color="black";
  a.style.position="absolute";
  a.style.zIndex="3";
  a.style.top=x + 'px';
  a.style.left=y + 'px';

  let parent = document.getElementById("container");
  parent.appendChild(a);

  if(isCollide(a, document.getElementById("circle")))
  {
    document.getElementById("nextbutton").classList.remove("next");
    document.getElementById("nextbutton").classList.add("start");
  }
  else alert ('You really are drunk!');
}

function incircle(event){
  let detcircle=document.getElementById('circle').getBoundingClientRect();
  let X=detcircle.top+detcircle.height/2;
  let Y=detcircle.left+detcircle.width/2;
  let x = event.clientY-13;
  let y = event.clientX-8;
  return ((((x-13 - X) * (x-13- X) + (y-10 - Y) * (y-10 - Y)) <= ((detcircle.width / 2) * (detcircle.width / 2))) ||
    (((x-13 - X) * (x-13 - X) + (y+10 - Y) * (y+10 - Y)) <= ((detcircle.width / 2) * (detcircle.width / 2))) ||
      (((x+13 - X) * (x+13 - X) + (y+10 - Y) * (y+10- Y)) <= ((detcircle.width / 2) * (detcircle.width / 2))) ||
        (((x+13- X) * (x+13 - X) + (y-10 - Y) * (y-10- Y)) <= ((detcircle.width / 2) * (detcircle.width / 2)))
  );
}

function noncircle(event){
  if(incircle(event)===true)
    circle();
  else if(event.target === document.getElementById("nextbutton"));
  else if(event.target === document.getElementById("back"));
  else if(Array.from(document.getElementsByTagName('p')).includes(event.target));
  else{

    let x = event.clientX-8;
    let y = event.clientY-13;

    let a = document.createElement("p");

    a.innerText="X";
    a.color="black";
    a.style.position="absolute";
    a.style.zIndex="3";
    a.style.top=y + 'px';
    a.style.left=x + 'px';

    let parent = document.getElementById("container");
    parent.appendChild(a);

    alert ('You really are drunk!');
  }
}


