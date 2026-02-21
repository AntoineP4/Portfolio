/* =========================================
   FICHIER DE CONTENU (TEXTES PURS)
   ========================================= */

// --- 1. TEXTE DE LA BIOGRAPHIE ---
const bioTextContent = `Avant d’intégrer le cursus Game Design d’ISART Digital, j’ai suivi une classe préparatoire aux grandes écoles de commerce. Cette expérience m’a apporté une solide rigueur mathématique, et surtout une certitude : ce n’était pas là que je voulais aller. J’ai donc fait le choix de me réorienter pour me consacrer pleinement au jeu vidéo. Un virage assumé, que je considère aujourd’hui comme une évidence.

Ce qui me passionne avant tout, c’est la manière dont un jeu se ressent. Le game feel et l’expérience utilisateur sont au cœur de mon approche, toujours très concrète : prototyper rapidement, tester, itérer, affiner. Pour moi, le game design se vit dans le moteur, au plus près du jeu, de ses mécaniques et de ses sensations.`;


// --- 2. TEXTES DES PROJETS (PITCHS & PARAGRAPHES) ---
const projectTexts = {
    "metro": {
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
        ]
    },
    "mouseknight": {
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
        ]
    },
    "voracines": {
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
        ]
    },
    "reflect": {
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
        ]
    },
    "pleasantchalk": {
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
                text: "Afin de soutenir cette direction, j’ai développé une ambiance chill et lo-fi reposant sur un travail sonore et un post-process granuleux, contribuant à installer une atmosphère douce et apaisante. Dans un souci de continuité, les déplacements de la craie permettent de dessiner directement en jeu, une possibilité également reprise dans les menus à la souris.\n\nL’ensemble est soutenu par des feedbacks visuels et sonores soignés, pensés pour rester discrets et préserver l’équilibre de l’expérience plutôt que de tomber dans une surenchère d’effets."
            }
        ]
    },
    "musclesrockets": {
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
        ]
    }
};