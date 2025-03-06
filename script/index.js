const verbList = [
  {
    type: "I",
    baseForm: "ABIDE",
    thirdPerson: "ABIDES",
    simplePast: "ABODE",
    pastParticiple: "ABODE",
    gerund: "ABIDING",
    meaning: "Morar - Habitar - Tolerar",
  },
  {
    type: "R",
    baseForm: "ABSORB",
    thirdPerson: "ABSORBS",
    simplePast: "ABSORBED",
    pastParticiple: "ABSORBED",
    gerund: "ABSORBING",
    meaning: "Absorber",
  },
  {
    type: "R",
    baseForm: "ADD",
    thirdPerson: "ADDS",
    simplePast: "ADDED",
    pastParticiple: "ADDED",
    gerund: "ADDING",
    meaning: "Añadir",
  },
  {
    type: "R",
    baseForm: "ADVANCE",
    thirdPerson: "ADVANCES",
    simplePast: "ADVANCED",
    pastParticiple: "ADVANCED",
    gerund: "ADVANCING",
    meaning: "Avanzar",
  },
  {
    type: "R",
    baseForm: "AGREE",
    thirdPerson: "AGREES",
    simplePast: "AGREED",
    pastParticiple: "AGREED",
    gerund: "AGREEING",
    meaning: "Acordar - Estar De Acuerdo - Acceder",
  },
  {
    type: "R",
    baseForm: "ANSWER",
    thirdPerson: "ANSWERS",
    simplePast: "ANSWERED",
    pastParticiple: "ANSWERED",
    gerund: "ANSWERING",
    meaning: "Contestar - Responder",
  },
  {
    type: "R",
    baseForm: "APPEAR",
    thirdPerson: "APPEARS",
    simplePast: "APPEARED",
    pastParticiple: "APPEARED",
    gerund: "APPEARING",
    meaning: "Aparecer",
  },
  {
    type: "I",
    baseForm: "ARISE",
    thirdPerson: "ARISES",
    simplePast: "AROSE",
    pastParticiple: "ARISEN",
    gerund: "ARISING",
    meaning: "Surgir - Levantarse",
  },
  {
    type: "R",
    baseForm: "ARRIVE",
    thirdPerson: "ARRIVES",
    simplePast: "ARRIVED",
    pastParticiple: "ARRIVED",
    gerund: "ARRIVING",
    meaning: "Llegar",
  },
  {
    type: "R",
    baseForm: "ASK",
    thirdPerson: "ASKS",
    simplePast: "ASKED",
    pastParticiple: "ASKED",
    gerund: "ASKING",
    meaning: "Preguntar",
  },
  {
    type: "R",
    baseForm: "ASSIGN",
    thirdPerson: "ASSIGNS",
    simplePast: "ASSIGNED",
    pastParticiple: "ASSIGNED",
    gerund: "ASSIGNING",
    meaning: "Asignar",
  },
  {
    type: "R",
    baseForm: "ASSIST",
    thirdPerson: "ASSISTS",
    simplePast: "ASSISTED",
    pastParticiple: "ASSISTED",
    gerund: "ASSISTING",
    meaning: "Asistir",
  },
  {
    type: "R",
    baseForm: "ATTACH",
    thirdPerson: "ATTACHES",
    simplePast: "ATTACHED",
    pastParticiple: "ATTACHED",
    gerund: "ATTACHING",
    meaning: "Unir - Juntar - Sujetar - Pegar",
  },
  {
    type: "R",
    baseForm: "ATTEND",
    thirdPerson: "ATTENDS",
    simplePast: "ATTENDED",
    pastParticiple: "ATTENDED",
    gerund: "ATTENDING",
    meaning: "Atender",
  },
  {
    type: "I",
    baseForm: "AWAKE",
    thirdPerson: "AWAKES",
    simplePast: "AWOKE",
    pastParticiple: "AWOKE",
    gerund: "AWAKING",
    meaning: "Despertar(Se)",
  },
  {
    type: "R",
    baseForm: "AWARD",
    thirdPerson: "AWARDS",
    simplePast: "AWARDED",
    pastParticiple: "AWARDED",
    gerund: "AWARDING",
    meaning: "Otorgar",
  },
  {
    type: "R",
    baseForm: "BAKE",
    thirdPerson: "BAKES",
    simplePast: "BAKED",
    pastParticiple: "BAKED",
    gerund: "BAKING",
    meaning: "Hornear",
  },
  {
    type: "R",
    baseForm: "BATHE",
    thirdPerson: "BATHES",
    simplePast: "BATHED",
    pastParticiple: "BATHED",
    gerund: "BATHING",
    meaning: "Bañar",
  },
  {
    type: "I",
    baseForm: "BE",
    thirdPerson: "IS",
    simplePast: "WAS - WERE",
    pastParticiple: "BEEN",
    gerund: "BEING",
    meaning: "Ser-Estar",
  },
  {
    type: "I",
    baseForm: "BEAR",
    thirdPerson: "BEARS",
    simplePast: "BORE",
    pastParticiple: "BORN",
    gerund: "BEARING",
    meaning: "Soportar - Aguantar",
  },
  {
    type: "I",
    baseForm: "BEAT",
    thirdPerson: "BEATS",
    simplePast: "BEAT",
    pastParticiple: "BEATEN",
    gerund: "BEATING",
    meaning: "Vencer - Batir",
  },
  {
    type: "I",
    baseForm: "BECOME",
    thirdPerson: "BECOMES",
    simplePast: "BECAME",
    pastParticiple: "BECOME",
    gerund: "BECOMING",
    meaning: "Llegar A Ser - Ponerse - Volverse",
  },
  {
    type: "I",
    baseForm: "BEFALL",
    thirdPerson: "BEFALLS",
    simplePast: "BEFELL",
    pastParticiple: "BEFALLEN",
    gerund: "BEFALLING",
    meaning: "Suceder - Acontecer - Ocurrir",
  },
  {
    type: "I",
    baseForm: "BEGIN",
    thirdPerson: "BEGINS",
    simplePast: "BEGAN",
    pastParticiple: "BEGUN",
    gerund: "BEGINNING",
    meaning: "Comenzar - Empezar",
  },
  {
    type: "I",
    baseForm: "BEHOLD",
    thirdPerson: "BEHOLDS",
    simplePast: "BEHELD",
    pastParticiple: "BEHELD",
    gerund: "BEHOLDING",
    meaning: "Contemplar - Mirar",
  },
  {
    type: "R",
    baseForm: "BELIEVE",
    thirdPerson: "BELIEVES",
    simplePast: "BELIEVED",
    pastParticiple: "BELIEVED",
    gerund: "BELIEVING",
    meaning: "Creer",
  },
  {
    type: "R",
    baseForm: "BELONG",
    thirdPerson: "BELONGS",
    simplePast: "BELONGED",
    pastParticiple: "BELONGED",
    gerund: "BELONGING",
    meaning: "Pertenecer",
  },
  {
    type: "I",
    baseForm: "BEND",
    thirdPerson: "BENDS",
    simplePast: "BENT",
    pastParticiple: "BENT",
    gerund: "BENDING",
    meaning: "Doblar(Se) - Encorvar(Se)",
  },
  {
    type: "I",
    baseForm: "BET",
    thirdPerson: "BETS",
    simplePast: "BET",
    pastParticiple: "BET",
    gerund: "BETTING",
    meaning: "Apostar",
  },
  {
    type: "I",
    baseForm: "BID",
    thirdPerson: "BIDS",
    simplePast: "BID",
    pastParticiple: "BID",
    gerund: "BIDDING",
    meaning: "Mandar - Ordenar",
  },
  {
    type: "I",
    baseForm: "BIND",
    thirdPerson: "BINDS",
    simplePast: "BOUND",
    pastParticiple: "BOUND",
    gerund: "BINDING",
    meaning: "Unir - Ligar - Atar - Amarrar",
  },
  {
    type: "I",
    baseForm: "BITE",
    thirdPerson: "BITES",
    simplePast: "BIT",
    pastParticiple: "BITTEN",
    gerund: "BITTING",
    meaning: "Morder - Picar",
  },
  {
    type: "R",
    baseForm: "BLEED",
    thirdPerson: "BLEEDS",
    simplePast: "BLED",
    pastParticiple: "BLED",
    gerund: "BLEEDING",
    meaning: "Sangrar",
  },
  {
    type: "I",
    baseForm: "BLOW",
    thirdPerson: "BLOWS",
    simplePast: "BLEW",
    pastParticiple: "BLOWN",
    gerund: "BLOWING",
    meaning: "Soplar - Ventear",
  },
  {
    type: "R",
    baseForm: "BLUSH",
    thirdPerson: "BLUSHES",
    simplePast: "BLUSHED",
    pastParticiple: "BLUSHED",
    gerund: "BLUSHING",
    meaning: "Sonrojar",
  },
  {
    type: "R",
    baseForm: "BOIL",
    thirdPerson: "BOILS",
    simplePast: "BOILED",
    pastParticiple: "BOILED",
    gerund: "BOILING",
    meaning: "Hervir",
  },
  {
    type: "R",
    baseForm: "BORROW",
    thirdPerson: "BORROWS",
    simplePast: "BORROWED",
    pastParticiple: "BORROWED",
    gerund: "BORROWING",
    meaning: "Pedir prestado",
  },
  {
    type: "R",
    baseForm: "BOTHER",
    thirdPerson: "BOTHERS",
    simplePast: "BOTHERED",
    pastParticiple: "BOTHERED",
    gerund: "BOTHERING",
    meaning: "Molestar",
  },
  {
    type: "I",
    baseForm: "BREAK",
    thirdPerson: "BREAKS",
    simplePast: "BROKE",
    pastParticiple: "BROKEN",
    gerund: "BREAKING",
    meaning: "Quebrar - Romper",
  },
  {
    type: "R",
    baseForm: "BREED",
    thirdPerson: "BREEDS",
    simplePast: "BRED",
    pastParticiple: "BRED",
    gerund: "BREEDING",
    meaning: "Criar - Educar",
  },
  {
    type: "I",
    baseForm: "BRING",
    thirdPerson: "BRINGS",
    simplePast: "BROUGHT",
    pastParticiple: "BROUGHT",
    gerund: "BRINGING",
    meaning: "Traer - Llevar",
  },
  {
    type: "I",
    baseForm: "BROADCAST",
    thirdPerson: "BROADCASTS",
    simplePast: "BROADCAST",
    pastParticiple: "BROADCAST",
    gerund: "BROADCASTING",
    meaning: "Difundir - Emitir",
  },
  {
    type: "R",
    baseForm: "BROIL",
    thirdPerson: "BROILS",
    simplePast: "BROILED",
    pastParticiple: "BROILED",
    gerund: "BROILING",
    meaning: "Asar",
  },
  {
    type: "R",
    baseForm: "BROWN",
    thirdPerson: "BROWNS",
    simplePast: "BROWNED",
    pastParticiple: "BROWNED",
    gerund: "BROWNING",
    meaning: "Tostar",
  },
  {
    type: "R",
    baseForm: "BRUSH",
    thirdPerson: "BRUSHES",
    simplePast: "BRUSHED",
    pastParticiple: "BRUSHED",
    gerund: "BRUSHING",
    meaning: "Cepillar",
  },
  {
    type: "I",
    baseForm: "BUILD",
    thirdPerson: "BUILDS",
    simplePast: "BUILT",
    pastParticiple: "BUILT",
    gerund: "BUILDING",
    meaning: "Construir - Fundar - Edificar",
  },
  {
    type: "R",
    baseForm: "BURN",
    thirdPerson: "BURNS",
    simplePast: "BURNT/BURNED",
    pastParticiple: "BURNT/BURNED",
    gerund: "BURNING",
    meaning: "Quemar - Incendiar",
  },
  {
    type: "I",
    baseForm: "BURST",
    thirdPerson: "BURSTS",
    simplePast: "BURST",
    pastParticiple: "BURST",
    gerund: "BURSTING",
    meaning: "Estallar - Reventar",
  },
  {
    type: "I",
    baseForm: "BUY",
    thirdPerson: "BUYS",
    simplePast: "BOUGHT",
    pastParticiple: "BOUGHT",
    gerund: "BUYING",
    meaning: "Comprar - Adquirir",
  },
  {
    type: "R",
    baseForm: "CALL",
    thirdPerson: "CALLS",
    simplePast: "CALLED",
    pastParticiple: "CALLED",
    gerund: "CALLING",
    meaning: "Llamar",
  },
  {
    type: "R",
    baseForm: "CALM",
    thirdPerson: "CALMS",
    simplePast: "CALMED",
    pastParticiple: "CALMED",
    gerund: "CALMING",
    meaning: "Calmar",
  },
  {
    type: "R",
    baseForm: "CAMP",
    thirdPerson: "CAMPS",
    simplePast: "CAMPED",
    pastParticiple: "CAMPED",
    gerund: "CAMPING",
    meaning: "Acampar",
  },
  {
    type: "R",
    baseForm: "CANCEL",
    thirdPerson: "CANCELS",
    simplePast: "CANCELLED",
    pastParticiple: "CANCELLED",
    gerund: "CANCELING",
    meaning: "Cancelar",
  },
  {
    type: "R",
    baseForm: "CARE",
    thirdPerson: "CARES",
    simplePast: "CARED",
    pastParticiple: "CARED",
    gerund: "CARING",
    meaning: "Preocupar(So) - Cuidar",
  },
  {
    type: "R",
    baseForm: "CARRY",
    thirdPerson: "CARRIES",
    simplePast: "CARRIED",
    pastParticiple: "CARRIED",
    gerund: "CARRYING",
    meaning: "Llevar",
  },
  {
    type: "I",
    baseForm: "CAST",
    thirdPerson: "CASTS",
    simplePast: "CAST",
    pastParticiple: "CAST",
    gerund: "CASTING",
    meaning: "Moldear - Repartir - Echar - Tirar",
  },
  {
    type: "I",
    baseForm: "CATCH",
    thirdPerson: "CATCHES",
    simplePast: "CAUGHT",
    pastParticiple: "CAUGHT",
    gerund: "CATCHING",
    meaning: "Coger - Tomar - Agarrar",
  },
  {
    type: "R",
    baseForm: "CELEBRATE",
    thirdPerson: "CELEBRATES",
    simplePast: "CELEBRATED",
    pastParticiple: "CELEBRATED",
    gerund: "CELEBRATING",
    meaning: "Celebrar",
  },
  {
    type: "R",
    baseForm: "CHANGE",
    thirdPerson: "CHANGES",
    simplePast: "CHANGED",
    pastParticiple: "CHANGED",
    gerund: "CHANGING",
    meaning: "Cambiar",
  },
  {
    type: "R",
    baseForm: "CHARGE",
    thirdPerson: "CHARGES",
    simplePast: "CHARGED",
    pastParticiple: "CHARGED",
    gerund: "CHARGING",
    meaning: "Cargar",
  },
  {
    type: "R",
    baseForm: "CHEAT",
    thirdPerson: "CHEATS",
    simplePast: "CHEATED",
    pastParticiple: "CHEATED",
    gerund: "CHEATING",
    meaning: "Engañar",
  },
  {
    type: "R",
    baseForm: "CHECK",
    thirdPerson: "CHECKS",
    simplePast: "CHECKED",
    pastParticiple: "CHECKED",
    gerund: "CHECKING",
    meaning: "Comprobar - Chequear - Verificar",
  },
  {
    type: "R",
    baseForm: "CHEER",
    thirdPerson: "CHEERS",
    simplePast: "CHEERED",
    pastParticiple: "CHEERED",
    gerund: "CHEERING",
    meaning: "Victorear - Alegrar - Animar - Aplaudir",
  },
  {
    type: "R",
    baseForm: "CHEW",
    thirdPerson: "CHEWS",
    simplePast: "CHEWED",
    pastParticiple: "CHEWED",
    gerund: "CHEWING",
    meaning: "Masticar",
  },
  {
    type: "R",
    baseForm: "CHILL",
    thirdPerson: "CHILLS",
    simplePast: "CHILLED",
    pastParticiple: "CHILLED",
    gerund: "CHILLING",
    meaning: "Resfriar",
  },
  {
    type: "I",
    baseForm: "CHOOSE",
    thirdPerson: "CHOOSES",
    simplePast: "CHOSE",
    pastParticiple: "CHOSEN",
    gerund: "CHOOSING",
    meaning: "Escoger - Elegir - Optar",
  },
  {
    type: "R",
    baseForm: "CIRCLE",
    thirdPerson: "CIRCLES",
    simplePast: "CIRCLED",
    pastParticiple: "CIRCLED",
    gerund: "CIRCLING",
    meaning: "Rodear - Hacer Un Circulo",
  },
  {
    type: "R",
    baseForm: "CLAP",
    thirdPerson: "CLAPS",
    simplePast: "CLAPPED",
    pastParticiple: "CLAPPED",
    gerund: "CLAPPING",
    meaning: "Aplaudir",
  },
  {
    type: "R",
    baseForm: "CLEAN",
    thirdPerson: "CLEANS",
    simplePast: "CLEANED",
    pastParticiple: "CLEANED",
    gerund: "CLEANING",
    meaning: "Limpiar",
  },
  {
    type: "R",
    baseForm: "CLIMB",
    thirdPerson: "CLIMBS",
    simplePast: "CLIMBED",
    pastParticiple: "CLIMBED",
    gerund: "CLIMBING",
    meaning: "Subir",
  },
  {
    type: "I",
    baseForm: "CLING",
    thirdPerson: "CLINGS",
    simplePast: "CLUNG",
    pastParticiple: "CLUNG",
    gerund: "CLINGING",
    meaning: "Agarrar - Aferrarse - Adherirse",
  },
  {
    type: "R",
    baseForm: "CLOSE",
    thirdPerson: "CLOSES",
    simplePast: "CLOSED",
    pastParticiple: "CLOSED",
    gerund: "CLOSING",
    meaning: "Cerrar",
  },
  {
    type: "R",
    baseForm: "CLOTHE",
    thirdPerson: "CLOTHES",
    simplePast: "CLOTHED",
    pastParticiple: "CLOTHED",
    gerund: "CLOTHING",
    meaning: "Vestir - Arropar",
  },
  {
    type: "R",
    baseForm: "COLLECT",
    thirdPerson: "COLLECTS",
    simplePast: "COLLECTED",
    pastParticiple: "COLLECTED",
    gerund: "COLLECTING",
    meaning: "Coleccionar",
  },
  {
    type: "I",
    baseForm: "COME",
    thirdPerson: "COMES",
    simplePast: "CAME",
    pastParticiple: "COME",
    gerund: "COMING",
    meaning: "Venir",
  },
  {
    type: "R",
    baseForm: "COMMENT",
    thirdPerson: "COMMENTS",
    simplePast: "COMMENTED",
    pastParticiple: "COMMENTED",
    gerund: "COMMENTING",
    meaning: "Comentar",
  },
  {
    type: "R",
    baseForm: "COMPLAIN",
    thirdPerson: "COMPLAINS",
    simplePast: "COMPLAINED",
    pastParticiple: "COMPLAINED",
    gerund: "COMPLAINING",
    meaning: "Quejarse",
  },
  {
    type: "R",
    baseForm: "COMPLETE",
    thirdPerson: "COMPLETES",
    simplePast: "COMPLETED",
    pastParticiple: "COMPLETED",
    gerund: "COMPLETING",
    meaning: "Completar",
  },
  {
    type: "R",
    baseForm: "CONTINUE",
    thirdPerson: "CONTINUES",
    simplePast: "CONTINUED",
    pastParticiple: "CONTINUED",
    gerund: "CONTINUING",
    meaning: "Continuar",
  },
  {
    type: "R",
    baseForm: "CONVINCE",
    thirdPerson: "CONVINCES",
    simplePast: "CONVINCED",
    pastParticiple: "CONVINCED",
    gerund: "CONVINCING",
    meaning: "Convencer",
  },
  {
    type: "R",
    baseForm: "COOK",
    thirdPerson: "COOKS",
    simplePast: "COOKED",
    pastParticiple: "COOKED",
    gerund: "COOKING",
    meaning: "Cocinar",
  },
  {
    type: "R",
    baseForm: "COOL",
    thirdPerson: "COOLS",
    simplePast: "COOLED",
    pastParticiple: "COOLED",
    gerund: "COOLING",
    meaning: "Enfriar - Refrescar(Se) - Calmar(Se)",
  },
  {
    type: "R",
    baseForm: "COPY",
    thirdPerson: "COPIES",
    simplePast: "COPIED",
    pastParticiple: "COPIED",
    gerund: "COPYING",
    meaning: "Copiar",
  },
  {
    type: "I",
    baseForm: "COST",
    thirdPerson: "COSTS",
    simplePast: "COST",
    pastParticiple: "COST",
    gerund: "COSTING",
    meaning: "Costar",
  },
  {
    type: "R",
    baseForm: "COUNT",
    thirdPerson: "COUNTS",
    simplePast: "COUNTED",
    pastParticiple: "COUNTED",
    gerund: "COUNTING",
    meaning: "Contar",
  },
  {
    type: "R",
    baseForm: "COVER",
    thirdPerson: "COVERS",
    simplePast: "COVERED",
    pastParticiple: "COVERED",
    gerund: "COVERING",
    meaning: "Cubrir",
  },
  {
    type: "I",
    baseForm: "CREEP",
    thirdPerson: "CREEPS",
    simplePast: "CREPT",
    pastParticiple: "CREPT",
    gerund: "CREEPING",
    meaning: "Arrastrarse - Deslizarse - Gatear",
  },
  {
    type: "R",
    baseForm: "CROSS",
    thirdPerson: "CROSSES",
    simplePast: "CROSSED",
    pastParticiple: "CROSSED",
    gerund: "CROSSING",
    meaning: "Cruzar - Atravesar",
  },
  {
    type: "R",
    baseForm: "CRY",
    thirdPerson: "CRIES",
    simplePast: "CRIED",
    pastParticiple: "CRIED",
    gerund: "CRYING",
    meaning: "Llorar - Gritar",
  },
  {
    type: "I",
    baseForm: "CUT",
    thirdPerson: "CUTS",
    simplePast: "CUT",
    pastParticiple: "CUT",
    gerund: "CUTTING",
    meaning: "Cortar - Recortar",
  },
  {
    type: "R",
    baseForm: "DANCE",
    thirdPerson: "DANCES",
    simplePast: "DANCED",
    pastParticiple: "DANCED",
    gerund: "DANCING",
    meaning: "Bailar",
  },
  {
    type: "I",
    baseForm: "DEAL",
    thirdPerson: "DEALS",
    simplePast: "DEALT",
    pastParticiple: "DEALT",
    gerund: "DEALING",
    meaning: "Negociar - Comerciar",
  },
  {
    type: "R",
    baseForm: "DECIDE",
    thirdPerson: "DECIDES",
    simplePast: "DECIDED",
    pastParticiple: "DECIDED",
    gerund: "DECIDING",
    meaning: "Decidir",
  },
  {
    type: "R",
    baseForm: "DECLARE",
    thirdPerson: "DECLARES",
    simplePast: "DECLARED",
    pastParticiple: "DECLARED",
    gerund: "DECLARING",
    meaning: "Declarar",
  },
  {
    type: "R",
    baseForm: "DECORATE",
    thirdPerson: "DECORATES",
    simplePast: "DECORATED",
    pastParticiple: "DECORATED",
    gerund: "DECORATING",
    meaning: "Decorar",
  },
  {
    type: "R",
    baseForm: "DEFEND",
    thirdPerson: "DEFENDS",
    simplePast: "DEFENDED",
    pastParticiple: "DEFENDED",
    gerund: "DEFENDING",
    meaning: "Defender",
  },
  {
    type: "R",
    baseForm: "DEMOSTRATE",
    thirdPerson: "DEMOSTRATES",
    simplePast: "DEMOSTRATED",
    pastParticiple: "DEMOSTRATED",
    gerund: "DEMOSTRATING",
    meaning: "Demostrar",
  },
  {
    type: "R",
    baseForm: "DEPEND",
    thirdPerson: "DEPENDS",
    simplePast: "DEPENDED",
    pastParticiple: "DEPENDED",
    gerund: "DEPENDING",
    meaning: "Depender",
  },
  {
    type: "R",
    baseForm: "DESCEND",
    thirdPerson: "DESCENDES",
    simplePast: "DESCENDED",
    pastParticiple: "DESCENDED",
    gerund: "DESCENDING",
    meaning: "Descender - Bajar",
  },
  {
    type: "R",
    baseForm: "DESCRIBE",
    thirdPerson: "DESCRIBES",
    simplePast: "DESCRIBED",
    pastParticiple: "DESCRIBED",
    gerund: "DESCRIBING",
    meaning: "Describir",
  },
];

