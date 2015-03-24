####Instrukcja Instalacji i uruchamiania
###Instalacja
- Ściągamy i instalujemy [git'a](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Ściągamy i instalujemy [nodejs](https://nodejs.org/download/)
- W katalogu gdzie zainstalowany jest node uruchamiamy:
```npm install npm -g```
```npm install -g grunt-cli```
```npm install -g bower```
- Ściągamy projekt kalkulatora ```git clone https://github.com/openpkw/PocKalkulatorWyborczyHtml.git```
- W katalogu /src/frontend możemy uruchomić następujące taski:
- ```npm install``` - instaluje wszystkie zależności wymagane w projekcie
- ```npm run build``` - buduje wersję produkcyjną aplikacji
- ```npm server-prod``` - startuje serwer produkcyjny (http://localhost:8088), może być również używany przez osoby chcące tylko pooglądać aplikację
- ```npm server-dev``` - serwer deweloperski (http://localhost:9000), obsługuje livereload (przeglądarka sama się odświeża gdy edytujemy i zapisujemy pliki), uruchamia się szybciej niż. Przed uruchomieniem nie trzeba budować aplikacji ponieważ serwer działa na plikach z katalogu ```src``