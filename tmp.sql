CREATE TABLE patients (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    last_name VARCHAR(40),
    first_name VARCHAR(50),
    phone_number VARCHAR(10),
    mail VARCHAR(50),
    alergenes VARCHAR(50),
    regimes VARCHAR(50)
);


CREATE TABLE allergens (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);

CREATE TABLE diets (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    description VARCHAR(255)
);

CREATE TABLE reciepes (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,

)