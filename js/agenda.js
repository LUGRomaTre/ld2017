$(document).ready(function(){

	//GLOBAL VARIABLES
	var labelBio='<p><b>Bio</b></p>';
	var labelButton='Ok, ho capito!'
	var labelAbstract='<p><b>Abstract</b></p>';
	var classButton='btn-info';
	var ticketIcon='<i class="fa fa-ticket"></i>';
	var wwwIcon='<i class="fa fa-home"></i>';
	var socialIcon='<i class="fa fa-facebook-square"></i>';
	var linkedInIcon='<i class="fa fa-linkedin-square"></i>';
	var googlePlusIcon='<i class="fa fa-google-plus-official"></i>';
	var youTubeIcon='<i class="fa fa-youtube" aria-hidden="true"></i>';
	var slidesIcon='<i class="fa fa-download"></i>';

	//LINUX PROFESSIONAL INSTITUTE
	$('.descLinuxInstitute').click(function(){
	var bioDesc="<p>LPI, Linux Professional Institute promuove e certifica le competenze necessarie all’uso di Linux e delle tecnologie Open Source in ambito professionale, con un programma di esami indipendente, globale e di alta qualità.</p>"
	+ "<p>LPI è lo standard globale di certificazione e di supporto alla carriera per i professionisti Open Source. Con più di 500.000 esami somministrati LPI è il soggetto di certificazione indipendente in ambito Linux e Open Source più grande al mondo. Ha certificato professionisti in 181 Paesi, somministrato esami in 9 lingue; ha oltre 400 partner nella formazione.</p>";
	var img="<img class='img-circle' src='/img/speaker/lpi.jpg'>";
	var descAbstract='<p>Lorem ipsum</p>';
	var linkSito=' <a href="http://www.lpi-italia.org/">Sito LPI</a><br>';
	var linkSocial=' <a href="https://www.facebook.com/LPIConnect/">Pagina ufficiale</a><br>';
	var eventbriteLink='  <a href="#">Biglietti</a><br>';

	var dialog = bootbox.dialog({
	title: 'Linux Professional Institute',
     size: "large",onEscape: true, backdrop: true,
	message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + socialIcon + linkSocial + ticketIcon,
	buttons: {
		ok: {
			label: labelButton,
			className: classButton
		}
	}
	});
	});

	//CODERDOJO BRACCIANO
	$('.descCoderDojo').click(function(){
	var bioDesc="<p>The CoderDojo movement believes that an understanding of programming languages is increasingly important in the modern world, that it’s both better and easier to learn these skills early, and that nobody should be denied the opportunity to do so. To that end, we’ve built a global network of free, volunteer-led, community-based programming clubs for young people. Anyone aged seven to seventeen can visit a Dojo where they can learn to code, build a website, create an app or a game, and explore technology in an informal, creative, and social environment.</p>";
	var img="<img class='img-circle' src='/img/speaker/coderdojoBracciano.jpg'>";
	var descAbstract='<p>Per il nostro viaggio nel fantastico mondo del coding al LinuxDay 2017 useremo Scratch.\n' +
        'Per partecipare al nostro incontro è necessario:\n' +
        '<ul>\n' +
        '<li>avere dagli 8 anni in poi;</li>\n' +
        '<li>essere iscritti tramite questa pagina ad uno dei posti disponibili per il corso;</li>\n' +
        '<li>i ragazzi (non è necessaria alcuna esperienza precedente) dovrebbero portare un quaderno (o un blocco note);</li>\n' +
        '<li>portare una merenda per la pausa che si terrà durante l\'evento;</li>\n' +
        '<li>avere un genitore o adulto responsabile presente durante tutta la durata dell\'evento <b>(obbligatorio!)</b>.</li>\n' +
        '</ul> </p>';
	var linkSito=' <a href="https://zen.coderdojo.com/dojos/it/bracciano-metropolitan-city-of-rome/bracciano">Sito CoderDojo</a><br>';
	var linkSocial=' <a href="https://www.facebook.com/coderdojo.bracciano/">Pagina ufficiale</a><br>';
	var eventbriteLink='  <a href="https://www.eventbrite.it/e/biglietti-coderdojo-linuxdayromatre-37978513757?aff=es2">Biglietti</a><br>';

	var dialog = bootbox.dialog({
	title: 'CoderDojo Bracciano',
     size: "large",onEscape: true, backdrop: true,
	message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + socialIcon + linkSocial + ticketIcon + eventbriteLink,
	buttons: {
		ok: {
			label: labelButton,
			className: classButton
		}
	}
	});
	});

    //LUCA RELANDINI
    $('.descLucaRelandini').click(function(){
    	var labelBlog='<i class="fa fa-bookmark"></i>';
    	var linkBlog=' <a href="http://lucarelandini.blogspot.it/">Blog </a><br>';
        var bioDesc="<p>Sono un Technical Solution Architect in Cisco Systems, parte di un team europeo che si occupa di Data Center e Cloud Computing.\n" +
            "In una lunga carriera come Enterprise Architect, lavorando in grandi aziende e nella pubblica amministrazione, in system integrator e in multinazionali del software, ho imparato che il fattore umano è più importante della tecnologia per il successo dei progetti.\n" +
			"I miei clienti si fidano delle soluzioni che gli propongo, perchè capiscono che posso aiutarli a raggiungere i loro obiettivi: non vendo loro le slide del marketing, ma la storia di progetti reali, dei problemi affrontati e risolti, condividendo le ragioni di successi e fallimenti.\n" +
            "Mi piace molto lavorare alla frontiera della tecnologia, continuando a esplorare e a imparare, perchè affrontare la sfida mi dà più soddisfazione che rimanere tranquillo nella mia zona di comfort.\n</p>";
        var img="<img class='img-circle' src='/img/speaker/luca_relandini.jpg'>";
        var descAbstract='<p>Applicazioni sempre più distribuite richiedono una attenta gestione del networking e della sicurezza. Un modello di policy facile da implementare e scalabile su grandi cluster, per tante istanze di container, aiuta a garantire performances e affidabilità.\n' +
            'La gestione tramite policy dichiarative consente agli sviluppatori e al team di Operations un passaggio indolore da sviluppo a esercizio.\n' +
            'Il progetto Contiv è una soluzione open source avanzata per il networking in Docker, K8s, Mesos e altri resource manager.  La sessione è seguita da un laboratorio in cui i partecipanti eseguiranno un tutorial di Contiv sul proprio pc.\n</p>';
        var linkSito=' <a href="https://gblogs.cisco.com/it/author/lrelandi/">Sito </a><br>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/lucarelandini/?ppe=1">Profilo LinkedIn</a><br>';
        var linkSlides=' <a href="https://drive.google.com/file/d/0BxeNBXqm57NTejl6dUpyZExlZms/view?usp=sharing">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            title: 'Luca Relandini',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + linkedInIcon + linkLinkedIn + labelBlog + linkBlog + slidesIcon + linkSlides,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });


    //BRUNO LAURENCICH
    $('.descBrunoLaurencich').click(function(){
        var bioDesc="<p>He’s an artist who found on programming and hardware development a way of expanding his expressive and technical capacities. He started out as a traditional animator and then made his way into computing through 3D animation and interactive art. He worked on several audiovisual agencies, and now as a technology teacher for young people at Codemotion Kids and freelancer. Two years ago, he decided he needed a motion capture system for a performance, and seeing there was none available at a decent cost, decided to build one himself.\n</p>";
        var img="<img class='img-circle' src='/img/speaker/bruno_laurencich.jpg'>";
        var descAbstract='<p>Motion capture devices have historically been prohibitively expensive, and their use was restricted to military and scientific institutions, and some audiovisual companies. In the last years MEMS based inertial sensors have experienced significant development on their precision while decreasing size and cost. In combination with the appearance and spread of some computational inexpensive sensor fusion algorithms and fast microcomputers, motion capture at domestic level is now possible. In this talk we’ll review the essential techniques to it by focusing on a system developed by the author.\n</p>';
        var linkSito=' <a href="http://elbajoatico.com">Sito </a><br>';
        var linkSocial=' <a href="https://www.facebook.com/bruno.laurencich">Pagina ufficiale</a><br>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/bruno-laurencich/">Profilo LinkedIn</a><br>';

        var dialog = bootbox.dialog({
            title: 'Bruno Laurencich',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + socialIcon + linkSocial + linkedInIcon + linkLinkedIn,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //DIEGO LUCA CANDIDO
    $('.descDiegoLucaCandido').click(function(){
        var bioDesc="<p>Lavoro come programmatore in una startup romana chiamata Wanderio e faccio parte di una associazione di informatica chiamata Metro Olografix, vivo attualmente a Roma e mi piace partecipare agli hacking Camp.</p>";
        var img="<img class='img-circle' src='/img/speaker/diego_luca_candido.jpg'>";
        var descAbstract='<p>Vedremo insieme le tematiche di creazione di un dataset per usarlo in scopi di machine learning o big data: come prelevare i dati, da dove e come creare poi il dataset.\n' +
            'Farò un approfondimento sulle tematiche di privacy e tos dei siti web e delle app mobile.\n</p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/diegolucacandido">Profilo LinkedIn</a><br>';
        var linkGooglePlus=' <a href="https://plus.google.com/116655076816646389102">Google+</a><br>';
        var linkSlides=' <a href="#">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            title: 'Diego Luca Candido',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + linkedInIcon + linkLinkedIn + googlePlusIcon + linkGooglePlus + slidesIcon + linkSlides,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //SIMON LUCA DETTORI
    $('.descSimonLucaDettori').click(function(){
        var bioDesc="<p>Sono un pubblico dipendente di 44 anni che di notte e durante i giorni di ferie coltiva la propria passione per Linux e la tecnologia. l Sinclair ZX Spectrum+ è stato lo strumento con cui tutto è cominciato. \n" +
            "Da allora sono trascorsi molti anni e milioni di bytes ma la passione ormai decennale per i sistemi operativi Linux e il mondo dell’open source è ormai geneticamente radicata.\n" +
            "\n" +
            "Accanito lettore di 2600, non faccio nulla per nascondere il mio spirito critico sui pericoli causati da un utilizzo non trasparente delle tecnologie informatiche. Almeno per ragioni di età, non posso essere considerato un nerd ma uno smanettone incallito in grado, a volte, di stupire nei risultati.\n" +
            "\n" +
            "Per passione e per rovinarmi il sonno mi cimento, purtroppo non sempre con la dovuta continuità, in un blog bilingue dedicato a Linux, open source e freeware: galigio.org.\n</p>";
        var img="<img class='img-circle' src='/img/tux.png'>";
        var descAbstract='<p> Partendo da recenti articoli di attualità porrò in evidenza le problematiche sull\'argomento emerse nel corso degli ultimi mesi sulla stampa nordamericana, suggerendo alcuni semplici accorgimenti "comportamentali" per migliorare il proprio livello di privacy. Nello specifico, oltre ad illustrare i rischi di privacy legati all\'hardware, tratterò l\'argomento del MAC spoofing evidenziando la necessità di prevedere scansioni periodiche antirootkit anche su macchine Linux.\n' +
            'La parte centrale dell\'intervento sarà dedicato agli utenti entry level a cui illustrerò le funzionalità VPN gratuite di default a disposizione nelle ultime versioni del browser Opera suggerendo alcuni semplici add-on (tipo: TrackMeNot, Adblock, MasterPassword+, Priv8, PwdHash, User Agent RG, Webmail AD Bloc) per aumentare il livello di riservatezza durante la navigazione. </p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/simonluca-dettori-30b19024/?ppe=1">Profilo LinkedIn</a><br>';
        var linkSito=' <a href="https://galigio.org/">Sito </a><br>';
        var linkSlides=' <a href="https://drive.google.com/file/d/1sYWzeK-aoy8SUfXZMX5ZrXxzDSBNXm6A/view?usp=sharing">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            title: 'Simon Luca Dettori',

             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + linkedInIcon + linkLinkedIn + slidesIcon + linkSlides,

            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //SIMONE ONOFRI
    $('.descSimoneOnofri').click(function(){
        var bioDesc="<p>Cyber Defense Lead per l'Europa Sud per DXC Technology. Ho cominciato a lavorare come Consulente IT nel 2002, focalizzandomi sempre più sugli aspetti di Sicurezza. Collaboro con associazioni e organizzazioni come UNINFO – per la stesura della norma relativa ai profili professionali per la sicurezza delle informazioni; OWASP – come uno degli autori della Testing Guide v4 e ISECOM, come uno degli autori della Hackers Highschool.</p>";
        var img="<img class='img-circle' src='/img/speaker/simone_onofri.png'>";
        var descAbstract='<p> Sia che stiamo sulla nostra macchina Linux personale o su un server, è sempre importante verificare la nostra postura di sicurezza e come siamo esposti sulla rete dove siamo (p.e. all\'università, a lavoro o su un WiFi pubblico). Utilizzando l\'approccio "conosci il tuo nemico", vedremo come è possibile attaccare un sistema Linux e come sfruttare le varie peculiarità del sistema dal punto di vista di un attaccante, attraverso alcuni esempi pratici.\n</p>';
        var linkSito=' <a href="http://onofri.net/">Sito </a><br>';
        var linkSocial=' <a href="https://www.facebook.com/simone9000">Pagina ufficiale</a><br>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/simoneonofri/?ppe=1">Profilo LinkedIn</a><br>';

        var dialog = bootbox.dialog({
            title: 'Simone Onofri',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + socialIcon + linkSocial + linkedInIcon + linkLinkedIn,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //CAPTURE THE FLAG
    $('.descCTF').click(function(){
        var bioDesc="<p>Organizzato dal LUG Sapienza, si propone come gioco di hacking dove in squadra o da soli, si cercano vulnerabilità in sistemi e software messi a disposizione dagli organizzatori della competizione al fine di sfruttarle e di collezionare le varie flag (bandiere) nascoste sul sistema bersaglio. </p>";
        var img="<img class='img-circle' src='/img/partners/lugsapienza.png'>";
        var descAbstract='<p><b>Regole</b></p>\n' +
            '<ul>\n' +
            '<li>Si può partecipare da soli o in gruppo</li>\n' +
            '<li>Ogni partecipante deve essere munito di un proprio portatile</li>\n' +
            '<li>Non ci sono requisiti minimi, se non la voglia di partecipare e mettersi alla prova!</li>\n' +
            '</ul><p><b>Programma della giornata: </b></p>' + '<p>ore 9.30: breve introduzione su cosa andranno ad affrontare e alcuni semplici esempi<br>' +
            'ore 10.30: inizia il CTF<br>' +
            'ore 13.00: pausa pranzo<br>' +
            'ore 14.00: si ricomincia<br>' +
            'ore 15.30 fine gioco e soluzione dei vari flag<br>' +
            'ore 16.30: premiazione</p>';
        var linkCTFDownload = '<a href="/img/agenda/Capture%20the%20flag%C2%A0.pdf">Scarica il programma!</a><br>';
        var infoIcon = '<i class="fa fa-info"></i> ';
        var linkSito=' <a href="">Sito </a><br>';
        var linkSocial=' <a href="">Pagina ufficiale</a><br>';

        var dialog = bootbox.dialog({
            title: 'Capture The Flag',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + descAbstract + infoIcon + linkCTFDownload +  wwwIcon + linkSito + socialIcon + linkSocial,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //SERENA SENSINI
    $('.descScuolePrivacy').click(function(){
        var bioDesc="<p>Intraprendente, determinata e razionale: sono tre aggettivi che mi descrivono al meglio.\n" +
            "Da sempre convinta della mia scelta, ho conseguito la laurea in Ingegneria Informatica nel 2016 e sono attualmente \n" +
            "impiegata come developer e sistemista. Nel tempo libero, dedico spazio a diversi progetti: primo fra tutti\n" +
            "c'è lo studio e lo sviluppo di sistemi NLP; oltre a questo, buona parte del mio impegno va a supportare i più giovani \n" +
            "ad un uso consapevole della tecnologia e di Internet.</p>";
        var img="<img class='img-circle' src='/img/speaker/serena_sensini.jpg'>";
        var descAbstract='<p>La tecnologia avanza ad una velocità elevatissima, e con essa tutto il mondo legato ad Internet: basti pensare\n' +
            'agli efforts impiegati dalle multinazionali per rendere disponibile ogni tipo di servizio online. In questa era, dove i \n' +
            'social networks giocano un ruolo fondamentale per la connessione tra persone, è necessario imparare a tutelarsi e stare\n' +
            'attenti agli effetti collaterali: Internet è stata infatti paragonata ad un buco nero, dove tutto ciò che viene assorbito,\n' +
            'non viene mai più recuperato.\n' +
            '\n' +
            'Il progresso di Internet e l\'importanza dei social networks portano però con sé delle domande: \n' +
            'in un mondo dove la rete è una grande raccolta di dati e informazioni, come garantire la privacy individuale? \n' +
            'Ma, soprattutto, siamo in grado di difenderci?\n</p>';
        var linkSocial=' <a href="https://www.facebook.com/Serena.Sensini">Pagina ufficiale</a><br>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/serena-sensini/">Profilo LinkedIn</a><br>';
        var linkGooglePlus=' <a href="https://plus.google.com/u/0/103050391889340133739">Google+</a><br>';
        var linkSlides=' <a href="https://drive.google.com/open?id=1PknEgKEgCtew5YZGM8Vm1dnlON7qsnHz7tlfV2QbGXI">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            title: 'Serena Sensini',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + socialIcon + linkSocial + linkedInIcon + linkLinkedIn + googlePlusIcon + linkGooglePlus + slidesIcon + linkSlides,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //GIULIO PICIERRO
    $('.descScuoleIntroLinux').click(function(){
        var bioDesc="<p>Appassionato fin da piccolo al mondo dei computers e della tecnologia in generale, dal 2013 membro del Roma2LUG all'Università di Roma \"Tor Vergata\" dove ha contribuito all'organizzazione di diversi Linux Day romani. Attualmente dottorando di ricerca nell'ambito dei sistemi real-time multicore, impartisce lezioni nei corsi dedicati ai Sistemi Operativi Open Source. Nel tempo libero pratica il pentathlon: nuoto, cinema, videogiochi, telefilm e birra :D.</p>";
        var img="<img class='img-circle' src='/img/speaker/giulio_picierro.jpg'>";
        var descAbstract='<p>In questo slot di tempo, cercheremo di partire dalle origini di Linux, fino ad arrivare ai giorni nostri; pro, contro\n' +
            'e un\'introduzione pratica al mondo Open source, per rendere più consapevoli di quanto il mondo Linux sia nei posti più\n' +
            'inaspettati.</p>';
        var linkSlides=' <a href="https://drive.google.com/file/d/1AZhq-B69xb9GYowstUkBh95cpt3BfW5f/view?usp=sharing">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            title: 'Giulio Picierro',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + slidesIcon + linkSlides,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //ALBERTO MASSIDDA
    $('.descAlbertoMassidda').click(function(){
        var bioDesc="<p>Alberto Massidda, classe ‘83, Linuxettaro dal 2005. Si occupa di infrastrutture e sviluppo software orientato alla scalabilità e adora l’IA. Ha lavorato a Memopal (backup online), Translated (IA applicata alle traduzioni), Wimdu (rivale europeo di AirBnB) e a Number26 (prima banca cloud d’Europa). Dal 2016 lavora a Wanderio (prima biglietteria universale per viaggi).\n</p>";
        var img="<img class='img-circle' src='/img/speaker/alberto_massidda.jpg'>";
        var descAbstract='<p>In questo intervento esploreremo l’adozione della tecnologia di container dai punti di vista sviluppo software e sistemistico, in armonia con i principi DevOps.\n' +
            'Partiremo con un’introduzione base su Docker e col setup locale; proseguiremo con la migrazione di un’applicazione da bare metal a Docker, introdurremo il concetto di stack con Docker Compose, ci sposteremo sui sistemi di orchestrazione come Swarm e Kubernetes, per finire con le piattaforme di gestione come AWS Elastic Beanstalk e Rancher.\n</p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/albertomassidda/detail/photo/">Profilo LinkedIn</a><br>';
        var linkSlides=' <a href="https://drive.google.com/open?id=0Bx4DQpW_xfWeamtPRWhJZlE1Z3c">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            title: 'Alberto Massidda',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + linkedInIcon + linkLinkedIn + slidesIcon + linkSlides,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //CAMELIA BOBAN
    $('.descCameliaBoban').click(function(){
        var bioDesc="<p>Analista programmatrice interessata di gender gap e semantic web. Wikip(m)ediana, convinta che l'open source apre gli orizzonti non solo il codice. Fondatrice di WikiDonne.         </p>";
        var img="<img class='img-circle' src='/img/speaker/camelia_boban.jpg'>";
        var descAbstract='<p>BPV - Biografie di Persone Viventi che garantiscono il punto di vista neutrale, mantengono l\'accuratezza dei fatti e hanno un\'adeguata provenienza. I principi dell\'enciclopedicità e verificabilità di Wikipedia, ma rispettando privacy e dati personali, per non subire danni da informazioni inadeguate. Yes, we can!"\n' +
            '\n</p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/camelia-boban-31319122/">Profilo LinkedIn</a><br>';
        var linkSlides=' <a href="https://docs.google.com/presentation/d/1mrbHZxn5gnDKRhsO9ZyO30CADihzL3nrU15KVp2yJFw/edit?usp=sharing">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            title: 'Camelia Boban',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + linkedInIcon + linkLinkedIn + slidesIcon + linkSlides,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //GIANLUCA GRANERO
    $('.descGianlucaGranero').click(function(){
        var bioDesc="<p>Grown with a German mother and an entrepreneur father becoming a computer science engineer was the more artistic career I could ever start.\n" +
            "Had my first commodor at the age of 6 (1982!) and there first lines of code in basic and never stopped.  When linux came out in the 90s it was love at first sight, it made me feel I had all I needed to develop ANY idea. I cofounded a Linux User Group at Roma3 University with a bounch of smart and crazy fellow students.\n" +
            "I am involved in internet based activities since 1999. I developed many sites and communities from scratch up to more then 100M page views per month, deploying linux in all possible flavours.\n" +
            "I co-founded Memopal (http://www.memopal.com) in 2007 and lead its tech operation and financials.\n" +
            "In August 2016 Memopal has been acquired by Defenx PLC a listed company focused on security. The whole team merged into it, transforming Memopal's HeadQuarter into the tech hub for Defenx PLC group. Now that wanted me to become CTO of the whole group.\n" +
            " On my way I also supported some promising startups, sometimes as advisor, sometimes as board member, to some of those companies, such as Filo, WeFix, Wanderio, Filo, wineOwine, Voverc, Moovenda...\n</p>";
        var img="<img class='img-circle' src='/img/speaker/gianluca_granero.jpg'>";
        var descAbstract='<p>Breve excursus, non esaustivo, guidato da piccoli indizi realmente successi nella mia vita di tutti i giorni, come trovarmi geolocalizzato a 40km di distanza da casa mia tutte le sere. Un piccolo aiuto per capire le principali tracce digitali che lasciamo nella nostra vita quotidiana.  Per imparare a distinguere tra la persona, il consumatore visto dalla prospettiva di una corporation e la vittima di un truffatore, o di una azienda che lavora troppo vicino all\'illegalità. \n' +
            'Capirle un po\' meglio per sapere da quali è necessario proteggerci e su quali possiamo fare un compromesso con maggiore serenità.\n</p>';
        var linkSito=' <a href="http://www.memopal.com">Sito </a><br>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/gianlucagranero/">Profilo LinkedIn</a><br>';
        var linkSlides=' <a href="https://docs.google.com/presentation/d/1sWpaPYGmhy_27wgAXnLTrblSn2_nd5JmzjhrP-Xoz_s/edit?usp=sharing">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            title: 'Gianluca Granero',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + socialIcon + linkLinkedIn + slidesIcon + linkSlides,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //DANIELE SCASCIAFRATTE
    $('.descDanieleScasciafratte').click(function(){
        var bioDesc="<p>Daniele Scasciafratte, the Open Source Multiversal guy, he should work in his web agency, Codeat in Rome, and in the rest of the day collaborate in many open source projects.\n" +
            "During the office hours for the WordPress world is a Core Contributor, plugin developer, project translator editor.\n" +
            "He fight with the superpower of a Mozilla Rep and Mozilla TechSpeakers for an open web, is co-leading the participation team of Mozilla Italia and often is an Italian gestures speaker.\n</p>";
        var img="<img class='img-circle' src='/img/speaker/daniele_scasciafratte.jpg'>";
        var descAbstract='<p>Firefox 57 cosa ci aspetta\n' +
            'Firefox 57 arriverà a Novembre e rivoluzionerà Firefox dopo Firefox 29. Cosa ci aspetta come utenti e sviluppatori di internet?\n' +
            '30 minuti\n' +
            '\n' +
            '\n' +
            'Come sta messo Internet: Internet Health Report\n' +
            'IHR è un progetto di Mozilla per poter discutere, misurare ed analizzare i problemi e le minacce alla rete che rientra nel manifesto Mozilla riguardo l\'uso e l\'accesso ad internet.\n' +
            '30 minuti\n</p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/danielescasciafratte/">Profilo LinkedIn</a><br>';
        var linkSlides=' <a href="http://mte90.github.io/Presentazione-FFNightly/#/">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            title: 'Daniele Scasciafratte',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + linkedInIcon + linkLinkedIn + slidesIcon + linkSlides,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //SARA DI BARTOLOMEO
    $('.descSaraDiBartolomeo').click(function(){
        var bioDesc="<p>Hello! I am Sara.\n" +
            "I am a Software Engineering student by day, and a painter by night. I try to mix art and algorithms in an attempt to get this two parts of me together.\n" +
            "\n" +
            "My interests range from Data Science, 3D Computer Graphics, Data Visualization, Machine Learning, Natural Language Processing and Algorithms to Digital Painting, Traditional Painting and Generative Art.\n" +
            "\n" +
            "I like sharing my knowledge, and finding all sorts of ways to get people interested. For this purpose, I teach coding courses to children, organize workshops, and keep up a strong passion in open source software.\n" +
            "\n" +
            "I also like parrots.</p>";
        var img="<img class='img-circle' src='/img/tux.png'>";
        var descAbstract='<p>La meravigliosa computer grafica a cui veniamo esposti tutti i giorni non è solo merito dei grafici: c\'è un sacco di matematica e programmazione che passano tra la creazione di un modello 3D e la sua rappresentazione, ma la diamo per scontata perché ci viene nascosta dalle game engine e dai motori di rendering.\n' +
            ' \n' +
            'GLSL è un linguaggio di programmazione per dare istruzioni alla scheda grafica su come rappresentare una scena in 3D, sia su pc sia su smartphone. Conoscere GLSL ci permette di creare gli effetti che vogliamo, e apre nuove strade per l\'ottimizzazione.\n' +
            '\n' +
            'Durante il workshop, esploreremo le profondità del processo di rendering, capiremo cos\'è uno shader e impareremo a farne per migliorare le nostre scene in 3D.\n</p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/sara-di-bartolomeo-84b45661/">Profilo LinkedIn</a><br>';
        var linkSlides=' <a href="https://drive.google.com/open?id=1r3ItjshyeN_bkMeKv-MqgdSKW0kip8J2_bB0kUrjIzg">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            title: 'Sara Di Bartolomeo',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + linkedInIcon + linkLinkedIn + slidesIcon + linkSlides,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //LUCA VIDONI
    $('.descLucaVidoni').click(function(){
        var bioDesc="<p>Developer - Gnu/Linux Certified System Administrator LSI 104 - Forensic Analyst </p>";
        var img="<img class='img-circle' src='/img/tux.png'>";
        var descAbstract='<p>Hacklab networking strumenti di difesa ambito offensive security' +
            '<br><br>Intro: Marco Pantò' +
            '<br>Talk: Luca Vidoni\n' +
            '<br>Livello intermedio avanzato</p>';
        var linkSito=' <a href="http://www.linuxshell.it/">Sito </a><br>';
        var linkSlides=' <a href="http://www.linuxshell.it/modules.php?name=News&file=article&sid=209">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            title: 'Luca Vidoni',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + slidesIcon + linkSlides,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //MARCO PANTÒ
    $('.descMarcoPanto').click(function(){
        var bioDesc="<p>Presidente e Coordinatore Linuxshell - Net Security Engineer</p>";
        var img="<img class='img-circle' src='/img/tux.png'>";
        var descAbstract='<p>Hacklab capire l\'attacco per organizzare la difesa\n' +
            'ambito offensive security\n' +
            '<br><br>Intro e Talk: Marco Pantò\n' +
            '<br>Livello intermedio avanzato\n</p>';
        var linkSito=' <a href="http://www.linuxshell.it/">Sito </a><br>';
        var linkSlides=' <a href="http://www.linuxshell.it/modules.php?name=News&file=article&sid=209">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            title: 'Marco Pantò',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + slidesIcon + linkSlides,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //URBAN TERROR
    $('.descUrbanTerror').click(function(){
        var img="<img class='img-circle' src='/img/agenda/urban_terror.jpg'>";
        var descAbstract='<p>Urban Terror è uno sparatutto in prima persona basato sul motore grafico di Quale III (rilasciato dalla id Software con licenza GPL). Il torneo consisterà in tre match eliminatori più match finale in modalità Deathmatch.' +
            '<br></p>   <p><b>Requisiti:</b><br>' +
            'Non è necessario disporre di un proprio portatile, in quanto il torneo sarà svolto all\'interno del laboratorio del Dipartimento.</p>';

        var dialog = bootbox.dialog({
            title: 'Torneo di Urban Terror',
            size: "large",
            message: img + labelAbstract + descAbstract,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //ALESSANDRO SELLI
    $('.descAlessandroSelli').click(function(){
        var bioDesc="<p>Alessandro Selli è sistemista UNIX e Linux dal 2001, dopo un praticantato...\n" +
            "domestico, maturato autonomamente sul PC di papà nel tempo libero a partire\n" +
            "dal 1997.  Dopo una maturazione professionale condotta in cinque impieghi\n" +
            "precari, dal 2008 è impiegato dalla Synergia S.R.L come consulente e\n" +
            "formatore Linux.  Titolare di certificazioni LPIC-2, LFCS e di tre\n" +
            "certificazioni di Software Tester ISTQB, è membro della FSF ed è stato, nel\n" +
            "2004, membro del Consiglio Direttivo del LUGRoma.\n</p>";
        var img="<img class='img-circle' src='/img/speaker/alessandro_selli.jpg'>";
        var descAbstract='<p><ul><li>Le darknet: natura e scopo, miti e realtà</li><li>Principali schemi di funzionamento delle darknet</li><li>Le principali implementazioni</li><li>Due casi specifici in dettaglio: Tor e I2P</li><li>Mi conviene/serve usare una darknet? Vantaggi e rischi della navigazione al "buio"</li></ul></p>';
        var linkSito=' <a href="http://www.synergia.it/">Sito </a><br>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/alessandro-selli-5bb835a8/">Profilo LinkedIn</a><br>';
        var linkSlides=' <a href="https://drive.google.com/open?id=0Bx4DQpW_xfWeNjUzUjRkcDQxZVFFNHBuazJfRllBUHhYR0w0">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            onEscape: true,
            title: 'Alessandro Selli',
            size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito+ linkedInIcon + linkLinkedIn + slidesIcon + linkSlides,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

		$('.descEugenioPetulla').click(function(){
	        var bioDesc="<p>Eugenio Petullà è un Mozilla Tech Speaker e un Full Stack Developer interessato sopratutto alla divulgazione e alla diffusione di tecnologie Open Source. Durante gli ultimi anni è stato invitato come relatore in alcune delle più grandi conferenze europee riguardo lo sviluppo, il web e il mondo del software libero.</p>";
	        var img="<img class='img-circle' src='/img/tux.png'>";
	        var descAbstract='<p>Rust è un linguaggio sicuro, moderno e multithread nato e subito adottato in casa Mozilla. Grazie a questo talk scoprirete le feature che lo rendono tanto speciale e amato dai programmatori di tutto il mondo.</p>';
	        var linkSito=' <a href="#">Sito </a><br>';
	        var linkSocial=' <a href="#">Pagina ufficiale</a><br>';
	        var linkLinkedIn=' <a href="#">Profilo LinkedIn</a><br>';
	        var linkGooglePlus=' <a href="#">Google+</a><br>';
	        var linkSlides=' <a href="https://eugeniopetulla.github.io/Introduction-to-Rust/">Scarica le slides</a><br>';

	        var dialog = bootbox.dialog({
	            onEscape: true,
	            title: 'Introduction to Rust: a modern programming language',
	             size: "large",onEscape: true, backdrop: true,
	            message: img + labelBio + bioDesc + labelAbstract + descAbstract + slidesIcon + linkSlides,
	            buttons: {
	                ok: {
	                    label: labelButton,
	                    className: classButton
	                }
	            }
	            });
	    });

    //MARCO SACCHETTI
    $('.descMarcoSacchetti').click(function(){
        var bioDesc="<p>Marco Sacchetti si e' laureato in ingegneria informatica presso l'universita' di\n" +
            "Roma Tre con una tesi sulla sicurezza del protocollo USB.\n" +
            "Durante il lavoro di tesi insieme al relatore Prof. Maurizio Pizzonia e al\n" +
            "correlatore Federico Griscioli sono nate alcune idee interessanti, sviluppate\n" +
            "dopo la laurea nell'ambito del progetto europeo PREEMPTIVE sulla sicurezza delle\n" +
            "infrastrutture critiche, al quale l'universita' di Roma Tre ha partecipato come\n" +
            "partner.\n</p>";
        var img="<img class='img-circle' src='/img/tux.png'>";
        var descAbstract='<p>L\'attacco BadUSB sfrutta la modifica non autorizzata del firmware di un\n' +
            'dispositivo USB per simulare funzionalita\' proprie di altri dispositivi come\n' +
            'mouse e tastiere, al fine di inviare comandi malevoli all\'host a cui e\'\n' +
            'connesso. Questa e\' una minaccia di primaria importanza per ogni tipo di\n' +
            'organizzazione che utilizza periferiche USB e le contromisure disponibili\n' +
            'richiedono l\'uso di dispositivi appositi o si affidano alla discrezione dell\'utente.\n' +
            'Dallo studio di questa problematica e\' nato USBCheckIn, un dispositivo di\n' +
            'protezione della connessione USB sviluppato su piattaforma open hardware\n' +
            '(BeagleBone Black) e librerie open source (USBProxy) che si inserisce nel mezzo\n' +
            'della connessione. USBCheckin garantisce che il dispositivo malevolo non possa\n' +
            'sfruttare questa tecnica per portare avanti un attacco, tramite un sistema di\n' +
            'verifica delle sue effettive capacita\' (test di turing). In questo modo si\n' +
            'riesce a proteggere un sistema host indipendentemente dalla sua configurazione\n' +
            'software o dal sistema operativo che esso esegue.\n</p>';
        var linkSito=' <a href="http://www.dia.uniroma3.it/~pizzonia/usbcheckin">Sito </a><br>';
        var linkSlides=' <a href="https://drive.google.com/open?id=0Bx4DQpW_xfWeQzFVNlhpdVdrX1BROXV1SWk2SzhQZlpSUW00">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            onEscape: true,
            title: 'Marco Sacchetti',
            size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + slidesIcon + linkSlides,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //PIERO E POLLO
    $('.descPieroSavastano').click(function(){
        var bioDesc="<p>Piero si occupa di intelligenza artificiale dal 2004. Partito da esperienze di ricerca in reti neurali e robotica sia ne La Sapienza di Roma che nel CNR, svolge attività di data scientist nei campi della visualizzazione e del machine learning. Partecipa attivamente al movimento open data e open source.\n" +
            "Attualmente lavora come assistente del Pollo Watzlawick.\n</p>";
        var img="<img class='img-circle' src='/img/speaker/pollo_e_piero.png'>";
        var descAbstract='<p>Cosa è il machine learning? Perchè è tornato di moda? Qual è il ruolo dei dati personali nella costruzione di intelligenze artificiali?</p>';
        var linkSocial=' <a href="https://www.facebook.com/MrPolloWatzlawick/">Pagina ufficiale</a><br>';
        var linkLinkedIn=' <a href="https://it.linkedin.com/in/piero-savastano-523b3016">Profilo LinkedIn</a><br>';
        var linkYouTube=' <a href="https://www.youtube.com/channel/UCD-HLhRV_4Z3sYGkgqAnIJw">Canale YouTube</a><br>';
        var linkSlides=' <a href="http://slides.com/pieroit/machine-learning-personal-data#/">Scarica le slides</a><br>';

        var dialog = bootbox.dialog({
            onEscape: true,
            title: 'Piero Savastano & Pollo Watzlawick',
            size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + socialIcon + linkSocial + linkedInIcon + linkLinkedIn + youTubeIcon + linkYouTube + slidesIcon + linkSlides,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

	//TEMPLATE
	$('.className').click(function(){
        var bioDesc="<p></p>";
        var img="<img class='img-circle' src='/img/tux.png'>";
        var descAbstract='<p>Lorem ipsum</p>';
        var linkSito=' <a href="">Sito </a><br>';
        var linkSocial=' <a href="">Pagina ufficiale</a><br>';
        var linkLinkedIn=' <a href="">Profilo LinkedIn</a><br>';
        var linkGooglePlus=' <a href="">Google+</a><br>';

        var dialog = bootbox.dialog({
            onEscape: true,
            title: 'CoderDojo Bracciano',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + socialIcon + linkSocial + linkedInIcon + linkLinkedIn + googlePlusIcon + linkGooglePlus,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
            });
    });
});
