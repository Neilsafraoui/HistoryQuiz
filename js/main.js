/*** TEMPORARY JSON DATA ***/
var jsonData =
{
    "periods" : [
        { "id" : 1, "name" : "Antiquité", "date" : "(-3500 - 476 av. JC)", "imgn" : "ant"},
        { "id" : 2, "name" : "Moyen-âge", "date" : "(476 - 1492 ap. JC)", "imgn" : "med"},
        { "id" : 3, "name" : "Ancien régime", "date" : "(1492 - 1789 ap. JC)", "imgn" : "ar"}
    ],
    "themes" : [
        { "id" : 4, "name" : "Guerres", "imgn" : "war"}, 
        { "id" : 5, "name" : "Personnages", "imgn" : "chars"},
        { "id" : 6, "name" : "Géographie", "imgn" : "geo"}
    ],
    "questions" : [
        { "pid" : 1, "tid" : 4,
         "q" : "A la fin des guerres puniques, en quelle année (av. J.C.), Carthage est-elle détruite ?", 
            "responses" : [
                { "r" : "241", "ia" : 0 }, 
                { "r" : "201", "ia" : 0 },
                { "r" : "149", "ia" : 0 },
                { "r" : "146", "ia" : 1 }
            ]
        },
        { "pid" : 1, "tid" : 4,
         "q" : "En -52 av. J.C., comment se solde le siège d'Alésia ?", 
            "responses" : [
                { "r" : "Les troupes gauloises sont massacrées", "ia" : 0 }, 
                { "r" : "Les troupes gauloises sont épargnées mais Vercingétorix est éxecuté", "ia" : 0 },
                { "r" : "Vercingétorix se rend pour sauver ses troupes", "ia" : 1 },
                { "r" : "Vercingétorix remporte la victoire sur l'armée romaine", "ia" : 0 }
            ]
        },
        { "pid" : 1, "tid" : 4,
         "q" : "Lors de la bataille des champs catalauniques, quel peuple se bat, contre les huns, aux cotés des romains ?", 
            "responses" : [
                { "r" : "Les Ostrogoths", "ia" : 0 }, 
                { "r" : "Les Wisigoths", "ia" : 1 },
                { "r" : "Les Francs", "ia" : 0 },
                { "r" : "Les Gaulois", "ia" : 0 }
            ]
        },
        { "pid" : 1, "tid" : 4,
         "q" : "Lors de la guerre, dite des 'Trois Royaumes', quelle dynastie n'est plus en mesure de prendre part aux conflits ?", 
            "responses" : [
                { "r" : "Les Han", "ia" : 1 }, 
                { "r" : "Les Wei", "ia" : 0 },
                { "r" : "Les Shu", "ia" : 0 },
                { "r" : "Les Wu", "ia" : 0 }
            ]
        },
        { "pid" : 1, "tid" : 5,
         "q" : "Quel empereur romain a choisi Byzance (qu'il renomma) comme nouvelle capitale de l'empire ?", 
            "responses" : [
                { "r" : "Constantin le grand", "ia" : 1 }, 
                { "r" : "Néron", "ia" : 0 },
                { "r" : "Auguste", "ia" : 0 },
                { "r" : "Quintilius", "ia" : 0 }
            ]
        },
        { "pid" : 1, "tid" : 5,
         "q" : "Lequel de ces pharaons a le plus longtemps régné ?", 
            "responses" : [
                { "r" : "Ahmôsis II", "ia" : 0 }, 
                { "r" : "Pépi II", "ia" : 1 },
                { "r" : "Ramses II", "ia" : 0 },
                { "r" : "Thoutmôsis", "ia" : 0 }
            ]
        },
        { "pid" : 1, "tid" : 5,
         "q" : "Quel disciple du Christ, originaire de Tarse, est connu comme l'un des principaux fondateurs du christianisme ?", 
            "responses" : [
                { "r" : "Luc", "ia" : 0 }, 
                { "r" : "Paul", "ia" : 1 },
                { "r" : "Marc", "ia" : 0 },
                { "r" : "Simon", "ia" : 0 }
            ]
        },
        { "pid" : 1, "tid" : 5,
         "q" : "Qui est l'auteur du calculateur analogique antique (plus vieux mécanisme à engrenage connu) ?", 
            "responses" : [
                { "r" : "Archimède", "ia" : 0 }, 
                { "r" : "Philon", "ia" : 0 },
                { "r" : "Héron", "ia" : 0 },
                { "r" : "Anticythère", "ia" : 1 }
            ]
        },
        { "pid" : 1, "tid" : 5,
         "q" : "Quel monarque babylonien est connu pour avoir participé au renouveau de la splendeur de sa capitale ?", 
            "responses" : [
                { "r" : "Hammurabi", "ia" : 0 }, 
                { "r" : "Ishkibal", "ia" : 0 },
                { "r" : "Nabuchodonosor", "ia" : 1 },
                { "r" : "Nabonassar", "ia" : 0 }
            ]
        },
        { "pid" : 2, "tid" : 4,
         "q" : "En quelle année la guerre de cent ans s'est-elle terminée ?", 
            "responses" : [
                { "r" : "1337", "ia" : 0 }, 
                { "r" : "1378", "ia" : 0 },
                { "r" : "1431", "ia" : 0 },
                { "r" : "1453", "ia" : 1 }
            ]
        },
        { "pid" : 2, "tid" : 4,
         "q" : "Quelles sont, respectivement, les dates de la 1ère et dernière croisade ?", 
            "responses" : [
                { "r" : "1096 - 1270", "ia" : 1 }, 
                { "r" : "1147 - 1251", "ia" : 0 },
                { "r" : "1101 - 1254", "ia" : 0 },
                { "r" : "1099 - 1244", "ia" : 0 }
            ]
        },
        { "pid" : 2, "tid" : 4,
         "q" : "Durant les batailles du Vè siècle, quel peuple n'est pas vaincu par les Francs ?", 
            "responses" : [
                { "r" : "Gallo-romains", "ia" : 0 }, 
                { "r" : "Alamans", "ia" : 0 },
                { "r" : "Saxons", "ia" : 1 },
                { "r" : "Burgondes", "ia" : 0 }
            ]
        },
        { "pid" : 2, "tid" : 4,
         "q" : "Comment les japonais ont-ils gagnés les batailles contre les envahisseurs mongols ?", 
            "responses" : [
                { "r" : "La puissance des samouraïs", "ia" : 0 }, 
                { "r" : "Des flèches enflammées lancées sur la flotte adverse", "ia" : 0 },
                { "r" : "Des conditions météorologiques favorables", "ia" : 1 },
                { "r" : "L'aide de leurs alliés", "ia" : 0 }
            ]
        },
        { "pid" : 2, "tid" : 4,
         "q" : "A l'issue de la bataille de Hattin, quel personnage fut epargné par Saladin ?", 
            "responses" : [
                { "r" : "Guy de Lusignan", "ia" : 0 }, 
                { "r" : "Le grand maitre du temple", "ia" : 1 },
                { "r" : "Gérard de Ridefort", "ia" : 0 },
                { "r" : "Renaud de Chatillon", "ia" : 0 }
            ]
        },
        { "pid" : 2, "tid" : 5,
         "q" : "Lequel de ces personnages n'est pas un fils de Clovis Ier ?", 
            "responses" : [
                { "r" : "Chilpéric", "ia" : 1 }, 
                { "r" : "Clodomir", "ia" : 0 },
                { "r" : "Childebert", "ia" : 0 },
                { "r" : "Clotaire", "ia" : 0 }
            ]
        },
        { "pid" : 2, "tid" : 5,
         "q" : "Des suites de quoi Gengis Khan est-il mort ?", 
            "responses" : [
                { "r" : "D'une ennemie flèche reçue", "ia" : 0 }, 
                { "r" : "D'une chute à Cheval", "ia" : 1 },
                { "r" : "D'une capture et d'un emprisonnement", "ia" : 0 },
                { "r" : "D'un empoisonnement", "ia" : 0 }
            ]
        },
        { "pid" : 2, "tid" : 5,
         "q" : "Quel monarque dirige la France lors de la 1ère croisade ?", 
            "responses" : [
                { "r" : "Henry 1er", "ia" : 0 }, 
                { "r" : "Philippe 1er", "ia" : 1 },
                { "r" : "Louis VII", "ia" : 0 },
                { "r" : "Philippe II Auguste", "ia" : 0 }
            ]
        },
        { "pid" : 2, "tid" : 5,
         "q" : "Quelle célèbre dame du moyen-âge, également médecin de Charles V, est l'une des premières femmes écrivains du moyen-âge ?", 
            "responses" : [
                { "r" : "Aliénor d'aquitaine", "ia" : 0 }, 
                { "r" : "Anne de bretagne", "ia" : 0 },
                { "r" : "Blanche de Castille", "ia" : 0 },
                { "r" : "Christine de pison", "ia" : 1 }
            ]
        },
        { "pid" : 2, "tid" : 5,
         "q" : "Quelle chronologie des dynasties de France est la bonne ?", 
            "responses" : [
                { "r" : "Mérovingiens > Carolingiens > Capétiens > Valois > Bourbons", "ia" : 1 }, 
                { "r" : "Carolingiens > Mérovingiens > Valois > Capétiens > Bourbons", "ia" : 0 },
                { "r" : "Capétiens > Mérovingiens > Capétiens > Valois > Bourbons", "ia" : 0 },
                { "r" : "Carolingiens > Mérovingiens > Capétiens > Bourbons > Valois", "ia" : 1 }
            ]
        }
    ]
}



