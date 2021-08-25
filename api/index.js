const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const api = express();
const porta = 3000;
const router = express.Router();

const routers = require('./router/routers')

api.use(cors());

api.use(express.json({extended:true}));
api.use(express.urlencoded({extended:true}));

router.get('/', (req, resp) => resp.json({
    messagem:"=> API Online...",
}));

api.use('/', router);
api.use('/cadastro', routers);

api.listen(porta);
console.log("Run API Express na porta: " + porta);