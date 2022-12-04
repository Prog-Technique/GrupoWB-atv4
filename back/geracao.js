const clientes = [
    {
        nome: 'Amanda',
        nomeSocial: 'Dika',
        cpf: '1111111111',
        dataEmissaoCpf: '01/01/2001',
        genero: 'Feminino',
        rg: '1111111111000',
        dataEmissao:'01/01/2011',
        telefoneDDD: '12',
        telefoneNumero: '1111111111'
    },
    {
        nome: 'Barbara',
        nomeSocial: 'Babi',
        cpf: '222222222',
        dataEmissaoCpf: '02/02/2002',
        genero: 'Feminino',
        rg: '222222222000',
        dataEmissao:'02/02/2012',
        telefoneDDD: '12',
        telefoneNumero: '222222222'
    },
    {
        nome: 'Carlos',
        nomeSocial: 'Cadu',
        cpf: '3333333333',
        dataEmissaoCpf: '03/03/2003',
        genero: 'Masculino',
        rg: '333333333000',
        dataEmissao:'03/03/2013',
        telefoneDDD: '12',
        telefoneNumero: '333333333'
    },
    {
        nome: 'Daniela',
        nomeSocial: 'Dani',
        cpf: '4444444444',
        dataEmissaoCpf: '04/04/2004',
        genero: 'Feminino',
        rg: '4444444444000',
        dataEmissao:'04/04/2014',
        telefoneDDD: '11',
        telefoneNumero: '4444444444'
    },
    {
        nome: 'Eduarda',
        nomeSocial: 'Duda',
        cpf: '5555555555',
        dataEmissaoCpf: '05/05/2005',
        genero: 'Feminino',
        rg: '5555555555000',
        dataEmissao:'05/05/2015',
        telefoneDDD: '43',
        telefoneNumero: '5555555555'
    },
    {
        nome: 'Felipe',
        nomeSocial: 'Felps',
        cpf: '6666666666',
        dataEmissaoCpf: '06/06/2006',
        genero: 'Masculino',
        rg: '6666666666000',
        dataEmissao:'06/06/2016',
        telefoneDDD: '31',
        telefoneNumero: '6666666666'
    },
    {
        nome: 'Roberto',
        nomeSocial: 'Roberto',
        cpf: '7777777777',
        dataEmissaoCpf: '23/02/2002',
        genero: 'Masculino',
        rg: '7777777777000',
        dataEmissao:'23/02/2002',
        telefoneDDD: '47',
        telefoneNumero: '7777777777'
    },
    {
        nome: 'Thalles',
        nomeSocial: 'Thalles',
        cpf: '8888888888',
        dataEmissaoCpf: '14/07/2001',
        genero: 'Masculino',
        rg: '8888888888000',
        dataEmissao:'14/07/2001',
        telefoneDDD: '74',
        telefoneNumero: '8888888888'
    },
    {
        nome: 'Jefferson',
        nomeSocial: 'Jefferson',
        cpf: '999999999',
        dataEmissaoCpf: '11/02/1999',
        genero: 'Masculino',
        rg: '999999999000',
        dataEmissao:'11/02/1999',
        telefoneDDD: '63',
        telefoneNumero: '999999999'
    },
    {
        nome: 'Gerson',
        nomeSocial: 'Gerson',
        cpf: '2111111111',
        dataEmissaoCpf: '20/01/2000',
        genero: 'Masculino',
        rg: '2111111111000',
        dataEmissao:'20/01/2000',
        telefoneDDD: '65',
        telefoneNumero: '2111111111'
    },
    {
        nome: 'Walter',
        nomeSocial: 'Walter',
        cpf: '31111111111',
        dataEmissaoCpf: '07/03/2002',
        genero: 'Masculino',
        rg: '31111111111000',
        dataEmissao:'07/03/2002',
        telefoneDDD: '74',
        telefoneNumero: '31111111111'
    },
    {
        nome: 'Renato',
        nomeSocial: 'Renato',
        cpf: '41111111111',
        dataEmissaoCpf: '05/09/1989',
        genero: 'Masculino',
        rg: '41111111111000',
        dataEmissao:'05/09/1989',
        telefoneDDD: '64',
        telefoneNumero: '41111111111'
    },
    {
        nome: 'Mario',
        nomeSocial: 'Mario',
        cpf: '51111111111',
        dataEmissaoCpf: '09/09/1999',
        genero: 'Masculino',
        rg: '51111111111000',
        dataEmissao:'09/09/1999',
        telefoneDDD: '31',
        telefoneNumero: '51111111111'
    },
    {
        nome: 'Marcio',
        nomeSocial: 'Marcio',
        cpf: '61111111111',
        dataEmissaoCpf: '10/10/2010',
        genero: 'Masculino',
        rg: '61111111111000',
        dataEmissao:'10/10/2010',
        telefoneDDD: '45',
        telefoneNumero: '61111111111'
    },
    {
        nome: 'Marcos',
        nomeSocial: 'Marcos',
        cpf: '711111111111',
        dataEmissaoCpf: '20/12/2012',
        genero: 'Masculino',
        rg: '711111111111000',
        dataEmissao:'20/12/2012',
        telefoneDDD: '85',
        telefoneNumero: '711111111111'
    },
    {
        nome: 'Matheus',
        nomeSocial: 'Matheus',
        cpf: '81111111111',
        dataEmissaoCpf: '02/02/1982',
        genero: 'Masculino',
        rg: '81111111111000',
        dataEmissao:'02/02/1982',
        telefoneDDD: '95',
        telefoneNumero: '81111111111'
    },
    {
        nome: 'João',
        nomeSocial: 'João',
        cpf: '9111111111',
        dataEmissaoCpf: '19/01/2004',
        genero: 'Masculino',
        rg: '9111111111000',
        dataEmissao:'19/01/2004',
        telefoneDDD: '75',
        telefoneNumero: '9111111111'
    },
    {
        nome: 'Luana',
        nomeSocial: 'Luana',
        cpf: '1011111111',
        dataEmissaoCpf: '04/11/1998',
        genero: 'Feminino',
        rg: '1011111111000',
        dataEmissao:'04/11/1998',
        telefoneDDD: '53',
        telefoneNumero: '1011111111'
    },
    {
        nome: 'Barnabé',
        nomeSocial: 'Barnabé',
        cpf: '1211111111',
        dataEmissaoCpf: '01/05/2000',
        genero: 'Feminino',
        rg: '1211111111000',
        dataEmissao:'01/05/2000',
        telefoneDDD: '97',
        telefoneNumero: '1211111111'
    },
    {
        nome: 'Otávia',
        nomeSocial: 'Otávia',
        cpf: '1311111111',
        dataEmissaoCpf: '28/08/2008',
        genero: 'Feminino',
        rg: '1311111111000',
        dataEmissao:'28/08/2008',
        telefoneDDD: '46',
        telefoneNumero: '1311111111'
    },
    {
        nome: 'Pedro',
        nomeSocial: 'Pedro',
        cpf: '1411111111',
        dataEmissaoCpf: '12/11/2010',
        genero: 'Masculino',
        rg: '1411111111000',
        dataEmissao:'12/11/2010',
        telefoneDDD: '73',
        telefoneNumero: '1411111111'
    },
    {
        nome: 'Paulo',
        nomeSocial: 'Paulo',
        cpf: '1511111111',
        dataEmissaoCpf: '22/05/2015',
        genero: 'Masculino',
        rg: '1511111111000',
        dataEmissao:'22/05/2015',
        telefoneDDD: '51',
        telefoneNumero: '1511111111'
    },
    {
        nome: 'Evin',
        nomeSocial: 'Evin',
        cpf: '1611111111',
        dataEmissaoCpf: '23/05/2004',
        genero: 'Feminino',
        rg: '1611111111000',
        dataEmissao:'23/05/2004',
        telefoneDDD: '13',
        telefoneNumero: '1611111111'
    },
    {
        nome: 'Geralda',
        nomeSocial: 'Geralda',
        cpf: '1711111111',
        dataEmissaoCpf: '10/07/1999',
        genero: 'Feminino',
        rg: '1711111111000',
        dataEmissao:'10/07/1999',
        telefoneDDD: '52',
        telefoneNumero: '1711111111'
    },
    {
        nome: 'Eli',
        nomeSocial: 'Eli',
        cpf: '1811111111',
        dataEmissaoCpf: '08/01/1989',
        genero: 'Feminino',
        rg: '1811111111000',
        dataEmissao:'08/01/1989',
        telefoneDDD: '84',
        telefoneNumero: '1811111111'
    },
    {
        nome: 'Lourival',
        nomeSocial: 'Lourival',
        cpf: '1911111111',
        dataEmissaoCpf: '03/10/2000',
        genero: 'Masculino',
        rg: '1911111111000',
        dataEmissao:'03/10/2000',
        telefoneDDD: '58',
        telefoneNumero: '1911111111'
    },
    {
        nome: 'Van',
        nomeSocial: 'Van',
        cpf: '2011111111',
        dataEmissaoCpf: '09/11/2005',
        genero: 'Feminino',
        rg: '2011111111000',
        dataEmissao:'09/11/2005',
        telefoneDDD: '62',
        telefoneNumero: '2011111111'
    },
    {
        nome: 'Thais',
        nomeSocial: 'Thais',
        cpf: '2211111111',
        dataEmissaoCpf: '17/02/1999',
        genero: 'Feminino',
        rg: '2211111111000',
        dataEmissao:'17/02/1999',
        telefoneDDD: '67',
        telefoneNumero: '2211111111'
    },
    {
        nome: 'Alberto',
        nomeSocial: 'Alberto',
        cpf: '2311111111',
        dataEmissaoCpf: '15/06/1980',
        genero: 'Masculino',
        rg: '2311111111000',
        dataEmissao:'15/06/1980',
        telefoneDDD: '46',
        telefoneNumero: '2311111111'
    },
    {
        nome: 'Reinaldo',
        nomeSocial: 'Reinaldo',
        cpf: '2411111111',
        dataEmissaoCpf: '02/04/2006',
        genero: 'Masculino',
        rg: '2411111111000',
        dataEmissao:'02/04/2006',
        telefoneDDD: '231',
        telefoneNumero: '2411111111'
    }
]
const produtos = [
    {
        produto: 'Pinça',
        valor: 20.00
    },
    {
        produto: 'Tesoura',
        valor: 20.00
    },
    {
        produto: 'Maquina',
        valor: 60.00
    },
    {
        produto: 'Secador',
        valor: 20.00
    },
    {
        produto: 'Pente',
        valor: 10.00
    },
    {
        produto: 'Gel',
        valor: 8.00
    },
    {
        produto: 'Creme de Cabelo',
        valor: 10.00
    },
    {
        produto: 'Toalha',
        valor: 12.00
    },
    {
        produto: 'Esmalte',
        valor: 5.00
    },
    {
        produto: 'Kit de Maquiagem',
        valor: 20.00
    },
    {
        produto: 'Shampoo',
        valor: 9.00
    },
    {
        produto: 'Baby liss',
        valor: 35.00
    },
]
const servicos = [
    {
        servico: 'Corte de Cabelo Masculino',
        valor: 20.00
    },
    {
        servico: 'Corte de Cabelo Feminino',
        valor: 30.00
    },
    {
        servico: 'Corte de Barba',
        valor: 10.00
    },
    {
        servico: 'Hidratação',
        valor: 10.00
    },
    {
        servico: 'Pintar cabelo',
        valor: 17.00
    },
    {
        servico: 'Tratamento de fios',
        valor: 20.00
    },
    {
        servico: 'Lavar Cabelo',
        valor: 12.00
    },
    {
        servico: 'Arrumar cabelo',
        valor: 10.00
    },
    {
        servico: 'Unha',
        valor: 15.00
    },
    {
        servico: 'Tratamento de Pele',
        valor: 25.00
    },
]

