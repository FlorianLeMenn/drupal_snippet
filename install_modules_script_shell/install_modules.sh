#! /bin/bash
# on initialise une variable resultat
RES=""
echo "=========== Installation des modules ============"
echo "=  Choisissez les modules à intégrer au site   = "
echo "================================================="
echo "> Liste des modules:  modules.txt"
echo
read -p "Voulez-vous continuez y/n ? " one

if [ ${one} = "y" ] || [ ${one} = "Y" ]
	then
  		RESULTAT=""
  	while read LINE; do
    	RESULTAT="${RESULTAT} ${LINE}"
  	done < modules.txt

  RES="${RESULTAT}"
  echo "Modules: ${RESULTAT}"

fi

echo
read -p "Vouley-vous installer les modules y/n ? " one

if [ ${one} = "y" ] || [ ${one} = "Y" ]
	then
     	RES="drush en ${RES} -y"
     	eval "$RES"
fi
