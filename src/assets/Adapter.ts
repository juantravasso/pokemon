export const typeTranslations: { [key: string]: string } = {
    grass: 'Planta',
    poison: 'Veneno',
    fire: 'Fogo',
    water: 'Água',
    bug: 'Inseto',
    normal: 'Normal',
    flying: 'Voador',
    electric: 'Elétrico',
    ground: 'Terra',
    fairy: 'Fada',
    fighting: 'Lutador',
    psychic: 'Psíquico',
    rock: 'Pedra',
    ice: 'Gelo',
    ghost: 'Fantasma',
    dragon: 'Dragão',
    dark: 'Sombrio',
    steel: 'Aço',
};

export function translateAbility(ability: string): string {
    const abilities: Record<string, string> = {
        Overgrow: "Crescimento",
        Blaze: "Chama",
        Torrent: "Torrente",
        "Shield Dust": "Poeira de Escudo",
        "Run Away": "Fuga",
        "Keen Eye": "Olhos de Águia",
        "Tangled Feet": "Pés Enredados",
        Static: "Estática",
        "Volt Absorb": "Absorção de Volts",
        "Flash Fire": "Fogo Flash",
        "Effect Spore": "Esporos de Efeito",
        "Poison Point": "Ponto Venenoso",
        Synchronize: "Sincronismo",
        Levitate: "Levitação",
        Immunity: "Imunidade",
        "Inner Focus": "Foco Interno",
        Guts: "Coragem",
        Intimidate: "Intimidação",
        "Sand Veil": "Véu de Areia",
        Pressure: "Pressão",
        "Early Bird": "Pássaro Madrugador",
        "Flame Body": "Corpo de Chamas",
        "Own Tempo": "Ritmo Próprio",
        Swarm: "Enxame",
        "Water Absorb": "Absorção de Água",
        Chlorophyll: "Clorofila",
        Illuminate: "Iluminação",
        Trace: "Rastro",
        "Huge Power": "Poder Colossal",
        "Poison Heal": "Cura Venenosa",
        "Magic Guard": "Guarda Mágica",
        Soundproof: "À Prova de Som",
        "Battle Armor": "Armadura de Batalha",
        Sturdy: "Robustez",
        Overcoat: "Sobrecapa",
        "Mold Breaker": "Quebra-Moldes",
        Regenerator: "Regenerador",
        Unburden: "Descarte",
        Heatproof: "Resistente ao Calor",
        Anticipation: "Antecipação",
    };

    const normalizedAbility = ability.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    return abilities[normalizedAbility] || ability;
}