const audios = [
  { nombre: "ABIDE - mirar.m4a", ruta: "./audios/ABIDE - mirar.m4a" },
  { nombre: "ABSORB- absorber.m4a", ruta: "./audios/ABSORB - absorber.m4a" },
  { nombre: "ADD - añadir.m4a", ruta: "./audios/ADD - añadir.m4a" },
  { nombre: "ADVANCE - avanzar.m4a", ruta: "./audios/ADVANCE - avanzar.m4a" },
  { nombre: "AGREE - acordar.m4a", ruta: "./audios/AGREE - acordar.m4a" },
  { nombre: "ANSWER - responder.m4a", ruta: "./audios/ANSWER - responder.m4a" },
  { nombre: "APPEAR - aparecer.m4a", ruta: "./audios/APPEAR - aparecer.m4a" },
  { nombre: "ARISE - surgir.m4a", ruta: "./audios/ARISE - surgir.m4a" },
  { nombre: "ARRIVE - llegar.m4a", ruta: "./audios/ARRIVE - llegar.m4a" },
  { nombre: "ASK - preguntar.m4a", ruta: "./audios/ASK - preguntar.m4a" },
  { nombre: "ASSIGN - asignar.m4a", ruta: "./audios/ASSIGN - asignar.m4a" },
  { nombre: "ASSIST - asistir.m4a", ruta: "./audios/ASSIST - asistir.m4a" },
  { nombre: "ATTACH - unir.m4a", ruta: "./audios/ATTACH - unir.m4a" },
  { nombre: "ATTEND - atender.m4a", ruta: "./audios/ATTEND - atender.m4a" },
  { nombre: "AWAKE - despertar(se).m4a", ruta: "./audios/AWAKE - despertar(se).m4a" },
  { nombre: "AWARD - otorgar.m4a", ruta: "./audios/AWARD - otorgar.m4a" },
  { nombre: "BAKE-hornear.m4a", ruta: "./audios/BAKE - hornear.m4a" },
  { nombre: "BATHE - bañar.m4a", ruta: "./audios/BATHE - bañar.m4a" },
  { nombre: "BE - ser,estar.m4a", ruta: "./audios/BE - ser,estar.m4a" },
  { nombre: "BEAR - nacer.m4a", ruta: "./audios/BEAR - nacer.m4a" },
  { nombre: "BEAT - vencer.m4a", ruta: "./audios/BEAT - vencer.m4a" },
  { nombre: "BECOME - llegar a ser.m4a", ruta: "./audios/BECOME - llegar a ser.m4a" },
  { nombre: "BEFALL-Suceder.m4a", ruta: "./audios/BEFALL - Suceder.m4a" },
  { nombre: "BEGIN - comenzar.m4a", ruta: "./audios/BEGIN - comenzar.m4a" },
  { nombre: "BEHOLD - contemplar.m4a", ruta: "./audios/BEHOLD - contemplar.m4a" },
  { nombre: "BELIEVE - creer.m4a", ruta: "./audios/BELIEVE - creer.m4a" },
  { nombre: "BELONG - pertenecer.m4a", ruta: "./audios/BELONG - pertenecer.m4a" },
  { nombre: "BEND - doblar(se).m4a", ruta: "./audios/BEND - doblar(se).m4a" },
  { nombre: "BET - apostar.m4a", ruta: "./audios/BET - apostar.m4a" },
  { nombre: "BID-mandar.m4a", ruta: "./audios/BID - mandar.m4a" },
  { nombre: "BIND-unir.m4a", ruta: "./audios/BIND - unir.m4a" },
  { nombre: "BITE -morder.m4a", ruta: "./audios/BITE - morder.m4a" },
  { nombre: "BLEED - sangrar.m4a", ruta: "./audios/BLEED - sangrar.m4a" },
  { nombre: "BLOW - soplar.m4a", ruta: "./audios/BLOW - soplar.m4a" },
  { nombre: "BLUSH - sonrojar.m4a", ruta: "./audios/BLUSH - sonrojar.m4a" },
  { nombre: "BOIL - hervir.m4a", ruta: "./audios/BOIL - hervir.m4a" },
  { nombre: "BORROW - pedir prestado.m4a", ruta: "./audios/BORROW - pedir prestado.m4a" },
  { nombre: "BOTHER - molestar.m4a", ruta: "./audios/BOTHER - molestar.m4a" },
  { nombre: "BREAK - quebrar.m4a", ruta: "./audios/BREAK - quebrar.m4a" },
  { nombre: "BREED - criar.m4a", ruta: "./audios/BREED - criar.m4a" },
  { nombre: "BRING - traer.m4a", ruta: "./audios/BRING - traer.m4a" },
  { nombre: "BROADCAST - difundir.m4a", ruta: "./audios/BROADCAST - difundir.m4a" },
  { nombre: "BROIL - asar.m4a", ruta: "./audios/BROIL - asar.m4a" },
  { nombre: "BROWN - tostar.m4a", ruta: "./audios/BROWN - tostar.m4a" },
  { nombre: "BRUSH - cepillar.m4a", ruta: "./audios/BRUSH - cepillar.m4a" },
  { nombre: "BUILD - construir.m4a", ruta: "./audios/BUILD - construir.m4a" },
  { nombre: "BURN - quemar.m4a", ruta: "./audios/BURN - quemar.m4a" },
  { nombre: "BURST - estallar.m4a", ruta: "./audios/BURST - estallar.m4a" },
  { nombre: "BUY - comprar.m4a", ruta: "./audios/BUY - comprar.m4a" },
  { nombre: "CALL - llamar.m4a", ruta: "./audios/CALL - llamar.m4a" },
  { nombre: "CALM - calmar.m4a", ruta: "./audios/CALM - calmar.m4a" },
  { nombre: "CAMP - acampar.m4a", ruta: "./audios/CAMP - acampar.m4a" },
  { nombre: "CANCEL - cancelar.m4a", ruta: "./audios/CANCEL - cancelar.m4a" },
  { nombre: "CARE - preocupar.m4a", ruta: "./audios/CARE - preocupar.m4a" },
  { nombre: "CARRY - llevar.m4a", ruta: "./audios/CARRY - llevar.m4a" },
  { nombre: "CAST - moldear.m4a", ruta: "./audios/CAST - moldear.m4a" },
  { nombre: "CATCH - coger.m4a", ruta: "./audios/CATCH - coger.m4a" },
  { nombre: "CELEBRATE - celebrar.m4a", ruta: "./audios/CELEBRATE - celebrar.m4a" },
  { nombre: "CHANGE - cambiar.m4a", ruta: "./audios/CHANGE - cambiar.m4a" },
  { nombre: "CHARGE - cargar.m4a", ruta: "./audios/CHARGE - cargar.m4a" },
  { nombre: "CHEAT - engañar.m4a", ruta: "./audios/CHEAT - engañar.m4a" },
  { nombre: "CHECK - comprobar.m4a", ruta: "./audios/CHECK - comprobar.m4a" },
  { nombre: "CHEER - animar.m4a", ruta: "./audios/CHEER - animar.m4a" },
  { nombre: "CHEW - masticar.m4a", ruta: "./audios/CHEW - masticar.m4a" },
  { nombre: "CHILL - resfriar.m4a", ruta: "./audios/CHILL - resfriar.m4a" },
  { nombre: "CHOOSE - escoger.m4a", ruta: "./audios/CHOOSE - escoger.m4a" },
  { nombre: "CIRCLE - rodear.m4a", ruta: "./audios/CIRCLE - rodear.m4a" },
  { nombre: "CLAP - aplaudir.m4a", ruta: "./audios/CLAP - aplaudir.m4a" },
  { nombre: "CLEAN - limpiar.m4a", ruta: "./audios/CLEAN - limpiar.m4a" },
  { nombre: "CLIMB - subir.m4a", ruta: "./audios/CLIMB - subir.m4a" },
  { nombre: "CLING - agarrar.m4a", ruta: "./audios/CLING - agarrar.m4a" },
  { nombre: "CLOSE - cerrar.m4a", ruta: "./audios/CLOSE - cerrar.m4a" },
  { nombre: "CLOTHE - vestir.m4a", ruta: "./audios/CLOTHE - vestir.m4a" },
  { nombre: "COLLECT - coleccionar.m4a", ruta: "./audios/COLLECT - coleccionar.m4a" },
  { nombre: "COME - venir.m4a", ruta: "./audios/COME - venir.m4a" },
  { nombre: "COMMENT - comentar.m4a", ruta: "./audios/COMMENT - comentar.m4a" },
  { nombre: "COMPLAIN - quejarse.m4a", ruta: "./audios/COMPLAIN - quejarse.m4a" },
  { nombre: "COMPLETE - completar.m4a", ruta: "./audios/COMPLETE - completar.m4a" },
  { nombre: "CONTINUE - continuar.m4a", ruta: "./audios/CONTINUE - continuar.m4a" },
  { nombre: "CONVINCE - convencer.m4a", ruta: "./audios/CONVINCE - convencer.m4a" },
  { nombre: "COOK - cocinar.m4a", ruta: "./audios/COOK - cocinar.m4a" },
  { nombre: "COOL - enfriar.m4a", ruta: "./audios/COOL - enfriar.m4a" },
  { nombre: "COPY - copiar.m4a", ruta: "./audios/COPY - copiar.m4a" },
  { nombre: "COST - costar.m4a", ruta: "./audios/COST - costar.m4a" },
  { nombre: "COUNT - contar.m4a", ruta: "./audios/COUNT - contar.m4a" },
  { nombre: "COVER - cubrir.m4a", ruta: "./audios/COVER - cubrir.m4a" },
  { nombre: "CREEP - arrastrarse.m4a", ruta: "./audios/CREEP - arrastrarse.m4a" },
  { nombre: "CROSS - cruzar.m4a", ruta: "./audios/CROSS - cruzar.m4a" },
  { nombre: "CRY - llorar.m4a", ruta: "./audios/CRY - llorar.m4a" },
  { nombre: "CUT - cortar.m4a", ruta: "./audios/CUT - cortar.m4a" },
  { nombre: "DANCE - bailar.m4a", ruta: "./audios/DANCE - bailar.m4a" },
  { nombre: "DEAL - negociar.m4a", ruta: "./audios/DEAL - negociar.m4a" },
  { nombre: "DECIDE - decidir.m4a", ruta: "./audios/DECIDE - decidir.m4a" },
  { nombre: "DECLARE - declarar.m4a", ruta: "./audios/DECLARE - declarar.m4a" },
  { nombre: "DECORATE - decorar.m4a", ruta: "./audios/DECORATE - decorar.m4a" },
  { nombre: "DEFEND - defender.m4a", ruta: "./audios/DEFEND - defender.m4a" },
  { nombre: "DEMOSTRATE - demostrar.m4a", ruta: "./audios/DEMOSTRATE - demostrar.m4a" },
  { nombre: "DEPEND - depender.m4a", ruta: "./audios/DEPEND - depender.m4a" },
  { nombre: "DESCEND - descender.m4a", ruta: "./audios/DESCEND - descender.m4a" },
  { nombre: "DESCRIBE - describir.m4a", ruta: "./audios/DESCRIBE - describir.m4a" },
];

