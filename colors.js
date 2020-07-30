var Links = {
  setColor:function(color){
  //   var links = document.querySelectorAll('a');
  //   var i = 0;
  //   while(i<links.length){
  //     links[i].style.color=color;
  //     i=i+1;
  //   }
  $('a').css('color',color);
  }
}

function setColer(color){
  var links = document.querySelectorAll('a');
  var i = 0;
  while(i<links.length){
    links[i].style.color=color;
    i=i+1;
  }
}
function toggle(self){
  var target = document.querySelector('body').style;
  if(self.value == 'night'){
    target.backgroundColor='black';
    target.color='white';
    self.value = 'day';
    Links.setColor('powderblue');
  }else{
    target.backgroundColor='white';
    target.color='black';
    self.value = 'night';
    setColer('blue');
  }
}
