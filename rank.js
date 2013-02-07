function onRank(list, question_id, answer_id, user_id){
	var answer = list.questions[question_id].answers[answer_id];
	if(answer.ranking[user_id] == undefined)//like
		answer.ranking[user_id] = user_id;
	else //dislike
		delete answer.ranking[user_id];
}

function olamundo(){
	alert('Hello world!');
}