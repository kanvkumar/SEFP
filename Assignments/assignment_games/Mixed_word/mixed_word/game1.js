$(document).ready(function(){
    $container = $('#container');
    console.log("JS working!");
    var xmlfile = './input_telugu.xml';
    if ( window.location.hash === '#xml' ) {
        var p = prompt('Enter path of xml file', 'input_telugu.xml');
        if ( p !== null ) {
            xmlfile = p;
        }
    }
    d=new Design(xmlfile);
    
});

function Design(nameOfXmlFile)
{
    /* Setting callback to be called after the XML file has been loaded */
    //this.onload = callBack;
    //this.argsForCallback = argsForCallback;

    $.get( nameOfXmlFile, (function(response) {
            //console.log("Hello");
            /* response is the XML Document | $(response) is jQuery Object for corresponding XML */
            this.xmlDoc = $(response);

            var xmlEle = null;
            var designNode = this.xmlDoc.find('design').first();

            // Getting <title>
            var game_title = designNode.find('design > title').text().trim();
            //console.log(game_title);
            if (game_title !== "") {
                this.game_title = game_title;
                console.log(game_title);
                document.getElementById("gm_title").innerHTML=game_title;
            }

            $('#bt1').click(function(){

                // Getting <backgroundimage>
                var bgimages = designNode.find('design > bgimages').text().trim();
                //bgimages=bgimages.replace(/ +/g,"");
                console.log(bgimages);
                if (bgimages !== "") {        // if <backgroundimage> exists, getting backgroundimage
                    this.backgroundimage = bgimages;
                }
                /*else{
                    this.backgroundimage = ;
                }*/
                 
                 document.getElementById("mid").style.backgroundImage = 'url('+ bgimages + ')';

            });
            
            $('#bt2').click(function(){
                // Getting <backgroundcolor>
                
                var bgcolors = designNode.find('design > bgcolors').text().trim();
                if (bgcolors !== "") {        // if <backgroundcolor> exists, getting backgroundcolor
                    this.backgroundcolor = bgcolors;
                }
                /*else {
                    this.backgroundcolor = 'yellow';        //Default color, if no color given
                }*/
                    document.getElementById("mid").style.background =  bgcolors ;

                });
                $('#bt3').click(function(){
                // Getting <gamesounds>
                var gamesounds = designNode.find('design > gamesounds').text().trim();
                console.log(gamesounds);
                if (gamesounds !== "") {        // if <gamesound> exists, getting gamesound
                    this.gamesound = gamesounds;
                }
               /* else {
                    this.game_sound = 'default.wav';        //Default sound, if no sound given
                }*/
                     var audio=new Audio(gamesounds);
                     audio.play();
                     //document.getElementById("dummy").innerHTML=
                     //   "<embed src=\""+gamesounds+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
                });
                
                
        }).bind(this));
        
        

        /*var gameobjects = designNode.find('design > gameobjects').text().trim();
        if (gameobject !== "") {        // if <gameobject> exists, getting backgroundcolor
            this.gameobject = gameobject;
        }
        else {
            this.gameobject = 'default.jpg';        //Default gameobject, if no gameobject given
        }

        var levels = designNode.find('design > levels').text().trim();
        if (level !== "") {        // if <level> exists, getting level
            this.level = level;
        }
        else {
            this.level = '1';        //Default level, if no level given
        }

        var fontcolors = designNode.find('design > fontcolors').text().trim();
        if (color !== "") {        // if <color> exists, getting color
            this.fcolor = color;
        }
        else {
            this.fcolor = color;        //Default fcolor, if no color given
        }

        var animations = designNode.find('design > animations').text().trim();
        if (animation !== "") {        // if <color> exists, getting color
            this.animation = animation;
        }
        else {
            this.animation = '';        //Default animation, if no animation given
        }


        // Getting <colortheme>
        getColorTheme.call(this, designNode );

        // Getting <sizeofletters>
        getFontSize.call(this, designNode );

        // Getting <animationstyle>
        getAnimationStyle.call(this, designNode );

        // Getting <animationspeed>
        getAnimationSpeed.call(this, designNode );
        
        var imagePath = designNode.find('design > imagefornextbutton').text().trim();
        if (imagePath !== "") {
            $('#next').html($('<img>').attr('src',imagePath));
        }
        var imagePath = designNode.find('design > imageforpreviousbutton').text().trim();
        if (imagePath !== "") {
            $('#prev').html($('<img>').attr('src',imagePath));
        }
        var imagePath = designNode.find('design > imageformenubutton').text().trim();
        if (imagePath !== "") {
            $('#menu').html($('<img>').attr('src',imagePath));
        }
        var imagePath = designNode.find('design > imageforhandandstick').text().trim();
        if (imagePath !== "") {
            this.imageforhandandstick = handAndStick = $('<img>').attr('src',imagePath);
        }*/
        /*
         * Each design Object has lessons Array. It will have the lesson Object as given in XML document
         */
        //this.lessons = new Array();

        //var lessonElements = designNode.find('lesson'); // This is collection of all <lesson> from XML

        /*
         * Making Lesson Object for each <lesson> in XML
         */

        //lessonElements.each(function(design){

          //  design.lessons.push( new Lesson( $(this), design ) );
                                        // <lesson>

        //},[this]);
                    /* [this] is array of arguments to function called for each <lesson> in <design>
                     * 'this' here refer to design Object, 
                     * whereas inside function, this refer to <lesson>
                     */

        /*
         * The XML document has been successfully loaded here.
         * Now, Making animationQueue and
         * Calling the callback function (if any)
         */

        /*this.makeAnimationQueue();

        if( this.onload !== undefined && typeof(this.onload) === "function") {
            this.onload.apply(this, ( (this.argsForCallback instanceof Array)?this.argsForCallback:undefined) );
        }
        delete this.onload;
        delete this.argsForCallback;

    }).bind(this));

    //For Debugging purpose
    this.type = 'Design, language: '+this.language;*/
}