async function connect(){
    if(global.connection && global.connection.state !== "disconnected")
    return global.connection;
  
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:fatec@localhost:3306/wb");
    global.connection = connection;
    return connection;
}


async function Cliente(nome,nome_social,genero,cpf,rgs,telefones){
    const con = await connect();
    con.query(`insert into clientes (nome,nome_social,genero,cpf) 
    values('${nome}','${nome_social}','${genero}','${cpf}')`)
    id = await con.query(`select cliente_id from clientes where cpf = '${cpf}';`)
    id =  id[0][0].cliente_id
    for(k=0; rgs.length>k; ++k){
        var rgdado = rgs[k]
        var rg = rgdado[0]
        var data = rgdado[1]
        con.query(`insert into rgs (rg,rg_data,cliente_id) 
        values('${rg}','${data}','${id}')`)
    }
    for(k=0; telefones.length>k; ++k){
        con.query(`insert into telefones (telefone,cliente_id) 
        values('${telefones[k]}','${id}')`)
    }
}
async function produtoc(produto,preco){
    const con = await connect();
    con.query(`insert into produtos (produto,preco) 
    values('${produto}','${preco}')`)
}
async function servicoc(servico,preco){
    const con = await connect();
    con.query(`insert into servicos (servico,preco) 
    values('${servico}','${preco}')`)
}
async function adicionar(item,id,relacao,quantidade){
    const con = await connect();
    [rows] = await con.query(`select quantidade from relacao${relacao}s where cliente_id = ${id} and ${relacao}_id = ${item};`);
    if(rows.length == 0){
        if(quantidade == 0){
            quantidade = 1
        }
        con.query(`insert into relacao${relacao}s(cliente_id, ${relacao}_id, quantidade) values(${id},${item}, ${quantidade});`)
    }
}

