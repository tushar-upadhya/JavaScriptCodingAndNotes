var ul = document.getElementById("ul");
var nextBtn = document.getElementById("nextButton");
var scoreCard = document.getElementById("scoreCard");
var quizBox = document.getElementById("questionBox");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var app = {
  questions: [
    {
      q: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Personal Unit",
        "None of these",
      ],
      answer: 1,
    },
    {
      q: "What does RAM stand for?",
      options: [
        "Read After Modification",
        "Random Access Memory",
        "Random After Modification",
        "Read Access Memory",
      ],
      answer: 2,
    },

    {
      q: "Which company developed JavaScript?",
      options: ["Oracle", "Netscape", "Microsoft", "Google"],
      answer: 2,
    },

    {
      q: "What is the default value of the opacity property in CSS?",
      options: ["0.5", "1", "0", "0.1"],
      answer: 3,
    },

    {
      q: 'How do you call a function named "myFunction" in JavaScript?',
      options: [
        "call myFunction()",
        "call function myFunction()",
        "myFunction()",
        "function myFunction()",
      ],
      answer: 3,
    },
  ],
  index: 0,
  load: function () {
    if (this.index <= this.questions.length - 1) {
      quizBox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
      opt1.innerHTML = this.questions[this.index].options[0];
      opt2.innerHTML = this.questions[this.index].options[1];
      opt3.innerHTML = this.questions[this.index].options[2];
      opt4.innerHTML = this.questions[this.index].options[3];
      this.scoreCard();
    } else {
      quizBox.innerHTML = "Quiz Finished......!!!";
      opt1.style.display = "none";
      opt2.style.display = "none";
      opt3.style.display = "none";
      opt4.style.display = "none";
      nextBtn.style.display = "none";
    }
  },
  moveNext: function () {
    this.index++;
    this.load();
  },

  moveBack: function () {
    this.index--;
    this.load();
  },
  checkAnswer: function (ele) {
    var id = ele.id.split("");

    if (id[id.length - 1] == this.questions[this.index].answer) {
      this.score++;
      ele.className = "correct";
      ele.innerHTML = "Correct";
      this.scoreCard();
    } else {
      ele.className = "wrong";
      ele.innerHTML = "Wrong";
    }
  },
  notClickable: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "none";
    }
  },

  clickable: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "auto";
      ul.children[i].className = "";
    }
  },
  score: 0,
  scoreCard: function () {
    scoreCard.innerHTML = this.questions.length + "/" + this.score;
  },
};

window.onload = app.load();

function button(ele) {
  app.checkAnswer(ele);
  app.notClickable();
}

function moveNext() {
  app.moveNext();
  app.clickable();
}

function moveBack() {
  app.moveBack();
  app.clickable();
}
