let lien = '/portfolio/img/projects/';
export const projects = [
    {
        id : "gopetsit",
        title: "GoPetSit",
        description: "Le projet GoPetSit, réalisé en parallèle de mes études sur une période de cinq mois, consistait " +
            "en la création d'un site web pour une start-up de petsitting. Ce projet rémunéré a été une expérience enrichissante qui " +
            "m'a permis de développer des compétences techniques et de gestion de projet, tout en apprenant à jongler " +
            "entre travail, vie personnelle et études.",
        type : "Projet",
        images : {
            logo : `${lien}gopetsit/logo.jpeg`,
            preuves : [
                `${lien}gopetsit/img1.png`,
                `${lien}gopetsit/img2.png`,
                `${lien}gopetsit/img3.png`
            ]
        },
        disclaimer: "Étant donné le contexte de la réalisation de ce projet, je ne peux pas donner de source code ni d'aperçu.",
        liens : {},
        content: (
            <div className="bg-[#18181b] rounded-2xl shadow-lg p-8 mb-10 border border-[#bfae4f]">
                <p className="mb-6 text-justify text-gray-200 leading-relaxed">
                    Le projet <span className="font-semibold text-[#bfae4f]">GoPetSit</span>, réalisé en parallèle de mes études sur une période de cinq mois, consistait en la création d'un site web pour une start-up. Ce projet rémunéré a été une expérience enrichissante qui m'a permis de développer des compétences techniques et de gestion de projet, tout en apprenant à jongler entre travail, vie personnelle et études.
                </p>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">Réalisation Technique</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
                    <li>
                        <span className="font-semibold text-yellow-300">Technologies Utilisées</span> : Nous avons utilisé le framework <span className="font-semibold text-yellow-200">Symfony</span> pour le développement du site web. J'ai également travaillé sur le design avec <span className="font-semibold text-yellow-200">CSS Tailwind</span> et <span className="font-semibold text-yellow-200">JavaScript</span>, et implémenté des plugins pour la recherche d'adresses et les cartes.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Gestion de Projet</span> : En tant que cheffe de projet et Product Owner, j'ai été responsable de la collecte et de la formalisation des besoins du client, ainsi que de la gestion d'une équipe de six étudiants. J'ai élaboré un cahier des charges et défini une démarche de suivi de projet pour assurer la qualité et la livraison dans les délais.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Architecture et Développement</span> : J'ai choisi et implémenté les architectures adaptées pour le projet, et développé des applications sur des supports spécifiques. J'ai également travaillé sur la sécurisation des services et des données du système.
                    </li>
                </ul>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">Compétences Acquises</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
                    <li>
                        <span className="font-semibold text-yellow-300">Développement Technique</span> : J'ai acquis des compétences en <span className="font-semibold text-yellow-200">Symfony</span>, <span className="font-semibold text-yellow-200">CSS Tailwind</span>, <span className="font-semibold text-yellow-200">JavaScript</span>, et en intégration de plugins. J'ai également appris à concevoir et développer des applications communicantes.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Gestion de Projet</span> : J'ai développé des compétences en gestion de projet, notamment en appréhendant les besoins du client, en mettant en place des outils de gestion de projet, et en formalisant les besoins du client.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Travail d'Équipe</span> : Travailler avec une équipe de six étudiants m'a permis d'acquérir des compétences interpersonnelles essentielles pour le travail collaboratif. J'ai appris à identifier les statuts, les fonctions et les rôles de chaque membre d'une équipe pluridisciplinaire.
                    </li>
                </ul>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">Résultats et Réflexions</h2>
                <p className="text-justify text-gray-200 leading-relaxed">
                    Le projet GoPetSit a été une expérience très enrichissante qui m'a permis de développer des compétences techniques et de gestion de projet. J'ai appris à être autonome, à gérer mon temps efficacement et à travailler en équipe. Ce projet a également été une excellente opportunité pour appliquer des principes d'accessibilité et d'ergonomie, et pour me familiariser avec de nouvelles technologies et méthodologies de travail.
                </p>
            </div>

        ),
        skills_overview : [1,3,4,5,6],
        skills : [
            {
                idSkill : 1,
                idSubSkill: 1,
                lvl : 2,
                justification : "J'ai recueilli et formalisé les besoins du client pour créer un cahier des charges " +
                    "détaillé, en traduisant les exigences en spécifications fonctionnelles et non fonctionnelles. Cela " +
                    "a nécessité une analyse minutieuse et une communication efficace pour garantir que le produit final " +
                    "réponde aux attentes du client tout en respectant les contraintes techniques et budgétaires."
            },
            {
                idSkill: 1,
                idSubSkill: 4,
                lvl : 2,
                justification: "J'ai mis en place une stratégie de tests rigoureuse incluant des tests unitaires, " +
                    "d'intégration et système. Des outils de test automatisés ont permis d'identifier et de corriger " +
                    "rapidement les bugs. Des sessions de tests utilisateurs ont validé que l'application répondait aux " +
                    "attentes, assurant un produit de haute qualité, conforme aux spécifications et prêt pour le déploiement."
            },
            {
                idSkill: 3,
                idSubSkill: 1,
                lvl : 2, justification: "J'ai conçu et développé des applications communicantes en utilisant le framework Symfony " +
                    "pour gérer les interactions entre les différents composants du système. Cela a permis une intégration " +
                    "fluide et une communication efficace entre les modules du site web."
            },
            {
                idSkill: 3,
                idSubSkill: 3,
                lvl : 2, justification: "J'ai sécurisé les services et les données en protégeant les routes et en effectuant des " +
                    "vérifications rigoureuses dans les méthodes du projet Symfony. Cela a inclus la mise en place de " +
                    "contrôles d'accès et la validation des entrées pour prévenir les vulnérabilités courantes."
            },
            {
                idSkill: 4,
                idSubSkill: 3,
                lvl : 2, justification: "J'ai développé une partie du front-end du site de pet-sitting, en mettant l'accent sur " +
                    "des fonctionnalités comme le choix sur la carte et la modification des paramètres. Cela a permis " +
                    "aux utilisateurs d'interagir efficacement avec les données présentées."
            },
            {
                idSkill: 5,
                idSubSkill: 3,
                lvl : 2, justification: "J'ai évalué la faisabilité du projet en tenant compte des contraintes telles que le fait " +
                    "qu'il était réalisé en parallèle des études, avec une équipe composée uniquement d'étudiants, et en " +
                    "utilisant des solutions open source autant que possible."
            },
            {
                idSkill: 5,
                idSubSkill: 4,
                lvl : 2, justification: "J'ai mis en place une méthodologie de suivi de projet basée sur Scrum, incluant des " +
                    "réunions d'avancement hebdomadaires et des revues de sprint avec la cliente toutes les deux semaines " +
                    "pour assurer le respect des échéances et la qualité des livrables."
            },
            {
                idSkill: 6,
                idSubSkill: 3,
                lvl : 2, justification: "Pour la compétence 6, j'ai attribué les rôles de \"chef de projet\", \"tech lead\", " +
                    "\"développeur front-end\" et \"développeur\" selon les préférences de chacun. Cette répartition a " +
                    "clarifié les responsabilités et optimisé l'efficacité de l'équipe. Cela a favorisé une collaboration " +
                    "harmonieuse et une meilleure productivité."
            }
        ]
    },
    {
        id : "ctfz",
        title: "CTF+Z",
        description: "Le projet CTF+Z, réalisé dans le cadre de la deuxième année de BUT Informatique, consistait en " +
            "la création d'un site web de \"Capture The Flag\" (CTF) et le développement de divers défis pour gagner " +
            "des flags. Ce projet, mené sur une période de trois mois en utilisant la méthodologie SCRUM, a été une " +
            "expérience enrichissante tant sur le plan technique que personnel.",
        type : "Projet Académique",
        images : {
            logo : `${lien}ctfz/logo.png`,
            preuves : [
                `${lien}ctfz/img1.png`,
                `${lien}ctfz/img2.png`,
                `${lien}ctfz/img3.png`,
                `${lien}ctfz/img4.png`,
                `${lien}ctfz/img5.png`
            ]
        },
        disclaimer: "",
        liens : {
            repo : "https://gitlabinfo.iutmontp.univ-montp2.fr/laborieq/sae-3.01-groupe-5",
            depo : "",
            drive : "https://drive.google.com/drive/folders/1pJzi1n3EbvEumrnGbKt_YsB49W3ppGY6?usp=sharing"
        },
        content: (
            <div className="bg-[#18181b] rounded-2xl shadow-lg p-8 mb-10 border border-[#bfae4f]">
                <h1 className="text-2xl font-bold text-[#bfae4f] mb-6 tracking-wide text-center">
                    Projet CTF+Z : Création d&apos;un Site Web de Capture The Flag
                </h1>
                <p className="mb-6 text-justify text-gray-200 leading-relaxed">
                    Le projet <span className="font-semibold text-[#bfae4f]">CTF+Z</span>, réalisé dans le cadre de la deuxième année de BUT Informatique, consistait en la création d&apos;un site web de "Capture The Flag" (CTF) et le développement de divers défis pour gagner des flags. Ce projet, mené sur une période de trois mois en utilisant la méthodologie <span className="font-semibold text-yellow-300">SCRUM</span>, a été une expérience enrichissante tant sur le plan technique que personnel.
                </p>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">
                    Compétences Techniques
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
                    <li>
                        <span className="font-semibold text-yellow-300">Développement et Intégration</span> : J&apos;ai acquis des compétences en <span className="font-semibold text-yellow-200">Python</span> et <span className="font-semibold text-yellow-200">Flask</span>, et j&apos;ai appris à utiliser <span className="font-semibold text-yellow-200">Docker</span> pour la gestion de conteneurs. Nous avons déployé notre application sur un VPS, ce qui m&apos;a permis de me familiariser avec la gestion de serveurs et la sécurisation des données.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Adaptation et Innovation</span> : En tant que Product Owner, j&apos;ai été responsable de l&apos;intégration des spécificités clientes à <span className="font-semibold text-yellow-200">CTFd</span>, une plateforme open source conçue pour les compétitions de type Jeopardy. Cela m&apos;a permis de développer des compétences en adaptation de solutions existantes au contexte applicatif.
                    </li>
                </ul>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">
                    Gestion de Projet et Travail d&apos;Équipe
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
                    <li>
                        <span className="font-semibold text-yellow-300">Méthodologie SCRUM</span> : Ce projet a été l&apos;occasion de pratiquer les méthodes <span className="font-semibold text-yellow-200">SCRUM</span> pour la gestion de projet. J&apos;ai appris à organiser le travail en sprints, à prioriser les tâches et à m&apos;adapter aux changements de dernière minute.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Collaboration</span> : Travailler dans une équipe pluridisciplinaire m&apos;a permis d&apos;acquérir des compétences interpersonnelles essentielles pour le travail collaboratif. Malgré les contraintes géographiques, nous avons réussi à maintenir une communication efficace et à livrer un produit de qualité.
                    </li>
                </ul>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">
                    Résultats et Réflexions
                </h2>
                <p className="text-justify text-gray-200 leading-relaxed">
                    Le projet CTF+Z a été une expérience très enrichissante qui m&apos;a permis de développer des compétences techniques et personnelles. J&apos;ai appris à être autonome, à gérer mon temps efficacement et à travailler en équipe. Ce projet a également été une excellente opportunité pour appliquer les méthodes <span className="font-semibold text-yellow-200">SCRUM</span> et pour me familiariser avec de nouvelles technologies.
                </p>
            </div>

        ),
        skills_overview : [1,2,3,4,5,6],
        skills : [
            {
                idSkill: "1",
                idSubSkill: "1",
                lvl : 2, justification: "J'ai élaboré et implémenté les spécifications fonctionnelles et non fonctionnelles en " +
                    "définissant les besoins du projet CTF+Z, notamment en adaptant la plateforme CTFd pour répondre aux " +
                    "exigences spécifiques des compétitions de type \"Capture The Flag\"."
            },
            {
                idSkill: "1",
                idSubSkill: "2",
                lvl : 2, justification: "J'ai appliqué des principes d'accessibilité et d'ergonomie en concevant une interface " +
                    "utilisateur intuitive pour le site web, facilitant la navigation et l'interaction des utilisateurs " +
                    "avec les défis proposés."
            },
            {
                idSkill: "2",
                idSubSkill: "1",
                lvl : 2, justification: "J'ai choisi et utilisé des structures de données adaptées pour gérer les défis et les " +
                    "utilisateurs dans le cadre du projet, assurant ainsi une gestion efficace des données et des " +
                    "interactions au sein de l'application."
            },
            {
                idSkill: "3",
                idSubSkill: "1",
                lvl : 2, justification: "J'ai conçu et développé des applications communicantes en utilisant Flask pour créer " +
                    "une plateforme interactive où les utilisateurs peuvent participer à des défis et interagir avec le " +
                    "système."
            },
            {
                idSkill: "3",
                idSubSkill: "2",
                lvl : 2, justification: "J'ai utilisé Docker pour la gestion de conteneurs et déployé l'application sur un VPS, " +
                    "ce qui m'a permis de me familiariser avec les technologies de virtualisation et la gestion de serveurs."
            },
            {
                idSkill: "3",
                idSubSkill: "3",
                lvl : 2, justification: "J'ai sécurisé les services et les données en mettant en place des protocoles de sécurité " +
                    "pour protéger les informations sensibles et assurer l'intégrité des données sur le serveur."
            },
            {
                idSkill: "4",
                idSubSkill: "3",
                lvl : 2, justification: "J'ai organisé la restitution des données en développant des interfaces pour visualiser " +
                    "les résultats des défis et les classements, facilitant ainsi l'accès et la compréhension des " +
                    "informations par les utilisateurs."
            },
            {
                idSkill: "4",
                idSubSkill: "4",
                lvl : 2, justification: "J'ai manipulé des données hétérogènes en gérant les entrées et sorties des utilisateurs, " +
                    "ainsi que les résultats des défis, assurant une intégration cohérente et efficace des différentes " +
                    "sources de données."
            },
            {
                idSkill: "5",
                idSubSkill: "2",
                lvl : 2, justification: "J'ai formalisé les besoins des utilisateurs en définissant les fonctionnalités requises " +
                    "pour le site web, en m'assurant que les spécifications techniques répondaient aux attentes des " +
                    "participants des compétitions CTF."
            },
            {
                idSkill: "5",
                idSubSkill: "3",
                lvl : 2, justification: "Lors du sprint 0, j'ai identifié les critères de faisabilité en évaluant les coûts des " +
                    "serveurs, en comparant les plateformes disponibles, et en étudiant la mise en place d'un CTF. Cela " +
                    "a permis de déterminer la viabilité du projet et de planifier les ressources nécessaires pour sa réussite."
            },
            {
                idSkill: "5",
                idSubSkill: "4",
                lvl : 2, justification: "J'ai défini et mis en œuvre une démarche de suivi de projet en utilisant la méthodologie " +
                    "Scrum, incluant des revues de sprint régulières pour assurer le respect des échéances et la qualité " +
                    "des livrables."
            },
            {
                idSkill: "6",
                idSubSkill: "3",
                lvl : 2, justification: "J'ai mobilisé mes compétences interpersonnelles pour collaborer efficacement au sein d'une " +
                    "équipe pluridisciplinaire, en facilitant la communication et la coordination pour atteindre les objectifs " +
                    "du projet malgré les contraintes géographiques."
            }
        ]
    },
    {
        id : "laposte",
        title: "Stage à La Poste",
        description: "Dans le cadre de mon stage de deuxième année de BUT Informatique, j'ai eu l'opportunité de " +
            "travailler pendant 12 semaines au sein de la DSI BSCC de La Poste, plus précisément à la RPA Factory, " +
            "spécialisée dans la Robotic Process Automation (RPA). Ce stage a été une expérience professionnelle " +
            "enrichissante qui m'a permis de développer et d'appliquer un large éventail de compétences techniques et " +
            "organisationnelles.",
        type : "Experience Professionnelle",
        images : {
            logo : `${lien}laposte/logo.png`,
            preuves : [
                `${lien}laposte/img1.png`
            ]
        },
        disclaimer : "Étant donné le contexte de la réalisation de ce projet, je ne peux que donner la couverture de mon rapport de stage comme preuve.",
        liens : {},
        content: (
            <div className="bg-[#18181b] rounded-2xl shadow-lg p-8 mb-10 border border-[#bfae4f]">
                <h1 className="text-2xl font-bold text-[#bfae4f] mb-6 tracking-wide text-center">
                    Stage à la DSI BSCC de La Poste : Expérience en Robotic Process Automation
                </h1>
                <p className="mb-6 text-justify text-gray-200 leading-relaxed">
                    Dans le cadre de mon stage de deuxième année de BUT Informatique, j&apos;ai eu l&apos;opportunité de travailler pendant 12 semaines au sein de la DSI BSCC de La Poste, plus précisément à la <span className="font-semibold text-yellow-300">RPA Factory</span>, spécialisée dans la <span className="font-semibold text-yellow-200">Robotic Process Automation (RPA)</span>. Ce stage a été une expérience professionnelle enrichissante qui m&apos;a permis de développer et d&apos;appliquer un large éventail de compétences techniques et organisationnelles.
                </p>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">
                    Réalisation Technique
                </h2>
                <p className="mb-6 text-justify text-gray-200 leading-relaxed">
                    Durant ce stage, j&apos;ai été impliqué dans plusieurs projets clés, notamment la création, le développement et la mise en production d&apos;un robot, ainsi que la maintenance d&apos;un autre robot. J&apos;ai également participé à la migration de robots existants vers de nouvelles infrastructures, ce qui m&apos;a permis de comprendre les enjeux liés à l&apos;intégration de solutions dans un environnement de production. En outre, j&apos;ai contribué à la création de routes API, renforçant ainsi mes compétences en développement d&apos;applications sur des supports spécifiques.
                </p>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">
                    Compétences Acquises
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
                    <li>
                        <span className="font-semibold text-yellow-300">Conception et Développement</span> : J&apos;ai appris à élaborer et implémenter des spécifications fonctionnelles et non fonctionnelles à partir des exigences, ainsi qu&apos;à adapter des solutions existantes au contexte applicatif. J&apos;ai également acquis des compétences en vérification et validation de la qualité des applications par les tests.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Structures de Données et Virtualisation</span> : J&apos;ai développé la capacité à choisir des structures de données complexes adaptées aux problèmes rencontrés et à utiliser des serveurs et des services réseaux virtualisés, ce qui a été essentiel pour le développement et la maintenance des robots.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Intégration et Collaboration</span> : Travailler au sein de la DSI BSCC m&apos;a permis de comprendre la diversité, la structure et la dimension de l&apos;informatique dans une organisation. J&apos;ai également appris à appliquer une démarche pour intégrer une équipe informatique au sein d&apos;une organisation et à mobiliser les compétences interpersonnelles pour travailler efficacement en équipe.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Communication Professionnelle</span> : J&apos;ai développé la capacité de rendre compte de mon activité professionnelle, ce qui a été crucial pour la collaboration avec les autres membres de l&apos;équipe et pour la réussite des projets.
                    </li>
                </ul>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">
                    Résultats et Réflexions
                </h2>
                <p className="text-justify text-gray-200 leading-relaxed">
                    Ce stage a été une expérience très enrichissante qui m&apos;a permis de développer des compétences techniques et professionnelles. J&apos;ai appris à être autonome, à travailler en équipe et à m&apos;adapter aux exigences d&apos;un environnement professionnel. Ce stage a également été une excellente opportunité pour appliquer des principes de conception et de développement, et pour me familiariser avec les enjeux de l&apos;intégration de solutions dans un environnement de production.
                </p>
            </div>

        ),
        skills_overview : [1,2,3,4,6],
        skills : [
            {
                idSkill: "1",
                idSubSkill: "2",
                lvl : 2, justification: "J'ai élaboré et implémenté des spécifications fonctionnelles et non fonctionnelles en " +
                    "analysant les exigences des projets RPA. Par exemple, j'ai crée un robot selon des exigences (fonctionnels)" +
                    "et j'ai implémenté un système de suivi de ce robot via des logs (non fonctionnels)"
            },
            {
                idSkill: "1",
                idSubSkill: "4",
                lvl : 2, justification: "J'ai vérifié et validé la qualité des robots et des routes API que j'ai développé via Sonarqube " +
                    "et des tests automatisés via pytest et pytest-coverage"
            },
            {
                idSkill: "2",
                idSubSkill: "1",
                lvl : 2, justification: "J'ai choisi des structures de données complexes adaptées aux processus automatisés, comme " +
                    "l'utilisation de dictionnaires et de listes pour gérer les flux de données entre les robots et les " +
                    "systèmes internes, optimisant ainsi l'efficacité des robots dans la manipulation de données structurées " +
                    "et non structurées."
            },
            {
                idSkill: "3",
                idSubSkill: "2",
                lvl : 2, justification: "J'ai utilisé des machines virtuelles pour la migration des robots, en installant et " +
                    "configurant les environnements nécessaires pour chaque robot. Cela a inclus le débogage et l'ajout " +
                    "de logs pour le suivi, assurant ainsi la sécurité et la stabilité des services lors de la migration " +
                    "vers de nouvelles infrastructures."
            },
            {
                idSkill: "4",
                idSubSkill: "3",
                lvl : 2, justification: "J'ai organisé la restitution des données en développant des tableaux de bord et des " +
                    "rapports automatisés pour visualiser les résultats des processus RPA, facilitant ainsi l'analyse " +
                    "des performances des robots et permettant aux parties prenantes de suivre les indicateurs clés de " +
                    "performance."
            },
            {
                idSkill: "6",
                idSubSkill: "1",
                lvl : 2, justification: "J'ai pu observer comment différents processus métiers nécessitaient l'intervention de la " +
                    "RPA, ce qui m'a permis de comprendre l'importance et l'impact de l'automatisation dans divers " +
                    "départements. La visite d'une Plateforme Industrielle Courrier (PIC) m'a également offert une " +
                    "perspective concrète sur l'intégration des systèmes d'information dans les opérations logistiques."
            },
            {
                idSkill: "6",
                idSubSkill: "2",
                lvl : 2, justification: "J'ai appliqué une démarche structurée pour m'intégrer efficacement au sein de l'équipe " +
                    "RPA Factory, en participant activement aux réunions quotidiennes et aux réunions de développement " +
                    "hebdomadaires. Cela a facilité mon intégration et ma collaboration avec les autres membres de " +
                    "l'équipe pour atteindre les objectifs communs."
            },
            {
                idSkill: "6",
                idSubSkill: "3",
                lvl : 2,
                justification: "J'ai mobilisé mes compétences interpersonnelles pour collaborer efficacement avec l'équipe, " +
                    "en utilisant des outils de communication et en participant aux réunions régulières pour assurer une " +
                    "coordination fluide et une résolution rapide des problèmes."
            },
            {
                idSkill: "6",
                idSubSkill: "4",
                lvl : 2,
                justification: "J'ai rendu compte de mon activité professionnelle en documentant mes progrès et en " +
                    "présentant régulièrement mes travaux lors des réunions d'équipe, assurant ainsi une transparence " +
                    "et une communication efficace au sein de l'équipe."
            }
        ]
    },
    {
        id : "sae401",
        title: "SAE 4.01",
        description: "Dans le cadre de mon deuxième semestre de la deuxième année de BUT Informatique, j'ai réalisé " +
            "une Situation d'Apprentissage et d'Évaluation (SAE) sur une période de deux mois et demi. Le sujet de cette " +
            "SAE était : \"En quoi l’intégration de votre projet réalisé dans le cadre de votre stage/alternance " +
            "participe-t-il à l’amélioration globale du système d’information de l’organisation ?\". Ce projet m'a " +
            "permis de réfléchir sur mon expérience de stage et de recréer l'environnement technique de manière simplifiée " +
            "pour mieux comprendre son impact sur le système d'information de l'organisation.",
        type : "Projet Académique",
        images : {
            logo : "",
            preuves : [
                `${lien}sae401/img1.png`
            ]
        },
        liens : {
            depo : "https://github.com/saeD-4-01"
        },
        disclaimer: "Étant donné que ce projet est toujours en cours, il n'y a encore que très peu d'aperçus disponibles.",
        content: (
            <div className="bg-[#18181b] rounded-2xl shadow-lg p-8 mb-10 border border-[#bfae4f]">
                <h1 className="text-2xl font-bold text-[#bfae4f] mb-6 tracking-wide text-center">
                    Projet de Réflexion sur l&apos;Intégration de Projet en Système d&apos;Information
                </h1>
                <p className="mb-6 text-justify text-gray-200 leading-relaxed">
                    Dans le cadre de mon deuxième semestre de la deuxième année de BUT Informatique, j&apos;ai réalisé une Situation d&apos;Apprentissage et d&apos;Évaluation (<span className="font-semibold text-yellow-300">SAE</span>) sur une période de deux mois et demi. Le sujet de cette SAE était : <span className="italic text-yellow-200">&quot;En quoi l’intégration de votre projet réalisé dans le cadre de votre stage/alternance participe-t-il à l’amélioration globale du système d’information de l’organisation ?&quot;</span> Ce projet m&apos;a permis de réfléchir sur mon expérience de stage et de recréer l&apos;environnement technique de manière simplifiée pour mieux comprendre son impact sur le système d&apos;information de l&apos;organisation.
                </p>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">
                    Réalisation Technique
                </h2>
                <p className="mb-6 text-justify text-gray-200 leading-relaxed">
                    Pour ce projet, j&apos;ai dû élaborer et implémenter des spécifications fonctionnelles et non fonctionnelles à partir des exigences identifiées lors de mon stage. J&apos;ai appliqué des principes d&apos;accessibilité et d&apos;ergonomie, et adopté de bonnes pratiques de conception et de programmation pour développer des applications sur des supports spécifiques. J&apos;ai également conçu et développé des applications communicantes, en utilisant des serveurs et des services réseaux virtualisés pour sécuriser les services et les données du système.
                </p>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">
                    Compétences Acquises
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
                    <li>
                        <span className="font-semibold text-yellow-300">Conception et Développement</span> : J&apos;ai appris à élaborer et implémenter des spécifications fonctionnelles et non fonctionnelles, et à développer des applications sur des supports spécifiques. J&apos;ai également acquis des compétences en conception et développement d&apos;applications communicantes.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Sécurité et Virtualisation</span> : J&apos;ai compris les enjeux et moyens de sécurisation des données et du code, et j&apos;ai utilisé des serveurs et des services réseaux virtualisés pour sécuriser les services et les données d’un système.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Gestion de Données</span> : J&apos;ai appris à mettre à jour et interroger une base de données relationnelle, à visualiser des données, et à manipuler des données hétérogènes. J&apos;ai également conçu une base de données relationnelle à partir d’un cahier des charges.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Amélioration des Systèmes d&apos;Information</span> : J&apos;ai identifié les processus présents dans une organisation en vue d’améliorer les systèmes d’information, ce qui m&apos;a permis de comprendre la diversité, la structure et la dimension de l’informatique dans une organisation.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Communication Professionnelle</span> : J&apos;ai développé la capacité de rendre compte de mon activité professionnelle, ce qui a été crucial pour la collaboration et la présentation de mes réflexions et réalisations.
                    </li>
                </ul>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">
                    Résultats et Réflexions
                </h2>
                <p className="text-justify text-gray-200 leading-relaxed">
                    Ce projet a été une expérience très enrichissante qui m&apos;a permis de développer des compétences techniques et de réflexion critique. J&apos;ai appris à être autonome, à travailler de manière structurée et à m&apos;adapter aux exigences d&apos;un environnement professionnel. Cette SAE a également été une excellente opportunité pour appliquer des principes de conception et de développement, et pour comprendre l&apos;impact de l&apos;intégration de projets sur les systèmes d&apos;information des organisations.
                </p>
            </div>
        ),
        skills_overview : [1,2,3,4,5,6],
        skills : [
            {
                idSkill: "1",
                idSubSkill: "1",
                lvl : 2,
                justification: "J'ai élaboré et implémenté des spécifications fonctionnelles et non fonctionnelles en " +
                    "analysant les exigences de mon stage, ce qui a permis de définir clairement les attentes et les " +
                    "contraintes du projet pour répondre aux besoins identifiés."
            },
            {
                idSkill: "1",
                idSubSkill: "3",
                lvl : 2,
                justification: "J'ai compris les enjeux et les moyens de sécurisation des données et du code en utilisant " +
                    "PyServer et .htaccess pour sécuriser les routes selon les utilisateurs, assurant ainsi la protection " +
                    "des informations sensibles sur le serveur de l'IUT."
            },
            {
                idSkill: "2",
                idSubSkill: "3",
                lvl : 2,
                justification: "J'ai compris les enjeux et les moyens de sécurisation des données et du code en mettant " +
                    "en place des protocoles de sécurité et en utilisant des outils pour protéger les informations " +
                    "sensibles et assurer l'intégrité des systèmes."
            },
            {
                idSkill: "3",
                idSubSkill: "1",
                lvl : 2,
                justification: "J'ai conçu et développé des applications communicantes en utilisant le serveur fourni par l'IUT pour " +
                    "héberger les services, assurant une interaction fluide entre les différents composants du système."
            },
            {
                idSkill: "3",
                idSubSkill: "2",
                lvl : 2,
                justification: "J'ai utilisé le serveur de l'IUT pour déployer et gérer les applications, assurant ainsi " +
                    "une gestion centralisée et sécurisée des services."
            },
            {
                idSkill: "3",
                idSubSkill: "3",
                lvl : 2,
                justification: "J'ai sécurisé les services et les données en configurant PyServer et .htaccess pour " +
                    "contrôler l'accès aux routes, protégeant ainsi les informations sensibles et assurant l'intégrité " +
                    "des systèmes."
            },
            {
                idSkill: "4",
                idSubSkill: "3",
                lvl : 2,
                justification: "J'ai organisé la restitution des données en développant un robot qui récupérait des " +
                    "informations depuis un fichier Excel, les manipulait et les envoyait à une API, facilitant ainsi " +
                    "l'analyse et la compréhension des informations."
            },
            {
                idSkill: "4",
                idSubSkill: "4",
                lvl : 2,
                justification: "J'ai manipulé des données hétérogènes en récupérant et en traitant des informations " +
                    "depuis un fichier Excel, assurant une gestion cohérente et efficace des données pour répondre aux " +
                    "besoins du projet."
            },
            {
                idSkill: "5",
                idSubSkill: "1",
                lvl : 2,
                justification: "En recréant le système du robot, j'ai identifié les processus présents dans l'organisation, " +
                    "ce qui m'a permis de comprendre comment améliorer les systèmes d'information et d'optimiser les flux " +
                    "de travail."
            },
            {
                idSkill: "6",
                idSubSkill: "1",
                lvl : 2,
                justification: "J'ai compris la diversité, la structure et la dimension de l'informatique dans une organisation " +
                    "en étudiant les différents rôles et responsabilités au sein des structures informatiques, ce qui m'a " +
                    "permis d'avoir une vision globale de l'intégration des systèmes d'information."
            },
            {
                idSkill: "6",
                idSubSkill: "4",
                lvl : 2,
                justification: "J'ai rendu compte de mon activité professionnelle en documentant et en présentant mes " +
                    "travaux et réflexions, ce qui a été crucial pour la communication et la collaboration au sein de " +
                    "l'organisation, ainsi que pour revoir ma place dans l'entreprise."
            }
        ]
    }
]