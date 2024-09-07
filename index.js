setInterval(function () {
  var textInput = document.getElementById("textInput").value;
  var charLength = textInput.length;
  var redTextInput = "";
  document.getElementById("charCount").textContent = `${charLength} / 140`;

  if (charLength >= 141) {
    document.getElementById("charCount").style.color = "red";
    textInput = textInput.slice(0, 141);
    document.getElementById("textInput").style.color = "red";
  } else {
    document.getElementById("charCount").style.color = "white";
    document.getElementById("textInput").style.color = "white";
  }
}, 300);

document.getElementById("btn").onclick = function () {
  let textRaw = document.getElementById("textInput").value;
  let textEdited = textRaw.slice(0, 141);
  let textLength = textRaw.length;
  if (textLength >= 140) {
    alert("Text cant be longer than 140 characters!!!");
  } else {
    console.log(textEdited);
  }
};