for(k=0; clientes.length>k; ++k){
    var cliente = clientes[k]
    Cliente(cliente.nome,cliente.nomeSocial,cliente.genero,cliente.cpf,[cliente.rg,cliente.dataEmissao],cliente.telefoneDDD+' '+cliente.telefoneNumero)
}

for(k=0; produtos.length>k; ++k){
    var produto = produtos[k]
    produtoc(produto.produto, produto.valor)    
}

for(k=0; servicos.length>k; ++k){
    var servico = servicos[k]
    servicoc(servico.servico, servico.valor)    
}

function numeroAle(){
    var res = Math.floor(Math.random() * 100)
    if(res == 0){
        res = 1
    }
    return res
}

function relacionar(){
    for(k=0; 40>=k; ++k){
        var cod = Math.floor(numeroAle()/10);
        if(cod == 0){
            cod = 1
        }
    
        chave = true
        while(chave){
            var ale = numeroAle()
            if(ale < 31){
                var pessoa = ale
                chave = false
            }
        }

        chave = true
        while(chave){
            var quant = numeroAle()
            if(quant < 51 && quant > 0){
                quant = Math.floor(quant/10)
                chave = false
            }
        }

    
        if(numeroAle() > 51){
            var relacao = 'produto'
        }else{
            var relacao = 'servico'
        }
    
        adicionar(cod,pessoa,relacao,quant)
    }
}
relacionar()