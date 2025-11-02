function analyze() {
  var name = document.getElementById("name").value;
  var favnumber = document.getElementById("fav").value;

  if (name === "" || favnumber === "") {
    alert("Please enter both name and favorite number!");
    return;
  }

  //   Convert string to number 
  favnumber = Number(favnumber);

  //  Generate random lucky number 
  var luckyNumber = Math.floor(Math.random() * 100) + 1;

  //   Control decimals 
  var score = (luckyNumber / 7.3).toFixed(2);

  //   Use rounding 
  var rounded = Math.round(score);

  // Motivational quotes array
  var quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don't let yesterday take up too much of today.",
    "It's not whether you get knocked down, it's whether you get up.",
    "If you are working on something exciting, it will keep you motivated.",
    "Success is not in what you have, but who you are."
  ];
  var randomIndex = Math.floor(Math.random() * quotes.length);

  //  Final message
  var message =
  "<p><strong>Hello " + name + "!</strong></p>" +
  "<p>Your name has <b>" + name.length + "</b> letters.</p>" +
  "<p>The first 3 letters of your name are <b>" + name.slice(0, 3) + "</b>.</p>" +
  "<p>Your favorite number : <b>" + favnumber + "</b></p>" +
  "<p>Your lucky number is <b>" + luckyNumber + "</b></p>" +
  "<p>Your special score : <b>" + rounded + "</b></p>";

if (luckyNumber > 50) {
  message = message + "<p>🎉 You’re super lucky! 🍀</p>";
} else {
  message = message + "<p>😅 Better luck next time!</p>";
}

message = message + "<p><em>💬 \"" + quotes[randomIndex] + "\"</em></p>";
document.getElementById("output").innerHTML = message;
}
