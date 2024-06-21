#  WEB APLIKACIJA RENT A CAR

## UVOD

Web-aplikacija „Rent a car“ izrađena je kao projekt u sklopu kolegija Programsko inženjerstvo.

![Kviz](/DOKUMENTACIJA/IMAGES/Pocetna.png)

## FUNKCIONALNOSTI: 
 - Početna stranica i pregled dostupnih vozila
 - Registracija korisnika
 - Prijava korisnika
 - Kao prijavljeni korisnik, mogućnost slanja zahtjeva za vozilo
 - Kao prijavljeni korisnik mogućnost pregleda svog osobnog profila u kojemu se može pregledati: osobni podaci, izmjeniti osobni podaci, prikaz povijesti ugovora, prikaz trenutnog ugovora, pregled svih poslanih zahtjeva te promjena lozinke
 - Prijava zaposlenika kojemu su podaci dodjeljeni od strane tvrtke
 - zaposlenik ima mogućnost pregleda, unošenja, uređivanja i brosanja svih aspekata koji se koriste unutar aplikacije kao što su zahtjevi, ugovori, izrada ugovora, izrada računa, praćenje sutomobila itd.


 ![Pitanje](/DOKUMENTACIJA/IMAGES/PitanjePrimjer.png)![Kraj](/DOKUMENTACIJA/IMAGES/Kraj.png)



## ALATI
- VS code
- React (18.3.1)
- Node.js
- Sequelize
- axios (1.6.8)
- bcrypt (5.1.1)
- bootstrap (5.3.3)
- jsonwebtoken (9.0.2)
- multer (1.4.5.-lts.1)
- popper.js (1.16.1)
- swagger (0.7.5)
- cypress (13.11.0)
- cors (2.8.5)
- express (4.19.2)
- mysql2 (3.9.7)


## CLONE

```
$ git clone https://github.com/E-Begich/Programsko-RentaCar
```

## POKRETANJE APLIKACIJE

1. Na računalu kreirati mapu koju potom otvaramo pomoću VS Code-a (File -> Open folder -> odabir kreirane mape)
2. Otvorimo Terminal -> New Terminal
3. U terminalu pozvati naredbu za kloniranje i pričekati da se klonira a zatim naredbom pozicioniramo se u branch development "git witch development"
4. U terminalu pokrenemo server naredbom "node server.js"
5. Pozivamo naredbu za instalaciju potrebnih paketa **npm install express mysql cors body-parser** i pričekati da se instalira
6. Otvaramo novi terminal te se pozicioniramo u rentacar
7. Aplikaciju pokrećeno naredbom "npm start" ili "npm run start"
