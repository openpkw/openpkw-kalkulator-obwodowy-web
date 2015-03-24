###Instrukcja instalacji i uruchamiania
- Ściągamy i instalujemy [git'a](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Ściągamy i instalujemy [nodejs](https://nodejs.org/download/)
- W katalogu gdzie zainstalowany jest node uruchamiamy:<br/>
```npm install npm -g```<br/>
```npm install -g grunt-cli```<br/>
```npm install -g bower```<br/>
- Ściągamy projekt kalkulatora ```git clone https://github.com/openpkw/PocKalkulatorWyborczyHtml.git```
- W katalogu /src/frontend możemy uruchomić następujące taski:<br/>
 ```npm install``` - instaluje wszystkie zależności wymagane w projekcie<br/>
 ```npm run build``` - buduje wersję produkcyjną aplikacji<br/>
  ```npm server-prod``` - startuje serwer produkcyjny [http://localhost:9000](http://localhost:8088), może być również używany przez osoby chcące tylko pooglądać aplikację<br/>
```npm server-dev``` - serwer deweloperski [http://localhost:9000](http://localhost:9000), obsługuje livereload (przeglądarka sama się odświeża gdy edytujemy i zapisujemy pliki), uruchamia się szybciej niż. Przed uruchomieniem nie trzeba budować aplikacji ponieważ serwer działa na plikach z katalogu ```src``<br/>

###Informacje
Na serwerach skonfigurowane jest proxy które przekierowuje requesty do backendu. Jego konfiguracja jest w pliku *Gruntfile.js* w sekcji ```proxies:```

###Struktura źródeł aplikacji
