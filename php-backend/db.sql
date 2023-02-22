create table if not exists products (
	sku varchar(255),
	name varchar(255),
	price decimal(11,2));

insert into products values
	('JVC200123', 'Acme Disc', 1.52),
	('GGWP007', 'War and Peace', 20.00);
