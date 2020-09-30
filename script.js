let text = $(".jumbotron .display-4").text();
text = text.replace("J", "<span class='bigJ'>J</span>");
$(".jumbotron .display-4").html(text);
console.log("Replaced!", text);