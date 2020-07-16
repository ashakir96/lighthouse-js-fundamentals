function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
      line += "* "
    }
    return line + "\n";
  }

  function buildTriangle(length) {
    let x = "";  
    for (let i = 1; i <= length; i++) {
    x += makeLine(i)      
      }
      return x
    }


  console.log(buildTriangle(10));