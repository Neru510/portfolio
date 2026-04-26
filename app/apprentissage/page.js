import Navbar from "../components/Navbar";

export default function Apprentissage() {
  return (
    <div id="main-content">
      <Navbar />
      <div className="min-h-screen text-gray-200 px-4 py-12 pt-35">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-[#bfae4f] tracking-wide mb-4">Portfolio d'Apprentissage</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Bilan des compétences du BUT Informatique développées et mobilisées au travers de mes projets académiques et professionnels.
            </p>
          </div>

          <div className="bg-[#18181b] rounded-2xl shadow-lg p-8 mb-8 border border-[#bfae4f]">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#bfae4f] text-black font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center shrink-0">1</span>
              <div>
                <h2 className="text-2xl font-bold text-[#bfae4f] tracking-wide">Réaliser</h2>
                <p className="text-gray-400 text-sm italic">Adapter des applications sur un ensemble de supports</p>
              </div>
            </div>

            <p className="text-justify text-gray-200 leading-relaxed mb-8">
              La compétence <span className="font-semibold text-yellow-200">Réaliser</span> est celle que j'ai le plus exercée tout au long de mon parcours.
              Que ce soit en développant des fonctionnalités sur des applications en production lors de mon alternance, en concevant une architecture
              complète pour une start-up, ou en pilotant un POC de zéro, j'ai appris à adapter mes solutions aux contraintes techniques, humaines et
              organisationnelles de chaque contexte.
            </p>

            <div className="mb-6">
              <span className="inline-block bg-[#bfae4f]/20 text-[#bfae4f] text-xs font-semibold px-3 py-1 rounded-full mb-4">Niveau 2 — Partir des exigences et aller jusqu'à une application complète</span>
              <div className="space-y-4">

                <div className="bg-[#09090b] rounded-xl p-4 border border-[#bfae4f]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#bfae4f] font-bold text-sm">AC1</span>
                    <span className="text-gray-400 text-sm">Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur le projet <span className="font-semibold text-yellow-200">GoPetSit</span>, j'ai recueilli et formalisé les besoins du client pour produire un cahier des charges structuré,
                    comprenant les spécifications fonctionnelles et non fonctionnelles. Ce travail a nécessité une analyse précise des exigences métiers
                    et techniques, ainsi qu'une communication claire et régulière avec la cliente.
                  </p>
                  <span className="inline-block mt-2 text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                </div>

                <div className="bg-[#09090b] rounded-xl p-4 border border-[#bfae4f]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#bfae4f] font-bold text-sm">AC4</span>
                    <span className="text-gray-400 text-sm">Vérifier et valider la qualité de l'application par les tests</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">GoPetSit</span>, j'ai mis en œuvre une stratégie de tests complète, intégrant des tests unitaires, d'intégration et système.
                    L'utilisation d'outils automatisés m'a permis de détecter rapidement les anomalies, tandis que des tests utilisateurs ont validé
                    l'ergonomie et l'accessibilité de l'interface.
                  </p>
                  <span className="inline-block mt-2 text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                </div>

              </div>
            </div>

            <div>
              <span className="inline-block bg-yellow-400/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">Niveau 3 — Adapter des applications sur un ensemble de supports</span>
              <div className="space-y-4">

                <div className="bg-[#09090b] rounded-xl p-4 border border-yellow-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-300 font-bold text-sm">AC1</span>
                    <span className="text-gray-400 text-sm">Choisir et implémenter les architectures adaptées</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">GoPetSit</span>, j'ai choisi et implémenté l'architecture technique du projet : Symfony (MVC) associé à MariaDB, Tailwind CSS
                    et JavaScript, avec l'intégration de plugins tiers. Sur <span className="font-semibold text-yellow-200">QA-Copilot</span>, j'ai conçu l'architecture du POC en formalisant mes
                    choix via des ADRs et un diagramme d'architecture, garantissant une base solide pour le MVP.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">Alternance — QA-Copilot</span>
                  </div>
                </div>

                <div className="bg-[#09090b] rounded-xl p-4 border border-yellow-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-300 font-bold text-sm">AC2</span>
                    <span className="text-gray-400 text-sm">Faire évoluer une application existante</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Lors de mon alternance chez <span className="font-semibold text-yellow-200">Nudibranches Technologies</span>, j'ai contribué à faire évoluer les applications
                    <span className="font-semibold text-yellow-200"> Abyssens</span> et <span className="font-semibold text-yellow-200">Pro-Archives</span> en y intégrant de nouvelles fonctionnalités :
                    formulaire d'avis sur les réponses IA, personnalisation de l'onboarding et ajout d'un système de versioning. Ces développements
                    ont nécessité de comprendre le fonctionnement existant de chaque application pour s'y intégrer de manière cohérente et non régressive.
                  </p>
                  <span className="inline-block mt-2 text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">Alternance — Abyssens & Pro-Archives</span>
                </div>

                <div className="bg-[#09090b] rounded-xl p-4 border border-yellow-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-300 font-bold text-sm">AC3</span>
                    <span className="text-gray-400 text-sm">Intégrer des solutions dans un environnement de production</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    J'ai déployé et mis en production le site <span className="font-semibold text-yellow-200">GoPetSit</span>, accessible en ligne, impliquant la configuration serveur et la gestion du nom de domaine.
                    Les fonctionnalités développées sur <span className="font-semibold text-yellow-200">Abyssens</span> et <span className="font-semibold text-yellow-200">Pro-Archives</span> ont également été
                    intégrées dans des environnements de production actifs, utilisés par de vrais clients, me confrontant aux exigences de stabilité et de rigueur en conditions réelles.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">Alternance</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="bg-[#18181b] rounded-2xl shadow-lg p-8 mb-8 border border-[#bfae4f]">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#bfae4f] text-black font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center shrink-0">3</span>
              <div>
                <h2 className="text-2xl font-bold text-[#bfae4f] tracking-wide">Administrer</h2>
                <p className="text-gray-400 text-sm italic">Déployer des services dans une architecture réseau</p>
              </div>
            </div>

            <p className="text-justify text-gray-200 leading-relaxed mb-8">
              La compétence <span className="font-semibold text-yellow-200">Administrer</span> s'est manifestée à travers le déploiement d'applications web,
              la mise en place de services sécurisés et la gestion d'environnements de production. Elle a été particulièrement mobilisée sur les projets
              <span className="font-semibold text-yellow-200"> GoPetSit</span> et <span className="font-semibold text-yellow-200">CTF+Z</span>.
            </p>

            <div>
              <span className="inline-block bg-[#bfae4f]/20 text-[#bfae4f] text-xs font-semibold px-3 py-1 rounded-full mb-4">Niveau 2</span>
              <div className="space-y-4">

                <div className="bg-[#09090b] rounded-xl p-4 border border-[#bfae4f]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#bfae4f] font-bold text-sm">AC1</span>
                    <span className="text-gray-400 text-sm">Concevoir et développer des applications communicantes</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">GoPetSit</span>, j'ai conçu et développé des applications communicantes avec Symfony, en organisant la structure backend
                    autour de services RESTful pour assurer une communication fluide entre les modules.
                  </p>
                  <span className="inline-block mt-2 text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                </div>

                <div className="bg-[#09090b] rounded-xl p-4 border border-[#bfae4f]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#bfae4f] font-bold text-sm">AC2</span>
                    <span className="text-gray-400 text-sm">Déployer des services dans une architecture réseau</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">CTF+Z</span>, j'ai déployé l'application sur un VPS en utilisant <span className="font-semibold text-yellow-200">Docker</span>,
                    maîtrisant l'encapsulation de services dans des conteneurs, la configuration réseau et la mise en production dans un environnement virtualisé fiable et sécurisé.
                  </p>
                  <span className="inline-block mt-2 text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">CTF+Z</span>
                </div>

                <div className="bg-[#09090b] rounded-xl p-4 border border-[#bfae4f]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#bfae4f] font-bold text-sm">AC3</span>
                    <span className="text-gray-400 text-sm">Sécuriser les services et les données</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">GoPetSit</span> et <span className="font-semibold text-yellow-200">CTF+Z</span>, j'ai appliqué des bonnes pratiques de sécurisation :
                    protection des routes sensibles, gestion des droits d'accès, validation des données en entrée, chiffrement des mots de passe et configuration HTTPS.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">CTF+Z</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="bg-[#18181b] rounded-2xl shadow-lg p-8 mb-8 border border-[#bfae4f]">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#bfae4f] text-black font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center shrink-0">4</span>
              <div>
                <h2 className="text-2xl font-bold text-[#bfae4f] tracking-wide">Gérer les données</h2>
                <p className="text-gray-400 text-sm italic">Concevoir, gérer, administrer et exploiter les données</p>
              </div>
            </div>

            <p className="text-justify text-gray-200 leading-relaxed mb-8">
              La compétence <span className="font-semibold text-yellow-200">Gérer les données</span> a été mobilisée à travers la conception de bases de données,
              la restitution visuelle d'informations et la manipulation de données hétérogènes sur des projets variés.
            </p>

            <div>
              <span className="inline-block bg-[#bfae4f]/20 text-[#bfae4f] text-xs font-semibold px-3 py-1 rounded-full mb-4">Niveau 2</span>
              <div className="space-y-4">

                <div className="bg-[#09090b] rounded-xl p-4 border border-[#bfae4f]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#bfae4f] font-bold text-sm">AC3</span>
                    <span className="text-gray-400 text-sm">Restituer des données à travers la programmation et la visualisation</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">GoPetSit</span>, j'ai développé des interfaces interactives permettant la visualisation et la modification de données via des
                    cartes et des formulaires dynamiques. Sur <span className="font-semibold text-yellow-200">CTF+Z</span>, j'ai organisé des tableaux de scores, des historiques de participation
                    et des statistiques pour offrir une visualisation claire de la progression des utilisateurs.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">CTF+Z</span>
                  </div>
                </div>

                <div className="bg-[#09090b] rounded-xl p-4 border border-[#bfae4f]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#bfae4f] font-bold text-sm">AC4</span>
                    <span className="text-gray-400 text-sm">Manipuler des données hétérogènes</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">CTF+Z</span>, j'ai manipulé des données hétérogènes provenant des inscriptions, des soumissions de défis et des résultats
                    pour les agréger et les traiter de manière uniforme, assurant la cohérence de l'expérience utilisateur.
                  </p>
                  <span className="inline-block mt-2 text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">CTF+Z</span>
                </div>

              </div>
            </div>
          </div>

          <div className="bg-[#18181b] rounded-2xl shadow-lg p-8 mb-8 border border-[#bfae4f]">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#bfae4f] text-black font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center shrink-0">5</span>
              <div>
                <h2 className="text-2xl font-bold text-[#bfae4f] tracking-wide">Conduire un projet</h2>
                <p className="text-gray-400 text-sm italic">Participer à la conception et à la mise en œuvre d'un projet SI</p>
              </div>
            </div>

            <p className="text-justify text-gray-200 leading-relaxed mb-8">
              La compétence <span className="font-semibold text-yellow-200">Conduire un projet</span> traverse l'ensemble de mon parcours.
              Du recueil des besoins clients à la gestion de sprints Scrum, en passant par l'intégration dans des systèmes d'information existants,
              j'ai développé une vision complète du cycle de vie d'un projet informatique, aussi bien dans un contexte académique que professionnel.
            </p>

            <div className="mb-6">
              <span className="inline-block bg-[#bfae4f]/20 text-[#bfae4f] text-xs font-semibold px-3 py-1 rounded-full mb-4">Niveau 2 — Appliquer une démarche de suivi de projet</span>
              <div className="space-y-4">

                <div className="bg-[#09090b] rounded-xl p-4 border border-[#bfae4f]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#bfae4f] font-bold text-sm">AC2</span>
                    <span className="text-gray-400 text-sm">Formaliser les besoins du client et de l'utilisateur</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">CTF+Z</span>, j'ai formalisé les besoins utilisateurs à travers la rédaction de user stories en tant que Product Owner.
                    Sur <span className="font-semibold text-yellow-200">GoPetSit</span>, j'ai produit un cahier des charges complet à partir des échanges avec la cliente.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">CTF+Z</span>
                  </div>
                </div>

                <div className="bg-[#09090b] rounded-xl p-4 border border-[#bfae4f]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#bfae4f] font-bold text-sm">AC3</span>
                    <span className="text-gray-400 text-sm">Identifier les critères de faisabilité d'un projet</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">GoPetSit</span> et <span className="font-semibold text-yellow-200">CTF+Z</span>, j'ai évalué la faisabilité en tenant compte des contraintes
                    budgétaires, humaines et techniques, permettant de définir un périmètre réaliste et cohérent avec les moyens disponibles.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">CTF+Z</span>
                  </div>
                </div>

                <div className="bg-[#09090b] rounded-xl p-4 border border-[#bfae4f]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#bfae4f] font-bold text-sm">AC4</span>
                    <span className="text-gray-400 text-sm">Définir et mettre en œuvre une démarche de suivi de projet</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">GoPetSit</span> et <span className="font-semibold text-yellow-200">CTF+Z</span>, j'ai mis en œuvre la méthode
                    <span className="font-semibold text-yellow-200"> Scrum</span> avec des cérémonies régulières (sprint planning, daily, reviews), assurant le suivi des livrables et le respect des délais.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">CTF+Z</span>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <span className="inline-block bg-yellow-400/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">Niveau 3 — Participer à la conception et à la mise en œuvre d'un projet SI</span>
              <div className="space-y-4">

                <div className="bg-[#09090b] rounded-xl p-4 border border-yellow-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-300 font-bold text-sm">AC1</span>
                    <span className="text-gray-400 text-sm">Mesurer les impacts économiques, sociétaux et technologiques</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">GoPetSit</span>, le site constitue l'outil commercial central de la start-up : j'ai mesuré son impact en tenant compte des
                    contraintes budgétaires et des enjeux de visibilité. Lors de mon alternance, j'ai compris en quoi l'IA représente une valeur ajoutée
                    concrète pour les utilisateurs d'<span className="font-semibold text-yellow-200">Abyssens</span> et les syndics de <span className="font-semibold text-yellow-200">Pro-Archives</span>.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">Alternance</span>
                  </div>
                </div>

                <div className="bg-[#09090b] rounded-xl p-4 border border-yellow-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-300 font-bold text-sm">AC2</span>
                    <span className="text-gray-400 text-sm">Savoir intégrer un projet informatique dans le SI d'une organisation</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">GoPetSit</span>, j'ai conçu une architecture complète s'intégrant dans le SI de la start-up.
                    Sur <span className="font-semibold text-yellow-200">Pro-Archives</span>, j'ai veillé à ce que mes développements s'inscrivent dans le système d'information
                    des syndics, en respectant les flux de données et contraintes organisationnelles existants.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">Alternance — Pro-Archives</span>
                  </div>
                </div>

                <div className="bg-[#09090b] rounded-xl p-4 border border-yellow-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-300 font-bold text-sm">AC3</span>
                    <span className="text-gray-400 text-sm">Savoir adapter un système d'information</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">GoPetSit</span>, j'ai adapté le SI en fonction des retours client tout au long du projet.
                    Sur <span className="font-semibold text-yellow-200">Abyssens</span> et <span className="font-semibold text-yellow-200">Pro-Archives</span>, le développement du versioning
                    et la personnalisation de l'onboarding illustrent ma capacité à faire évoluer un système d'information en réponse aux besoins utilisateurs.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">Alternance</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="bg-[#18181b] rounded-2xl shadow-lg p-8 mb-8 border border-[#bfae4f]">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#bfae4f] text-black font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center shrink-0">6</span>
              <div>
                <h2 className="text-2xl font-bold text-[#bfae4f] tracking-wide">Collaborer</h2>
                <p className="text-gray-400 text-sm italic">Manager une équipe informatique</p>
              </div>
            </div>

            <p className="text-justify text-gray-200 leading-relaxed mb-8">
              La compétence <span className="font-semibold text-yellow-200">Collaborer</span> s'est développée à la fois dans des contextes d'équipe pluridisciplinaire
              et en totale autonomie. Du management d'une équipe de six étudiants sur <span className="font-semibold text-yellow-200">GoPetSit</span> au pilotage solo du POC
              <span className="font-semibold text-yellow-200"> QA-Copilot</span>, j'ai su m'adapter à des configurations très différentes.
            </p>

            <div className="mb-6">
              <span className="inline-block bg-[#bfae4f]/20 text-[#bfae4f] text-xs font-semibold px-3 py-1 rounded-full mb-4">Niveau 2 — Situer son rôle au sein d'une équipe</span>
              <div className="space-y-4">

                <div className="bg-[#09090b] rounded-xl p-4 border border-[#bfae4f]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#bfae4f] font-bold text-sm">AC3</span>
                    <span className="text-gray-400 text-sm">Mobiliser les compétences interpersonnelles pour intégrer une équipe</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">GoPetSit</span> et <span className="font-semibold text-yellow-200">CTF+Z</span>, j'ai mobilisé mes compétences interpersonnelles
                    pour garantir une collaboration efficace, assurer la coordination entre les membres et faciliter la prise de décision collective.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">CTF+Z</span>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <span className="inline-block bg-yellow-400/20 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">Niveau 3 — Manager une équipe informatique</span>
              <div className="space-y-4">

                <div className="bg-[#09090b] rounded-xl p-4 border border-yellow-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-300 font-bold text-sm">AC1</span>
                    <span className="text-gray-400 text-sm">Organiser et partager une veille technologique et informationnelle</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Évoluant dans un environnement centré sur l'IA et le cloud souverain chez <span className="font-semibold text-yellow-200">Nudibranches Technologies</span>,
                    j'ai développé une veille technologique active sur les LLMs, les architectures cloud-native et les outils de QA automatisés.
                    Cette veille a directement nourri la conception du POC <span className="font-semibold text-yellow-200">QA-Copilot</span> et mes choix techniques.
                  </p>
                  <span className="inline-block mt-2 text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">Alternance</span>
                </div>

                <div className="bg-[#09090b] rounded-xl p-4 border border-yellow-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-300 font-bold text-sm">AC2</span>
                    <span className="text-gray-400 text-sm">Identifier les enjeux de l'économie de l'innovation numérique</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    J'ai accompagné la start-up <span className="font-semibold text-yellow-200">GoPetSit</span> dans la compréhension des enjeux du numérique, en expliquant les choix techniques,
                    les possibilités d'évolution et les opportunités offertes par le web pour leur modèle économique.
                  </p>
                  <span className="inline-block mt-2 text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                </div>

                <div className="bg-[#09090b] rounded-xl p-4 border border-yellow-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-300 font-bold text-sm">AC3</span>
                    <span className="text-gray-400 text-sm">Guider la conduite du changement informatique</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    J'ai guidé la conduite du changement sur <span className="font-semibold text-yellow-200">GoPetSit</span> en formant le client à l'utilisation du back-office,
                    en rédigeant de la documentation et en l'accompagnant dans l'appropriation de l'outil numérique central à son activité.
                  </p>
                  <span className="inline-block mt-2 text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                </div>

                <div className="bg-[#09090b] rounded-xl p-4 border border-yellow-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-300 font-bold text-sm">AC4</span>
                    <span className="text-gray-400 text-sm">Accompagner le management de projet informatique</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Sur <span className="font-semibold text-yellow-200">GoPetSit</span>, j'ai assuré le management du projet de bout en bout sur 5 mois.
                    Lors de mon alternance, en pilotant seule <span className="font-semibold text-yellow-200">QA-Copilot</span> — du PRD aux ADRs jusqu'au MVP —
                    j'ai assumé un rôle de gestion de projet à part entière, structurant les étapes et livrant des livrables clairs et exploitables.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">GoPetSit</span>
                    <span className="text-xs bg-[#bfae4f]/10 text-[#bfae4f] px-2 py-0.5 rounded-full">Alternance — QA-Copilot</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}