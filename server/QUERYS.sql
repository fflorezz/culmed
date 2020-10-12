USE culmed;
DROP TABLE Event;
--
-- CREATE TABLE USER
--
CREATE TABLE User(
  id VARCHAR(50) NOT NULL,
  userName VARCHAR(50) NOT NULL,
  email VARCHAR(75) NOT NULL,
  password VARCHAR(255) NOT NULL,
  avatarImg VARCHAR(512),
  PRIMARY KEY (id)
);
--
-- CREATE TABLE EVENT
--
CREATE TABLE Event(
  id VARCHAR(50) NOT NULL,
  title VARCHAR(100) NOT NULL,
  startDate TIMESTAMP NOT NULL,
  endDate TIMESTAMP,
  location VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50),
  price DECIMAL(8, 2),
  eventImg VARCHAR(512),
  authorId VARCHAR(50) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (authorId) REFERENCES User(id)
);
--
-- INSERT USERS
--
INSERT INTO User
VALUES(
    "asfas5054",
    "Eduardo1975",
    "eduardo@mail.com",
    "test123",
    "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
INSERT INTO User
VALUES(
    "faafa56af",
    "Mateo Lopez",
    "matlo@mail.com",
    "test123",
    "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
INSERT INTO User
VALUES(
    "segtf45sf",
    "Lili_dev",
    "lilianadev@mail.com",
    "test123",
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
--
-- INSERT EVENTS
--
INSERT INTO Event
VALUES(
    "asdf87asf",
    "Concierto al Aire Libre",
    "2020-10-12 16:00:00",
    "2020-10-12 22:00:00",
    "Jardín Botánico, Medellín",
    "Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qu.",
    "música",
    20000,
    "https://images.pexels.com/photos/301987/pexels-photo-301987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "asfas5054"
  );
INSERT INTO Event
VALUES(
    "asdf87ipio",
    "Danza en el Barrio",
    "2020-11-20 16:00:00",
    "2020-11-20 22:00:00",
    "Jardín Botánico, Medellín",
    "Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qu.",
    "música",
    0,
    "https://images.pexels.com/photos/690597/pexels-photo-690597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "asfas5054"
  );
INSERT INTO Event
VALUES(
    "tgd983kuidh",
    "Huertas Sostenibles",
    "2020-11-05 18:00:00",
    "2020-11-05 20:00:00",
    "Parque barrio la Floresta, Medellín",
    "Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qu.",
    "música",
    10000,
    "https://images.pexels.com/photos/4505171/pexels-photo-4505171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "faafa56af"
  );
INSERT INTO Event
VALUES(
    "hlfg9832dj",
    "Introdución a JavaScript",
    "2020-11-20 14:00:00",
    "2020-11-20 18:00:00",
    "Casa Tres Patios, Medellín",
    "Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qu.",
    "tecnología",
    10000,
    "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "faafa56af"
  );
INSERT INTO Event
VALUES(
    "fpod00337f",
    "Redefiniendo el Futuro",
    "2020-12-20 14:00:00",
    "2020-12-20 16:00:00",
    "UNLOCKER, Medellín",
    "Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qu.",
    "tecnología",
    0,
    "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "segtf45sf"
  );
INSERT INTO Event
VALUES(
    "03wko553",
    "Conceptos básicos de Zoom",
    "2020-12-20 14:00:00",
    "2020-12-20 16:00:00",
    "Kaya, Medellín",
    "Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qu.",
    "tecnología",
    25000,
    "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "segtf45sf"
  );