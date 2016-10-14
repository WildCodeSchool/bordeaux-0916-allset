((app) => {
    'use strict'
    app.component("apropos", {
        templateUrl: 'js/components/common/apropos.html',
        controller: ['$stateParams', function($stateParams) {
            angular.extend(this, {
                lesapropos: {
                    'notre-metier': {
                        title: 'Notre Métier',
                        subtitle: 'Gestion des changements',
                        image: 'img/drive.jpg',
                        texte: ` Les prestations sont adaptées aux contextes technologique et organisationnel de chaque client :
                        <ul>
                      <li>  Assistance à l'expression de besoins et rédaction de cahier des charges </li>
                      <li>  Assistance à maîtrise d'ouvrage, maîtrise d'oeuvre et conduite de projet </li>
                      <li>  Audit et conseil, rédaction de procédures et schémas directeurs </li>
                      <li>  Ingénierie et réalisation en mode forfaitaire </li>
                        </ul>`,
                        subtitle1: `Gestion de l'exploitation`,
                        texte1: `   L'administration de l'exploitation devient chaque jour plus complexe et consommatrice de temps,<br> le niveau d'exigence demandé aux responsables informatiques toujours plus important.
                        <br>  De par son expérience, AllSet vous accompagne dans cette tâche à travers deux modes de fonctionnement :
                        <ul>
                        <li>Solution dédiée chez le client ou externalisée</li>
                        <li>Solution mutualisée s'appuyant sur notre infrastructure</li>
                        </ul>`
                    },
                    'nos-demarches': {
                        title: 'Nos démarches',
                        subtitle: `Les prestations proposées s'adaptent aux besoins de chaque client`,
                        image: 'img/drive.jpg',
                        texte:
                        `
                        <ul>
                        <li>Supervision des infrastructures informatiques et téléphoniques</li>
                        <li>Assistance niveau 1 à 3, à distance ou sur site</li>
                        <li>Mise à disposition de ressources (ponctuelles ou permanentes)</li>
                        <li>Gestion des biens (informatiques et téléphoniques)</li>
                        </ul>`,
                        subtitle1: `AllSet intervient dans les domaines suivants`,
                        texte1: `
                        <ul>
                        <li>Système : environnements Microsoft et Linux</li>
                        <li>Réseau : switching, routing, QoS</li>
                        <li>Convergence voix/vidéo/données : téléphonie, messagerie unifiée</li>
                        </ul>`,
                        subtitle2: `AllSet répond ainsi à des problématiques de`,
                        texte2: `
                        <ul>
                        <li>Sécurité : protection des données, interconnexion sécurisée, PRA/PCS</li>
                        <li>Mobilité : clients légers, Wi Fi, consolidation de données</li>
                        <li>Transfert informatique : audit et conseil, réalisation, déménagement de ressources centrales et utilisateurs</li>
                        <li>Evolution : migrations OS, projets LAN / WAN
                        </ul>`

                    },
                    'notre-organisation': {
                        title: 'Notre Organisation',
                        subtitle: '',
                        image: 'img/drive.jpg',
                        texte: `Les Fondateur de notre société, AllSet, bénéficient de plus de 20 ans d'experience cumulée en gestion et en réalisation de projets informatiques.<br> Ils ont établis des partenariats avec différents acteurs du marché.
                          <br>Notre société dispose d'une structure independante de tout constructeur ou éditeur , d'une présence nationnale et d'un rayon d'action international.
                          <br>Le centre de formation de AllSet est un centre agrée.
                          <br>AllSet travaille avec de nombreuses références dans differents secteurs d'activitié comme les Groupe Chèque Déjeuner, Etanco, Sage, Agfa, ou encore CNRS...
                          <br>Si nos Solutions vous interesse vous pouvez devenir partenaire d'AllSet et nous contacter pour plus d'information.
                            `
                    }
                },
                $onInit() {
                    this.selectedApropos = this.lesapropos[$stateParams.lesaproposUrl]
                }

            })
        }]
    })

})(angular.module('app.common'))
