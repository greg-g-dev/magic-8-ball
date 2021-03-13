/* JQuery wrapper */
$(document).ready(function ()
{
	var magic8Ball = {};
	$("#answer").hide();
	magic8Ball.listOfAnswers = ["It is certain.",
	"It is decidedly so.",
	"Without a doubt.",
	"Yes – definitely.",
	"You may rely on it.",
	"As I see it, yes.",
	"Most likely.",
	"Outlook good.",
	"Yes.",
	"Signs point to yes.",
	"Reply hazy, try again.",
	"Ask again later.",
	"Better not tell you now.",
	"Cannot predict now.",
	"Concentrate and ask again.",
	"Don't count on it.",
	"My reply is no.",
	"My sources say no.",
	"Outlook not so good.",
	"Very doubtful."];
	magic8Ball.getAnswer = function(question)
	{
		var randomAnswerIndex = Math.floor(Math.random()*this.listOfAnswers.length);
		var randomAnswer = this.listOfAnswers[randomAnswerIndex];
		console.log("Your question: " + question);
		console.log("Magic 8 Ball answer: " + randomAnswer);
		$("#answer").text(randomAnswer);
		$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		$("#8ball").effect("shake");
		$("#answer").fadeIn(4000);
	};
	var askquestion = function()
	{
		$("#answer").hide();
		$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
		setTimeout(function () {
			var question = prompt("What is your question");
			magic8Ball.getAnswer(question);
		},500);
	};
	$("#questionButton").click(askquestion);
}
);
