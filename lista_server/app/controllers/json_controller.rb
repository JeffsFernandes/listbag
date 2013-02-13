class JsonController < ApplicationController
  def lista
  	content = '{
			    "id": 1,
			    "name": "Lista de Banco de Dados",
			    "author": "cremoso",
			    "created_at": "06/02/2013",
			    "questions": [
			        {
			            "id": 1,
			            "content": "O que eh normalizacao?",
			            "answers": [
			                {
			                    "id": 1,
			                    "author": "chagas",
			                    "created_at": "06/02/2013",
			                    "content": "Eh um conjunto de normas ... bla bla ...",
			                    "ranking": [
			                        {
			                            "user": "du"
			                        },
			                        {
			                            "user": "diego"
			                        }
			                    ]
			                }
			            ]
			        }
			    ]
			}'
  	respond_to do |format|
	    format.html  # index.html.erb
	    format.json  { render :json => content }
  	end
  end
  def index
  	
  end
end
