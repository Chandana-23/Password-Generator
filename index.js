function fun() {
  var pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
  for (let i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }

  document.getElementById("answer").innerHTML = "Password is " + pass;
}
