/* =========================================
   FICHIER DE CONTENU (TEXTES PURS)
   Toutes les chaînes de caractères visibles 
   par l'utilisateur sont centralisées ici.
   ========================================= */

const translations = {
    fr: {
        siteTexts: {
            global: {
                metaTitle: "Antoine Pezzulo",
                metaDesc: "Game Design Portfolio",
                mobileWarningTitle: "ANTOINE PEZZULO<br>PORTFOLIO",
                mobileWarningDesc: "Conçu pour ordinateur",
                wipToast: "Work in progress",
                nav: {
                    fr: "FR",
                    en: "EN",
                    accueil: "Accueil",
                    portfolio: "Portfolio",
                    moi: "Moi",
                    contacts: "Contacts",
                    jouer: "Jouer"
                },
                buttons: {
                    close: "Fermer",
                    back: "Retour",
                    copied: "Copié"
                }
            },
            accueil: {
                heroTitle: "ANTOINE PEZZULO",
                heroSubtitle: "Game Designer en formation",
                status: "Actuellement disponible pour un stage à partir du 13 juillet 2026",
                blobWelcome: "Bonjour à vous et bienvenue sur le site d’Antoine, bonne visite !",
                blobAngry: "Antoine m’avait juste mis là pour dire bonjour… et voilà ce qui arrive à chaque fois.",
                aboutLine: "Game Designer junior passionné par le game feel, l’UX et la tutorialisation.<br>J’aime travailler directement dans le moteur, les mains dans le cambouis."
            },
            portfolio: {
                heroTitle: "PORTFOLIO",
                heroSubtitle: "projets académiques & personnels",
                sortLabel: "Trier par",
                sortRelevance: "Pertinence",
                sortDate: "Date"
            },
            moi: {
                heroTitle: "Moi",
                heroSubtitle: "Mieux me connaître",
                name: "ANTOINE PEZZULO",
                motto: "Faire. Ressentir. Ajuster. Refaire.",
                stats: {
                    formationLabel: "Formation",
                    formationVal: "ISART Digital Paris · Game Design",
                    specialtyLabel: "Spécialité",
                    specialtyVal: "Game Feel · Tutorialisation · UX",
                    toolsLabel: "Outils",
                    toolsVal: "Unity · Godot · Excel · Git · Figma"
                },
                cvLabel: "CV",
                cvFr: "Francais",
                cvEn: "Anglais",
                bioTitle: "Biographie",
                gamesTitle: "Ces jeux qui m’ont marqué",
                gamesList: [
                    "Manifold Garden", "Blasphemous 2", "Valheim", "Elden Ring", 
                    "Silksong", "Blue Prince", "Dune Imperium", "DOOM Eternal", 
                    "Sekiro", "Viewfinder", "The Alters", "Inscryption"
                ]
            },
            contacts: {
                heroTitle: "CONTACTS",
                heroSubtitle: "Présence en ligne & moyens de contact",
                sectionContact: "Contact",
                email: "Email",
                linkedin: "LinkedIn",
                phone: "Téléphone",
                discord: "Discord",
                sectionPlatforms: "Plateformes",
                platforms: ["Itch.io", "Newgrounds", "GitHub"],
                sectionArticles: "Articles et Réflexions",
                btnCv: "CV",
                articles: [
                    { tag: "Guide", title: "Guide de gameplay - 1 million de vues" },
                    { tag: "Article", title: "Analyse du systeme de matchmaking" },
                    { tag: "Vidéo", title: "Analyse de FTUE - Detroit Become Human" },
                    { tag: "Article", title: "Critique de l'industrie - Star Citizen" }
                ]
            },
            jouer: {
                sessionActive: "Session active",
                endSession: "Terminer",
                gameTitleFallback: "TITRE DU JEU",
                ytModalClose: "Fermer la vidéo"
            },
            projectViewer: {
                glance: "Coup d'œil",
                specs: {
                    team: "Equipe",
                    context: "Contexte",
                    date: "Date",
                    duration: "Durée",
                    engine: "Moteur"
                },
                contributions: "Contributions",
                solo: "Solo",
                descriptionFallback: "Description à venir.",
                interactiveProject: "Projet Interactif",
                links: {
                    trailer: "Trailer",
                    walkthrough: "Walkthrough",
                    gameplay: "Gameplay",
                    itch: "Itch.io"
                }
            }
        },
        bioTextContent: `Avant d’intégrer le cursus Game Design d’ISART Digital, j’ai suivi une classe préparatoire aux grandes écoles de commerce. Cette expérience m’a apporté une solide rigueur mathématique, et surtout une certitude : ce n’était pas là que je voulais aller. J’ai donc fait le choix de me réorienter pour me consacrer pleinement au jeu vidéo. Un virage assumé, que je considère aujourd’hui comme une évidence.\n\nCe qui me passionne avant tout, c’est la manière dont un jeu se ressent. Le game feel et l’expérience utilisateur sont au cœur de mon approche, toujours très concrète : prototyper rapidement, tester, itérer, affiner. Pour moi, le game design se vit dans le moteur, au plus près du jeu, de ses mécaniques et de ses sensations.`,
        projectTexts: {
            "metro": {
                title: "METRO",
                subtitle: "One Button Runner",
                tags: ["Game Design", "Level Design", "Programmation", "UI/UX", "Visual", "Sound Design"],
                specs: { team: "Solo", context: "Académique / Personnel", date: "Mars 2025", duration: "En cours", engine: "Unity" },
                description: "METRO est né d’une contrainte : concevoir un jeu entièrement jouable avec la barre espace. Je continue aujourd’hui de le développer sur mon temps personnel afin d’en approfondir le contenu et d’atteindre un haut niveau de finition.",
                blocks: [
                    {
                        title: "Pitch",
                        text: "Une moto sans pilote lancée à pleine vitesse traverse un tunnel semé d’obstacles.\n\nUn seul bouton pour orienter la trajectoire et les esquiver, porté par une musique qui impose le tempo."
                    },
                    {
                        title: "Prototypages rapides",
                        text: "Après une phase de réflexion, j’ai retenu quatre concepts prometteurs que j’ai rapidement prototypés afin d’identifier le plus fort. Celui de la moto dans un tube s’est imposé pour son excellent ratio complexité / profondeur et son faible coût de développement, libérant davantage de temps pour le polish."
                    },
                    {
                        title: "Game Design",
                        text: "Fidèle au principe de less is more, j’ai écarté toute mécanique secondaire pour me concentrer uniquement sur l’esquive. Je me suis inspiré de Super Hexagon pour sa capacité à inciter le joueur à relancer immédiatement après un échec. J’ai ainsi intégré un bouton de relance instantanée à la mort du joueur, rapide et satisfaisant.\n\nLe jeu est difficile et vise un public aguerri, mais j’ai volontairement truqué le niveau 1 pour le rendre extrêmement facile afin qu’aucun joueur ne quitte le jeu avant d’avoir réussi au moins un niveau. Galvanisé par cette première réussite, l’objectif est de le pousser à essayer les suivants et d’augmenter sa résilience face à l’échec, puisqu’il connaît désormais le goût de la victoire."
                    },
                    {
                        title: "Level Design",
                        text: "J’ai cherché à concevoir des situations marquantes et uniques, sans répétition malgré la simplicité des obstacles à ma disposition. La musique structure chaque niveau en donnant le tempo des patterns et des inputs attendus, sans pour autant faire de METRO un jeu de rythme ; elle porte le joueur.\n\nJ’ai conçu chaque niveau avec une identité propre et reconnaissable, sans ajouter de mécaniques supplémentaires, uniquement en jouant sur la forme des patterns. Par exemple, le niveau rouge, accompagné d’une musique lourde et oppressante, adopte un rythme plus lent et des patterns plus claustrophobes et précis. Le niveau bleu, porté par une musique très rapide et entraînante, augmente la vitesse et propose des patterns plus légers à esquiver."
                    },
                    {
                        title: "Game Feel",
                        text: "J’ai rapidement été confronté à un enjeu de game feel : trouver l’équilibre entre sensation de vitesse et motion sickness. Le tube dans lequel évolue le joueur tourne en permanence tout en avançant très rapidement. Un motif trop visible provoquait un fort inconfort, tandis qu’un motif trop discret faisait perdre les repères spatiaux et atténuait la perception de vitesse.\n\nJ’ai donc conçu un motif permettant de percevoir à la fois la rotation et la vitesse de déplacement, sans devenir hypnotisant à grande vitesse, réduisant ainsi drastiquement la motion sickness. Cela m’a demandé un processus rigoureux de tests et d’itérations."
                    },
                    {
                        title: "UI / UX",
                        text: "La contrainte du one button s’appliquait également aux menus du jeu, ce qui représentait un réel défi d’UI/UX. J’ai donc conçu une navigation entièrement jouable à la barre espace : une pression pour naviguer, un maintien pour valider.\n\nUn important travail de polish, de feedback et de game feel m’a permis de rendre ces menus à la fois instinctifs, agréables et robustes."
                    }
                ],
                mediaTexts: {
                    block3: { legends: ['Lent et Oppressant', 'Rapide et Intense'] },
                    block4: { captions: ['Motif trop visible', 'Motif trop discret', 'Motif parfait'] }
                }
            },
            "mouseknight": {
                title: "MOUSE KNIGHT",
                subtitle: "Action Aventure",
                tags: ["Game Design", "Level Design", "Programmation", "UI/UX", "Visual"],
                specs: { team: "5 Design - 2 Sound", context: "Académique", date: "Décembre 2025", duration: "3 mois", engine: "Unity" },
                description: "Réalisé en équipe à ISART, Mouse Knight m’a amené à jouer un rôle structurant dans la conception et l’implémentation du jeu. Fortement impliqué dans le développement, j’ai veillé à maintenir une expérience cohérente.",
                blocks: [
                    {
                        title: "Pitch",
                        text: "Une petite souris chevalier se lance dans une aventure d’environ quinze minutes.\n\nIncapable de manier une épée, elle se défend en sautant et en rebondissant violemment sur la tête de ses adversaires."
                    },
                    {
                        title: "Contribution au projet",
                        text: "Nous étions cinq game designers sur le projet, dont deux capables de programmer, moi compris. J’ai pris en charge une grande partie du développement en programmant la majorité du jeu et en façonnant directement l’expérience manette en main.\n\nAu-delà de l’implémentation, mon rôle m’a naturellement amené à orienter de nombreuses décisions structurantes, qu’il s’agisse des mécaniques du joueur, du game feel, des caméras, de l’interface ou encore du tutoriel. Cette implication transversale m’a permis de contribuer fortement à la cohérence globale du projet."
                    },
                    {
                        title: "Caméra et lisibilité",
                        text: "Les premiers playtests ont révélé un problème de lisibilité : lors des sauts, la caméra suivait le joueur vers le haut et lui faisait perdre de vue le sol, pourtant indispensable pour anticiper son point d’impact et viser ses ennemis.\n\nPour y répondre, j’ai mené un important travail d’itération afin de concevoir une auto-caméra capable de s’adapter au contexte. Celle-ci plonge momentanément pour redonner de la visibilité lorsque le joueur est en l’air, tandis qu’un offset vertical replace naturellement la zone d’atterrissage au centre de l’écran.\n\nCette approche m’a permis d’améliorer la lecture de l’action sans alourdir le contrôle, renforçant ainsi la précision et le confort de jeu."
                    },
                    {
                        title: "FTUE",
                        text: "Le jeu repose entièrement sur la mécanique du pogo, un dash vertical permettant de rebondir sur les ennemis. Son apprentissage constituait donc un enjeu central. J’ai pris en charge la conception et l’implémentation d’une FTUE visant à introduire cette action de manière progressive, en limitant d’abord les possibilités du joueur afin de focaliser son attention sur l’essentiel.\n\nL’expérience débute dans une cage suspendue au-dessus d’un vaste gouffre, instaurant immédiatement une tension tout en empêchant tout déplacement. Des indications contextuelles guident les premières tentatives, tandis qu’un léger ralentissement du temps accompagne le saut initial pour faciliter la compréhension du timing.\n\nEn brisant la cage grâce au pogo, le joueur valide naturellement son apprentissage avant d’accéder à la suite des mécaniques."
                    }
                ],
                mediaTexts: {
                    block2: { legends: ['Avant', 'Après'] }
                }
            },
            "voracines": {
                title: "VORACINES",
                subtitle: "Jeu de plateau tactique",
                tags: ["Game Design", "Visual"],
                specs: { team: "5 Design - 2 Artists", context: "Académique", date: "Décembre 2025", duration: "3 mois", engine: "" },
                description: "Avec Voracines, l’objectif était de concevoir un jeu de plateau tactique capable de générer des décisions pertinentes à partir d’un ensemble de règles volontairement simples.",
                blocks: [
                    {
                        title: "Brief Game Artists",
                        text: "J’ai rédigé un brief détaillé à destination des game artists afin de poser une direction artistique claire et alignée avec les intentions de design. Ce document regroupait le style visuel à suivre, des moodboards et références, ainsi que de nombreuses spécifications techniques propres au jeu de plateau (formats, lisibilité, contraintes matérielles). Pensé comme un véritable référentiel de production, il offrait un cadre structurant tout en laissant aux artists une marge d’interprétation."
                    },
                    {
                        title: "Playtests",
                        text: "En supervisant les playtests, j’ai identifié un frein majeur : le temps d’appropriation des règles ralentissait le démarrage des parties et parasitait l’observation du jeu. J’ai donc conçu un livret de règles express, condensant une quinzaine de pages en quatre fiches synthétiques et immédiatement exploitables. Ce format a nettement fluidifié les sessions et recentré les tests sur les décisions des joueurs plutôt que sur la compréhension des règles."
                    }
                ],
                mediaTexts: {
                    block0: {
                        captions: [
                            'Intro', 'Sommaire', 'Univers', 'Mise en page', 'Evolution du plateau', 'Ambiances',
                            'Ambiance 1', 'Ambiance 2', 'Styles graphiques', 'Style graphique 1', 'Style graphique 2',
                            'Autres Graphismes', 'Récurrents', 'Bâtiments', 'Spécifications Techniques', 'Besoins', 'Extras'
                        ]
                    }
                }
            },
            "reflect": {
                title: "REFLECT",
                subtitle: "Action Puzzle",
                tags: ["Level Design"],
                specs: { team: "1 Design & Code - 1 LD - 1 Sound", context: "Personnel", date: "Janvier 2026", duration: "6 mois", engine: "Godot" },
                description: "Reflect est un projet personnel que j’ai rejoint en cours de production pour en assurer le level design, en m’adaptant à un cadre et à des fondations déjà établis.",
                blocks: [
                    {
                        title: "Pitch",
                        text: "Incapable d’attaquer directement, le joueur doit exploiter les projectiles ennemis grâce à une mécanique de parade. Reflect est un action-puzzle où l’attaque vient de l’ennemi, et la solution du joueur."
                    },
                    {
                        title: "Level Design",
                        text: "J’ai conçu 40 niveaux avec l’ambition que chacun fonctionne comme un mini-jeu à part entière, porté par sa propre idée, son défi et sa logique de résolution. Cette approche m’a conduit à éviter toute déclinaison au profit de situations constamment renouvelées, constituant un véritable exercice d’endurance en conception.\n\nPour soutenir cette variété, j’ai introduit les ennemis progressivement : chaque première apparition faisait office de tutoriel implicite, permettant au joueur d’en assimiler naturellement les comportements avant de les retrouver combinés dans configurations plus exigeantes. La difficulté suit ainsi une progression globale ascendante, rythmée par des variations d’intensité afin de créer un pacing plus respirable pour le joueur. De nombreux niveaux ont été ajustés, repensés, voire retirés à la suite de premiers retours afin de maintenir un niveau d’exigence élevé."
                    },
                    {
                        title: "Adaptation technique",
                        text: "J’ai rapidement pris en main Godot afin d’implémenter l’ensemble de mes niveaux, en manipulant directement les assets, les ennemis et leurs paramètres. Cette autonomie m’a permis de tester, ajuster et itérer efficacement dans un environnement technique nouveau."
                    }
                ],
                mediaTexts: {
                    block1: { captions: ['Action Puzzle', 'Puzzle', 'Action'] }
                }
            },
            "pleasantchalk": {
                title: "PLEASANT CHALK",
                subtitle: "Arcade Shooter",
                tags: ["UI/UX", "Visual", "Sound Design"],
                specs: { team: "Solo", context: "Académique", date: "Janvier 2025", duration: "2 semaines", engine: "Unity" },
                description: "Pleasant Chalk s’inscrit dans le cadre du projet Juice It, dont l’objectif était de transformer une base de jeu volontairement austère et fade en une expérience juicy, sans modifier le gameplay.",
                blocks: [
                    {
                        title: "Pitch",
                        text: "Dans Pleasant Chalk, le joueur contrôle une craie évoluant sur un tableau dans une ambiance chill et lo-fi, où chacun de ses déplacements laisse une trace."
                    },
                    {
                        title: "Parti pris de design",
                        text: "La version initiale proposait une expérience volontairement fade, marquée par une forte inertie et une sensation globale de lenteur imposées par le gameplay.\n\nNe pouvant modifier ces paramètres, j’ai choisi de les embrasser en orientant le projet vers une ambiance chill et lo-fi, afin de proposer une expérience cohérente et apaisante."
                    },
                    {
                        title: "Direction sensorielle",
                        text: "Afin de soutenir cette direction, j’ai développé une ambiance chill et lo-fi reposant sur un travail sonore et un post-process granuleux, contribuant à installer une atmosphère douce et apaisante. Dans un souci de continuity, les déplacements de la craie permettent de dessiner directement en jeu, une possibilité également reprise dans les menus à la souris.\n\nL’ensemble est soutenu par des feedbacks visuels et sonores soignés, pensés pour rester discrets et préserver l’équilibre de l’expérience plutôt que de tomber dans une surenchère d’effets."
                    }
                ],
                mediaTexts: {
                    block1: { legend: 'Template de départ' },
                    block2: { captions: ['Juice & Feedback', 'Menu dessinable'] }
                }
            },
            "musclesrockets": {
                title: "MUSCLES & ROCKETS",
                subtitle: "Action Platformer",
                tags: ["Game Design", "Level Design", "UI/UX"],
                specs: { team: "6 Design - 1 Code - 1 Sound", context: "Académique", date: "Mars 2025", duration: "6 semaines", engine: "Unity" },
                description: "Muscles & Rockets avait pour objectif d’unifier défis de plateforme et de combat au sein d’un action-platformer reposant sur une mécanique centrale hybride.",
                blocks: [
                    {
                        title: "Pitch",
                        text: "Armé d’un lance-roquettes, le joueur affronte ses ennemis et exploite le recul généré par chaque tir pour se propulser à travers des défis de plateforme."
                    },
                    {
                        title: "FTUE & Level Design",
                        text: "J’ai conçu puis implémenté le premier niveau du jeu, chargé d’introduire la mécanique centrale reposant sur le tir et le recul généré par chaque tir. L’enjeu était d’amener le joueur à en comprendre rapidement les possibilités sans générer de confusion ni de frustration.\n\nLe niveau repose sur une progression guidée, alternant situations d’apprentissage et premières mises à l’épreuve, afin d’amener progressivement le joueur vers la maîtrise de la mécanique."
                    },
                    {
                        title: "Lisibilité et feedback",
                        text: "Le joueur dispose d’un chargeur de quatre roquettes, entièrement rechargé au contact du sol. Son état évoluant rapidement en pleine action, il était essentiel que cette information soit lisible instantanément. J’ai donc conçu puis implémenté un affichage directement intégré au personnage, permettant au joueur de rester focalisé sur l’action."
                    }
                ],
                mediaTexts: {
                    block1: { captions: ['Layout Niveau 1', 'RocketJump : Découverte', 'RocketJump : Apprentissage', 'RocketJump : Maîtrise'] }
                }
            },
            "screenshakelab": {
                title: "SCREEN SHAKE LAB",
                subtitle: "Outil Interactif",
                tags: ["Tool", "Game Feel", "UI/UX", "Programmation"],
                specs: { team: "Solo", context: "Personnel", date: "Mars 2026", duration: "1 semaine", engine: "Unity" },
                description: "Un outil interactif conçu pour les designers et développeurs, permettant d'expérimenter, de tweaker et de comprendre toutes les nuances des screen shakes.",
                blocks: [
                    {
                        title: "Pédagogie",
                        text: "L'objectif de ce projet est avant tout pédagogique. Le screen shake est une mécanique bien plus profonde qu'il n'y paraît et son impact sur le game feel est immense. J'ai voulu créer un espace où l'on peut expérimenter en temps réel pour en saisir chaque nuance. L'utilisateur est accompagné par un panneau d'aide dynamique qui s'adapte au réglage survolé pour en expliquer l'usage. Il peut aussi s'appuyer sur plusieurs profils prédéfinis pour s'inspirer et décortiquer la construction d'effets classiques."
                    },
                    {
                        title: "UI / UX",
                        text: "Pour l'interface, le défi était d'exposer de nombreux paramètres et informations à l'écran sans obstruer la vue, avec pour objectif d'offrir la meilleure perception possible du shake. Plusieurs choix de design ont été faits en ce sens. Le bouton qui déclenche l'effet est par exemple intradiégétique et placé au centre de la pièce. Cela force naturellement l'utilisateur à s'ancrer dans l'espace 3D au moment du shake, pour mieux le ressentir."
                    }
                ]
            }
        }
    },
    en: {
        siteTexts: {
            global: {
                metaTitle: "Antoine Pezzulo",
                metaDesc: "Game Design Portfolio",
                mobileWarningTitle: "ANTOINE PEZZULO<br>PORTFOLIO",
                mobileWarningDesc: "Designed for desktop",
                wipToast: "Work in progress",
                nav: {
                    fr: "FR",
                    en: "EN",
                    accueil: "Home",
                    portfolio: "Portfolio",
                    moi: "Me",
                    contacts: "Contacts",
                    jouer: "Play"
                },
                buttons: {
                    close: "Close",
                    back: "Back",
                    copied: "Copied"
                }
            },
            accueil: {
                heroTitle: "ANTOINE PEZZULO",
                heroSubtitle: "Game Designer in training",
                status: "Available for an internship starting on 13 July 2026",
                blobWelcome: "Hello and welcome to Antoine's website, enjoy your visit!",
                blobAngry: "Antoine just put me here to say hello... and this is what happens every time.",
                aboutLine: "Junior Game Designer passionate about game feel, UX, and onboarding.<br>I love working directly in the engine, getting my hands dirty."
            },
            portfolio: {
                heroTitle: "PORTFOLIO",
                heroSubtitle: "academic & personal projects",
                sortLabel: "Sort by",
                sortRelevance: "Relevance",
                sortDate: "Date"
            },
            moi: {
                heroTitle: "Me",
                heroSubtitle: "Get to know me",
                name: "ANTOINE PEZZULO",
                motto: "Make. Feel. Tweak. Repeat.",
                stats: {
                    formationLabel: "Education",
                    formationVal: "ISART Digital Paris · Game Design",
                    specialtyLabel: "Specialty",
                    specialtyVal: "Game Feel · Onboarding · UX",
                    toolsLabel: "Tools",
                    toolsVal: "Unity · Godot · Excel · Git · Figma"
                },
                cvLabel: "Resume",
                cvFr: "French",
                cvEn: "English",
                bioTitle: "Biography",
                gamesTitle: "Games that left a mark on me",
                gamesList: [
                    "Manifold Garden", "Blasphemous 2", "Valheim", "Elden Ring", 
                    "Silksong", "Blue Prince", "Dune Imperium", "DOOM Eternal", 
                    "Sekiro", "Viewfinder", "The Alters", "Inscryption"
                ]
            },
            contacts: {
                heroTitle: "CONTACTS",
                heroSubtitle: "Online presence & contact info",
                sectionContact: "Contact",
                email: "Email",
                linkedin: "LinkedIn",
                phone: "Phone",
                discord: "Discord",
                sectionPlatforms: "Platforms",
                platforms: ["Itch.io", "Newgrounds", "GitHub"],
                sectionArticles: "Articles and Thoughts",
                btnCv: "Resume",
                articles: [
                    { tag: "Guide", title: "Gameplay guide - 1 million views" },
                    { tag: "Article", title: "Matchmaking system analysis" },
                    { tag: "Video", title: "FTUE Analysis - Detroit Become Human" },
                    { tag: "Article", title: "Industry critique - Star Citizen" }
                ]
            },
            jouer: {
                sessionActive: "Active session",
                endSession: "End",
                gameTitleFallback: "GAME TITLE",
                ytModalClose: "Close video"
            },
            projectViewer: {
                glance: "At a glance",
                specs: {
                    team: "Team",
                    context: "Context",
                    date: "Date",
                    duration: "Duration",
                    engine: "Engine"
                },
                contributions: "Contributions",
                solo: "Solo",
                descriptionFallback: "Description coming soon.",
                interactiveProject: "Interactive Project",
                links: {
                    trailer: "Trailer",
                    walkthrough: "Walkthrough",
                    gameplay: "Gameplay",
                    itch: "Itch.io"
                }
            }
        },
        bioTextContent: `Before joining the Game Design program at ISART Digital, I attended a preparatory class for top French business schools. This experience gave me solid mathematical rigor, and above all, a certainty: that was not where I wanted to go. I therefore chose to redirect my path to fully dedicate myself to video games. A deliberate turning point, which I now consider an obvious choice.\n\nWhat drives me above all is how a game feels. Game feel and user experience are at the core of my approach, which is always very hands-on: prototype quickly, test, iterate, tweak. For me, game design is experienced inside the engine, as close as possible to the game, its mechanics, and its sensations.`,
        projectTexts: {
            "metro": {
                title: "METRO",
                subtitle: "One Button Runner",
                tags: ["Game Design", "Level Design", "Programming", "UI/UX", "Visual", "Sound Design"],
                specs: { team: "Solo", context: "Academic / Personal", date: "March 2025", duration: "Ongoing", engine: "Unity" },
                description: "METRO was born from a constraint: designing a game entirely playable with the spacebar. I am still developing it in my spare time today to deepen its content and achieve a high level of polish.",
                blocks: [
                    {
                        title: "Pitch",
                        text: "A riderless motorcycle speeds through a tunnel filled with obstacles.\n\nA single button to steer and dodge, driven by a soundtrack that sets the tempo."
                    },
                    {
                        title: "Rapid Prototyping",
                        text: "After a brainstorming phase, I selected four promising concepts that I quickly prototyped to identify the strongest one. The motorcycle in a tube stood out for its excellent depth-to-complexity ratio and low development cost, freeing up more time for polish."
                    },
                    {
                        title: "Game Design",
                        text: "True to the 'less is more' principle, I discarded any secondary mechanics to focus solely on dodging. I drew inspiration from Super Hexagon for its ability to encourage the player to immediately retry after a failure. I thus integrated an instant restart button upon player death, fast and satisfying.\n\nThe game is difficult and targets a hardcore audience, but I deliberately tuned level 1 to make it extremely easy so that no player leaves the game before having cleared at least one level. Emboldened by this first success, the goal is to push them to try the next ones and increase their resilience to failure, since they now know the taste of victory."
                    },
                    {
                        title: "Level Design",
                        text: "I sought to design memorable and unique situations, without repetition despite the simplicity of the obstacles at my disposal. The music structures each level by setting the tempo for the patterns and expected inputs, without making METRO a rhythm game; it carries the player.\n\nI designed each level with its own recognizable identity, without adding extra mechanics, solely by playing on the shape of the patterns. For example, the red level, accompanied by heavy and oppressive music, adopts a slower pace and more claustrophobic, precise patterns. The blue level, driven by very fast and catchy music, increases the speed and features lighter patterns to dodge."
                    },
                    {
                        title: "Game Feel",
                        text: "I was quickly faced with a game feel challenge: finding the balance between a sense of speed and motion sickness. The tube in which the player evolves is constantly rotating while moving forward very quickly. A pattern that was too visible caused severe discomfort, while a pattern that was too subtle led to a loss of spatial orientation and diminished the perception of speed.\n\nI therefore designed a pattern that allows the player to perceive both rotation and forward speed without becoming hypnotizing at high speeds, drastically reducing motion sickness. This required a rigorous process of testing and iterating."
                    },
                    {
                        title: "UI / UX",
                        text: "The 'one button' constraint also applied to the game's menus, which represented a real UI/UX challenge. I therefore designed navigation entirely playable with the spacebar: press to navigate, hold to confirm.\n\nA significant amount of polish, feedback, and game feel work allowed me to make these menus intuitive, pleasant, and robust."
                    }
                ],
                mediaTexts: {
                    block3: { legends: ['Slow and Oppressive', 'Fast and Intense'] },
                    block4: { captions: ['Pattern too visible', 'Pattern too subtle', 'Perfect pattern'] }
                }
            },
            "mouseknight": {
                title: "MOUSE KNIGHT",
                subtitle: "Action Adventure",
                tags: ["Game Design", "Level Design", "Programming", "UI/UX", "Visual"],
                specs: { team: "5 Design - 2 Sound", context: "Academic", date: "December 2025", duration: "3 months", engine: "Unity" },
                description: "Created as a team at ISART, Mouse Knight led me to play a structuring role in the game's design and implementation. Deeply involved in development, I made sure to maintain a cohesive experience.",
                blocks: [
                    {
                        title: "Pitch",
                        text: "A small mouse knight embarks on an adventure lasting about fifteen minutes.\n\nUnable to wield a sword, she defends herself by jumping and violently bouncing on her enemies' heads."
                    },
                    {
                        title: "Project Contribution",
                        text: "We were five game designers on the project, two of whom could program, including myself. I took charge of a large part of the development by programming the majority of the game and directly shaping the gamepad experience.\n\nBeyond implementation, my role naturally led me to guide many structuring decisions, whether it be player mechanics, game feel, cameras, interface, or the tutorial. This cross-functional involvement allowed me to strongly contribute to the overall coherence of the project."
                    },
                    {
                        title: "Camera and Readability",
                        text: "Initial playtests revealed a readability issue: during jumps, the camera followed the player upwards and made them lose sight of the ground, which was nevertheless essential to anticipate their impact point and aim at enemies.\n\nTo address this, I undertook significant iteration work to design a contextual auto-camera. It dips momentarily to restore visibility when the player is airborne, while a vertical offset naturally repositions the landing zone in the center of the screen.\n\nThis approach allowed me to improve the readability of the action without weighing down the controls, thereby enhancing precision and player comfort."
                    },
                    {
                        title: "FTUE",
                        text: "The game relies entirely on the pogo mechanic, a vertical dash allowing the player to bounce on enemies. Learning it was therefore a central challenge. I took charge of designing and implementing an FTUE aimed at introducing this action progressively, first limiting the player's possibilities to focus their attention on the essentials.\n\nThe experience begins in a cage suspended over a vast chasm, immediately establishing tension while preventing any movement. Contextual prompts guide the first attempts, while a slight slow-motion effect accompanies the initial jump to ease timing comprehension.\n\nBy breaking the cage with the pogo, the player naturally validates their learning before accessing the rest of the mechanics."
                    }
                ],
                mediaTexts: {
                    block2: { legends: ['Before', 'After'] }
                }
            },
            "voracines": {
                title: "VORACINES",
                subtitle: "Tactical Board Game",
                tags: ["Game Design", "Visual"],
                specs: { team: "5 Design - 2 Artists", context: "Academic", date: "December 2025", duration: "3 months", engine: "" },
                description: "With Voracines, the goal was to design a tactical board game capable of generating meaningful decisions from a deliberately simple set of rules.",
                blocks: [
                    {
                        title: "Game Artists Brief",
                        text: "I wrote a detailed brief for the game artists to establish a clear art direction aligned with the design intentions. This document included the visual style to follow, moodboards and references, as well as numerous technical specifications specific to board games (formats, readability, physical constraints). Designed as a true production reference, it provided a structuring framework while leaving the artists room for interpretation."
                    },
                    {
                        title: "Playtests",
                        text: "While supervising playtests, I identified a major hurdle: the time taken to grasp the rules slowed down the start of games and interfered with observing the actual gameplay. I therefore designed an express rulebook, condensing about fifteen pages into four concise, immediately usable reference sheets. This format significantly streamlined sessions and refocused testing on player decisions rather than rule comprehension."
                    }
                ],
                mediaTexts: {
                    block0: {
                        captions: [
                            'Intro', 'Table of Contents', 'Universe', 'Layout', 'Board Evolution', 'Moods',
                            'Mood 1', 'Mood 2', 'Art Styles', 'Art Style 1', 'Art Style 2',
                            'Other Graphics', 'Recurring Elements', 'Buildings', 'Technical Specs', 'Needs', 'Extras'
                        ]
                    }
                }
            },
            "reflect": {
                title: "REFLECT",
                subtitle: "Action Puzzle",
                tags: ["Level Design"],
                specs: { team: "1 Design & Code - 1 LD - 1 Sound", context: "Personal", date: "January 2026", duration: "6 months", engine: "Godot" },
                description: "Reflect is a personal project I joined mid-production to handle the level design, adapting to an already established framework and foundation.",
                blocks: [
                    {
                        title: "Pitch",
                        text: "Unable to attack directly, the player must exploit enemy projectiles using a parry mechanic. Reflect is an action-puzzle where the attack comes from the enemy, and the solution from the player."
                    },
                    {
                        title: "Level Design",
                        text: "I designed 40 levels with the ambition that each functions as a standalone mini-game, driven by its own idea, challenge, and resolution logic. This approach led me to avoid simple variations in favor of constantly renewed situations, making it a true endurance exercise in design.\n\nTo support this variety, I introduced enemies progressively: each first appearance served as an implicit tutorial, allowing the player to naturally assimilate their behaviors before facing them combined in more demanding setups. The difficulty thus follows an overall ascending curve, paced by variations in intensity to create a more breathable rhythm for the player. Many levels were adjusted, rethought, or even removed following initial feedback to maintain a high standard of quality."
                    },
                    {
                        title: "Technical Adaptation",
                        text: "I quickly got up to speed with Godot to implement all my levels, directly manipulating assets, enemies, and their parameters. This autonomy allowed me to test, tweak, and iterate efficiently in a new technical environment."
                    }
                ],
                mediaTexts: {
                    block1: { captions: ['Action Puzzle', 'Puzzle', 'Action'] }
                }
            },
            "pleasantchalk": {
                title: "PLEASANT CHALK",
                subtitle: "Arcade Shooter",
                tags: ["UI/UX", "Visual", "Sound Design"],
                specs: { team: "Solo", context: "Academic", date: "January 2025", duration: "2 weeks", engine: "Unity" },
                description: "Pleasant Chalk was part of the 'Juice It' project, aiming to transform a deliberately austere and dull base game into a juicy experience, without modifying the gameplay.",
                blocks: [
                    {
                        title: "Pitch",
                        text: "In Pleasant Chalk, the player controls a piece of chalk moving across a chalkboard in a chill, lo-fi atmosphere, where every movement leaves a mark."
                    },
                    {
                        title: "Design Stance",
                        text: "The initial version offered a deliberately bland experience, marked by heavy inertia and an overall sense of sluggishness dictated by the gameplay.\n\nUnable to change these parameters, I chose to embrace them by steering the project towards a chill and lo-fi vibe, aiming to deliver a cohesive and soothing experience."
                    },
                    {
                        title: "Sensory Direction",
                        text: "To support this direction, I developed a chill and lo-fi atmosphere relying on sound design and a grainy post-process effect, helping to establish a soft and calming mood. For the sake of continuity, moving the chalk allows you to draw directly in-game, a feature also mirrored in the mouse-driven menus.\n\nThe whole is supported by carefully crafted visual and audio feedback, designed to remain subtle and preserve the experience's balance rather than falling into an excess of effects."
                    }
                ],
                mediaTexts: {
                    block1: { legend: 'Initial Template' },
                    block2: { captions: ['Juice & Feedback', 'Drawable Menu'] }
                }
            },
            "musclesrockets": {
                title: "MUSCLES & ROCKETS",
                subtitle: "Action Platformer",
                tags: ["Game Design", "Level Design", "UI/UX"],
                specs: { team: "6 Design - 1 Code - 1 Sound", context: "Academic", date: "March 2025", duration: "6 weeks", engine: "Unity" },
                description: "Muscles & Rockets aimed to unify platforming challenges and combat within an action-platformer built upon a hybrid core mechanic.",
                blocks: [
                    {
                        title: "Pitch",
                        text: "Armed with a rocket launcher, the player fights enemies and exploits the recoil generated by each shot to propel themselves through platforming challenges."
                    },
                    {
                        title: "FTUE & Level Design",
                        text: "I designed and implemented the game's first level, tasked with introducing the core mechanic based on shooting and the resulting recoil. The challenge was to lead the player to quickly understand its possibilities without causing confusion or frustration.\n\nThe level relies on guided progression, alternating learning situations with initial tests of skill, to gradually bring the player towards mastering the mechanic."
                    },
                    {
                        title: "Readability and Feedback",
                        text: "The player has a magazine of four rockets, fully reloaded upon touching the ground. With their state changing rapidly in the heat of action, it was crucial that this information be instantly readable. I therefore designed and implemented a display directly integrated into the character, allowing the player to stay focused on the action."
                    }
                ],
                mediaTexts: {
                    block1: { captions: ['Level 1 Layout', 'RocketJump: Discovery', 'RocketJump: Learning', 'RocketJump: Mastery'] }
                }
            },
            "screenshakelab": {
                title: "SCREEN SHAKE LAB",
                subtitle: "Interactive Tool",
                tags: ["Tool", "Game Feel", "UI/UX", "Programming"],
                specs: { team: "Solo", context: "Personal", date: "March 2026", duration: "1 week", engine: "Unity" },
                description: "An interactive tool designed for designers and developers, allowing them to experiment, tweak, and understand every nuance of screen shake.",
                blocks: [
                    {
                        title: "Pedagogy",
                        text: "The primary goal of this project is educational. Screen shake is a much deeper mechanic than it appears and its impact on game feel is immense. I wanted to create a space where one can experiment in real time to grasp every nuance. The user is guided by a dynamic help panel that adapts to the hovered setting to explain its purpose. They can also rely on several preset profiles to find inspiration and break down the construction of classic effects."
                    },
                    {
                        title: "UI / UX",
                        text: "Regarding the interface, the challenge was to display numerous parameters and information on screen without obstructing the view, aiming to provide the best possible perception of the shake. Several design choices were made to achieve this. For instance, the trigger button is diegetic and placed right in the center of the room. This naturally forces the user to anchor their vision in the 3D space at the exact moment of the shake, allowing them to feel it better."
                    }
                ]
            }
        }
    }
};

// =========================================
// Maintien de la compatibilité pour éviter que le site casse 
// si certains éléments font encore appel aux variables d'origine
// =========================================
const siteTexts = translations.fr.siteTexts;
const bioTextContent = translations.fr.bioTextContent;
const projectTexts = translations.fr.projectTexts;