export function translateDescription(description: string, pokemonId: number): string {
    let descriptionText = description;

    if (pokemonId === 1) {
        descriptionText = "Bulbasaur pode ser visto cochilando sob a luz do sol. Há um forte cheiro de grama no ar enquanto ele dorme.";
    }if (pokemonId === 2) {
        descriptionText = "Há um botão nas costas deste POKéMON. Para suportar o seu peso, as pernas e o tronco do IVYSAUR ficam grossos e fortes. Se começar a passar mais tempo exposto ao sol, é um sinal de que o botão florescerá em breve e se tornará uma grande flor.";
    }if (pokemonId === 3) {
        descriptionText = "Há uma grande flor nas costas de VENUSAUR. Diz-se que a flor adquire cores vívidas se receber muita nutrição e luz solar. O aroma da flor acalma as emoções das pessoas.";
    }if (pokemonId === 4) {
        descriptionText = "A chama que queima na ponta da cauda é um indicativo de suas emoções. A chama tremula quando CHARMANDER está se divertindo. Se o POKéMON fica enfurecido, a chama queima intensamente.";
    }if (pokemonId === 5) {
        descriptionText = "CHARMELEON destrói impiedosamente seus inimigos usando suas garras afiadas. Se ele encontra um adversário forte, ele fica agressivo. Nesse estado excitado, a chama na ponta de sua cauda queima com uma cor azulada branca.";
    }if (pokemonId === 6) {
        descriptionText = "CHARIZARD voa pelo céu em busca de oponentes poderosos. Ele exala fogo de um calor tão intenso que derrete qualquer coisa. No entanto, nunca direciona seu hálito de fogo a um oponente mais fraco do que ele.";
    }if (pokemonId === 7) {
        descriptionText = "A concha do SQUIRTLE não é usada apenas para proteção. A forma arredondada da concha e as ranhuras em sua superfície ajudam a minimizar a resistência na água, permitindo que este POKéMON nade em alta velocidade.";
    }if (pokemonId === 8) {
        descriptionText = "Sua cauda é grande e coberta por uma pelagem densa e espessa. A cauda fica cada vez mais profunda em cor à medida que o WARTORTLE envelhece. Os arranhões em sua concha são evidências da resistência deste POKéMON como lutador.";
    }if (pokemonId === 9) {
        descriptionText = "O BLASTOISE tem jatos de água que se projetam de sua concha. Os jatos de água são muito precisos. Eles podem disparar balas de água com precisão suficiente para atingir latas vazias a uma distância superior a 160 pés.";
    }if (pokemonId === 10) {
        descriptionText = "Ele se arrasta pela vegetação, onde se camufla entre as folhas que têm a mesma cor que seu corpo.";
    }if (pokemonId === 11) {
        descriptionText = "A concha que cobre o corpo deste POKéMON é tão dura quanto uma laje de ferro. METAPOD não se move muito. Ele fica imóvel porque está preparando suas partes internas para a evolução dentro da concha dura.";
    }if (pokemonId === 12) {
        descriptionText = "O BUTTERFREE tem uma habilidade superior para buscar mel delicioso das flores. Ele pode até encontrar, extrair e carregar mel das flores que estão florescendo a mais de seis milhas de seu ninho.";
    }if (pokemonId === 13) {
        descriptionText = "O WEEDLE tem um olfato extremamente aguçado. Ele é capaz de distinguir suas folhas favoritas daquelas que não gosta apenas cheirando com sua grande probóscide vermelha (nariz).";
    }if (pokemonId === 14) {
        descriptionText = "O KAKUNA permanece praticamente imóvel enquanto se agarra a uma árvore. No entanto, por dentro, ele está extremamente ocupado, preparando-se para sua próxima evolução. Isso fica evidente pela temperatura quente da casca quando se toca.";
    }if (pokemonId === 15) {
        descriptionText = "O BEEDRILL é extremamente territorial. Ninguém deveria se aproximar de seu ninho - isso é para sua própria segurança. Se ficam enfurecidos, eles atacam em um enxame furioso.";
    }if (pokemonId === 16) {
        descriptionText = "O PIDGEY tem um senso de direção extremamente aguçado. Ele é capaz de retornar inerravelmente para casa em seu ninho, não importa o quão longe esteja de suas redondezas familiares.";
    }if (pokemonId === 17) {
        descriptionText = "O PIDGEOTTO reivindica uma grande área como seu próprio território. Este POKéMON voa ao redor, patrulhando seu espaço vital. Se seu território for violado, ele não tem piedade ao punir completamente o inimigo com suas garras afiadas.";
    }if (pokemonId === 18) {
        descriptionText = "Este POKéMON tem uma plumagem deslumbrante de penas lindas e brilhantes. Muitos TREINADORES são cativados pela beleza impressionante das penas em sua cabeça, o que os leva a escolher o PIDGEOT como seu POKéMON.";
    }

    return descriptionText;
}

export const palette:{[key:string]:string} = {
    bug: '#8CB230',
    bugLight: '#8BD674',
  
    dark: '#58575F',
    darkLight: '#6F6E78',
  
    dragon: '#0F6AC0',
    dragonLight: '#7383B9',
  
    electric: '#F2CB55',
    electricLight: '#EED535',
  
    fairy: '#ED6EC7',
    fairyLight: '#EBA8C3',
  
    fighting: '#D04164',
    fightingLight: '#EB4971',
  
    fire: '#FD7D24',
    fireLight: '#FFA756',
  
    flying: '#748FC9',
    flyingLight: '#83A2E3',
  
    ghost: '#556AAE',
    ghostLight: '#8571BE',
  
    grass: '#62B957',
    grassLight: '#8BBE8A',
  
    ground: '#DD7748',
    groundLight: '#F78551',
  
    ice: '#61CEC0',
    iceLight: '#91D8DF',
  
    normal: '#9DA0AA',
    normalLight: '#B5B9C4',
  
    poison: '#A552CC',
    poisonLight: '#9F6E97',
  
    psychic: '#EA5D60',
    psychicLight: '#FF6568',
  
    rock: '#BAAB82',
    rockLight: '#D4C294',
  
    steel: '#417D9A',
    steelLight: '#4C91B2',
  
    water: '#4A90DA',
    waterLight: '#58ABF6',
  
    redDark: '#FB6C6C',
    redLight: '#F0729F',  
  };