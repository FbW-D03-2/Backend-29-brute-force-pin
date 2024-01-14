# Brute Force Attack 
## Finde die PINs mittels Brute Force Attack

In dieser Aufgabe sollst du zwei ganz simple Brute Force Attacks durchführen. Dazu musst du jeweils eine geheime, 4-stellige PIN herausfinden.


### Vorbereitung
* führe `npm init` aus und installiere bcrypt
* führe ```npm start``` aus
  
  
### Aufgaben
* In der index.js findest du zwei Teile
* In Teil 1 sollst du mittels Brute Force Attack eine PIN herausfinden, die als Klartext gespeichert wurde
* In Teil 2 geht es um die PIN einen Phones, die als hash (bcrypt) gespeichert wurde
* Beantworte die Fragen, die du am Edne dieser Readme findest


### BONUS
1. Messe mittels ```console.time(...)```, wie lange dein Algorithmus jeweils für das Finden der PIN aus Teil 1 und Teil 2 braucht.
2. Gebe jeden hunderten Durchgang in der console die aktuelle PIN aus, die überprüft wird

### Wichtig
* Wir gehen davon aus, dass das Verzeichnis "secret" nicht exisitert. Um den Fokus auf die Brute Force Attack zu legen, wird hier bewusst auf einen externen Server verzichtet. Verdirb dir also nicht den Spaß, indem du die PIN im "secret" Ordner abguckst ;)


## Fragen
1. Warum ist es sinnvoll, ein Passwort zu hashen?
   
2. Wie erklärst du den Zeitunterschied, bei den beiden Aufgaben?
   
3. Wei viele verschiedene PINs kann es geben, wenn die PIN 4-stellig ist? Und wie viele, wenn sie 6-stellig ist?
   
4. Erkläre kurz, wie du Teil 2 lösen könntest, wenn du das Salt nicht hättest. Oder wäre es dann gar nicht möglich?
   
5. Glaubst du, eine Rainbow-Table würde bei Aufgabe zwei schneller zum Ergebnis führen? Begründe kurz deine Antwort
