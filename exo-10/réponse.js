/**
 * Vous devez écrire un interpréteur de brainfuck en js. Cette fois-ci, toutes les fonctionnalités de brainfuck seront présentes.
 * Imaginons qu'on a une liste de taille infinie, et toutes les éléments ont pour valeur 0.
 * On commence au premier élément (i=0).
 * Pour chaque +, on augmente l'élément à l'indice i de 1. Si la valeur dépasse 255, revenez à 0.
 * Pour chaque -, on diminue l'élément à l'indice i de 1. Si la valeur devient négative, la valeur devient 255.
 * Pour chaque <, on diminue i de 1 (Il est garanti que i>=0)
 * Pour chaque >, on augmente i de 1
 * Pour chaque ., il faut afficher le caractère ayant pour code ASCII l'élément à l'indice i (contrairement à l'exo 9, il n'y a pas de règle spécial si l'élément est compris entre 0 et 9)
 * Pour chaque , (virgule), il faut lire une ligne d'entrée (Il est garanti d'avoir assez de lignes en entrée) et stocker la valeur (comprise entre 0 et 255) dans l'indice i
 * Pour chaque [, SI l'élément à l'indice i est égal à 0, alors ignorez tous les caractères suivant jusqu'au ] le plus proche.
 * Pour chaque ], SI l'élément à l'indice i n'est pas égal à 0, alors revenez au [ le plus proche. (attention, il faut reculer!)
 * Il peut avoir d'autres symboles, ignorez-les.
 * Vous pouvez, si vous le souhaitez, utiliser eval(), même si l'utilisation d'eval peut s'avérer dangereuse dans la plupart des circonstances.
 * ENTREE : 
 * Ligne 1 : entier N
 * N lignes suivantes : code brainfuck à interpréter
 * ??? lignes suivantes : des entrées
 */

 function main() {
  // Code ici
}