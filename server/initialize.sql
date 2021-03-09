DROP TABLE IF EXISTS usersContact, usersAddress, users;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE usersContact (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  phone1 VARCHAR(50),
  phone2 VARCHAR(50),
  email VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
);

CREATE TABLE usersAddress (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  address VARCHAR(100),
  city VARCHAR(50),
  county VARCHAR(50),
  state VARCHAR(50),
  zip VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
);

INSERT INTO users
	(first_name, last_name)
VALUES 
  ("James","Butt"),
  ("Josephine","Darakjy"),
  ("Art","Venere"),
  ("Lenna","Paprocki"),
  ("Donette","Foller"),
  ("Simona","Morasca"),
  ("Mitsue","Tollner"),
  ("Leota","Dilliard"),
  ("Sage","Wieser"),
  ("Kris","Marrier"),
  ("Minna","Amigon");

INSERT INTO usersContact
	(user_id, phone1, phone2, email)
VALUES 
  (92,"626-572-1096","626-696-2777","cory.gibes@gmail.com"),
  (332,"607-407-3716","607-350-7690","kirk.herritt@aol.com"),
  (177,"510-677-9785","510-942-5916","joesph_degonia@degonia.org"),
  (495,"415-423-3294","415-926-6089","lai@gmail.com"),
  (207,"415-306-7897","415-874-2984","norah.waymire@gmail.com"),
  (398,"508-456-4907","508-658-7802","levi.munis@gmail.com"),
  (201,"817-765-5781","817-577-6151","barrett.toyama@toyama.org"),
  (237,"703-322-4041","703-938-7939","taryn.moyd@hotmail.com"),
  (496,"208-709-1235","208-206-9848","bgillaspie@gillaspie.com"),
  (421,"973-210-3994","973-491-8723","catarina_gleich@hotmail.com"),
  (28,"410-669-1642","410-235-8738","ezekiel@chui.com");

INSERT INTO usersAddress
	(user_id, address, city, county, state, zip)
VALUES 
  (92,"6649 N Blue Gum St","New Orleans","Orleans","LA",70116),
  (332,"4 B Blue Ridge Blvd","Brighton","Livingston","MI",48116),
  (177,"8 W Cerritos Ave #54","Bridgeport","Gloucester","NJ","08014"),
  (495,"639 Main St","Anchorage","Anchorage","AK",99501),
  (207,"34 Center St","Hamilton","Butler","OH",45011),
  (398,"3 Mcauley Dr","Ashland","Ashland","OH",44805),
  (201,"7 Eads St","Chicago","Cook","IL",60632),
  (237,"7 W Jackson Blvd","San Jose","Santa Clara","CA",95111),
  (496,"5 Boston Ave #88","Sioux Falls","Minnehaha","SD",57105),
  (421,"228 Runamuck Pl #2808","Baltimore","Baltimore City","MD",21224),
  (28,"2371 Jerrold Ave","Kulpsville","Montgomery","PA",19443);