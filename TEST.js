function test(){
	var jsonfile = '{ \
    "id": 1, \
    "name": "Lista de Banco de Dados", \
    "author": "cremoso", \
    "created_at": "06/02/2013", \
    "questions": [ \
        { \
            "id": 1, \
            "content": "O que eh normalizacao", \
            "answers": [ \
                { \
                    "id": 1, \
                    "author": "chagas", \
                    "created_at": "06/02/2013", \
                    "content": "Eh um conjunto de normas ... bla bla ...", \
                    "ranking": [ \
                        { \
                            "user": "du" \
                        }, \
                        { \
                            "user": "diego" \
                        } \
                    ] \
                } \
            ] \
        } \
    ] \
}';
	alert('oi');

	var list = JSON.parse(jsonfile);
	alert(list.questions[0].answers[0].author);
	alert(list.name);
}