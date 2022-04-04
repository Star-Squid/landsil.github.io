//random starting motivation
var motivation = Math.floor(Math.random() * 3) + 2;
console.log("Motivation: " + motivation);

var highFivesReceived  = 0;
var rounds = 0;
var treats = 0;

//a buton gets clicked - animation and action
$(".btn").click(function() {
    rounds ++;
    var currentChoice = this.id;
    animatePress(currentChoice);
    if (currentChoice === "hand"){newHand()}
    else if (currentChoice === "treat"){newTreat()}
    else {console.log(currentChoice)};
    $("#result").removeClass("hidden");
});

//when we offer a hand
function newHand(){
    updateResult();
    if (motivation >= 4){highFive()}
    else if (motivation >= 2){lightTap()}
    else if (motivation === 1){nothingHappens()}
    else if (motivation === 0){gameOver()};
    console.log("Motivation: " + motivation);
}

//when we offer a treat
function newTreat(){
    treats ++;
    $(".cat").attr("src", "images/cat7.png");
    $("#page-title").text("The cat ate the treat");
    motivationRises();
    console.log("Motivation: " + motivation);
    updateResult();

//automatic game over after 30 treats
        if (treats >= 30){
            setTimeout(function(){
                $(".cat").attr("src", "images/cat8.png");
                $("body").addClass("game-over");
                    setTimeout(function(){
                    $("body").removeClass("game-over");
                     }, 200);
                $("#page-title").text("30 treats? The cat is full and went to sleep.");
                $(".btn").fadeOut();
                updateResult();
            }, 200);
        }
}

//4 outcomes of offering the hand
function highFive(){
    $(".cat").attr("src", "images/cat3.png");
    highFivesReceived = (highFivesReceived + 1);
    $("#page-title").text("You get a high five!");
    motivationFalls();
    updateResult();
}

function lightTap(){
    $(".cat").attr("src", "images/cat4.png");
    $("#page-title").text("You get a light tap");
    motivationFalls();
    updateResult();
}

function nothingHappens(){
    $(".cat").attr("src", "images/cat6.png");
    $("#page-title").text("You get a confused look");
    motivation --;
    updateResult();
}

function gameOver(){
    $(".cat").attr("src", "images/cat5.png");
    $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
    $("#page-title").text("The cat has lost motivation. Refresh to start again.");
    updateResult();
    $(".btn").fadeOut();
}


//motivation rise and fall
function motivationFalls(){
    motivation -= (Math.floor(Math.random() * 3) +1);
    if (motivation < 0) {motivation = 0};
}

function motivationRises(){
    motivation += (Math.floor(Math.random() * 2) +1);
    if (motivation > 5) {motivation = 5};
}

//update results
function updateResult(){$("#result").text("Your result is " + highFivesReceived + " high fives in " + rounds + " moves");
}

//function for animating clicks
function animatePress(currentChoice) {
    $("#" + currentChoice).addClass("pressed");
    setTimeout(function () {
      $("#" + currentChoice).removeClass("pressed");
    }, 100);
  }


//dialog handling
var dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);

function showThisDialog() {
  document.getElementById('this-dialog').showModal();
}

function hideThisDialog() {
  document.getElementById('this-dialog').close();
}
