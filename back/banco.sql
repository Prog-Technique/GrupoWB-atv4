create database wb;
use wb;

create table clientes(
cliente_id int primary key auto_increment,
nome varchar(30),
nome_social varchar(30),
estado varchar(30),
cidade varchar(30),
bairro varchar(30),
rua varchar(30),
numero varchar(30),
codigoPostal varchar(30),
info varchar(30)
);