var vm = new Vue({
    el: '#app',
    data: {
        period: { name: '', id: 0},
        theme: { name: '', id: 0},
        periods: jsonData.periods,
        themes: jsonData.themes,
        questions: jsonData.questions,
        questionSet: [],
        frameState: 0, //1. periode, 2. theme, 3. reponses
        questionsState: 0, // à utiliser pour charger les Q et à ++ à chaque réponse
        givenAnswers: [],
        selectedAnswer: null
    },
    methods: {
        GetCategories() {
            // Le but est de retourner un tableau de categories
        },
        SetPeriod(period) {
            this.period.name = period.name;
            this.period.id = period.id;
            console.log("period", this.period.name, " & id : "+ this.period.id);
            this.frameState = 1;
        },
        SetTheme(theme) {
            this.theme.name = theme.name;
            this.theme.id = theme.id;
            console.log("theme", this.theme.name, " & id"+ this.theme.id);
            this.frameState = 2;

            if(this.period != '' && this.theme != '') {
                this.LoadQuestionsSet();
            }
        },
        LoadQuestionsSet(){

            // On veut récupérer les questions qui appartiennent à la période et au thème

            // On parcours les questions, et on garde celles qui ont la bonne période + theme

            for(let i = 0; i < this.questions.length; i++) {
                //console.log(this.questions[i])
                //console.log("per : " + this.period.id)
                //console.log("th : " + this.theme)
                // remplir questions set
                if(this.questions[i].pid == this.period.id && this.questions[i].tid == this.theme.id) {
                    //console.log("pushing")
                    this.questionSet.push(this.questions[i]);
                    
                }
                //console.log("q : "+ this.questions[i].q);
            }

        },
        ValidateAnswer(){

        },
        AddResponse() {
            console.log("state : " + this.questionsState)
            
            if(this.selectedAnswer != null){
              
            //On ajoute la réponse donnée au tableau
            this.givenAnswers.push(this.selectedAnswer);

            this.selectedAnswer = null;
            this.questionsState++;
            //On continue d'avancer dans les questions
                if(this.questionsState >= this.questionSet.length){
                    console.log("else")
                    //On a fini le set de questions
                    //On doit aller vers le résultat
                    this.DisplayResult(); 
                }  
            }
            
        },
        DisplayResult() {
            console.log("display results")
            this.frameState++;
        },
        ReturnHome() {
            //Il faut reset plusieurs vars
            // theme, period, questionSet, frameState, questionsSet, giverAnswers

            //Strings
            this.period = { name: '', id: 0};
            this.theme = { name: '', id: 0};
            this.questionSet = [];
            this.frameState = 0;
            this.questionsState = 0;
            this.givenAnswers = [];

        },
        GetRightAnswerFromQuestion(question) {

            //console.log("q : ", question)

            var responses = question.responses;
            var tmpRes = '';

            if(responses.length > 0){
                for(var i = 0; i < responses.length; i++) {
                    if(responses[i].ia == 1){
                        tmpRes = responses[i];
                    }
                }

                return tmpRes.r;
            }else {
                return 0;
            }
        },
        SelectAnswer(answer) {
            // add class
            // set variable selected
            this.selectedAnswer = answer;
            // set variable boolean pour afficher l'input pour q suivante
        },
        BackPeriod(){
            this.frameState--;
            this.period = { name: '', id: 0}
        }
    },
    computed: {
        GoodAnswersNb(){
            //On parcours le tableau des réponses données
            //Si la réponse est bonne, on incrémente cpt

            if(this.givenAnswers.length > 0){
                let cpt = 0;

                for(let i = 0; i < this.givenAnswers.length; i++){
                    if(this.givenAnswers[i].ia == 1){
                        cpt++;
                    }
                }

                return cpt;
            }else{
                return 0;
            }
        }
    }
})
