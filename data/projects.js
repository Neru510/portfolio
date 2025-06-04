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
                <h1 className="text-2xl font-bold text-[#bfae4f] mb-6 tracking-wide text-center">
                    GoPetSit — Développement d’un site web pour une start-up
                </h1>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                    <span className="text-gray-300 text-sm italic">Durée : 5 mois (en parallèle de mes études)</span>
                    <span className="bg-[#bfae4f]/20 text-[#bfae4f] font-semibold px-3 py-1 rounded-full text-xs">Projet rémunéré</span>
                </div>
                <p className="mb-6 text-justify text-gray-200 leading-relaxed">
                    Le projet GoPetSit consistait en la création d’un site web pour une start-up. Cette expérience, à la fois technique et humaine, m’a permis de développer des compétences solides en développement web, en gestion de projet et en travail d’équipe, tout en apprenant à concilier études, travail et vie personnelle.
                </p>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">
                    Réalisation technique
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
                    <li>
                        <span className="font-semibold text-yellow-300">Technologies utilisées</span> : Le site a été développé avec le framework <span className="font-semibold text-yellow-200">Symfony</span>, associé à <span className="font-semibold text-yellow-200">Tailwind CSS</span> et <span className="font-semibold text-yellow-200">JavaScript</span> pour le design et l’interactivité. J’ai également intégré des plugins pour la recherche d’adresses et l’affichage de cartes. La base de données repose sur <span className="font-semibold text-yellow-200">MariaDB</span>.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Architecture et sécurité</span> : J’ai conçu l’architecture technique du projet, veillant à la modularité et à la sécurité des services et des données.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Applications communicantes</span> : Le projet incluait le développement d’applications interconnectées, adaptées aux besoins spécifiques de l’entreprise.
                    </li>
                </ul>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">
                    Gestion de projet
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
                    <li>Défini et formalisé les besoins du client via un cahier des charges précis.</li>
                    <li>Coordonné une équipe de six étudiants, en mettant en place une démarche de suivi agile pour garantir la qualité et le respect des délais.</li>
                    <li>Utilisé des outils de gestion pour assurer la traçabilité et l’efficacité du développement.</li>
                </ul>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">
                    Compétences développées
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
                    <li>
                        <span className="font-semibold text-yellow-300">Techniques</span> : Maîtrise de <span className="font-semibold text-yellow-200">Symfony</span>, <span className="font-semibold text-yellow-200">Tailwind CSS</span>, <span className="font-semibold text-yellow-200">JavaScript</span>, intégration de services tiers, conception de bases de données (<span className="font-semibold text-yellow-200">MariaDB</span>).
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Gestion</span> : Approche client, rédaction fonctionnelle, gestion d’équipe et planification.
                    </li>
                    <li>
                        <span className="font-semibold text-yellow-300">Collaboratives</span> : Communication, répartition des rôles, travail en équipe pluridisciplinaire.
                    </li>
                </ul>

                <h2 className="text-xl font-bold text-[#bfae4f] mb-3 mt-8 tracking-wide border-l-4 border-[#bfae4f] pl-3">
                    Bilan
                </h2>
                <p className="text-justify text-gray-200 leading-relaxed">
                    GoPetSit a été une expérience extrêmement formatrice, me permettant de gagner en autonomie, en rigueur et en adaptabilité. Ce projet m’a également sensibilisée à l’ergonomie et à l’accessibilité, tout en me confrontant à des méthodologies de travail proches du milieu professionnel.
                </p>
            </div>

        ),
        skills_overview : [1, 3, 4, 5, 6],
        skills : [
            {
                idSkill: 1,
                idSubSkill: 1,
                lvl: 2,
                justification: "J'ai recueilli et formalisé les besoins du client pour produire un cahier des charges structuré, " +
                    "comprenant les spécifications fonctionnelles (AC1) et non fonctionnelles (AC1). Ce travail a nécessité une " +
                    "analyse précise des exigences métiers et techniques, ainsi qu'une communication claire et régulière avec la " +
                    "cliente. Ce processus m'a permis d’assurer que les fonctionnalités livrées répondent aux attentes, tout en tenant " +
                    "compte des contraintes de faisabilité."
            },
            {
                idSkill: 1,
                idSubSkill: 4,
                lvl: 2,
                justification: "J’ai mis en œuvre une stratégie de tests complète (AC4), intégrant des tests unitaires, d’intégration et système. " +
                    "L'utilisation d'outils automatisés m'a permis de détecter rapidement les anomalies, tandis que des tests utilisateurs " +
                    "ont validé l’ergonomie et l’accessibilité (AC2) de l’interface. Ce dispositif a garanti une application stable, " +
                    "robuste et conforme aux spécifications."
            },
            {
                idSkill: 3,
                idSubSkill: 1,
                lvl: 2,
                justification: "J'ai conçu et développé des applications communicantes (AC1) avec Symfony, en organisant la structure " +
                    "backend autour de services RESTful pour assurer une communication fluide entre les modules. Cette approche a facilité " +
                    "l’intégration des composants du site et leur évolution future."
            },
            {
                idSkill: 3,
                idSubSkill: 3,
                lvl: 2,
                justification: "Pour sécuriser les services et les données (AC3), j'ai appliqué des bonnes pratiques telles que la " +
                    "protection des routes sensibles, la gestion fine des droits d’accès et la validation des données en entrée. " +
                    "Ces mesures ont permis de prévenir les vulnérabilités courantes comme l’injection ou l’élévation de privilèges."
            },
            {
                idSkill: 4,
                idSubSkill: 3,
                lvl: 2,
                justification: "J’ai développé des interfaces interactives permettant aux utilisateurs de visualiser et de modifier " +
                    "des données via des éléments tels que les cartes et les formulaires dynamiques (AC3). J’ai veillé à structurer " +
                    "les données côté front-end de manière intuitive, facilitant ainsi la restitution visuelle et la manipulation " +
                    "des informations de manière fluide."
            },
            {
                idSkill: 5,
                idSubSkill: 3,
                lvl: 2,
                justification: "J’ai évalué la faisabilité du projet (AC3) en tenant compte de contraintes multiples : budget nul, " +
                    "disponibilité partielle de l’équipe (projet réalisé en parallèle des études), et choix d’un stack technologique " +
                    "open source pour optimiser les ressources. Cette analyse a permis de concevoir un périmètre réaliste et cohérent " +
                    "avec les moyens disponibles."
            },
            {
                idSkill: 5,
                idSubSkill: 4,
                lvl: 2,
                justification: "J’ai instauré une méthodologie de gestion de projet basée sur Scrum (AC4), avec des réunions " +
                    "hebdomadaires de suivi interne et des revues de sprint bimensuelles avec la cliente. Ces rituels ont facilité " +
                    "le suivi de l’avancement, l’adaptation continue aux retours, et le respect des échéances."
            },
            {
                idSkill: 6,
                idSubSkill: 3,
                lvl: 2,
                justification: "Pour renforcer la cohésion et l’efficacité de l’équipe (AC3), j’ai organisé une répartition claire " +
                    "des rôles : cheffe de projet, tech lead, développeurs front-end et back-end. Chaque membre a pu s’épanouir dans " +
                    "une fonction correspondant à ses appétences et compétences, ce qui a favorisé une dynamique de groupe constructive " +
                    "et une meilleure coordination."
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
        skills: [
            {
                idSkill: "1",
                idSubSkill: "1",
                lvl: 2,
                justification: "J'ai élaboré et implémenté les spécifications fonctionnelles et non fonctionnelles en " +
                    "définissant les besoins du projet CTF+Z, notamment en adaptant la plateforme open source CTFd " +
                    "aux exigences spécifiques des compétitions de type 'Capture The Flag', ce qui m'a permis de " +
                    "traduire efficacement les attentes utilisateurs en solutions concrètes."
            },
            {
                idSkill: "1",
                idSubSkill: "2",
                lvl: 2,
                justification: "J'ai appliqué des principes d'accessibilité et d'ergonomie en concevant une interface " +
                    "utilisateur claire et intuitive. Cela a facilité la navigation dans l'application, notamment la " +
                    "sélection des défis, la consultation du classement et la soumission des flags, pour offrir une " +
                    "expérience fluide à tous les profils d'utilisateurs."
            },
            {
                idSkill: "2",
                idSubSkill: "1",
                lvl: 2,
                justification: "J'ai choisi et utilisé des structures de données appropriées pour la gestion des utilisateurs, " +
                    "des équipes, des défis et des scores. Ces choix ont permis d’optimiser l’organisation de l'information " +
                    "et d’assurer la performance et la cohérence des interactions dans l’application."
            },
            {
                idSkill: "3",
                idSubSkill: "1",
                lvl: 2,
                justification: "J'ai conçu et développé une application communicante en utilisant Flask, où les utilisateurs " +
                    "peuvent interagir avec une plateforme dynamique pour résoudre des défis et soumettre leurs réponses. " +
                    "L'architecture backend assure une gestion centralisée des scores et des validations."
            },
            {
                idSkill: "3",
                idSubSkill: "2",
                lvl: 2,
                justification: "J'ai déployé l'application sur un VPS en utilisant Docker, ce qui m’a permis de maîtriser " +
                    "l'encapsulation de services dans des conteneurs, la configuration réseau et la mise en production " +
                    "dans un environnement virtualisé fiable et sécurisé."
            },
            {
                idSkill: "3",
                idSubSkill: "3",
                lvl: 2,
                justification: "J’ai sécurisé l’application en mettant en œuvre des mesures comme la gestion des droits " +
                    "d’accès, la validation des entrées, le chiffrement des mots de passe et la configuration HTTPS. " +
                    "Ces actions ont permis de garantir la confidentialité et l’intégrité des données utilisateurs."
            },
            {
                idSkill: "4",
                idSubSkill: "3",
                lvl: 2,
                justification: "J’ai organisé la restitution des données en développant des tableaux de scores, " +
                    "des historiques de participation et des statistiques accessibles via l’interface, afin " +
                    "d’offrir une visualisation claire de la progression des utilisateurs et de leurs performances."
            },
            {
                idSkill: "4",
                idSubSkill: "4",
                lvl: 2,
                justification: "J’ai manipulé des données hétérogènes provenant des inscriptions, des soumissions de défis, " +
                    "et des résultats pour les agréger et les traiter de manière uniforme. Ce traitement a été essentiel " +
                    "pour la cohérence de l'expérience utilisateur et la fiabilité des résultats."
            },
            {
                idSkill: "5",
                idSubSkill: "2",
                lvl: 2,
                justification: "En tant que Product Owner, j’ai formalisé les besoins utilisateurs à travers la rédaction de " +
                    "user stories, en tenant compte des contraintes spécifiques aux compétitions CTF. Cette démarche a permis " +
                    "de cadrer efficacement les objectifs techniques et fonctionnels."
            },
            {
                idSkill: "5",
                idSubSkill: "3",
                lvl: 2,
                justification: "J'ai évalué la faisabilité du projet lors du sprint 0 en analysant les ressources disponibles, " +
                    "les coûts d’hébergement, les limites de la plateforme CTFd, ainsi que les compétences de l’équipe. " +
                    "Cela a permis de dimensionner le projet de manière réaliste et durable."
            },
            {
                idSkill: "5",
                idSubSkill: "4",
                lvl: 2,
                justification: "J’ai mis en œuvre une démarche de suivi de projet rigoureuse en appliquant la méthode Scrum, " +
                    "avec des cérémonies régulières (daily meetings, sprint planning, sprint reviews) permettant de suivre " +
                    "l’évolution du travail, d’ajuster les priorités et d’assurer la livraison dans les temps."
            },
            {
                idSkill: "6",
                idSubSkill: "3",
                lvl: 2,
                justification: "J’ai mobilisé mes compétences interpersonnelles pour garantir une collaboration efficace à distance, " +
                    "en assurant la coordination entre les membres, en animant les réunions et en facilitant la prise de décision " +
                    "collective. Cette capacité d’adaptation a été essentielle pour la réussite du projet."
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
        skills: [
            {
                idSkill: "1",
                idSubSkill: "2",
                lvl: 2,
                justification: "J’ai élaboré et implémenté des spécifications fonctionnelles et non fonctionnelles en analysant les besoins des projets RPA. " +
                    "Par exemple, j’ai conçu un robot en respectant les spécifications métier, tout en intégrant un système de logs pour assurer le suivi " +
                    "et la traçabilité de son exécution."
            },
            {
                idSkill: "1",
                idSubSkill: "4",
                lvl: 2,
                justification: "J’ai vérifié et validé la qualité des robots et des routes API développés en utilisant des outils comme SonarQube pour " +
                    "l’analyse statique du code, ainsi que des tests automatisés avec Pytest et pytest-cov afin de garantir la robustesse et la fiabilité " +
                    "des livrables."
            },
            {
                idSkill: "2",
                idSubSkill: "1",
                lvl: 2,
                justification: "J’ai sélectionné des structures de données adaptées à la logique métier des processus automatisés, notamment des dictionnaires " +
                    "et des listes pour organiser les échanges entre les robots et les systèmes tiers, optimisant ainsi la performance des scripts " +
                    "dans des contextes de données variées et dynamiques."
            },
            {
                idSkill: "3",
                idSubSkill: "2",
                lvl: 2,
                justification: "J’ai utilisé des machines virtuelles pour migrer des robots vers une nouvelle infrastructure, en installant les environnements " +
                    "nécessaires, en assurant leur configuration correcte, et en ajoutant des outils de suivi (logs, gestion des erreurs) afin d’assurer " +
                    "une migration sécurisée et stable."
            },
            {
                idSkill: "4",
                idSubSkill: "3",
                lvl: 2,
                justification: "J’ai développé des outils de restitution comme des rapports automatisés et des tableaux de bord dynamiques, permettant " +
                    "de suivre les performances des robots, d’analyser les écarts et d’offrir une visibilité claire sur les indicateurs de pilotage."
            },
            {
                idSkill: "6",
                idSubSkill: "1",
                lvl: 2,
                justification: "J’ai observé et analysé l’intégration de la RPA dans les processus métiers de différents départements, ce qui m’a permis de " +
                    "comprendre l’impact de l’automatisation sur les performances organisationnelles. La visite d’une Plateforme Industrielle Courrier (PIC) " +
                    "m’a donné un aperçu concret des enjeux logistiques liés aux systèmes d’information."
            },
            {
                idSkill: "6",
                idSubSkill: "2",
                lvl: 2,
                justification: "J’ai suivi une démarche structurée d’intégration en participant aux rituels d’équipe (réunions quotidiennes, rétrospectives) " +
                    "et en m’impliquant activement dans les échanges, facilitant ainsi mon adaptation au sein de la RPA Factory."
            },
            {
                idSkill: "6",
                idSubSkill: "3",
                lvl: 2,
                justification: "J’ai mobilisé mes compétences interpersonnelles pour collaborer efficacement, en utilisant des outils de communication internes " +
                    "(Teams, Outlook) et en participant aux réunions techniques, assurant une bonne coordination et une résolution rapide des blocages."
            },
            {
                idSkill: "6",
                idSubSkill: "4",
                lvl: 2,
                justification: "J’ai régulièrement documenté et présenté mes avancées lors des points d’équipe, en expliquant les choix techniques, les résultats " +
                    "obtenus et les difficultés rencontrées, contribuant ainsi à la transparence du projet et au bon suivi par les encadrants."
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
        skills: [
            {
                idSkill: "1",
                idSubSkill: "1",
                lvl: 2,
                justification: "J'ai élaboré et implémenté des spécifications fonctionnelles et non fonctionnelles à partir " +
                    "des exigences identifiées durant mon stage, en structurant les besoins métiers pour guider le développement " +
                    "de l'application et assurer son adéquation aux attentes de l'organisation."
            },
            {
                idSkill: "1",
                idSubSkill: "3",
                lvl: 2,
                justification: "J'ai compris les enjeux de la sécurité des données et du code en utilisant PyServer couplé " +
                    "à .htaccess pour restreindre l’accès aux routes selon les profils utilisateurs, garantissant ainsi la " +
                    "confidentialité des données et la robustesse du système sur le serveur de l'IUT."
            },
            {
                idSkill: "2",
                idSubSkill: "3",
                lvl: 2,
                justification: "J'ai appliqué des mesures de sécurité logicielles et réseau, telles que la restriction d'accès, " +
                    "la gestion des droits, et la validation des données, afin d'assurer la confidentialité, l'intégrité et la " +
                    "disponibilité des informations dans un environnement virtualisé."
            },
            {
                idSkill: "3",
                idSubSkill: "1",
                lvl: 2,
                justification: "J'ai conçu et développé des applications communicantes en exploitant les services réseau hébergés " +
                    "sur le serveur de l’IUT, assurant une communication efficace entre les modules du système via des requêtes HTTP " +
                    "et des échanges structurés avec une API."
            },
            {
                idSkill: "3",
                idSubSkill: "2",
                lvl: 2,
                justification: "J'ai déployé et administré les services applicatifs sur un serveur distant, en assurant leur " +
                    "stabilité, leur accessibilité sécurisée, et leur interconnexion avec les outils métiers de manière cohérente."
            },
            {
                idSkill: "3",
                idSubSkill: "3",
                lvl: 2,
                justification: "J'ai sécurisé les services et les données en configurant l’accès aux routes via .htaccess et " +
                    "en définissant des contrôles d’accès dans PyServer, afin de protéger les ressources sensibles et de prévenir " +
                    "les accès non autorisés au sein de l'environnement réseau."
            },
            {
                idSkill: "4",
                idSubSkill: "3",
                lvl: 2,
                justification: "J'ai organisé la restitution de données via un script automatisé qui récupérait des informations " +
                    "depuis un fichier Excel, les traitait et les envoyait à une API, facilitant la mise en forme et l’analyse " +
                    "des données pour les utilisateurs finaux."
            },
            {
                idSkill: "4",
                idSubSkill: "4",
                lvl: 2,
                justification: "J'ai manipulé des données hétérogènes en extrayant des données tabulaires depuis Excel, en les " +
                    "convertissant dans un format exploitable (JSON), et en les intégrant via une API, assurant une interopérabilité " +
                    "entre sources de données disparates."
            },
            {
                idSkill: "5",
                idSubSkill: "1",
                lvl: 2,
                justification: "J’ai analysé et reproduit le fonctionnement du robot utilisé pendant mon stage, ce qui m’a permis " +
                    "d’identifier les processus existants dans l’organisation et de réfléchir à des améliorations possibles du " +
                    "système d’information pour automatiser des tâches répétitives et réduire les erreurs humaines."
            },
            {
                idSkill: "6",
                idSubSkill: "1",
                lvl: 2,
                justification: "J’ai analysé la structure informatique de l’organisation en observant les flux de données, les rôles " +
                    "des intervenants, et la place du système d’information dans la chaîne de valeur, ce qui m’a permis de comprendre " +
                    "la complexité et l’importance stratégique des choix technologiques."
            },
            {
                idSkill: "6",
                idSubSkill: "4",
                lvl: 2,
                justification: "J’ai rendu compte de mon activité professionnelle par la rédaction de documents techniques, " +
                    "la présentation orale de mon analyse et la formalisation de mes réflexions dans un livrable structuré, " +
                    "permettant une évaluation claire de mes apports et de mon positionnement au sein du projet."
            }
        ]
    }
]