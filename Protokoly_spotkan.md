# Protoko³y spotkañ

## Aktualna lista TODO
- Zadania programistyczne s¹ na [Trello](https://trello.com/b/1PocOld8/poc-wp).
- Sprawy organizacyjne
  - Kontakty mailowe do wszystkich s¹ w OpenProject.
  - Tomek za³o¿y listê mailingow¹ dla frontendowców OpenPKW.
  - Kto nie ma konta w OpenProject, wysy³a maila do Tomka z proœb¹ o dodanie.
  - Kontakty Skypowe s¹ w dyskusji Skypowej.
  - Kto nie jest dodany do zespo³u OpenPKW w GitHubie, przysy³a Sebastianowi swoj¹ nazwê konta z GitHuba i Sebastian go dodaje.
  - Kto nie jest dodany do tablicy OpenPKW w Trello, przysy³a Sebastianowi swoj¹ nazwê konta w Trello i Sebastian go dodaje.
- Sebastian i Tomek - uporz¹dkowanie infrastruktury
  - Przeinstalowanie systemu operacyjnego na serwerze Dobromir.
  - Skonfigurowanie od nowa Continuous Delivery.
  - Skonfigurowanie œrodowiska IT (integration tests).
  - Skonfigurowanie œrodowiska UAT (testy rêczne).
  - Skonfigurowanie œrodowiska produkcyjnego (EXT? PROD?).

## 10 kwietnia 2015, Skype, 1h
Obecni: Sebastian Celejewski, Rafa³ Regu³a, Krzysztof Miksa, Kacper Jasiñski, Marcin Tokarski, Tomasz WoŸniak, Wojciech Szóstak, Marcin Marzec, Adam Nakoneczny

Tematyka:
- Przywitanie nowych osób.
- Bie¿¹ca sytuacja w projekcie OpenPKW.
- Relacja pomiêdzy projektami OPW i OpenPKW. S¹ to dwa osobne projekty. OpenPKW tworzy oprogramowanie dla PKW, do wykorzystania przez cz³onków komisji wyborczych, zgodne ze wszystkimi przepisami, wytycznymi, praktykami komisji wyborczych. OPW natomiast tworzy oprogramowanie do niezale¿nego od PKW weryfikowania wyników wyborych, wykorzystywane przez wolontariuszy, którzy bêd¹ wprowadzaæ publicznie dostêpne protoko³y wyborcze do systemu. Zespo³y OpenPKW i OPW s¹ w wiêkszej czêœci wspólne, tj. osoby tworz¹ce OpenPKW tworz¹ równie¿ OPW. Uwspólnienie dotyczy tak¿e infrastruktury, tj. OpenPKW wykorzystuje serwery OPW.
- Omówienie statusu kodu w repozytorium PocKalkulatorWyborczyHtml. Jest to prototyp, w którym æwiczymy funkcjonalnoœæ, natomiast na razie pomijamy sprawy takie, jak bezpieczeñstwo, wydajnoœæ itd.
- Omówienie ostatnich zmian w kodzie (niewiele, g³ównie uporz¹dkowanie backendu).
- Omówienie obecnej i przysz³ej technologii Kalkulatora OpenPKW. Obecnie: AngularJS na frontend i Java EE na backend.
- Omówienie funkcjonalnoœci, która jest do zaimplementowania w najbli¿szej przysz³oœci:
  - Wprowadzanie danych i walidacja.
  - Generowanie pliku PDF.
  - Eksport danych na serwer.
- Omówienie metody wspólnej pracy.
  - Ka¿da funkcja systemu rozwijana bêdzie na swoim branchu. Po ukoñczeniu danej funkcjonalnoœci lub jakiegoœ jej skoñczonego zakresu robimy merge do brancha master.
  - Zmiany wprowadzamy na swoich forkach i wysy³amy pull requesty. Pull request bêdzie zweryfikowany przez innych cz³onków dru¿yny i wtedy bêdzie wmergowany do brancha danej funkcji.
  - Bêdziemy tworzyæ osobne branche lub taki dla wydañ systemu.
- Omówienie konwencji programistycznych.
   - https://github.com/johnpapa/angular-styleguide
   - http://jscs.info/
   - Od razu wprowadzamy testy.

## 27 marca 2015, Skype, 1.5h
Obecni: Sebastian Celejewski, Adam Kowalewski, Dawid Kulesza, Marcin Tokarski, Kamil Kowalski, Kacper Jasiñski

Tematyka:
- Frontent Kalkulatora OpenPKW - budowanie, deployment
- Continuous Integration dla frontendu - potrzebny administrator Apache
- Jak generowaæ PDFy? Ze wzglêdu na spory rozmiar czcionek porzucamy na razie pomys³ generowania PDFu po stronie front-endu.
- Czyli: pozostaje backend w Javie.
- Dalsze kroki: uporz¹dkowanie kodu frontendu, przerobienie wszystkiego na Angulara, potem dopiero robienie walidacji, generowania XMLa i generowania PDFa.

## 23 marca 2015, Skype, 2h
Obecni: Sebastian Celejewski, Adam Kowalewski, Dennis Gabriel Kruk, Adam Brzozowski, Kacper Jasiñski, Dawid Kulesza, Adam Nakoneczny

Tematyka:
Spotkanie wprowadzaj¹ce
- Krótka historia OpenPKW
- Co siê obecnie dzieje (prace analityczne, deweloperskie, administracyjne i organizacyjne).
- Specyfika pracy (zespó³ siê formuje, ustalamy zasady, porz¹dkujemy dokumentacjê itp.)
- Who is who w projekcie
- Plan dzia³ania (pierwszy etap: Kalkulator OpenPKW).
- Kalkulator OpenPKW (funkcjonalnoœæ, technologia, deploymenty, plany itp.).
- Zaproszenie na spotkanie w œrodê.

Zadania na najbli¿szy czas:
- Przerobienie prototypu HTML z aplikacji JavaEE na aplikacjê webow¹ (zacz¹³ to ju¿ Marcin Tokarski).
- Zaimplementowanie brakuj¹cej funkcjonalnoœci (lista zadañ jest w Trello: https://trello.com/b/1PocOld8/poc-wp)
- Skonfigurowanie continuous delivery dla nowej aplikacji webowej.
