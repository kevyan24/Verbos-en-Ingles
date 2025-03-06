const verbList = [
  { type: "I", baseForm: "ABIDE", thirdPerson: "ABIDES", simplePast: "ABODE", pastParticiple: "ABODE", gerund: "ABIDING", meaning: "Morar - Habitar - Tolerar" },
  { type: "R", baseForm: "ABSORB", thirdPerson: "ABSORBS", simplePast: "ABSORBED", pastParticiple: "ABSORBED", gerund: "ABSORBING", meaning: "Absorber" },
  { type: "R", baseForm: "ADD", thirdPerson: "ADDS", simplePast: "ADDED", pastParticiple: "ADDED", gerund: "ADDING", meaning: "Añadir" },
  { type: "R", baseForm: "ADVANCE", thirdPerson: "ADVANCES", simplePast: "ADVANCED", pastParticiple: "ADVANCED", gerund: "ADVANCING", meaning: "Avanzar" },
  { type: "R", baseForm: "AGREE", thirdPerson: "AGREES", simplePast: "AGREED", pastParticiple: "AGREED", gerund: "AGREEING", meaning: "Acordar - Estar De Acuerdo - Acceder" },
  { type: "R", baseForm: "ANSWER", thirdPerson: "ANSWERS", simplePast: "ANSWERED", pastParticiple: "ANSWERED", gerund: "ANSWERING", meaning: "Contestar - Responder" },
  { type: "R", baseForm: "APPEAR", thirdPerson: "APPEARS", simplePast: "APPEARED", pastParticiple: "APPEARED", gerund: "APPEARING", meaning: "Aparecer" },
  { type: "I", baseForm: "ARISE", thirdPerson: "ARISES", simplePast: "AROSE", pastParticiple: "ARISEN", gerund: "ARISING", meaning: "Surgir - Levantarse" },
  { type: "R", baseForm: "ARRIVE", thirdPerson: "ARRIVES", simplePast: "ARRIVED", pastParticiple: "ARRIVED", gerund: "ARRIVING", meaning: "Llegar" },
  { type: "R", baseForm: "ASK", thirdPerson: "ASKS", simplePast: "ASKED", pastParticiple: "ASKED", gerund: "ASKING", meaning: "Preguntar" },
  { type: "R", baseForm: "ASSIGN", thirdPerson: "ASSIGNS", simplePast: "ASSIGNED", pastParticiple: "ASSIGNED", gerund: "ASSIGNING", meaning: "Asignar" },
  { type: "R", baseForm: "ASSIST", thirdPerson: "ASSISTS", simplePast: "ASSISTED", pastParticiple: "ASSISTED", gerund: "ASSISTING", meaning: "Asistir" },
  { type: "R", baseForm: "ATTACH", thirdPerson: "ATTACHES", simplePast: "ATTACHED", pastParticiple: "ATTACHED", gerund: "ATTACHING", meaning: "Unir - Juntar - Sujetar - Pegar" },
  { type: "R", baseForm: "ATTEND", thirdPerson: "ATTENDS", simplePast: "ATTENDED", pastParticiple: "ATTENDED", gerund: "ATTENDING", meaning: "Atender" },
  { type: "I", baseForm: "AWAKE", thirdPerson: "AWAKES", simplePast: "AWOKE", pastParticiple: "AWOKE", gerund: "AWAKING", meaning: "Despertar(Se)" },
  { type: "R", baseForm: "AWARD", thirdPerson: "AWARDS", simplePast: "AWARDED", pastParticiple: "AWARDED", gerund: "AWARDING", meaning: "Otorgar" },
  { type: "R", baseForm: "BAKE", thirdPerson: "BAKES", simplePast: "BAKED", pastParticiple: "BAKED", gerund: "BAKING", meaning: "Hornear" },
  { type: "R", baseForm: "BATHE", thirdPerson: "BATHES", simplePast: "BATHED", pastParticiple: "BATHED", gerund: "BATHING", meaning: "Bañar" },
  { type: "I", baseForm: "BE", thirdPerson: "IS", simplePast: "WAS - WERE", pastParticiple: "BEEN", gerund: "BEING", meaning: "Ser-Estar" },
  { type: "I", baseForm: "BEAR", thirdPerson: "BEARS", simplePast: "BORE", pastParticiple: "BORN", gerund: "BEARING", meaning: "Soportar - Aguantar" },
  { type: "I", baseForm: "BEAT", thirdPerson: "BEATS", simplePast: "BEAT", pastParticiple: "BEATEN", gerund: "BEATING", meaning: "Vencer - Batir" },
  { type: "I", baseForm: "BECOME", thirdPerson: "BECOMES", simplePast: "BECAME", pastParticiple: "BECOME", gerund: "BECOMING", meaning: "Llegar A Ser - Ponerse - Volverse" },
  { type: "I", baseForm: "BEFALL", thirdPerson: "BEFALLS", simplePast: "BEFELL", pastParticiple: "BEFALLEN", gerund: "BEFALLING", meaning: "Suceder - Acontecer - Ocurrir" },
  { type: "I", baseForm: "BEGIN", thirdPerson: "BEGINS", simplePast: "BEGAN", pastParticiple: "BEGUN", gerund: "BEGINNING", meaning: "Comenzar - Empezar" },
  { type: "I", baseForm: "BEHOLD", thirdPerson: "BEHOLDS", simplePast: "BEHELD", pastParticiple: "BEHELD", gerund: "BEHOLDING", meaning: "Contemplar - Mirar" },
  { type: "R", baseForm: "BELIEVE", thirdPerson: "BELIEVES", simplePast: "BELIEVED", pastParticiple: "BELIEVED", gerund: "BELIEVING", meaning: "Creer" },
  { type: "R", baseForm: "BELONG", thirdPerson: "BELONGS", simplePast: "BELONGED", pastParticiple: "BELONGED", gerund: "BELONGING", meaning: "Pertenecer" },
  { type: "I", baseForm: "BEND", thirdPerson: "BENDS", simplePast: "BENT", pastParticiple: "BENT", gerund: "BENDING", meaning: "Doblar(Se) - Encorvar(Se)" },
  { type: "I", baseForm: "BET", thirdPerson: "BETS", simplePast: "BET", pastParticiple: "BET", gerund: "BETTING", meaning: "Apostar" },
  { type: "I", baseForm: "BID", thirdPerson: "BIDS", simplePast: "BID", pastParticiple: "BID", gerund: "BIDDING", meaning: "Mandar - Ordenar" },
  { type: "I", baseForm: "BIND", thirdPerson: "BINDS", simplePast: "BOUND", pastParticiple: "BOUND", gerund: "BINDING", meaning: "Unir - Ligar - Atar - Amarrar" },
  { type: "I", baseForm: "BITE", thirdPerson: "BITES", simplePast: "BIT", pastParticiple: "BITTEN", gerund: "BITTING", meaning: "Morder - Picar" },
  { type: "R", baseForm: "BLEED", thirdPerson: "BLEEDS", simplePast: "BLED", pastParticiple: "BLED", gerund: "BLEEDING", meaning: "Sangrar" },
  { type: "I", baseForm: "BLOW", thirdPerson: "BLOWS", simplePast: "BLEW", pastParticiple: "BLOWN", gerund: "BLOWING", meaning: "Soplar - Ventear" },
  { type: "R", baseForm: "BLUSH", thirdPerson: "BLUSHES", simplePast: "BLUSHED", pastParticiple: "BLUSHED", gerund: "BLUSHING", meaning: "Sonrojar" },
  { type: "R", baseForm: "BOIL", thirdPerson: "BOILS", simplePast: "BOILED", pastParticiple: "BOILED", gerund: "BOILING", meaning: "Hervir" },
  { type: "R", baseForm: "BORROW", thirdPerson: "BORROWS", simplePast: "BORROWED", pastParticiple: "BORROWED", gerund: "BORROWING", meaning: "Pedir prestado" },
  { type: "R", baseForm: "BOTHER", thirdPerson: "BOTHERS", simplePast: "BOTHERED", pastParticiple: "BOTHERED", gerund: "BOTHERING", meaning: "Molestar" },
  { type: "I", baseForm: "BREAK", thirdPerson: "BREAKS", simplePast: "BROKE", pastParticiple: "BROKEN", gerund: "BREAKING", meaning: "Quebrar - Romper" },
  { type: "R", baseForm: "BREED", thirdPerson: "BREEDS", simplePast: "BRED", pastParticiple: "BRED", gerund: "BREEDING", meaning: "Criar - Educar" },
  { type: "I", baseForm: "BRING", thirdPerson: "BRINGS", simplePast: "BROUGHT", pastParticiple: "BROUGHT", gerund: "BRINGING", meaning: "Traer - Llevar" },
  { type: "I", baseForm: "BROADCAST", thirdPerson: "BROADCASTS", simplePast: "BROADCAST", pastParticiple: "BROADCAST", gerund: "BROADCASTING", meaning: "Difundir - Emitir" },
  { type: "R", baseForm: "BROIL", thirdPerson: "BROILS", simplePast: "BROILED", pastParticiple: "BROILED", gerund: "BROILING", meaning: "Asar" },
  { type: "R", baseForm: "BROWN", thirdPerson: "BROWNS", simplePast: "BROWNED", pastParticiple: "BROWNED", gerund: "BROWNING", meaning: "Tostar" },
  { type: "R", baseForm: "BRUSH", thirdPerson: "BRUSHES", simplePast: "BRUSHED", pastParticiple: "BRUSHED", gerund: "BRUSHING", meaning: "Cepillar" },
  { type: "I", baseForm: "BUILD", thirdPerson: "BUILDS", simplePast: "BUILT", pastParticiple: "BUILT", gerund: "BUILDING", meaning: "Construir - Fundar - Edificar" },
  { type: "R", baseForm: "BURN", thirdPerson: "BURNS", simplePast: "BURNT/BURNED", pastParticiple: "BURNT/BURNED", gerund: "BURNING", meaning: "Quemar - Incendiar" },
  { type: "I", baseForm: "BURST", thirdPerson: "BURSTS", simplePast: "BURST", pastParticiple: "BURST", gerund: "BURSTING", meaning: "Estallar - Reventar" },
  { type: "I", baseForm: "BUY", thirdPerson: "BUYS", simplePast: "BOUGHT", pastParticiple: "BOUGHT", gerund: "BUYING", meaning: "Comprar - Adquirir" },
  { type: "R", baseForm: "CALL", thirdPerson: "CALLS", simplePast: "CALLED", pastParticiple: "CALLED", gerund: "CALLING", meaning: "Llamar" },
  { type: "R", baseForm: "CALM", thirdPerson: "CALMS", simplePast: "CALMED", pastParticiple: "CALMED", gerund: "CALMING", meaning: "Calmar" },
  { type: "R", baseForm: "CAMP", thirdPerson: "CAMPS", simplePast: "CAMPED", pastParticiple: "CAMPED", gerund: "CAMPING", meaning: "Acampar" },
  { type: "R", baseForm: "CANCEL", thirdPerson: "CANCELS", simplePast: "CANCELLED", pastParticiple: "CANCELLED", gerund: "CANCELING", meaning: "Cancelar" },
  { type: "R", baseForm: "CARE", thirdPerson: "CARES", simplePast: "CARED", pastParticiple: "CARED", gerund: "CARING", meaning: "Preocupar(So) - Cuidar" },
  { type: "R", baseForm: "CARRY", thirdPerson: "CARRIES", simplePast: "CARRIED", pastParticiple: "CARRIED", gerund: "CARRYING", meaning: "Llevar" },
  { type: "I", baseForm: "CAST", thirdPerson: "CASTS", simplePast: "CAST", pastParticiple: "CAST", gerund: "CASTING", meaning: "Moldear - Repartir - Echar - Tirar" },
  { type: "I", baseForm: "CATCH", thirdPerson: "CATCHES", simplePast: "CAUGHT", pastParticiple: "CAUGHT", gerund: "CATCHING", meaning: "Coger - Tomar - Agarrar" },
  { type: "R", baseForm: "CELEBRATE", thirdPerson: "CELEBRATES", simplePast: "CELEBRATED", pastParticiple: "CELEBRATED", gerund: "CELEBRATING", meaning: "Celebrar" },
  { type: "R", baseForm: "CHANGE", thirdPerson: "CHANGES", simplePast: "CHANGED", pastParticiple: "CHANGED", gerund: "CHANGING", meaning: "Cambiar" },
  { type: "R", baseForm: "CHARGE", thirdPerson: "CHARGES", simplePast: "CHARGED", pastParticiple: "CHARGED", gerund: "CHARGING", meaning: "Cargar" },
  { type: "R", baseForm: "CHEAT", thirdPerson: "CHEATS", simplePast: "CHEATED", pastParticiple: "CHEATED", gerund: "CHEATING", meaning: "Engañar" },
  { type: "R", baseForm: "CHECK", thirdPerson: "CHECKS", simplePast: "CHECKED", pastParticiple: "CHECKED", gerund: "CHECKING", meaning: "Comprobar - Chequear - Verificar" },
  { type: "R", baseForm: "CHEER", thirdPerson: "CHEERS", simplePast: "CHEERED", pastParticiple: "CHEERED", gerund: "CHEERING", meaning: "Victorear - Alegrar - Animar - Aplaudir" },
  { type: "R", baseForm: "CHEW", thirdPerson: "CHEWS", simplePast: "CHEWED", pastParticiple: "CHEWED", gerund: "CHEWING", meaning: "Masticar" },
  { type: "R", baseForm: "CHILL", thirdPerson: "CHILLS", simplePast: "CHILLED", pastParticiple: "CHILLED", gerund: "CHILLING", meaning: "Resfriar" },
  { type: "I", baseForm: "CHOOSE", thirdPerson: "CHOOSES", simplePast: "CHOSE", pastParticiple: "CHOSEN", gerund: "CHOOSING", meaning: "Escoger - Elegir - Optar" },
  { type: "R", baseForm: "CIRCLE", thirdPerson: "CIRCLES", simplePast: "CIRCLED", pastParticiple: "CIRCLED", gerund: "CIRCLING", meaning: "Rodear - Hacer Un Circulo" },
  { type: "R", baseForm: "CLAP", thirdPerson: "CLAPS", simplePast: "CLAPPED", pastParticiple: "CLAPPED", gerund: "CLAPPING", meaning: "Aplaudir" },
  { type: "R", baseForm: "CLEAN", thirdPerson: "CLEANS", simplePast: "CLEANED", pastParticiple: "CLEANED", gerund: "CLEANING", meaning: "Limpiar" },
  { type: "R", baseForm: "CLIMB", thirdPerson: "CLIMBS", simplePast: "CLIMBED", pastParticiple: "CLIMBED", gerund: "CLIMBING", meaning: "Subir" },
  { type: "I", baseForm: "CLING", thirdPerson: "CLINGS", simplePast: "CLUNG", pastParticiple: "CLUNG", gerund: "CLINGING", meaning: "Agarrar - Aferrarse - Adherirse" },
  { type: "R", baseForm: "CLOSE", thirdPerson: "CLOSES", simplePast: "CLOSED", pastParticiple: "CLOSED", gerund: "CLOSING", meaning: "Cerrar" },
  { type: "R", baseForm: "CLOTHE", thirdPerson: "CLOTHES", simplePast: "CLOTHED", pastParticiple: "CLOTHED", gerund: "CLOTHING", meaning: "Vestir - Arropar" },
  { type: "R", baseForm: "COLLECT", thirdPerson: "COLLECTS", simplePast: "COLLECTED", pastParticiple: "COLLECTED", gerund: "COLLECTING", meaning: "Coleccionar" },
  { type: "I", baseForm: "COME", thirdPerson: "COMES", simplePast: "CAME", pastParticiple: "COME", gerund: "COMING", meaning: "Venir" },
  { type: "R", baseForm: "COMMENT", thirdPerson: "COMMENTS", simplePast: "COMMENTED", pastParticiple: "COMMENTED", gerund: "COMMENTING", meaning: "Comentar" },
  { type: "R", baseForm: "COMPLAIN", thirdPerson: "COMPLAINS", simplePast: "COMPLAINED", pastParticiple: "COMPLAINED", gerund: "COMPLAINING", meaning: "Quejarse" },
  { type: "R", baseForm: "COMPLETE", thirdPerson: "COMPLETES", simplePast: "COMPLETED", pastParticiple: "COMPLETED", gerund: "COMPLETING", meaning: "Completar" },
  { type: "R", baseForm: "CONTINUE", thirdPerson: "CONTINUES", simplePast: "CONTINUED", pastParticiple: "CONTINUED", gerund: "CONTINUING", meaning: "Continuar" },
  { type: "R", baseForm: "CONVINCE", thirdPerson: "CONVINCES", simplePast: "CONVINCED", pastParticiple: "CONVINCED", gerund: "CONVINCING", meaning: "Convencer" },
  { type: "R", baseForm: "COOK", thirdPerson: "COOKS", simplePast: "COOKED", pastParticiple: "COOKED", gerund: "COOKING", meaning: "Cocinar" },
  { type: "R", baseForm: "COOL", thirdPerson: "COOLS", simplePast: "COOLED", pastParticiple: "COOLED", gerund: "COOLING", meaning: "Enfriar - Refrescar(Se) - Calmar(Se)" },
  { type: "R", baseForm: "COPY", thirdPerson: "COPIES", simplePast: "COPIED", pastParticiple: "COPIED", gerund: "COPYING", meaning: "Copiar" },
  { type: "I", baseForm: "COST", thirdPerson: "COSTS", simplePast: "COST", pastParticiple: "COST", gerund: "COSTING", meaning: "Costar" },
  { type: "R", baseForm: "COUNT", thirdPerson: "COUNTS", simplePast: "COUNTED", pastParticiple: "COUNTED", gerund: "COUNTING", meaning: "Contar" },
  { type: "R", baseForm: "COVER", thirdPerson: "COVERS", simplePast: "COVERED", pastParticiple: "COVERED", gerund: "COVERING", meaning: "Cubrir" },
  { type: "I", baseForm: "CREEP", thirdPerson: "CREEPS", simplePast: "CREPT", pastParticiple: "CREPT", gerund: "CREEPING", meaning: "Arrastrarse - Deslizarse - Gatear" },
  { type: "R", baseForm: "CROSS", thirdPerson: "CROSSES", simplePast: "CROSSED", pastParticiple: "CROSSED", gerund: "CROSSING", meaning: "Cruzar - Atravesar" },
  { type: "R", baseForm: "CRY", thirdPerson: "CRIES", simplePast: "CRIED", pastParticiple: "CRIED", gerund: "CRYING", meaning: "Llorar - Gritar" },
  { type: "I", baseForm: "CUT", thirdPerson: "CUTS", simplePast: "CUT", pastParticiple: "CUT", gerund: "CUTTING", meaning: "Cortar - Recortar" },
  { type: "R", baseForm: "DANCE", thirdPerson: "DANCES", simplePast: "DANCED", pastParticiple: "DANCED", gerund: "DANCING", meaning: "Bailar" },
  { type: "I", baseForm: "DEAL", thirdPerson: "DEALS", simplePast: "DEALT", pastParticiple: "DEALT", gerund: "DEALING", meaning: "Negociar - Comerciar" },
  { type: "R", baseForm: "DECIDE", thirdPerson: "DECIDES", simplePast: "DECIDED", pastParticiple: "DECIDED", gerund: "DECIDING", meaning: "Decidir" },
  { type: "R", baseForm: "DECLARE", thirdPerson: "DECLARES", simplePast: "DECLARED", pastParticiple: "DECLARED", gerund: "DECLARING", meaning: "Declarar" },
  { type: "R", baseForm: "DECORATE", thirdPerson: "DECORATES", simplePast: "DECORATED", pastParticiple: "DECORATED", gerund: "DECORATING", meaning: "Decorar" },
  { type: "R", baseForm: "DEFEND", thirdPerson: "DEFENDS", simplePast: "DEFENDED", pastParticiple: "DEFENDED", gerund: "DEFENDING", meaning: "Defender" },
  { type: "R", baseForm: "DEMONSTRATE", thirdPerson: "DEMONSTRATES", simplePast: "DEMONSTRATED", pastParticiple: "DEMONSTRATED", gerund: "DEMONSTRATING", meaning: "Demostrar" },
  { type: "R", baseForm: "DEPEND", thirdPerson: "DEPENDS", simplePast: "DEPENDED", pastParticiple: "DEPENDED", gerund: "DEPENDING", meaning: "Depender" },
  { type: "R", baseForm: "DESCEND", thirdPerson: "DESCENDS", simplePast: "DESCENDED", pastParticiple: "DESCENDED", gerund: "DESCENDING", meaning: "Descender - Bajar" },
  { type: "R", baseForm: "DESCRIBE", thirdPerson: "DESCRIBES", simplePast: "DESCRIBED", pastParticiple: "DESCRIBED", gerund: "DESCRIBING", meaning: "Describir" },
  { type: "R", baseForm: "DESTROY", thirdPerson: "DESTROYS", simplePast: "DESTROYED", pastParticiple: "DESTROYED", gerund: "DESTROYING", meaning: "Destruir" },
  { type: "R", baseForm: "DICTATE", thirdPerson: "DICTATES", simplePast: "DICTATED", pastParticiple: "DICTATED", gerund: "DICTATING", meaning: "Dictar" },
  { type: "R", baseForm: "DIE", thirdPerson: "DIES", simplePast: "DIED", pastParticiple: "DIED", gerund: "DYING", meaning: "Morir" },
  { type: "I", baseForm: "DIG", thirdPerson: "DIGS", simplePast: "DUG", pastParticiple: "DUG", gerund: "DIGGING", meaning: "Cavar - Excavar" },
  { type: "R", baseForm: "DISAGREE", thirdPerson: "DISAGREES", simplePast: "DISAGREED", pastParticiple: "DISAGREED", gerund: "DISAGREEING", meaning: "Discrepar - No Estar De Acuerdo" },
  { type: "R", baseForm: "DISCOVER", thirdPerson: "DISCOVERS", simplePast: "DISCOVERED", pastParticiple: "DISCOVERED", gerund: "DISCOVERING", meaning: "Descubrir" },
  { type: "R", baseForm: "DISCUSS", thirdPerson: "DISCUSSES", simplePast: "DISCUSSED", pastParticiple: "DISCUSSED", gerund: "DISCUSSING", meaning: "Discutir" },
  { type: "R", baseForm: "DIVIDE", thirdPerson: "DIVIDES", simplePast: "DIVIDED", pastParticiple: "DIVIDED", gerund: "DIVIDING", meaning: "Dividir" },
  { type: "I", baseForm: "DO", thirdPerson: "DOES", simplePast: "DID", pastParticiple: "DONE", gerund: "DOING", meaning: "Hacer" },
  { type: "R", baseForm: "DRAIN", thirdPerson: "DRAINS", simplePast: "DRAINED", pastParticiple: "DRAINED", gerund: "DRAINING", meaning: "Agotar" },
  { type: "I", baseForm: "DRAW", thirdPerson: "DRAWS", simplePast: "DREW", pastParticiple: "DRAWN", gerund: "DRAWING", meaning: "Dibujar - Trazar" },
  { type: "R", baseForm: "DREAM", thirdPerson: "DREAMS", simplePast: "DREAMED", pastParticiple: "DREAMT/DREAMED", gerund: "DREAMING", meaning: "Soñar" },
  { type: "R", baseForm: "DRESS", thirdPerson: "DRESSES", simplePast: "DRESSED", pastParticiple: "DRESSED", gerund: "DRESSING", meaning: "Vestir" },
  { type: "I", baseForm: "DRINK", thirdPerson: "DRINKS", simplePast: "DRANK", pastParticiple: "DRUNK", gerund: "DRINKING", meaning: "Beber - Tomar" },
  { type: "I", baseForm: "DRIVE", thirdPerson: "DRIVES", simplePast: "DROVE", pastParticiple: "DRIVEN", gerund: "DRIVING", meaning: "Manejar - Conducir" },
  { type: "R", baseForm: "DROP", thirdPerson: "DROPS", simplePast: "DROPPED", pastParticiple: "DROPPED", gerund: "DROPPING", meaning: "Bajar - Soltar" },
  { type: "R", baseForm: "DUST", thirdPerson: "DUSTS", simplePast: "DUSTED", pastParticiple: "DUSTED", gerund: "DUSTING", meaning: "Desempolvar" },
  { type: "I", baseForm: "DWELL", thirdPerson: "DWELLS", simplePast: "DWELT", pastParticiple: "DWELT", gerund: "DWELLING", meaning: "Residir - Morar - Habitar" },
  { type: "I", baseForm: "EAT", thirdPerson: "EATS", simplePast: "ATE", pastParticiple: "EATEN", gerund: "EATING", meaning: "Comer" },
  { type: "R", baseForm: "EMPTY", thirdPerson: "EMPTIES", simplePast: "EMPTIED", pastParticiple: "EMPTIED", gerund: "EMPTYING", meaning: "Vaciar" },
  { type: "R", baseForm: "END", thirdPerson: "ENDS", simplePast: "ENDED", pastParticiple: "ENDED", gerund: "ENDING", meaning: "Terminar" },
  { type: "R", baseForm: "ENJOY", thirdPerson: "ENJOYES", simplePast: "ENJOYED", pastParticiple: "ENJOYED", gerund: "ENJOYING", meaning: "Gozar(De) - Disfrutar" },
  { type: "R", baseForm: "ENROLL", thirdPerson: "ENROLLS", simplePast: "ENROLLED", pastParticiple: "ENROLLED", gerund: "ENROLLING", meaning: "Matricular" },
  { type: "R", baseForm: "ENTER", thirdPerson: "ENTERS", simplePast: "ENTERED", pastParticiple: "ENTERED", gerund: "ENTERING", meaning: "Entrar" },
  { type: "R", baseForm: "ERASE", thirdPerson: "ERASES", simplePast: "ERASED", pastParticiple: "ERASED", gerund: "ERASING", meaning: "Borrar" },
  { type: "R", baseForm: "EXCUSE", thirdPerson: "EXCUSES", simplePast: "EXCUSED", pastParticiple: "EXCUSED", gerund: "EXCUSING", meaning: "Excusar" },
  { type: "R", baseForm: "EXERCISE", thirdPerson: "EXERCISES", simplePast: "EXERCISED", pastParticiple: "EXERCISED", gerund: "EXERCISING", meaning: "Ejercitar(Se)" },
  { type: "R", baseForm: "EXPECT", thirdPerson: "EXPECTS", simplePast: "EXPECTED", pastParticiple: "EXPECTED", gerund: "EXPECTING", meaning: "Esperar" },
  { type: "R", baseForm: "EXPLAIN", thirdPerson: "EXPLAINS", simplePast: "EXPLAINED", pastParticiple: "EXPLAINED", gerund: "EXPLAINING", meaning: "Explicar" },
  { type: "R", baseForm: "FADE", thirdPerson: "FADES", simplePast: "FADED", pastParticiple: "FADED", gerund: "FADING", meaning: "Desteñir - Desvanecer(se)" },
  { type: "R", baseForm: "FAIL", thirdPerson: "FAILS", simplePast: "FAILED", pastParticiple: "FAILED", gerund: "FAILING", meaning: "Fallar - Fracasar - Perder" },
  { type: "I", baseForm: "FALL", thirdPerson: "FALLS", simplePast: "FELL", pastParticiple: "FALLEN", gerund: "FALLING", meaning: "Caer(Se)" },
  { type: "R", baseForm: "FASTEN", thirdPerson: "FASTENS", simplePast: "FASTENED", pastParticiple: "FASTENED", gerund: "FASTENING", meaning: "Abrochar" },
  { type: "R", baseForm: "FEAR", thirdPerson: "FEARS", simplePast: "FEARED", pastParticiple: "FEARED", gerund: "FEARING", meaning: "Temer" },
  { type: "R", baseForm: "FEED", thirdPerson: "FEEDS", simplePast: "FED", pastParticiple: "FED", gerund: "FEEDING", meaning: "Alimentar(Se)" },
  { type: "I", baseForm: "FEEL", thirdPerson: "FEELS", simplePast: "FELT", pastParticiple: "FELT", gerund: "FEELING", meaning: "Sentir" },
  { type: "I", baseForm: "FIGHT", thirdPerson: "FIGHTS", simplePast: "FOUGHT", pastParticiple: "FOUGHT", gerund: "FIGHTING", meaning: "Pelear - Luchar" },
  { type: "R", baseForm: "FILL", thirdPerson: "FILLS", simplePast: "FILLED", pastParticiple: "FILLED", gerund: "FILLING", meaning: "Llenar - Rellenar" },
  { type: "I", baseForm: "FIND", thirdPerson: "FINDS", simplePast: "FOUND", pastParticiple: "FOUND", gerund: "FINDING", meaning: "Encontrar - Hallar" },
  { type: "R", baseForm: "FINISH", thirdPerson: "FINISHES", simplePast: "FINISHED", pastParticiple: "FINISHED", gerund: "FINISHING", meaning: "Acabar(Con) - Terminar" },
  { type: "R", baseForm: "FISH", thirdPerson: "FISHES", simplePast: "FISHED", pastParticiple: "FISHED", gerund: "FISHING", meaning: "Pescar" },
  { type: "R", baseForm: "FIT", thirdPerson: "FITS", simplePast: "FITTED", pastParticiple: "FITTED", gerund: "FITTING", meaning: "Caber - Encajar - Ajustar" },
  { type: "R", baseForm: "FIX", thirdPerson: "FIXES", simplePast: "FIXED", pastParticiple: "FIXED", gerund: "FIXING", meaning: "Arreglar" },
  { type: "R", baseForm: "FLEE", thirdPerson: "FLEES", simplePast: "FLED", pastParticiple: "FLED", gerund: "FLEEING", meaning: "Evitar - Huir De" },
  { type: "I", baseForm: "FLING", thirdPerson: "FLINGS", simplePast: "FLUNG", pastParticiple: "FLUNG", gerund: "FLINGING", meaning: "Arrojar - Lanzar - Tirar" },
  { type: "R", baseForm: "FLUNK", thirdPerson: "FLUNKS", simplePast: "FLUNKED", pastParticiple: "FLUNKED", gerund: "FLUNKING", meaning: "Fracasar" },
  { type: "I", baseForm: "FLY", thirdPerson: "FLIES", simplePast: "FLEW", pastParticiple: "FLOWN", gerund: "FLYING", meaning: "Volar - Huir" },
  { type: "R", baseForm: "FOLLOW", thirdPerson: "FOLLOWS", simplePast: "FOLLOWED", pastParticiple: "FOLLOWED", gerund: "FOLLOWING", meaning: "Seguir" },
  { type: "I", baseForm: "FORBID", thirdPerson: "FORBIDS", simplePast: "FORBADE", pastParticiple: "FORBIDDEN", gerund: "FORBIDDING", meaning: "Prohibir - Privar" },
  { type: "I", baseForm: "FORECAST", thirdPerson: "FORECASTS", simplePast: "FORECAST", pastParticiple: "FORECAST", gerund: "FORECASTING", meaning: "Pronosticar" },
  { type: "I", baseForm: "FORGET", thirdPerson: "FORGETS", simplePast: "FORGOT", pastParticiple: "FORGOTTEN", gerund: "FORGETTING", meaning: "Olvidar" },
  { type: "I", baseForm: "FORGIVE", thirdPerson: "FORGIVES", simplePast: "FORGAVE", pastParticiple: "FORGIVEN", gerund: "FORGIVING", meaning: "Perdonar" },
  { type: "I", baseForm: "FORSAKE", thirdPerson: "FORSAKES", simplePast: "FORSOOK", pastParticiple: "FORSAKEN", gerund: "FORSAKING", meaning: "Abandonar - Dejar" },
  { type: "I", baseForm: "FREEZE", thirdPerson: "FREEZES", simplePast: "FROZE", pastParticiple: "FROZEN", gerund: "FREEZING", meaning: "Congelar - Helar" },
  { type: "R", baseForm: "FRY", thirdPerson: "FRIES", simplePast: "FRIED", pastParticiple: "FRIED", gerund: "FRYING", meaning: "Freír(Se)" },
  { type: "I", baseForm: "GET", thirdPerson: "GETS", simplePast: "GOT", pastParticiple: "GOTTEN", gerund: "GETTING", meaning: "Conseguir - Obtener" },
  { type: "I", baseForm: "GIVE", thirdPerson: "GIVES", simplePast: "GAVE", pastParticiple: "GIVEN", gerund: "GIVING", meaning: "Dar - Regalar" },
  { type: "I", baseForm: "GO", thirdPerson: "GOES", simplePast: "WENT", pastParticiple: "GONE", gerund: "GOING", meaning: "Ir" },
  { type: "R", baseForm: "GRADE", thirdPerson: "GRADES", simplePast: "GRADED", pastParticiple: "GRADED", gerund: "GRADING", meaning: "Graduar - Calificar - Clasificar" },
  { type: "R", baseForm: "GRATE", thirdPerson: "GRATES", simplePast: "GRATED", pastParticiple: "GRATED", gerund: "GRATING", meaning: "Rallar - Raspar" },
  { type: "R", baseForm: "GRILL", thirdPerson: "GRILLS", simplePast: "GRILLED", pastParticiple: "GRILLED", gerund: "GRILLING", meaning: "Asar (En Parrilla)" },
  { type: "I", baseForm: "GRIND", thirdPerson: "GRINDS", simplePast: "GROUND", pastParticiple: "GROUND", gerund: "GRINDING", meaning: "Moler - Triturar" },
  { type: "I", baseForm: "GROW", thirdPerson: "GROWS", simplePast: "GREW", pastParticiple: "GROWN", gerund: "GROWING", meaning: "Crecer - Brotar" },
  { type: "I", baseForm: "HAND IN", thirdPerson: "HANDS IN", simplePast: "HANDED IN", pastParticiple: "HANDED IN", gerund: "HANDING IN", meaning: "Entregar-Presentar" },
  { type: "I", baseForm: "HAND OUT", thirdPerson: "HANDS OUT", simplePast: "HANDED OUT", pastParticiple: "HANDED OUT", gerund: "HANDING OUT", meaning: "Dar-Distribuir" },
  { type: "I", baseForm: "HANG", thirdPerson: "HANGS", simplePast: "HUNG", pastParticiple: "HUNG", gerund: "HANGING", meaning: "Colgar - Suspender" },
  { type: "R", baseForm: "HAPPEN", thirdPerson: "HAPPENS", simplePast: "HAPPENED", pastParticiple: "HAPPENED", gerund: "HAPPENING", meaning: "Suceder - Ocurrir - Pasar" },
  { type: "R", baseForm: "HATE", thirdPerson: "HATES", simplePast: "HATED", pastParticiple: "HATED", gerund: "HATING", meaning: "Odiar - Aborrecer - Detestar" },
  { type: "I", baseForm: "HAVE", thirdPerson: "HAS", simplePast: "HAD", pastParticiple: "HAD", gerund: "HAVING", meaning: "Haber - Tener" },
  { type: "I", baseForm: "HEAR", thirdPerson: "HEARS", simplePast: "HEARD", pastParticiple: "HEARD", gerund: "HEARING", meaning: "Oir" },
  { type: "R", baseForm: "HELP", thirdPerson: "HELPS", simplePast: "HELPED", pastParticiple: "HELPED", gerund: "HELPING", meaning: "Ayudar - Socorrer" },
  { type: "I", baseForm: "HIDE", thirdPerson: "HIDES", simplePast: "HID", pastParticiple: "HIDDEN", gerund: "HIDING", meaning: "Ocultar - Esconder" },
  { type: "I", baseForm: "HIT", thirdPerson: "HITS", simplePast: "HIT", pastParticiple: "HIT", gerund: "HITTING", meaning: "Golpear - Pegar" },
  { type: "I", baseForm: "HOLD", thirdPerson: "HOLDS", simplePast: "HELD", pastParticiple: "HELD", gerund: "HOLDING", meaning: "Sostener - Retener" },
  { type: "R", baseForm: "HURRY", thirdPerson: "HURRIES", simplePast: "HURRIED", pastParticiple: "HURRIED", gerund: "HURRYING", meaning: "Apresurar(Se)" },
  { type: "I", baseForm: "HURT", thirdPerson: "HURTS", simplePast: "HURT", pastParticiple: "HURT", gerund: "HURTING", meaning: "Herir - Lastimar" },
  { type: "R", baseForm: "IDENTIFY", thirdPerson: "IDENTIFIES", simplePast: "IDENTIFIED", pastParticiple: "IDENTIFIED", gerund: "IDENTIFYING", meaning: "Identificar" },
  { type: "R", baseForm: "IMAGINE", thirdPerson: "IMAGINES", simplePast: "IMAGINED", pastParticiple: "IMAGINED", gerund: "IMAGINING", meaning: "Imaginar" },
  { type: "R", baseForm: "IMITATE", thirdPerson: "IMITATES", simplePast: "IMITATED", pastParticiple: "IMITATED", gerund: "IMITATING", meaning: "Imitar" },
  { type: "R", baseForm: "INCLUDE", thirdPerson: "INCLUDES", simplePast: "INCLUDED", pastParticiple: "INCLUDED", gerund: "INCLUDING", meaning: "Incluir" },
  { type: "R", baseForm: "INSPECT", thirdPerson: "INSPECTS", simplePast: "INSPECTED", pastParticiple: "INSPECTED", gerund: "INSPECTING", meaning: "Inspeccionar" },
  { type: "R", baseForm: "INVITE", thirdPerson: "INVITES", simplePast: "INVITED", pastParticiple: "INVITED", gerund: "INVITING", meaning: "Invitar" },
  { type: "R", baseForm: "JOG", thirdPerson: "JOGS", simplePast: "JOGGED", pastParticiple: "JOGGED", gerund: "JOGGING", meaning: "Trotar" },
  { type: "R", baseForm: "JUMP", thirdPerson: "JUMPS", simplePast: "JUMPED", pastParticiple: "JUMPED", gerund: "JUMPING", meaning: "Saltar - Brincar" },
  { type: "I", baseForm: "KEEP", thirdPerson: "KEEPS", simplePast: "KEPT", pastParticiple: "KEPT", gerund: "KEEPING", meaning: "Guardar - Mantener" },
  { type: "R", baseForm: "KICK", thirdPerson: "KICKS", simplePast: "KICKED", pastParticiple: "KICKED", gerund: "KICKING", meaning: "Patear - Dar Punta Pies" },
  { type: "R", baseForm: "KILL", thirdPerson: "KILLS", simplePast: "KILLED", pastParticiple: "KILLED", gerund: "KILLING", meaning: "Matar - Acabar con" },
  { type: "R", baseForm: "KISS", thirdPerson: "KISSES", simplePast: "KISSED", pastParticiple: "KISSED", gerund: "KISSING", meaning: "Besar" },
  { type: "I", baseForm: "KNOW", thirdPerson: "KNOWS", simplePast: "KNEW", pastParticiple: "KNOWN", gerund: "KNOWING", meaning: "Saber - Conocer" },
  { type: "R", baseForm: "LAND", thirdPerson: "LANDS", simplePast: "LANDED", pastParticiple: "LANDED", gerund: "LANDING", meaning: "Aterrizar - Desembarcar" },
  { type: "R", baseForm: "LAUGH", thirdPerson: "LAUGHS", simplePast: "LAUGHED", pastParticiple: "LAUGHED", gerund: "LAUGHING", meaning: "Reír(Se)" },
  { type: "I", baseForm: "LAY", thirdPerson: "LAYS", simplePast: "LAID", pastParticiple: "LAID", gerund: "LAYING", meaning: "Poner - Colocar - Echar" },
  { type: "R", baseForm: "LEAD", thirdPerson: "LEADS", simplePast: "LED", pastParticiple: "LED", gerund: "LEADING", meaning: "Conducir - Liderar" },
  { type: "R", baseForm: "LEARN", thirdPerson: "LEARNS", simplePast: "LEARNED", pastParticiple: "LEARNED", gerund: "LEARNING", meaning: "Aprender" },
  { type: "I", baseForm: "LEAVE", thirdPerson: "LEAVES", simplePast: "LEFT", pastParticiple: "LEFT", gerund: "LEAVING", meaning: "Salir - Abandonar" },
  { type: "I", baseForm: "LEND", thirdPerson: "LENDS", simplePast: "LENT", pastParticiple: "LENT", gerund: "LENDING", meaning: "Prestar" },
  { type: "I", baseForm: "LET", thirdPerson: "LETS", simplePast: "LET", pastParticiple: "LET", gerund: "LETTING", meaning: "Dejar - Permitir" },
  { type: "R", baseForm: "LICK", thirdPerson: "LICKS", simplePast: "LICKED", pastParticiple: "LICKED", gerund: "LICKING", meaning: "Lamer - Adular" },
  { type: "I", baseForm: "LIE", thirdPerson: "LIES", simplePast: "LAY", pastParticiple: "LAIN", gerund: "LYING", meaning: "Mentir" },
  { type: "I", baseForm: "LIGHT", thirdPerson: "LIGHTS", simplePast: "LIT", pastParticiple: "LIT", gerund: "LIGHTING", meaning: "Encender - Prender" },
  { type: "R", baseForm: "LIKE", thirdPerson: "LIKES", simplePast: "LIKED", pastParticiple: "LIKED", gerund: "LIKING", meaning: "Gustar - Querer" },
  { type: "R", baseForm: "LISTEN TO", thirdPerson: "LISTENS TO", simplePast: "LISTENED TO", pastParticiple: "LISTENED TO", gerund: "LISTENING TO", meaning: "Escuchar" },
  { type: "R", baseForm: "LIVE", thirdPerson: "LIVES", simplePast: "LIVED", pastParticiple: "LIVED", gerund: "LIVING", meaning: "Vivir" },
  { type: "R", baseForm: "LOOK", thirdPerson: "LOOKS", simplePast: "LOOKED", pastParticiple: "LOOKED", gerund: "LOOKING", meaning: "Mirar" },
  { type: "I", baseForm: "LOSE", thirdPerson: "LOSES", simplePast: "LOST", pastParticiple: "LOST", gerund: "LOSING", meaning: "Perder" },
  { type: "R", baseForm: "LOVE", thirdPerson: "LOVES", simplePast: "LOVED", pastParticiple: "LOVED", gerund: "LOVING", meaning: "Amar - Adorar - Encantar" },
  { type: "R", baseForm: "LOWER", thirdPerson: "LOWERS", simplePast: "LOWERED", pastParticiple: "LOWERED", gerund: "LOWERING", meaning: "Bajar - Reducir - Disminuir" },
  { type: "I", baseForm: "MAKE", thirdPerson: "MAKES", simplePast: "MADE", pastParticiple: "MADE", gerund: "MAKING", meaning: "Hacer - Fabricar" },
  { type: "R", baseForm: "MANAGE", thirdPerson: "MANAGES", simplePast: "MANAGED", pastParticiple: "MANAGED", gerund: "MANAGING", meaning: "Manejar - Dirigir - Arreglárselas" },
  { type: "I", baseForm: "MEAN", thirdPerson: "MEANS", simplePast: "MEANT", pastParticiple: "MEANT", gerund: "MEANING", meaning: "Significar - Querer Decir" },
  { type: "I", baseForm: "MEET", thirdPerson: "MEETS", simplePast: "MET", pastParticiple: "MET", gerund: "MEETING", meaning: "Conocer - Encontrar" },
  { type: "R", baseForm: "MEMORIZE", thirdPerson: "MEMORIZES", simplePast: "MEMORIZED", pastParticiple: "MEMORIZED", gerund: "MEMORIZING", meaning: "Memorizar" },
  { type: "R", baseForm: "MEND", thirdPerson: "MENDS", simplePast: "MENDED", pastParticiple: "MENDED", gerund: "MENDING", meaning: "Remendar - Reparar" },
  { type: "R", baseForm: "MIND", thirdPerson: "MINDS", simplePast: "MINDED", pastParticiple: "MINDED", gerund: "MINDING", meaning: "Agregar - Importar - Preocuparse" },
  { type: "R", baseForm: "MISLAY", thirdPerson: "MISLAYS", simplePast: "MISLAYED", pastParticiple: "MISLAYED", gerund: "MISLAYING", meaning: "Extraviar - Perder" },
  { type: "R", baseForm: "MISS", thirdPerson: "MISSES", simplePast: "MISSED", pastParticiple: "MISSED", gerund: "MISSING", meaning: "Echar De Menos - Perder" },
  { type: "I", baseForm: "MISTAKE", thirdPerson: "MISTAKES", simplePast: "MISTOOK", pastParticiple: "MISTAKEN", gerund: "MISTAKING", meaning: "Errar - Equivocarse" },
  { type: "R", baseForm: "MIX", thirdPerson: "MIXES", simplePast: "MIXED", pastParticiple: "MIXED", gerund: "MIXING", meaning: "Mezclar - Barajar" },
  { type: "R", baseForm: "MOP", thirdPerson: "MOPS", simplePast: "MOPPED", pastParticiple: "MOPPED", gerund: "MOPPING", meaning: "Trapear - Fregar" },
  { type: "R", baseForm: "MOVE", thirdPerson: "MOVES", simplePast: "MOVED", pastParticiple: "MOVED", gerund: "MOVING", meaning: "Mover - Trastear" },
  { type: "R", baseForm: "MULTIPLY", thirdPerson: "MULTIPLIES", simplePast: "MULTIPLIED", pastParticiple: "MULTIPLIED", gerund: "MULTIPLYING", meaning: "Multiplicar" },
  { type: "R", baseForm: "NAME", thirdPerson: "NAMES", simplePast: "NAMED", pastParticiple: "NAMED", gerund: "NAMING", meaning: "Nombrar - Denominar" },
  { type: "R", baseForm: "NEED", thirdPerson: "NEEDS", simplePast: "NEEDED", pastParticiple: "NEEDED", gerund: "NEEDING", meaning: "Necesitar - Requerir" },
  { type: "R", baseForm: "NOTICE", thirdPerson: "NOTICES", simplePast: "NOTICED", pastParticiple: "NOTICED", gerund: "NOTICING", meaning: "Notar - Advertir" },
  { type: "R", baseForm: "OCCUR", thirdPerson: "OCCURS", simplePast: "OCCURRED", pastParticiple: "OCCURRED", gerund: "OCCURRING", meaning: "Ocurrir - Suceder" },
  { type: "R", baseForm: "OFFER", thirdPerson: "OFFERS", simplePast: "OFFERED", pastParticiple: "OFFERED", gerund: "OFFERING", meaning: "Ofrecer" },
  { type: "R", baseForm: "OMIT", thirdPerson: "OMITS", simplePast: "OMITTED", pastParticiple: "OMITTED", gerund: "OMITTING", meaning: "Omitir" },
  { type: "R", baseForm: "OPEN", thirdPerson: "OPENS", simplePast: "OPENED", pastParticiple: "OPENED", gerund: "OPENING", meaning: "Abrir" },
  { type: "R", baseForm: "ORDER", thirdPerson: "ORDERS", simplePast: "ORDERED", pastParticiple: "ORDERED", gerund: "ORDERING", meaning: "Ordenar - Disponer" },
  { type: "I", baseForm: "OVERCOME", thirdPerson: "OVERCOMES", simplePast: "OVERCAME", pastParticiple: "OVERCOME", gerund: "OVERCOMING", meaning: "Vencer - Superar - Triunfar" },
  { type: "R", baseForm: "PACK", thirdPerson: "PACKS", simplePast: "PACKED", pastParticiple: "PACKED", gerund: "PACKING", meaning: "Empacar - Envasar" },
  { type: "R", baseForm: "PAINT", thirdPerson: "PAINTS", simplePast: "PAINTED", pastParticiple: "PAINTED", gerund: "PAINTING", meaning: "Pintar" },
  { type: "R", baseForm: "PARK", thirdPerson: "PARKS", simplePast: "PARKED", pastParticiple: "PARKED", gerund: "PARKING", meaning: "Parquear - Estacionar" },
  { type: "R", baseForm: "PASS", thirdPerson: "PASSES", simplePast: "PASSED", pastParticiple: "PASSED", gerund: "PASSING", meaning: "Pasar - Aprobar - Superar" },
  { type: "I", baseForm: "PAY", thirdPerson: "PAYS", simplePast: "PAID", pastParticiple: "PAID", gerund: "PAYING", meaning: "Pagar" },
  { type: "R", baseForm: "PEEL", thirdPerson: "PEELS", simplePast: "PEELED", pastParticiple: "PEELED", gerund: "PEELING", meaning: "Pelar" },
  { type: "R", baseForm: "PERMIT", thirdPerson: "PERMITS", simplePast: "PERMITTED", pastParticiple: "PERMITTED", gerund: "PERMITTING", meaning: "Permitir" },
  { type: "R", baseForm: "PERSUADE", thirdPerson: "PERSUADES", simplePast: "PERSUADED", pastParticiple: "PERSUADED", gerund: "PERSUADING", meaning: "Persuadir - Convencer" },
  { type: "R", baseForm: "PICK UP", thirdPerson: "PICKS UP", simplePast: "PICKED UP", pastParticiple: "PICKED UP", gerund: "PICKING UP", meaning: "Recoger" },
  { type: "R", baseForm: "PLACE", thirdPerson: "PLACES", simplePast: "PLACED", pastParticiple: "PLACED", gerund: "PLACING", meaning: "Poner - Colocar - Situar" },
  { type: "R", baseForm: "PLAN", thirdPerson: "PLANS", simplePast: "PLANNED", pastParticiple: "PLANNED", gerund: "PLANNING", meaning: "Planear" },
  { type: "R", baseForm: "PLANT", thirdPerson: "PLANTS", simplePast: "PLANTED", pastParticiple: "PLANTED", gerund: "PLANTING", meaning: "Plantar - Sembrar" },
  { type: "R", baseForm: "PLAY", thirdPerson: "PLAYS", simplePast: "PLAYED", pastParticiple: "PLAYED", gerund: "PLAYING", meaning: "Jugar - Tocar - Reproducir" },
  { type: "R", baseForm: "POLISH", thirdPerson: "POLISHES", simplePast: "POLISHED", pastParticiple: "POLISHED", gerund: "POLISHING", meaning: "Pulir" },
  { type: "R", baseForm: "PRACTICE", thirdPerson: "PRACTICES", simplePast: "PRACTICED", pastParticiple: "PRACTICED", gerund: "PRACTICING", meaning: "Practicar" },
  { type: "R", baseForm: "PREFER", thirdPerson: "PREFERS", simplePast: "PREFERRED", pastParticiple: "PREFERRED", gerund: "PREFERRING", meaning: "Preferir" },
  { type: "R", baseForm: "PREPARE", thirdPerson: "PREPARES", simplePast: "PREPARED", pastParticiple: "PREPARED", gerund: "PREPARING", meaning: "Preparar" },
  { type: "R", baseForm: "PRINT", thirdPerson: "PRINTS", simplePast: "PRINTED", pastParticiple: "PRINTED", gerund: "PRINTING", meaning: "Imprimir" },
  { type: "R", baseForm: "PROMISE", thirdPerson: "PROMISES", simplePast: "PROMISED", pastParticiple: "PROMISED", gerund: "PROMISING", meaning: "Prometer" },
  { type: "R", baseForm: "PRONOUNCE", thirdPerson: "PRONOUNCES", simplePast: "PRONOUNCED", pastParticiple: "PRONOUNCED", gerund: "PRONOUNCING", meaning: "Pronunciar" },
  { type: "R", baseForm: "PUBLISH", thirdPerson: "PUBLISHES", simplePast: "PUBLISHED", pastParticiple: "PUBLISHED", gerund: "PUBLISHING", meaning: "Publicar" },
  { type: "R", baseForm: "PULL", thirdPerson: "PULLS", simplePast: "PULLED", pastParticiple: "PULLED", gerund: "PULLING", meaning: "Halar - Tirar De" },
  { type: "R", baseForm: "PUNISH", thirdPerson: "PUNISHES", simplePast: "PUNISHED", pastParticiple: "PUNISHED", gerund: "PUNISHING", meaning: "Castigar" },
  { type: "R", baseForm: "PUSH", thirdPerson: "PUSHES", simplePast: "PUSHED", pastParticiple: "PUSHED", gerund: "PUSHING", meaning: "Empujar" },
  { type: "I", baseForm: "PUT", thirdPerson: "PUTS", simplePast: "PUT", pastParticiple: "PUT", gerund: "PUTTING", meaning: "Poner - Colocar" },
  { type: "I", baseForm: "QUIT", thirdPerson: "QUITS", simplePast: "QUIT", pastParticiple: "QUIT", gerund: "QUITTING", meaning: "Dejar-Abandonar" },
  { type: "R", baseForm: "RAIN", thirdPerson: "RAINS", simplePast: "RAINED", pastParticiple: "RAINED", gerund: "RAINING", meaning: "Llover" },
  { type: "R", baseForm: "REACH", thirdPerson: "REACHES", simplePast: "REACHED", pastParticiple: "REACHED", gerund: "REACHING", meaning: "Llegar - Alcanzar" },
  { type: "I", baseForm: "READ", thirdPerson: "READS", simplePast: "READ", pastParticiple: "READ", gerund: "READING", meaning: "Leer" },
  { type: "R", baseForm: "RECEIVE", thirdPerson: "RECEIVES", simplePast: "RECEIVED", pastParticiple: "RECEIVED", gerund: "RECEIVING", meaning: "Recibir" },
  { type: "R", baseForm: "RELAX", thirdPerson: "RELAXES", simplePast: "RELAXED", pastParticiple: "RELAXED", gerund: "RELAXING", meaning: "Relajar - Mitigar" },
  { type: "R", baseForm: "REMAIN", thirdPerson: "REMAINS", simplePast: "REMAINED", pastParticiple: "REMAINED", gerund: "REMAINING", meaning: "Permanecer - Quedarse" },
  { type: "R", baseForm: "REMEMBER", thirdPerson: "REMEMBERS", simplePast: "REMEMBERED", pastParticiple: "REMEMBERED", gerund: "REMEMBERING", meaning: "Recordar - Acordarse" },
  { type: "R", baseForm: "REPAIR", thirdPerson: "REPAIRS", simplePast: "REPAIRED", pastParticiple: "REPAIRED", gerund: "REPAIRING", meaning: "Reparar - Arreglar" },
  { type: "R", baseForm: "REPEAT", thirdPerson: "REPEATS", simplePast: "REPEATED", pastParticiple: "REPEATED", gerund: "REPEATING", meaning: "Repetir" },
  { type: "R", baseForm: "REPRESENT", thirdPerson: "REPRESENTS", simplePast: "REPRESENTED", pastParticiple: "REPRESENTED", gerund: "REPRESENTING", meaning: "Representar" },
  { type: "R", baseForm: "REST", thirdPerson: "RESTS", simplePast: "RESTED", pastParticiple: "RESTED", gerund: "RESTING", meaning: "Descansar - Reposar" },
  { type: "I", baseForm: "RID", thirdPerson: "RIDS", simplePast: "RID", pastParticiple: "RID", gerund: "RIDDING", meaning: "Librarse de - Deshacerse" },
  { type: "I", baseForm: "RIDE", thirdPerson: "RIDES", simplePast: "RODE", pastParticiple: "RIDDEN", gerund: "RIDING", meaning: "Cabalgar - Montar" },
  { type: "I", baseForm: "RING", thirdPerson: "RINGS", simplePast: "RANG", pastParticiple: "RUNG", gerund: "RINGING", meaning: "Sonar - Timbrar" },
  { type: "I", baseForm: "RISE", thirdPerson: "RISES", simplePast: "ROSE", pastParticiple: "RISEN", gerund: "RISING", meaning: "Subir - Ascender" },
  { type: "I", baseForm: "RUN", thirdPerson: "RUNS", simplePast: "RAN", pastParticiple: "RUN", gerund: "RUNNING", meaning: "Correr" },
  { type: "R", baseForm: "SAVE", thirdPerson: "SAVES", simplePast: "SAVED", pastParticiple: "SAVED", gerund: "SAVING", meaning: "Guardar - Ahorrar - Salvar" },
  { type: "I", baseForm: "SAY", thirdPerson: "SAYS", simplePast: "SAID", pastParticiple: "SAID", gerund: "SAYING", meaning: "Decir" },
  { type: "R", baseForm: "SCRUB", thirdPerson: "SCRUBS", simplePast: "SCRUBBED", pastParticiple: "SCRUBBED", gerund: "SCRUBBING", meaning: "Fregar - Restregar" },
  { type: "R", baseForm: "SEASON", thirdPerson: "SEASONS", simplePast: "SEASONED", pastParticiple: "SEASONED", gerund: "SEASONING", meaning: "Sazonar - Aliñar" },
  { type: "I", baseForm: "SEE", thirdPerson: "SEES", simplePast: "SAW", pastParticiple: "SEEN", gerund: "SEEING", meaning: "Ver" },
  { type: "I", baseForm: "SEEK", thirdPerson: "SEEKS", simplePast: "SOUGHT", pastParticiple: "SOUGHT", gerund: "SEEKING", meaning: "Buscar - Solicitar" },
  { type: "R", baseForm: "SEEM", thirdPerson: "SEEMS", simplePast: "SEEMED", pastParticiple: "SEEMED", gerund: "SEEMING", meaning: "Parecer" },
  { type: "R", baseForm: "SELECT", thirdPerson: "SELECTS", simplePast: "SELECTED", pastParticiple: "SELECTED", gerund: "SELECTING", meaning: "Seleccionar" },
  { type: "I", baseForm: "SELL", thirdPerson: "SELLS", simplePast: "SOLD", pastParticiple: "SOLD", gerund: "SELLING", meaning: "Vender" },
  { type: "I", baseForm: "SEND", thirdPerson: "SENDS", simplePast: "SENT", pastParticiple: "SENT", gerund: "SENDING", meaning: "Enviar - Mandar" },
  { type: "I", baseForm: "SET", thirdPerson: "SETS", simplePast: "SET", pastParticiple: "SET", gerund: "SETTING", meaning: "Establecer - Poner - Fijar" },
  { type: "R", baseForm: "SETTLE", thirdPerson: "SETTLES", simplePast: "SETTLED", pastParticiple: "SETTLED", gerund: "SETTLING", meaning: "Resolver" },
  { type: "R", baseForm: "SEW", thirdPerson: "SEWS", simplePast: "SEWED", pastParticiple: "SEWED", gerund: "SEWING", meaning: "Coser" },
  { type: "I", baseForm: "SHAKE", thirdPerson: "SHAKES", simplePast: "SHOOK", pastParticiple: "SHAKEN", gerund: "SHAKING", meaning: "Sacudir - Menear" },
  { type: "R", baseForm: "SHARE", thirdPerson: "SHARES", simplePast: "SHARED", pastParticiple: "SHARED", gerund: "SHARING", meaning: "Compartir" },
  { type: "R", baseForm: "SHARPEN", thirdPerson: "SHARPENS", simplePast: "SHARPENED", pastParticiple: "SHARPENED", gerund: "SHARPENING", meaning: "Afilar - Ampliar" },
  { type: "R", baseForm: "SHED", thirdPerson: "SHEDS", simplePast: "SHED", pastParticiple: "SHED", gerund: "SHEDDING", meaning: "Quitarse - Despojarse" },
  { type: "I", baseForm: "SHINE", thirdPerson: "SHINES", simplePast: "SHONE", pastParticiple: "SHONE", gerund: "SHINING", meaning: "Brillar - Alumbrar" },
  { type: "I", baseForm: "SHOOT", thirdPerson: "SHOOTS", simplePast: "SHOT", pastParticiple: "SHOT", gerund: "SHOOTING", meaning: "Tirar - Disparar" },
  { type: "R", baseForm: "SHOP", thirdPerson: "SHOPS", simplePast: "SHOPPED", pastParticiple: "SHOPPED", gerund: "SHOPPING", meaning: "Comprar (De Tiendas)" },
  { type: "R", baseForm: "SHOUT", thirdPerson: "SHOUTS", simplePast: "SHOUTED", pastParticiple: "SHOUTED", gerund: "SHOUTING", meaning: "Gritar" },
  { type: "I", baseForm: "SHOW", thirdPerson: "SHOWS", simplePast: "SHOWED", pastParticiple: "SHOWN", gerund: "SHOWING", meaning: "Mostrar - Enseñar" },
  { type: "I", baseForm: "SHRINK", thirdPerson: "SHRINKS", simplePast: "SHRANK", pastParticiple: "SHRUNK", gerund: "SHRINKING", meaning: "Encoger - Contraer" },
  { type: "I", baseForm: "SHUT", thirdPerson: "SHUTS", simplePast: "SHUT", pastParticiple: "SHUT", gerund: "SHUTTING", meaning: "Cerrar(Callar)" },
  { type: "R", baseForm: "SIGH", thirdPerson: "SIGHS", simplePast: "SIGHED", pastParticiple: "SIGHED", gerund: "SIGHING", meaning: "Suspirar - Susurrar" },
  { type: "I", baseForm: "SIGN", thirdPerson: "SIGNS", simplePast: "SIGNED", pastParticiple: "SIGNED", gerund: "SIGNING", meaning: "Firmar" },
  { type: "R", baseForm: "SIMMER", thirdPerson: "SIMMERS", simplePast: "SIMMERED", pastParticiple: "SIMMERED", gerund: "SIMMERING", meaning: "Cocer A Fuego Lento" },
  { type: "I", baseForm: "SING", thirdPerson: "SINGS", simplePast: "SANG", pastParticiple: "SUNG", gerund: "SINGING", meaning: "Cantar" },
  { type: "I", baseForm: "SINK", thirdPerson: "SINKS", simplePast: "SANK", pastParticiple: "SUNK", gerund: "SINKING", meaning: "Sumergir - Hundir" },
  { type: "I", baseForm: "SIT", thirdPerson: "SITS", simplePast: "SAT", pastParticiple: "SAT", gerund: "SITTING", meaning: "Sentarse" },
  { type: "R", baseForm: "SKATE", thirdPerson: "SKATES", simplePast: "SKATED", pastParticiple: "SKATED", gerund: "SKATING", meaning: "Patinar" },
  { type: "R", baseForm: "SKI", thirdPerson: "SKIS", simplePast: "SKIED", pastParticiple: "SKIED", gerund: "SKIING", meaning: "Esquiar" },
  { type: "I", baseForm: "SLEEP", thirdPerson: "SLEEPS", simplePast: "SLEPT", pastParticiple: "SLEPT", gerund: "SLEEPING", meaning: "Dormir" },
  { type: "R", baseForm: "SLICE", thirdPerson: "SLICES", simplePast: "SLICED", pastParticiple: "SLICED", gerund: "SLICING", meaning: "Rebanar" },
  { type: "I", baseForm: "SLIDE", thirdPerson: "SLIDES", simplePast: "SLID", pastParticiple: "SLID", gerund: "SLIDING", meaning: "Resbalar(Se)" },
  { type: "R", baseForm: "SMELL", thirdPerson: "SMELLS", simplePast: "SMELLED", pastParticiple: "SMELLED", gerund: "SMELLING", meaning: "Oler - Husmear" },
  { type: "R", baseForm: "SMILE", thirdPerson: "SMILES", simplePast: "SMILED", pastParticiple: "SMILED", gerund: "SMILING", meaning: "Sonreír" },
  { type: "R", baseForm: "SMOKE", thirdPerson: "SMOKES", simplePast: "SMOKED", pastParticiple: "SMOKED", gerund: "SMOKING", meaning: "Fumar" },
  { type: "R", baseForm: "SNEEZE", thirdPerson: "SNEEZES", simplePast: "SNEEZED", pastParticiple: "SNEEZED", gerund: "SNEEZING", meaning: "Estornudar" },
  { type: "R", baseForm: "SOLVE", thirdPerson: "SOLVES", simplePast: "SOLVED", pastParticiple: "SOLVED", gerund: "SOLVING", meaning: "Resolver" },
  { type: "R", baseForm: "SOUND", thirdPerson: "SOUNDS", simplePast: "SOUNDED", pastParticiple: "SOUNDED", gerund: "SOUNDING", meaning: "Sonar - Tocar" },
  { type: "I", baseForm: "SPEAK", thirdPerson: "SPEAKS", simplePast: "SPOKE", pastParticiple: "SPOKEN", gerund: "SPEAKING", meaning: "Hablar" },
  { type: "R", baseForm: "SPEED", thirdPerson: "SPEEDS", simplePast: "SPED", pastParticiple: "SPED", gerund: "SPEEDING", meaning: "Acelerar" },
  { type: "R", baseForm: "SPELL", thirdPerson: "SPELLS", simplePast: "SPELLED", pastParticiple: "SPELLED", gerund: "SPELLING", meaning: "Deletrear" },
  { type: "I", baseForm: "SPEND", thirdPerson: "SPENDS", simplePast: "SPENT", pastParticiple: "SPENT", gerund: "SPENDING", meaning: "Gastar - Pasar El Tiempo" },
  { type: "R", baseForm: "SPILL", thirdPerson: "SPILLS", simplePast: "SPILLED", pastParticiple: "SPILLED", gerund: "SPILLING", meaning: "Derramar - Regar" },
  { type: "I", baseForm: "SPIN", thirdPerson: "SPINS", simplePast: "SPUN", pastParticiple: "SPUN", gerund: "SPINNING", meaning: "Hacer Girar (Vueltas)" },
  { type: "I", baseForm: "SPIT", thirdPerson: "SPITS", simplePast: "SPIT", pastParticiple: "SPIT", gerund: "SPITTING", meaning: "Escupir" },
  { type: "R", baseForm: "SPLASH", thirdPerson: "SPLASHES", simplePast: "SPLASHED", pastParticiple: "SPLASHED", gerund: "SPLASHING", meaning: "Salpicar - Rociar" },
  { type: "I", baseForm: "SPLIT", thirdPerson: "SPLITS", simplePast: "SPLIT", pastParticiple: "SPLIT", gerund: "SPLITTING", meaning: "Dividirse - Partir" },
  { type: "R", baseForm: "SPOIL", thirdPerson: "SPOILS", simplePast: "SPOILED", pastParticiple: "SPOILED", gerund: "SPOILING", meaning: "Estropear - Echar a perder - Mimar" },
  { type: "I", baseForm: "SPREAD", thirdPerson: "SPREADS", simplePast: "SPREAD", pastParticiple: "SPREAD", gerund: "SPREADING", meaning: "Difundir - Propagar" },
  { type: "I", baseForm: "SPRING", thirdPerson: "SPRINGS", simplePast: "SPRANG", pastParticiple: "SPRUNG", gerund: "SPRINGING", meaning: "Saltar - Brotar" },
  { type: "R", baseForm: "SPRINKLE", thirdPerson: "SPRINKLES", simplePast: "SPRINKLED", pastParticiple: "SPRINKLED", gerund: "SPRINKLING", meaning: "Rociar" },
  { type: "R", baseForm: "SQUEEZE", thirdPerson: "SQUEEZES", simplePast: "SQUEEZED", pastParticiple: "SQUEEZED", gerund: "SQUEEZING", meaning: "Apretar" },
  { type: "I", baseForm: "STAND", thirdPerson: "STANDS", simplePast: "STOOD", pastParticiple: "STOOD", gerund: "STANDING", meaning: "Ponerse De Pie - Pararse" },
  { type: "R", baseForm: "START", thirdPerson: "STARTS", simplePast: "STARTED", pastParticiple: "STARTED", gerund: "STARTING", meaning: "Agregar - Comenzar - Empezar - Iniciar" },
  { type: "R", baseForm: "STAY", thirdPerson: "STAYS", simplePast: "STAYED", pastParticiple: "STAYED", gerund: "STAYING", meaning: "Permanecer - Quedarse - Durar" },
  { type: "I", baseForm: "STEAL", thirdPerson: "STEALS", simplePast: "STOLE", pastParticiple: "STOLEN", gerund: "STEALING", meaning: "Robar - Hurtar" },
  { type: "R", baseForm: "STEAM", thirdPerson: "STEAMS", simplePast: "STEAMED", pastParticiple: "STEAMED", gerund: "STEAMING", meaning: "Cocer A Vapor" },
  { type: "I", baseForm: "STICK", thirdPerson: "STICKS", simplePast: "STUCK", pastParticiple: "STUCK", gerund: "STICKING", meaning: "Pegar(se) - Adherir(se)" },
  { type: "I", baseForm: "STING", thirdPerson: "STINGS", simplePast: "STUNG", pastParticiple: "STUNG", gerund: "STINGING", meaning: "Picar - Golpear" },
  { type: "I", baseForm: "STINK", thirdPerson: "STINKS", simplePast: "STANK", pastParticiple: "STUNK", gerund: "STINKING", meaning: "Apestar - Oler Mal" },
  { type: "R", baseForm: "STIR", thirdPerson: "STIRS", simplePast: "STIRED", pastParticiple: "STIRED", gerund: "STIRRING", meaning: "Agregar - Revolver" },
  { type: "R", baseForm: "STOP", thirdPerson: "STOPS", simplePast: "STOPPED", pastParticiple: "STOPPED", gerund: "STOPPING", meaning: "Parar - Detener" },
  { type: "I", baseForm: "STRIKE", thirdPerson: "STIKES", simplePast: "STRUCK", pastParticiple: "STRUCK", gerund: "STRIKING", meaning: "Golpear - Pegar" },
  { type: "I", baseForm: "STRING", thirdPerson: "STRINGS", simplePast: "STRUNGS", pastParticiple: "STRUNG", gerund: "STRINGING", meaning: "Atar(Cordones)" },
  { type: "I", baseForm: "STRIVE", thirdPerson: "STRIVES", simplePast: "STROVE", pastParticiple: "STRIVEN", gerund: "STRIVING", meaning: "Esforzarse" },
  { type: "R", baseForm: "STUDY", thirdPerson: "STUDIES", simplePast: "STUDIED", pastParticiple: "STUDIED", gerund: "STUDYING", meaning: "Estudiar" },
  { type: "R", baseForm: "STUFF", thirdPerson: "STUFFS", simplePast: "STUFFED", pastParticiple: "STUFFED", gerund: "STUFFING", meaning: "Rellenar" },
  { type: "R", baseForm: "SUBSTRACT", thirdPerson: "SUBSTRACTS", simplePast: "SUBSTRACTED", pastParticiple: "SUBSTRACTED", gerund: "SUBSTRACTING", meaning: "Sustraer - Restar" },
  { type: "R", baseForm: "SUCK", thirdPerson: "SUCKS", simplePast: "SUCKED", pastParticiple: "SUCKED", gerund: "SUCKING", meaning: "Chupar" },
  { type: "R", baseForm: "SUPPOSE", thirdPerson: "SUPPOSES", simplePast: "SUPPOSED", pastParticiple: "SUPPOSED", gerund: "SUPPOSING", meaning: "Suponer" },
  { type: "R", baseForm: "SUPPORT", thirdPerson: "SUPPORTS", simplePast: "SUPPORTED", pastParticiple: "SUPPORTED", gerund: "SUPPORTING", meaning: "Soportar" },
  { type: "R", baseForm: "SURROUND", thirdPerson: "SURROUNDS", simplePast: "SURROUNDED", pastParticiple: "SURROUNDED", gerund: "SORROUNDING", meaning: "Rodear" },
  { type: "I", baseForm: "SWEAR", thirdPerson: "SWEARS", simplePast: "SWORE", pastParticiple: "SWORN", gerund: "SWEARING", meaning: "Jurar" },
  { type: "I", baseForm: "SWEEP", thirdPerson: "SWEEPS", simplePast: "SWEPT", pastParticiple: "SWEPT", gerund: "SWEEPING", meaning: "Barrer" },
  { type: "I", baseForm: "SWIM", thirdPerson: "SWIMS", simplePast: "SWAM", pastParticiple: "SWUM", gerund: "SWIMMING", meaning: "Nadar" },
  { type: "I", baseForm: "SWING", thirdPerson: "SWINGS", simplePast: "SWUNG", pastParticiple: "SWUNG", gerund: "SWINGING", meaning: "Balancearse - Girar - Columpiarse" },
  { type: "I", baseForm: "TAKE", thirdPerson: "TAKES", simplePast: "TOOK", pastParticiple: "TAKEN", gerund: "TAKING", meaning: "Tomar - Agarrar - Coger" },
  { type: "R", baseForm: "TALK", thirdPerson: "TALKS", simplePast: "TALKED", pastParticiple: "TALKED", gerund: "TALKING", meaning: "Hablar - Conversar" },
  { type: "R", baseForm: "TASTE", thirdPerson: "TASTES", simplePast: "TASTED", pastParticiple: "TASTED", gerund: "TASTING", meaning: "Saborear - Catar - Probar" },
  { type: "I", baseForm: "TEACH", thirdPerson: "TEACHES", simplePast: "TAUGHT", pastParticiple: "TAUGHT", gerund: "TEACHING", meaning: "Enseñar" },
  { type: "I", baseForm: "TEAR", thirdPerson: "TEARS", simplePast: "TORE", pastParticiple: "TORN", gerund: "TEARING", meaning: "Rasgar - Desgarrar - Arrancar" },
  { type: "I", baseForm: "TELL", thirdPerson: "TELLS", simplePast: "TOLD", pastParticiple: "TOLD", gerund: "TELLING", meaning: "Decir - Contar" },
  { type: "I", baseForm: "THINK", thirdPerson: "THINKS", simplePast: "THOUGHT", pastParticiple: "THOUGHT", gerund: "THINKING", meaning: "Pensar - Creer" },
  { type: "I", baseForm: "THROW", thirdPerson: "THROWS", simplePast: "THREW", pastParticiple: "THROWN", gerund: "THROWING", meaning: "Lanzar - Arrojar" },
  { type: "I", baseForm: "THRUST", thirdPerson: "THRUST", simplePast: "THRUST", pastParticiple: "THRUST", gerund: "THRUSTING", meaning: "Clavar - Empujar" },
  { type: "R", baseForm: "TOUCH", thirdPerson: "TOUCHES", simplePast: "TOUCHED", pastParticiple: "TOUCHED", gerund: "TOUCHING", meaning: "Tocar - Rozar" },
  { type: "R", baseForm: "TRANSLATE", thirdPerson: "TRANSLATES", simplePast: "TRANSLATED", pastParticiple: "TRANSLATED", gerund: "TRANSLATING", meaning: "Traducir" },
  { type: "R", baseForm: "TRAVEL", thirdPerson: "TRAVELS", simplePast: "TRAVELED", pastParticiple: "TRAVELED", gerund: "TRAVELING", meaning: "Viajar - Andar - Recorrer" },
  { type: "R", baseForm: "TRUST", thirdPerson: "TRUSTS", simplePast: "TRUSTED", pastParticiple: "TRUSTED", gerund: "TRUSTING", meaning: "Confiar - Creer" },
  { type: "R", baseForm: "TRY", thirdPerson: "TRIES", simplePast: "TRIED", pastParticiple: "TRIED", gerund: "TRYING", meaning: "Probar - Intentar - Ensayar - Tratar" },
  { type: "R", baseForm: "TURN", thirdPerson: "TURNS", simplePast: "TURNED", pastParticiple: "TURNED", gerund: "TURNING", meaning: "Girar - Dar Vueltas - Dar La Vuelta" },
  { type: "R", baseForm: "TYPE", thirdPerson: "TYPES", simplePast: "TYPED", pastParticiple: "TYPED", gerund: "TYPING", meaning: "Mecanografiar - Digitar" },
  { type: "R", baseForm: "UNDERLINE", thirdPerson: "UNDERLINES", simplePast: "UNDERLINED", pastParticiple: "UNDERLINED", gerund: "UNDERLINING", meaning: "Subrayar" },
  { type: "I", baseForm: "UNDERSTAND", thirdPerson: "UNDERSTANDS", simplePast: "UNDERSTOOD", pastParticiple: "UNDERSTOOD", gerund: "UNDERSTANDING", meaning: "Entender - Comprender" },
  { type: "I", baseForm: "UNDERTAKE", thirdPerson: "UNDERTAKES", simplePast: "UNDERTOOK", pastParticiple: "UNDERTAKEN", gerund: "UNDERTAKING", meaning: "Encargarse - Emprender" },
  { type: "I", baseForm: "UPSET", thirdPerson: "UPSETS", simplePast: "UPSET", pastParticiple: "UPSET", gerund: "UPSETTING", meaning: "Alterar - Perturbar" },
  { type: "R", baseForm: "USE", thirdPerson: "USES", simplePast: "USED", pastParticiple: "USED", gerund: "USING", meaning: "Usar" },
  { type: "R", baseForm: "VACUUM", thirdPerson: "VACUUMS", simplePast: "VACUUMED", pastParticiple: "VACUUMED", gerund: "VACCUMING", meaning: "Aspirar" },
  { type: "R", baseForm: "VANISH", thirdPerson: "VANISHES", simplePast: "VANISHED", pastParticiple: "VANISHED", gerund: "VANISHING", meaning: "Desvanecer(se) - Desaparecer" },
  { type: "R", baseForm: "VISIT", thirdPerson: "VISITS", simplePast: "VISITED", pastParticiple: "VISITED", gerund: "VISITING", meaning: "Visitar - Hacer Visitas" },
  { type: "R", baseForm: "WAIT", thirdPerson: "WAITS", simplePast: "WAITED", pastParticiple: "WAITED", gerund: "WAITING", meaning: "Esperar" },
  { type: "I", baseForm: "WAKE", thirdPerson: "WAKES", simplePast: "WOKE", pastParticiple: "WOKEN", gerund: "WAKING", meaning: "Despertar(se)" },
  { type: "R", baseForm: "WALK", thirdPerson: "WALKS", simplePast: "WALKED", pastParticiple: "WALKED", gerund: "WALKING", meaning: "Caminar - Andar - Pasear - Andar" },
  { type: "R", baseForm: "WANT", thirdPerson: "WANTS", simplePast: "WANTED", pastParticiple: "WANTED", gerund: "WANTING", meaning: "Querer - Desear - Necesitar" },
  { type: "R", baseForm: "WARM", thirdPerson: "WARMS", simplePast: "WARMED", pastParticiple: "WARMED", gerund: "WARMING", meaning: "Calentar(Se) - Recalentar" },
  { type: "R", baseForm: "WASH", thirdPerson: "WASHES", simplePast: "WASHED", pastParticiple: "WASHED", gerund: "WASHING", meaning: "Lavar - Fregar - Mojar" },
  { type: "R", baseForm: "WATCH", thirdPerson: "WATCHES", simplePast: "WATCHED", pastParticiple: "WATCHED", gerund: "WATCHING", meaning: "Mirar - Velar - Vigilar" },
  { type: "R", baseForm: "WAVE", thirdPerson: "WAVES", simplePast: "WAVED", pastParticiple: "WAVED", gerund: "WAVING", meaning: "Agitar - Ondear" },
  { type: "I", baseForm: "WEAR", thirdPerson: "WEARS", simplePast: "WORE", pastParticiple: "WORN", gerund: "WEARING", meaning: "Usar - Llevar Puesto" },
  { type: "I", baseForm: "WEAVE", thirdPerson: "WEAVES", simplePast: "WOVE", pastParticiple: "WOVEN", gerund: "WEAVING", meaning: "Tejer" },
  { type: "R", baseForm: "WED", thirdPerson: "WEDS", simplePast: "WED", pastParticiple: "WED", gerund: "WEDDING", meaning: "Casar(se) - Unirse con" },
  { type: "I", baseForm: "WEEP", thirdPerson: "WEEPS", simplePast: "WEPT", pastParticiple: "WEPT", gerund: "WEEPING", meaning: "Lamentarse - Llorar" },
  { type: "R", baseForm: "WEIGH", thirdPerson: "WEIGHS", simplePast: "WEIGHED", pastParticiple: "WEIGHED", gerund: "WEIGHING", meaning: "Pesar" },
  { type: "R", baseForm: "WHISTLE", thirdPerson: "WHISTLES", simplePast: "WHISTLED", pastParticiple: "WHISTLED", gerund: "WHISTLING", meaning: "Silbar" },
  { type: "I", baseForm: "WIN", thirdPerson: "WINS", simplePast: "WON", pastParticiple: "WON", gerund: "WINNING", meaning: "Ganar" },
  { type: "I", baseForm: "WIND", thirdPerson: "WINDS", simplePast: "WOUND", pastParticiple: "WOUND", gerund: "WINDING", meaning: "Dejar Sin Aliento" },
  { type: "R", baseForm: "WISH", thirdPerson: "WISHES", simplePast: "WISHED", pastParticiple: "WISHED", gerund: "WISHING", meaning: "Desear" },
  { type: "I", baseForm: "WITHDRAW", thirdPerson: "WITHDRAWS", simplePast: "WITHDREW", pastParticiple: "WITHDRAWN", gerund: "WITHDRAWING", meaning: "Quitar - Apartar - Retirar" },
  { type: "R", baseForm: "WONDER", thirdPerson: "WONDERS", simplePast: "WONDERED", pastParticiple: "WONDERED", gerund: "WONDERING", meaning: "Maravillarse - Asombrarse - Preguntarse" },
  { type: "R", baseForm: "WORK", thirdPerson: "WORKS", simplePast: "WORKED", pastParticiple: "WORKED", gerund: "WORKING", meaning: "Trabajar - Funcionar" },
  { type: "R", baseForm: "WORRY", thirdPerson: "WORRIES", simplePast: "WORRIED", pastParticiple: "WORRIED", gerund: "WORRYING", meaning: "Preocupar" },
  { type: "R", baseForm: "WRAP", thirdPerson: "WRAPS", simplePast: "WRAPPED", pastParticiple: "WRAPPED", gerund: "WRAPPING", meaning: "Empacar - Envolver" },
  { type: "I", baseForm: "WRING", thirdPerson: "WRINGS", simplePast: "WRUNG", pastParticiple: "WRUNG", gerund: "WRINGING", meaning: "Escurrir - Retorcer" },
  { type: "I", baseForm: "WRITE", thirdPerson: "WRITES", simplePast: "WROTE", pastParticiple: "WRITTEN", gerund: "WRITING", meaning: "Escribir - Redactar" },
  { type: "R", baseForm: "YAWN", thirdPerson: "YAWNS", simplePast: "YAWNED", pastParticiple: "YAWNED", gerund: "YAWNING", meaning: "Bostezar" },
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
  { nombre: "DEMONSTRATE - demostrar.m4a", ruta: "./audios/DEMONSTRATE - demostrar.m4a" },
  { nombre: "DEPEND - depender.m4a", ruta: "./audios/DEPEND - depender.m4a" },
  { nombre: "DESCEND - descender.m4a", ruta: "./audios/DESCEND - descender.m4a" },
  { nombre: "DESCRIBE - describir.m4a", ruta: "./audios/DESCRIBE - describir.m4a" },
  { nombre: "DESTROY - destruir.m4a", ruta: "./audios/DESTROY - destruir.m4a" },
  { nombre: "DICTATE - dictar.m4a", ruta: "./audios/DICTATE - dictar.m4a" },
  { nombre: "DIE - morir.m4a", ruta: "./audios/DIE - morir.m4a" },
  { nombre: "DIG - cavar.m4a", ruta: "./audios/DIG - cavar.m4a" },
  { nombre: "DISAGREE - discrepar.m4a", ruta: "./audios/DISAGREE - discrepar.m4a" },
  { nombre: "DISCOVER - descubrir.m4a", ruta: "./audios/DISCOVER - descubrir.m4a" },
  { nombre: "DISCUSS - discutir.m4a", ruta: "./audios/DISCUSS - discutir.m4a" },
  { nombre: "DIVIDE - dividir.m4a", ruta: "./audios/DIVIDE - dividir.m4a" },
  { nombre: "DO - hacer.m4a", ruta: "./audios/DO - hacer.m4a" },
  { nombre: "DRAIN - agotar.m4a", ruta: "./audios/DRAIN - agotar.m4a" },
  { nombre: "DRAW - dibujar.m4a", ruta: "./audios/DRAW - dibujar.m4a" },
  { nombre: "DREAM - soñar.m4a", ruta: "./audios/DREAM - soñar.m4a" },
  { nombre: "DRESS - vestir.m4a", ruta: "./audios/DRESS - vestir.m4a" },
  { nombre: "DRINK - beber.m4a", ruta: "./audios/DRINK - beber.m4a" },
  { nombre: "DRIVE - manejar.m4a", ruta: "./audios/DRIVE - manejar.m4a" },
  { nombre: "DROP - bajar.m4a", ruta: "./audios/DROP - bajar.m4a" },
  { nombre: "DUST - desempolvar.m4a", ruta: "./audios/DUST - desempolvar.m4a" },
  { nombre: "DWELL - residir.m4a", ruta: "./audios/DWELL - residir.m4a" },
  { nombre: "EAT - comer.m4a", ruta: "./audios/EAT - comer.m4a" },
  { nombre: "EMPTY - vaciar.m4a", ruta: "./audios/EMPTY - vaciar.m4a" },
  { nombre: "END - terminar.m4a", ruta: "./audios/END - terminar.m4a" },
  { nombre: "ENJOY - gozar.m4a", ruta: "./audios/ENJOY - gozar.m4a" },
  { nombre: "ENROLL - matricular.m4a", ruta: "./audios/ENROLL - matricular.m4a" },
  { nombre: "ENTER - entrar.m4a", ruta: "./audios/ENTER - entrar.m4a" },
  { nombre: "ERASE - borrar.m4a", ruta: "./audios/ERASE - borrar.m4a" },
  { nombre: "EXCUSE - excusar.m4a", ruta: "./audios/EXCUSE - excusar.m4a" },
  { nombre: "EXERCISE - ejercitar.m4a", ruta: "./audios/EXERCISE - ejercitar.m4a" },
  { nombre: "EXPECT - esperar.m4a", ruta: "./audios/EXPECT - esperar.m4a" },
  { nombre: "EXPLAIN - explicar.m4a", ruta: "./audios/EXPLAIN - explicar.m4a" },
  { nombre: "FADE - desteñir.m4a", ruta: "./audios/FADE - desteñir.m4a" },
  { nombre: "FAIL - fallar.m4a", ruta: "./audios/FAIL - fallar.m4a" },
  { nombre: "FALL - caer.m4a", ruta: "./audios/FALL - caer.m4a" },
  { nombre: "FASTEN - abrochar.m4a", ruta: "./audios/FASTEN - abrochar.m4a" },
  { nombre: "FEAR - temer.m4a", ruta: "./audios/FEAR - temer.m4a" },
  { nombre: "FEED - alimentar(se).m4a", ruta: "./audios/FEED - alimentar(se).m4a" },
  { nombre: "FEEL - sentir.m4a", ruta: "./audios/FEEL - sentir.m4a" },
  { nombre: "FIGHT - pelear.m4a", ruta: "./audios/FIGHT - pelear.m4a" },
  { nombre: "FILL - llenar.m4a", ruta: "./audios/FILL - llenar.m4a" },
  { nombre: "FIND - encontrar.m4a", ruta: "./audios/FIND - encontrar.m4a" },
  { nombre: "FINISH - acabar.m4a", ruta: "./audios/FINISH - acabar.m4a" },
  { nombre: "FISH - pescar.m4a", ruta: "./audios/FISH - pescar.m4a" },
  { nombre: "FIT - caber.m4a", ruta: "./audios/FIT - caber.m4a" },
  { nombre: "FIX - arreglar.m4a", ruta: "./audios/FIX - arreglar.m4a" },
  { nombre: "FLEE - evitar.m4a", ruta: "./audios/FLEE - evitar.m4a" },
  { nombre: "FLING - arrojar.m4a", ruta: "./audios/FLING - arrojar.m4a" },
  { nombre: "FLUNK - fracasar.m4a", ruta: "./audios/FLUNK - fracasar.m4a" },
  { nombre: "FLY - volar.m4a", ruta: "./audios/FLY - volar.m4a" },
  { nombre: "FOLLOW - seguir.m4a", ruta: "./audios/FOLLOW - seguir.m4a" },
  { nombre: "FORBID - prohibir.m4a", ruta: "./audios/FORBID - prohibir.m4a" },
  { nombre: "FORECAST - pronosticar.m4a", ruta: "./audios/FORECAST - pronosticar.m4a" },
  { nombre: "FORGET - olvidar.m4a", ruta: "./audios/FORGET - olvidar.m4a" },
  { nombre: "FORGIVE - perdonar.m4a", ruta: "./audios/FORGIVE - perdonar.m4a" },
  { nombre: "FORSAKE - abandonar.m4a", ruta: "./audios/FORSAKE - abandonar.m4a" },
  { nombre: "FREEZE - congelar.m4a", ruta: "./audios/FREEZE - congelar.m4a" },
  { nombre: "FRY - freír.m4a", ruta: "./audios/FRY - freír.m4a" },
  { nombre: "GET - conseguir.m4a", ruta: "./audios/GET - conseguir.m4a" },
  { nombre: "GIVE - dar.m4a", ruta: "./audios/GIVE - dar.m4a" },
  { nombre: "GO - ir.m4a", ruta: "./audios/GO - ir.m4a" },
  { nombre: "GRADE - graduar.m4a", ruta: "./audios/GRADE - graduar.m4a" },
  { nombre: "GRATE - rallar.m4a", ruta: "./audios/GRATE - rallar.m4a" },
  { nombre: "GRILL - asar.m4a", ruta: "./audios/GRILL - asar.m4a" },
  { nombre: "GRIND - moler.m4a", ruta: "./audios/GRIND - moler.m4a" },
  { nombre: "GROW - crecer.m4a", ruta: "./audios/GROW - crecer.m4a" },
  { nombre: "HAND IN - entregar.m4a", ruta: "./audios/HAND IN - entregar.m4a" },
  { nombre: "HAND OUT - dar.m4a", ruta: "./audios/HAND OUT - dar.m4a" },
  { nombre: "HANG - colgar.m4a", ruta: "./audios/HANG - colgar.m4a" },
  { nombre: "HAPPEN - suceder.m4a", ruta: "./audios/HAPPEN - suceder.m4a" },
  { nombre: "HATE - odiar.m4a", ruta: "./audios/HATE - odiar.m4a" },
  { nombre: "HAVE - haber.m4a", ruta: "./audios/HAVE - haber.m4a" },
  { nombre: "HEAR - oír.m4a", ruta: "./audios/HEAR - oír.m4a" },
  { nombre: "HELP - ayudar.m4a", ruta: "./audios/HELP - ayudar.m4a" },
  { nombre: "HIDE - ocultar.m4a", ruta: "./audios/HIDE - ocultar.m4a" },
  { nombre: "HIT - golpear.m4a", ruta: "./audios/HIT - golpear.m4a" },
  { nombre: "HOLD - sostener.m4a", ruta: "./audios/HOLD - sostener.m4a" },
  { nombre: "HURRY - apresurar.m4a", ruta: "./audios/HURRY - apresurar.m4a" },
  { nombre: "HURT - herir.m4a", ruta: "./audios/HURT - herir.m4a" },
  { nombre: "IDENTIFY - identificar.m4a", ruta: "./audios/IDENTIFY - identificar.m4a" },
  { nombre: "IMAGINE - imaginar.m4a", ruta: "./audios/IMAGINE - imaginar.m4a" },
  { nombre: "IMITATE - imitar.m4a", ruta: "./audios/IMITATE - imitar.m4a" },
  { nombre: "INCLUDE - incluir.m4a", ruta: "./audios/INCLUDE - incluir.m4a" },
  { nombre: "INSPECT - inspeccionar.m4a", ruta: "./audios/INSPECT - inspeccionar.m4a" },
  { nombre: "INVITE - invitar.m4a", ruta: "./audios/INVITE - invitar.m4a" },
  { nombre: "JOG - trotar.m4a", ruta: "./audios/JOG - trotar.m4a" },
  { nombre: "JUMP - saltar.m4a", ruta: "./audios/JUMP - saltar.m4a" },
  { nombre: "KEEP - guardar.m4a", ruta: "./audios/KEEP - guardar.m4a" },
  { nombre: "KICK - patear.m4a", ruta: "./audios/KICK - patear.m4a" },
  { nombre: "KILL - matar.m4a", ruta: "./audios/KILL - matar.m4a" },
  { nombre: "KISS - besar.m4a", ruta: "./audios/KISS - besar.m4a" },
  { nombre: "KNOW - saber.m4a", ruta: "./audios/KNOW - saber.m4a" },
  { nombre: "LAND - aterrizar.m4a", ruta: "./audios/LAND - aterrizar.m4a" },
  { nombre: "LAUGH - reír.m4a", ruta: "./audios/LAUGH - reír.m4a" },
  { nombre: "LAY - poner.m4a", ruta: "./audios/LAY - poner.m4a" },
  { nombre: "LEAD - conducir.m4a", ruta: "./audios/LEAD - conducir.m4a" },
  { nombre: "LEARN - aprender.m4a", ruta: "./audios/LEARN - aprender.m4a" },
  { nombre: "LEAVE - salir.m4a", ruta: "./audios/LEAVE - salir.m4a" },
  { nombre: "LEND - prestar.m4a", ruta: "./audios/LEND - prestar.m4a" },
  { nombre: "LET - dejar.m4a", ruta: "./audios/LET - dejar.m4a" },
  { nombre: "LICK - lamer.m4a", ruta: "./audios/LICK - lamer.m4a" },
  { nombre: "LIE - mentir.m4a", ruta: "./audios/LIE - mentir.m4a" },
  { nombre: "LIGHT - encender.m4a", ruta: "./audios/LIGHT - encender.m4a" },
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