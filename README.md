jBerry
======

Þriggja vikna áfangi Háskólans í Reykjavík

Install:

npm install -d

Run grunt task and server:

grunt

Smá git guide:
Þið breytið skrá/m og vlljið setja þær á github.
git add (slóð og nafn á skrá)
git commit -m "Changed this here" (einhver lýsandi, lítill texti)
git pull origin master
git push origin master
Þá á þetta að vera komið ef ekkert merge vesen varð, það er eitthvað sem við hugsum um þegar/ef það kemur.

<<<<<<< HEAD
# How to setup matis database in mongo
	
	mongoimport --db jBerry --collection matis --file /path/to/matisDbNold.json
=======
mongodb.exe --dbpath c:/something....
>>>>>>> 86400136e9b1e1f8fb5f504a1aca75e756b1c82e