const tableBody = document.querySelector("#verbTable tbody");
const typeFilter = document.getElementById("typeFilter");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const aprendidosToggle = document.getElementById("aprendidosToggle");
const searchBar = document.getElementById("searchBar");

let currentPage = 0;
const verbsPerPage = 10;
let showAprendidosOnly = false;

let aprendidosVerbs = JSON.parse(localStorage.getItem("aprendidosVerbs")) || {};

function updateAprendidosCount() {
  aprendidosCount.textContent = Object.keys(aprendidosVerbs).length;
}

function renderTable(verbs) {
  let filteredVerbs = verbs;

  if (showAprendidosOnly) {
    filteredVerbs = verbs.filter(verb => aprendidosVerbs[verb.baseForm]);
  }

  const selectedType = typeFilter.value;
  if (selectedType !== "") {
    filteredVerbs = filteredVerbs.filter(verb => verb.type === selectedType);
  }

  const searchTerm = searchBar.value.toLowerCase();
  if (searchTerm !== "") {
    filteredVerbs = filteredVerbs.filter(verb =>
      verb.baseForm.toLowerCase().includes(searchTerm) ||
      verb.thirdPerson.toLowerCase().includes(searchTerm) ||
      verb.simplePast.toLowerCase().includes(searchTerm) ||
      verb.pastParticiple.toLowerCase().includes(searchTerm) ||
      verb.gerund.toLowerCase().includes(searchTerm) ||
      verb.meaning.toLowerCase().includes(searchTerm)
    );
  }

  const start = currentPage * verbsPerPage;
  const end = start + verbsPerPage;
  const currentVerbs = filteredVerbs.slice(start, end);

  tableBody.innerHTML = "";

  currentVerbs.forEach((verb) => {
    const row = document.createElement("tr");

    const audioCell = document.createElement("td");
    const audioContainer = document.createElement("div");
    audioContainer.classList.add("audio-container");
    const audioButton = document.createElement("div");
    audioButton.classList.add("audio-button");
    const playIcon = document.createElement("i");
    playIcon.classList.add("fas", "fa-play");
    audioButton.appendChild(playIcon);
    audioContainer.appendChild(audioButton);
    audioCell.appendChild(audioContainer);
    row.appendChild(audioCell);

    let audio = null;

    audioContainer.addEventListener("click", () => {
      if (!audio) {
        audio = new Audio();
        const audioData = audios.find(audio => audio.nombre.toLowerCase().startsWith(verb.baseForm.toLowerCase()));
        if (audioData) {
          audio.src = audioData.ruta;
        } else {
          console.warn(`No se encontró audio para el verbo: ${verb.baseForm}`);
        }

        audio.addEventListener("ended", () => {
          playIcon.classList.remove("fa-pause");
          playIcon.classList.add("fa-play");
        });
        audio.addEventListener("error", () => {
          console.error(`Error al cargar el audio: ${audioData.ruta}`);
        });
      }

      if (audio.paused) {
        audio.play();
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
      } else {
        audio.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
      }
    });

    const typeCell = document.createElement("td");
    typeCell.textContent = verb.type;
    row.appendChild(typeCell);

    const verbCell = document.createElement("td");
    verbCell.textContent = verb.baseForm;
    row.appendChild(verbCell);

    const thirdPersonCell = document.createElement("td");
    thirdPersonCell.textContent = verb.thirdPerson;
    row.appendChild(thirdPersonCell);

    const simplePastCell = document.createElement("td");
    simplePastCell.textContent = verb.simplePast;
    row.appendChild(simplePastCell);

    const pastParticipleCell = document.createElement("td");
    pastParticipleCell.textContent = verb.pastParticiple;
    row.appendChild(pastParticipleCell);

    const gerundCell = document.createElement("td");
    gerundCell.textContent = verb.gerund;
    row.appendChild(gerundCell);

    const meaningCell = document.createElement("td");
    meaningCell.textContent = verb.meaning;
    row.appendChild(meaningCell);

    const aprendidoCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = !!aprendidosVerbs[verb.baseForm];
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        aprendidosVerbs[verb.baseForm] = verb;
      } else {
        delete aprendidosVerbs[verb.baseForm];
      }
      localStorage.setItem("aprendidosVerbs", JSON.stringify(aprendidosVerbs));
      updateAprendidosCount();
      updateTable();
    });
    aprendidoCell.appendChild(checkbox);
    row.appendChild(aprendidoCell);

    tableBody.appendChild(row);
  });

  nextButton.disabled = end >= filteredVerbs.length;
  prevButton.disabled = currentPage === 0;
  updateAprendidosCount();
}

function updateTable() {
  renderTable(verbList);
}

typeFilter.addEventListener("change", () => {
  currentPage = 0;
  updateTable();
});

searchBar.addEventListener("input", () => {
  currentPage = 0;
  updateTable();
});

nextButton.addEventListener("click", () => {
  currentPage++;
  updateTable();
});

prevButton.addEventListener("click", () => {
  currentPage--;
  updateTable();
});

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const darkModeToggle = document.getElementById("darkModeToggle");

function setDarkModeEmoji() {
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️";
  } else {
    darkModeToggle.textContent = "🌑";
  }
}

document.body.classList.remove("dark-mode");
setDarkModeEmoji();

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  setDarkModeEmoji();
});

aprendidosToggle.addEventListener("click", () => {
  showAprendidosOnly = !showAprendidosOnly;
  aprendidosToggle.textContent = showAprendidosOnly ? "Ver Todos" : "Ver Aprendidos";
  currentPage = 0;
  updateTable();
});

updateTable();