function buttonFunction() {
  
  // Makes variables from the textarea
  var rString = document.getElementById("getR").value;
  var gString = document.getElementById("getG").value;
  var bString = document.getElementById("getB").value;
  
  // Turns the variables into Integers
  var r = parseInt(rString);
  var g = parseInt(gString);
  var b = parseInt(bString);
  
  // Checks to see if they are a number
  if (r === parseInt(r, 10) && g === parseInt(g, 10) && b === parseInt(b, 10)) {
    
    // Checks to see if the RGB's are within the posoble range (0-255)
    if (r > 255) {
      alert("Your R value is to high.  So we made it 255.  (Which is the highest)");
      r = Number(255);
    }
    
    if (r < 0) {
      alert("Your R value is to low.  So we made it 0.  (Which is the Lowest)");
      r = Number(0);
    }
    
    if (g > 255) {
      alert("Your G value is to high.  So we made it 255.  (Which is the highest)");
      g = Number(255);
    }
    
    if (g < 0) {
      alert("Your G value is to low.  So we made it 0.  (Which is the Lowest)");
      g = Number(0);
    }
    
    if (b > 255) {
      alert("Your B value is to high.  So we made it 255.  (Which is the highest)");
      b = Number(255);
    }
    
    if (b < 0) {
      alert("Your B value is to low.  So we made it 0.  (Which is the Lowest)");
      b = Number(0);
    }
    
    // Converts RGB's into ργβL format.
    var ρ = (1 / (r+g+b)) * r;
    var γ = (1 / (r+g+b)) * g;
    var β = (1 / (r+g+b)) * b;
    var l = Math.max(r, g, b);
  
    // Dilivers the finished ργβL values
    alert("Your ρ value is " + ρ + ".");
    alert("Your γ value is " + γ + ".");
    alert("Your β value is " + β + ".");
    alert("Your l value is " + l + ".");
    
  } else {
    
    // Alerts the user if they incorectly filled out the sheet.
    alert("Make sure you typed a valid number, and have all the fields filled.");
    
  }
}