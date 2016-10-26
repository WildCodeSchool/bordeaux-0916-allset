((app) => {
    'use strict'
    app.component("myservice", {
        templateUrl: 'js/components/common/myservice.html',
        controller: ['$stateParams', function($stateParams) {
            angular.extend(this, {
                myservices: {
                    'allset-cabling-and-security': {
                        title: 'AllSet Cabling & Security',
                        subtitle: `<p>- Système de sécurité,
                                    <br>- Courant Faible, RJ45
                                    <br>- Cablage électrique, Courant fort
                                    <br>- Maintenance préventive</p>
                                    `,
                        image: 'img/drive.jpg',
                        texte: `<p>AllSet est intégrateur à valeur ajoutée dans le domaine de la convergence et de la téléphonie sur IP.
                                Déployer une solution ToIP présente une certaine complexité et des risques, par conséquent la planification,
                                l'ingénierie, la sélection du ou des fournisseurs et les conditions de la mise en oeuvre déterminent pour une
                                large part le succès de l'opération.</p>
                                <p>C'est aini qu'il convient de concevoir différemment l'architecture, le dimensionnement,
                                le déploiement, l'administration et la maintenance.
                                AllSet a identifié des éléments communs à la plupart des installations réussies en
                                matière de téléphonie sur IP, et vous proposera de les adopter, dans le cadre d'un
                                budget maîtrisé.</p>
                                <p>Mais au delà des simples services voix sur téléphonie, AllSet vous conseille et
                                vous guide parmi toutes les nouvelles solutions convergentes qui tirent parti de la
                                révolution numérique : messagerie unifiée, accès permanent aux sources d'information
                                de l'entreprise, etc.</p>`

                    },
                    'allset-integrateur-de-service': {
                        title: 'AllSet Intégrateur de Service',
                        subtitle: ` <p>- Lan entreprise
                                    <br>- Sécurité
                                    <br>- Sauvegarde système
                                    <br>- Poste de travail
                                    <br>- Transfert informatique</p>
                                    `,
                        image: 'img/databinding.jpg',
                        texte: `<p>AllSet est intégrateur à valeur ajoutée dans le domaine de la convergence et de la téléphonie sur IP.
                                Déployer une solution ToIP présente une certaine complexité et des risques, par conséquent la planification,
                                l'ingénierie, la sélection du ou des fournisseurs et les conditions de la mise en oeuvre déterminent pour une
                                large part le succès de l'opération.</p>
                                <p>C'est aini qu'il convient de concevoir différemment l'architecture, le dimensionnement,
                                le déploiement, l'administration et la maintenance.
                                AllSet a identifié des éléments communs à la plupart des installations réussies en
                                matière de téléphonie sur IP, et vous proposera de les adopter, dans le cadre d'un
                                budget maîtrisé.</p>
                                <p>Mais au delà des simples services voix sur téléphonie, AllSet vous conseille et
                                vous guide parmi toutes les nouvelles solutions convergentes qui tirent parti de la
                                révolution numérique : messagerie unifiée, accès permanent aux sources d'information
                                de l'entreprise, etc.</p>`

                    },
                    'allset-telecom-et-hebergement': {
                        title: 'AllSet Telecom et Hébergement',
                        subtitle: `<p>- WAN
                                    <br>- Téléphonie
                                    <br>- Telecom abonnement
                                    <br>- Fibre
                                    <br>- Solutions hébergés, serveur, Service Cloud</p>
                                    `,
                        image: 'img/datacenter.jpg',
                        texte: `<p>AllSet est intégrateur à valeur ajoutée dans le domaine de la convergence et de la téléphonie sur IP.
                                Déployer une solution ToIP présente une certaine complexité et des risques, par conséquent la planification,
                                l'ingénierie, la sélection du ou des fournisseurs et les conditions de la mise en oeuvre déterminent pour une
                                large part le succès de l'opération.</p>
                                <p>C'est aini qu'il convient de concevoir différemment l'architecture, le dimensionnement,
                                le déploiement, l'administration et la maintenance.
                                AllSet a identifié des éléments communs à la plupart des installations réussies en
                                matière de téléphonie sur IP, et vous proposera de les adopter, dans le cadre d'un
                                budget maîtrisé.</p>
                                <p>Mais au delà des simples services voix sur téléphonie, AllSet vous conseille et
                                vous guide parmi toutes les nouvelles solutions convergentes qui tirent parti de la
                                révolution numérique : messagerie unifiée, accès permanent aux sources d'information
                                de l'entreprise, etc.</p>`

                    },
                    'urban-service-network': {
                        title: 'Urban Service Network',
                        subtitle: '<p>Li-Fi</p>',
                        image: 'img/lifi.jpg',
                        texte: `<p>AllSet est intégrateur à valeur ajoutée dans le domaine de la convergence et de la téléphonie sur IP.
                                Déployer une solution ToIP présente une certaine complexité et des risques, par conséquent la planification,
                                l'ingénierie, la sélection du ou des fournisseurs et les conditions de la mise en oeuvre déterminent pour une
                                large part le succès de l'opération.</p>
                                <p>C'est aini qu'il convient de concevoir différemment l'architecture, le dimensionnement,
                                le déploiement, l'administration et la maintenance.
                                AllSet a identifié des éléments communs à la plupart des installations réussies en
                                matière de téléphonie sur IP, et vous proposera de les adopter, dans le cadre d'un
                                budget maîtrisé.</p>
                                <p>Mais au delà des simples services voix sur téléphonie, AllSet vous conseille et
                                vous guide parmi toutes les nouvelles solutions convergentes qui tirent parti de la
                                révolution numérique : messagerie unifiée, accès permanent aux sources d'information
                                de l'entreprise, etc.</p>`
                    }
                },
                $onInit() {
                    this.selectedService = this.myservices[$stateParams.myserviceUrl]
                }

            })
        }]
    })

})(angular.module('app.common'))
