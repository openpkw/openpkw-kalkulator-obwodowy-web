### Instrukcja instalacji i uruchamiania
- Ściągamy i instalujemy [git'a](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Ściągamy i instalujemy [nodejs](https://nodejs.org/download/)
- W katalogu gdzie zainstalowany jest node uruchamiamy:<br/>
```npm install -g npm ```<br/>
```npm install -g grunt-cli```<br/>
```npm install -g bower```<br/>
- Ściągamy projekt kalkulatora ```git clone https://github.com/openpkw/PocKalkulatorWyborczyHtml.git```
- W katalogu */src/frontend* możemy uruchomić następujące taski:<br/>
 ```npm install``` - instaluje wszystkie zależności wymagane w projekcie<br/>
 ```npm run build``` - buduje wersję produkcyjną aplikacji<br/>
  ```npm run server-prod``` - startuje serwer produkcyjny [http://localhost:8088](http://localhost:8088), może być również używany przez osoby chcące tylko pooglądać aplikację<br/>
```npm run server-dev``` - serwer deweloperski [http://localhost:9000](http://localhost:9000), obsługuje livereload (przeglądarka sama się odświeża gdy edytujemy i zapisujemy pliki), uruchamia się szybciej niż. Przed uruchomieniem nie trzeba budować aplikacji ponieważ serwer działa na plikach z katalogu ```src``<br/>

### Rozpraszanie na serwerach OpenPKW

Do rozpraszania na serwerach OpenPKW potrzebny jest klucz prywatny, który zostal dodany do authorized_keys na serwerze.

Przy pomocy SCP:

```cd dist```<br/>
```scp -ri ~/.ssh/openpkw-jenkins-cd.pem . openpkw-cd@dobromir.openpkw.pl:/var/www/html/openpkw-kalkulator-obwodowy-web/```

Przy pomocy grunta (czasem nie dziala):

```grunt deploy```

### Środowiska
* Continuous Delivery: (http://cypisek.openpkw.pl:8080/view/OpenPKW%20Kalkulator%20Obowodowy/)
* TEST: (http://rumcajs.openpkw.pl/)
* UAT: (http://dobromir.openpkw.pl/) (obecnie nie działa)
* STAGE: jeszcze nie ma
* PROD: jeszcze nie ma

### Informacje
Na serwerach skonfigurowane jest proxy które przekierowuje requesty do backendu. Jego konfiguracja jest w pliku *Gruntfile.js* w sekcji ```proxies:```

### Lista zadań:
* Wszystkie zadania: [Trello](https://trello.com/b/pfN6MeTO/openpkw-kalkulator-obwodowy-web)
* [KOW-U-1](https://trello.com/c/dyPptnCI): Wprowadzanie do systemu i walidacja danych protokołu
* [KOW-U-2](https://trello.com/c/HHvJ0GR2): Wydruk protokołu
* [KOW-U-3](https://trello.com/c/Scdk8DVb): Przesyłanie formularza w postaci elektronicznej na serwer
* [KOW-I-3](https://trello.com/c/r80nz2MC): Przyspieszenie deploymentu
