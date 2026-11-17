// EDIT THIS FILE to update your projects, images, videos, and descriptions.
// Put your own files into images/<project>/ and videos/.
const projects = [
    {
        id: 'stealth',
        number: '01',
        title: 'Honours Project',
        subtitle: 'A stealth level built around player choice, inspired by holistic level design principles.',
        category: 'LEVEL DESIGN / HONOURS PROJECT',
        cover: 'images/Honours/Picture1.png',
        coverPosition: 'center 45%',
        role: 'Level Designer / Gameplay Designer',
        tools: 'Unreal Engine 5 · Blueprints',
        status: 'In development',
        overview: 'A small-scale fantasy-medieval palace level where the player must eliminate a target. Interconnected systems, multiple routes, and spatial information allow players to plan their own approach.',
        goals: ['Provide meaningful player agency through affordances so they can act with intent', 'Communicate opportunities through the environment rather than explicit instructions.', 'Connect climbing, stealth, and NPC patrol systems to the level layout.'],
        images: [
            // { src: 'images/stealth/floorplan.png', caption: 'Floor plan — routes and vertical connections' },
            // { src: 'images/stealth/blockout.jpg', caption: 'Early blockout — testing player sightlines' }
        ],
        video: '', // Example: 'videos/stealth.mp4' OR YouTube embed URL: 'https://www.youtube.com/embed/VIDEO_ID'
        reflection: 'This is still a work in progress.'
    },
    {
        id: 'plurality',
        number: '02',
        title: 'Plurality',
        subtitle: 'Combat, progression, and readable spaces',
        category: 'GAME & LEVEL DESIGN / GROUP PROJECT',
        cover: 'images/Plurality/pluralitycover.png',
        coverPosition: 'center 82%',
        role: 'Level Design / Gameplay Systems',
        tools: 'Unreal Engine 5 · Blueprints · Perforce',
        status: 'University group project',
        overview: 'A 3D isometric twin-stick survival shooter set in a medieval castle corrupted by clones. Players fight enemies, collect currency, unlock areas, and use a clone device with distinct abilities.',
        goals: ['Build readable encounters with deliberate pacing, chokepoints, and safe zones.', 'Use lighting and environmental signposting to draw attention to important systems.', 'Integrate combat and progression into a cohesive short experience.'],
        images: [{src: 'images/Plurality/Iteration1.png', caption: 'First gray-box — Going from 2D to 3D'},
            {
                src: 'images/Plurality/Iteration2.png',
                caption: 'Second gray-box — Changing middle section for better flow'
            },
            {
                src: 'images/Plurality/Iteration3.png',
                caption: 'Implementing assets and re-scaling — Changed layout to accommodate combat and player movement'
            },
            {src: 'images/Plurality/FImage1.png', caption: 'Final design of entrance hall.'},
            {src: 'images/Plurality/FImage2.png', caption: 'Final design of Main area.'},
            {
                src: 'images/Plurality/FImage3.png',
                caption: 'Affordances. Batteries power up sci-fi elements, wires lead to interactive elements.'
            },
            {src: 'images/Plurality/FinalLayout.png', caption: 'Bird\'s eye view of the final level layout.'}],
        video: ['https://www.youtube.com/embed/92KxSzme9xA',
            'https://www.youtube.com/embed/gZ_ISfxjfKg'],
        gameLink: 'https://weebitgames.itch.io/plurality',
        gameLinkText: 'Play the game on itch.io',
        reflection: 'I was mainly involved in level design and gameplay systems. I designed and iterated on the level layout, including combat encounters, progression, and environmental signposting. I also implemented the clone device and its abilities, and contributed to the final level\'s layout and environment design.' +
            ' The level required a lot of iteration due to the interaction between gameplay systems, especially AI pathing and collision. AI could get stuck in corners or paths blocked by an asset, I had to change the collisions of all implemented assets and create custom collision meshes too and make sure prop placements does not affect both players and enemies paths.\n'
    },
    {
        id: 'Renée',
        number: '03',
        title: 'Renée',
        subtitle: 'A Small project created in a team. A narrative driven experience focusing on environmental storytelling.',
        category: 'GAMEPLAY PROGRAMMING / PROTOTYPE / LEVEL DESIGN',
        cover: 'images/SideProjects/Renee2.png',
        coverPosition: 'center 50%',
        role: 'Gameplay Programming / Game Design / Level Design',
        tools: 'Unreal Engine 5 · Blueprints',
        status: 'Prototypes',
        overview: 'A narrative driven experience where the player is recovering from a zombie infection and going through a post-apocalyptic world.',
        goals: ['Create an immersive narrative experience with a focus on environmental storytelling, Using no dialogue or text to tell the story.'],
        images: [{src: 'images/SideProjects/Renee2.png', caption: 'Promotional image for my section.'},
            {src: 'images/SideProjects/ReneePicture1.png', caption: 'Promotional image for my section.'}],
        video: 'https://www.youtube.com/embed/NcrSD5sR9qY',
        reflection: 'With multiple level designers we worked on a section each. I worked on the first section of the game introducing the player to this post-apocalyptic world. I focused on environmental storytelling and creating a sense of tension and unease through the use of lighting, cinematography, and level layout. I also implemented cutscenes using Unreal Engine\'s sequencer tool to create cinematic moments that enhance the narrative experience.'
    }
];
