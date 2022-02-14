CREATE DATABASE hackport;

--set extension 
CREATE TABLE tbl_Login(
    user_id uuid DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(25) NOT NULL PRIMARY KEY,
    user_type VARCHAR(25) NOT NULL,
    f_name VARCHAR(25) NOT NULL,
    l_name VARCHAR(25) NOT NULL,
    ph_no NUMERIC(10) NOT NULL,
    password VARCHAR(25) NOT NULL,
    status VARCHAR(10) NOT NULL
);

INSERT INTO tbl_Login(user_name,user_type,f_name,l_name,ph_no,password,status) VALUES ('admin@gmail.com','admin','admin','admin','8921669826','123','active');