function generateBlocks(){
  document.getElementById("container").style.display = "flex";
  
};


function getGenerateSquareColor() {
  
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}
function squareColor(){
  let color =  document.querySelectorAll('.square'); 
  for (let i = 0; i < color.length; i++) {
      color[i].style.backgroundColor = `${getGenerateSquareColor()}`;    
  }
  
}

const interval = setInterval(() => squareColor(), 1000)

