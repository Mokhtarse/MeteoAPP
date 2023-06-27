++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+                   Parcours Pionnier Concepteur Développeur LA POSTE                     +
+                           Développement d’interfaces météo                             +
+                                  M.MOKHTAR SEBEI                                       +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Etapes de creation de l'interface:
-Conception de la page index.html qui contient la structure de notre interface 
-Creation d'une feuille de Style CSS qu'on liera ensuite a notre page index.html 
 à l'aide d'un link placé dans l'en-tête de la page pour decrire la presentation de 
 notre interface.
-Creation d'une Fichier JSON qui contient les informations de configuration de notre ville.
-Creation d'une fichier javascript qu'on apellera ensuite dans notre page index.html 
 à l'aide d'une balise script qui contient les differentes fonctions qu'on utilisera 
 une première fois pour recuperer les données de notre fichier JSON et une seconde fois
 pour interagire avec l'api qui va nous fournir les informations méteologiques. 
 Le fichier "conf.json" peut etre enrigistré sur un serveur local ( live serveure installer
 sur Visual Studio Code ) avec l'url "http://127.0.0.1:5500/conf.json" ou bien en peut
 le mettre sur un serveur en ligne "https://api.npoint.io/eba5f1283b82e7bb38f3".
 Enfin en peut bascule entre ces deux solutions dans le fichier meteo.js just en changeant 
 les paramètres de la fonction ( Meteoloc("ici en met l'url qu'on veut utilise") ) 

NB: -le fischier JSON peut être modifié a tout moment selon les besoins
    -je mis des captures ecran de l'interface en parallele avec la console 
     afin de vous montrer l'échange des données 
  
