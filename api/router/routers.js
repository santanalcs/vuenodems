const express = require('express');
const router = express.Router();

const multer = require('multer');

let upload = multer();

const User = require('../model/User');
const Handller = require('../model/Handller');



router.post('/', upload.none(), function(req, resp, next){
    console.log(req.body)
    User.add(req.body, function(error, retorno){
        let resposta = new Handller();
        
        if(!error){
            if(retorno.affectedRows > 0){
                resposta.msg = 'Cadastrado com sucesso!';
            } else{
                resposta.erro = true;
                resposta.msg = 'Erro ao cadastrar!';
                console.log('erro: ', error);
            }
            resposta.dados = retorno;
        } else{
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro!';
            console.log('erro: ', error);
        }
        console.log('resp', resposta);
        resp.json(resposta);
    });
});

router.put('/',  upload.none(), function(req, resp, next){
    User.edit(req.body, function(error, retorno){
        let resposta = new Handller();
        
        if(!error){
            if(retorno.affectedRows > 0){
                resposta.msg = "Registro editado com sucesso!"
            } else{
                resposta.erro = true;
                resposta.msg = "Não foi possível editar registro.";
                console.log('erro: ', error);
            }
            resposta.dados = retorno;
        } else{
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro!";
            console.log('erro: ', error);
        }
        console.log('resp', resposta);
        resp.json(resposta);
    });
});

router.get('/', function(req, resp, next){
    User.getAll(function(error, retorno){
        let resposta = new Handller();

        if(!error){
            resposta.dados = retorno;
        } else{
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro!";
            console.log('erro: ', error);
        }
        resp.json(resposta);
    });
});

router.get('/:id?', function(req, resp, next){
    User.findId(req.params.id, function(error, retorno){
        let resposta = new Handller();

        if(!error){
            resposta.dados = retorno;
        } else{
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro!";
            console.log('erro: ', error);
        }
        resp.json(resposta);
    });
});

router.delete('/:id?', function(req, resp, next){
    User.delete(req.params.id, function(error, retorno){
        let resposta = new Handller();

        if(!error){
            if(retorno.affectedRows > 0){
                resposta.msg = "Registro apagado com sucesso!"
            } else{
                resposta.erro = true;
                resposta.msg = "Não foi possível apagar registro.";
                console.log('erro: ', error);
            }
            resposta.dados = retorno;
        } else{
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro!";
            console.log('erro: ', error);
        }
        resp.json(resposta);
    });
});

module.exports = router;
