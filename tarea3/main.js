const usuarios = [{"id":1,"primer_nombre":"Marisa","segundo_nombre":"Coralyn","email":"cbrafferton0@nymag.com","genero":"Female","ip":"250.116.107.136"},
{"id":2,"primer_nombre":"Martguerita","segundo_nombre":"Brandy","email":"bmaccombe1@sphinn.com","genero":"Female","ip":"74.95.109.174"},
{"id":3,"primer_nombre":"Beatrice","segundo_nombre":"Mei","email":"mharverson2@disqus.com","genero":"Female","ip":"255.117.183.158"},
{"id":4,"primer_nombre":"Aubrey","segundo_nombre":"Nial","email":"nballentime3@photobucket.com","genero":"Male","ip":"57.185.164.147"},
{"id":5,"primer_nombre":"Iver","segundo_nombre":"Irvine","email":"idrable4@rakuten.co.jp","genero":"Male","ip":"156.120.245.8"},
{"id":6,"primer_nombre":"Cozmo","segundo_nombre":"Rickie","email":"rshimmans5@icq.com","genero":"Male","ip":"79.29.50.157"},
{"id":7,"primer_nombre":"Kristo","segundo_nombre":"Trueman","email":"tradbone6@histats.com","genero":"Male","ip":"60.0.19.237"},
{"id":8,"primer_nombre":"Dacia","segundo_nombre":"Cathrine","email":"cdorsey7@hud.gov","genero":"Female","ip":"216.102.195.45"},
{"id":9,"primer_nombre":"Andreas","segundo_nombre":"Elnar","email":"evice8@jalbum.net","genero":"Male","ip":"172.233.69.234"},
{"id":10,"primer_nombre":"Chane","segundo_nombre":"Cornall","email":"clarsen9@about.com","genero":"Male","ip":"248.196.25.210"},
{"id":11,"primer_nombre":"Torrence","segundo_nombre":"Holt","email":"hgalileea@dailymotion.com","genero":"Male","ip":"190.53.100.134"},
{"id":12,"primer_nombre":"Phillipp","segundo_nombre":"Rice","email":"reskrietb@domainmarket.com","genero":"Male","ip":"76.10.129.149"},
{"id":13,"primer_nombre":"Bobby","segundo_nombre":"Wallace","email":"wfossickc@tamu.edu","genero":"Male","ip":"106.42.83.52"},
{"id":14,"primer_nombre":"Joellyn","segundo_nombre":"Gusta","email":"gscurrelld@umn.edu","genero":"Female","ip":"66.204.33.46"},
{"id":15,"primer_nombre":"Shepard","segundo_nombre":"Arther","email":"acuseicke@theatlantic.com","genero":"Male","ip":"108.186.21.237"},
{"id":16,"primer_nombre":"Dorris","segundo_nombre":"Lurline","email":"lbraileyf@ycombinator.com","genero":"Female","ip":"121.197.176.185"},
{"id":17,"primer_nombre":"Alene","segundo_nombre":"Wenonah","email":"wsemaineg@ask.com","genero":"Female","ip":"183.21.235.91"},
{"id":18,"primer_nombre":"Emlynne","segundo_nombre":"Maridel","email":"mlightollersh@clickbank.net","genero":"Female","ip":"109.98.81.210"},
{"id":19,"primer_nombre":"Darcee","segundo_nombre":"Camellia","email":"cdarridoni@nifty.com","genero":"Female","ip":"133.200.130.10"},
{"id":20,"primer_nombre":"Moina","segundo_nombre":"Chrystel","email":"cvallantinej@example.com","genero":"Female","ip":"29.106.13.211"},
{"id":21,"primer_nombre":"Willy","segundo_nombre":"Laryssa","email":"lguyk@simplemachines.org","genero":"Female","ip":"184.125.42.7"},
{"id":22,"primer_nombre":"Carlotta","segundo_nombre":"Corenda","email":"chammarbergl@alexa.com","genero":"Female","ip":"178.89.34.21"},
{"id":23,"primer_nombre":"Rayshell","segundo_nombre":"Persis","email":"pbarensenm@github.com","genero":"Female","ip":"91.10.151.166"},
{"id":24,"primer_nombre":"Letty","segundo_nombre":"Hannie","email":"hbelmontn@alibaba.com","genero":"Female","ip":"206.31.89.175"},
{"id":25,"primer_nombre":"Monique","segundo_nombre":"Elsey","email":"eobello@psu.edu","genero":"Female","ip":"38.62.187.36"},
{"id":26,"primer_nombre":"Celinda","segundo_nombre":"Laraine","email":"leakeleyp@cbc.ca","genero":"Female","ip":"189.233.226.254"},
{"id":27,"primer_nombre":"Lexis","segundo_nombre":"Trista","email":"tbeddoesq@ustream.tv","genero":"Female","ip":"199.201.73.156"},
{"id":28,"primer_nombre":"Ethelda","segundo_nombre":"Annnora","email":"abellenyr@typepad.com","genero":"Female","ip":"234.184.237.137"},
{"id":29,"primer_nombre":"Emmett","segundo_nombre":"Zechariah","email":"zjoires@alexa.com","genero":"Male","ip":"193.156.73.178"},
{"id":30,"primer_nombre":"Analiese","segundo_nombre":"Linzy","email":"lfigliovannit@bloglovin.com","genero":"Female","ip":"188.27.52.241"}]


// ACTIVIDAD 1:
const id_ingresado = Number(prompt("escribi el id del usuario:"))

let id_encontrado = false

for (usuario of usuarios){
    if (usuario["id"] === id_ingresado){
        console.log(`el usuario con el id ${usuario["id"]} es ${usuario["primer_nombre"]} ${usuario["segundo_nombre"]}\nemail: ${usuario["email"]}\ngenero: ${usuario["genero"]}\nip: ${usuario["ip"]}`)
        id_encontrado = true
    }
if (id_encontrado == false){
    console.log(`el id ${id_ingresado} no coincide con el de ningun usuario`)
}
}


// ACTIVIDAD 2:
const cantidad_genero = usuarios.reduce((acumulador, persona) => {

    if (persona.genero === "Male"){
        acumulador.hombres ++
    }
    else if (persona.genero === "Female"){
        acumulador.mujeres ++
    }

    return acumulador
}, {hombres: 0, mujeres: 0});

console.log(cantidad_genero)