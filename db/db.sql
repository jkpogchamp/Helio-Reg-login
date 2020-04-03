create database helio;

use helio;

create table users(
id int not null auto_increment primary key,
email varchar(30) not null,
password text not null
);