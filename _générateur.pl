# Regardez pas ce fichier

$c=`cat test1.html`;($i=$c=~s/1/$_/gr),`echo '$i' > test$_.html`for 2..10;
`mkdir exo-$_;cd exo-$_;echo ''>réponse.js` for 1..10;
`cp tests/exo-0.js tests/exo-$_.js` for 1..10;