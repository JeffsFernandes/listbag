var list="";

function vai()
{
	$.getJSON("http://localhost:3000/json/lista.json", function(data) {
		list = data;
	}

}

function onRank(question_id, answer_id, user_id){
	//$.getJSON("http://localhost:3000/json/lista.json", function(data) {
    	//if(list=="")
    	//	list = data;
    	console.log(data);
    	//alert(data.name);
    	alert(user_id);
		var answer = list.questions[question_id].answers[answer_id];
		var userId = userRanked(answer.ranking, user_id);
		if(userId == -1){ //like
			user = {"user": user_id};
			answer.ranking[answer.ranking.length] = user;
			
		}
		else //dislike
			delete answer.ranking.splice(userId, 1);

		alert(wer.ranking.length);
	//});
}

function userRanked(answer_ranking, user_id){
	for(var i=0; i < answer_ranking.length;++i){
		if(answer_ranking[i].user==user_id)
			return i;
	}
	return -1;
}