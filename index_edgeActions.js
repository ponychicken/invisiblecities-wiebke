/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("topview").animate({scrollTop: 0, scrollLeft: 768}, 0, "swing");
         
         sym.$("platzhalter").hide();
         
         // Hide an Element.
         sym.$("Rectangle").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
         
         var mySymbolObject = sym.getSymbol("titel2");mySymbolObject.stop();
         
         sym.$("titel2").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("topview");mySymbolObject.stop();
         // Hide an Element.
         sym.$("topview").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${topview}", "click", function(sym, e) {
         sym.play();
         
         var mySymbolObject = sym.getSymbol("topview");mySymbolObject.stop();
         
         
         
         

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();
         
         // Show an Element.
         sym.$("pfeilunten2").show();
         // Hide an Element.
         sym.$("pfeiloben2").hide();
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.stop();
         // Show an Element.
         sym.$("pfeiloben2").show();
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("panorama");mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pfeilunten2}", "click", function(sym, e) {
         sym.play();
         // Hide an Element.
         sym.$("pfeilunten2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pfeiloben2}", "click", function(sym, e) {
         sym.playReverse();
         // Hide an Element.
         sym.$("pfeiloben2").hide();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'titel'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("titel");
   //Edge symbol end:'titel'

   //=========================================================
   
   //Edge symbol: 'wolke_vordergrund'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("wolke_vordergrund");
   //Edge symbol end:'wolke_vordergrund'

   //=========================================================
   
   //Edge symbol: 'wolkendecke'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("wolkendecke");
   //Edge symbol end:'wolkendecke'

   //=========================================================
   
   //Edge symbol: 'topview'
   (function(symbolName) {   
   
   })("topview");
   //Edge symbol end:'topview'

   //=========================================================
   
   //Edge symbol: 'streetview01'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text01");mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text02");mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text03");mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text004");mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text005");mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 77000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text06");mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text07");mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 116000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text08");mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 157000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("FANTASIE01");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("britzel");mySymbolObject01.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("frau_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("elch_head02");mySymbolObject01.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("frau_head");mySymbolObject.playReverse();
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("elch_head02");mySymbolObject.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("FANTASIE02");mySymbolObject.play();// Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("britzel");mySymbolObject01.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 59500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("fettarsch_head");mySymbolObject.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 72000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("dino_head");mySymbolObject.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 88500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("wolf_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("sexy_head");mySymbolObject01.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 89500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("britzel");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("FANTASIE03");mySymbolObject01.play()
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 103500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("wolf_head");mySymbolObject.playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 104000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("sexy_head");mySymbolObject.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 130000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("FANTASIE04");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("britzel");maSymbolObject01.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 128500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("squid_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("figur_head");mySymbolObject01.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 129500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 141500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("figur_head");mySymbolObject.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 142000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("squid_head");mySymbolObject.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 58500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("dino_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("fettarsch_head");mySymbolObject01.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6368, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elch_head02}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wolf_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${figur_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fettarsch_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dino_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${squid_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${frau_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sexy_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${squid_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fettarsch_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dino_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sexy_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wolf_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${figur_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${frau_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elch_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

   })("streetview01");
   //Edge symbol end:'streetview01'

   //=========================================================
   
   //Edge symbol: 'wolke01'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("wolke01");
   //Edge symbol end:'wolke01'

   //=========================================================
   
   //Edge symbol: 'wolke02'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 80000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("wolke02");
   //Edge symbol end:'wolke02'

   //=========================================================
   
   //Edge symbol: 'wolke03'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("wolke03");
   //Edge symbol end:'wolke03'

   //=========================================================
   
   //Edge symbol: 'wolke04'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 120000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("wolke04");
   //Edge symbol end:'wolke04'

   //=========================================================
   
   //Edge symbol: 'streetview01_1'
   (function(symbolName) {   
   
      })("streetview02");
   //Edge symbol end:'streetview02'

   //=========================================================
   
   //Edge symbol: 'streetview02_1'
   (function(symbolName) {   
   
      })("streetview03");
   //Edge symbol end:'streetview03'

   //=========================================================
   
   //Edge symbol: 'streetview03_1'
   (function(symbolName) {   
   
         })("streetview04");
   //Edge symbol end:'streetview04'

   //=========================================================
   
   //Edge symbol: 'panorama'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${streetview01}", "swipeleft", function(sym, e) {
         sym.play();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${streetview01}", "swiperight", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("hinten");
         sym.playReverse();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("streetview01");mySymbolObject.play();
         var mySymbolObject01 = sym.getSymbol("streetview01_1");mySymbolObject01.play();
         var mySymbolObject02 = sym.getSymbol("streetview01_2");mySymbolObject02.play();
         var mySymbolObject03 = sym.getSymbol("streetview01_3");mySymbolObject03.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${streetview01_1}", "swiperight", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${streetview01_1}", "swipeleft", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${streetview01_2}", "swiperight", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${streetview01_2}", "swipeleft", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${streetview01_3}", "swiperight", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${streetview01_3}", "swipeleft", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${streetview01Copy3}", "swipeleft", function(sym, e) {
         sym.stop("vorne");
         sym.play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${streetview01Copy3}", "swiperight", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

   })("panorama");
   //Edge symbol end:'panorama'

   //=========================================================
   
   //Edge symbol: 'boden_test'
   (function(symbolName) {   
   
   })("boden_test");
   //Edge symbol end:'boden_test'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'text01'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("text01");
   //Edge symbol end:'text01'

   //=========================================================
   
   //Edge symbol: 'text02'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("text02");
   //Edge symbol end:'text02'

   //=========================================================
   
   //Edge symbol: 'text04'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("text04");
   //Edge symbol end:'text04'

   //=========================================================
   
   //Edge symbol: 'text05'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("text05");
   //Edge symbol end:'text05'

   //=========================================================
   
   //Edge symbol: 'text06'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("text06");
   //Edge symbol end:'text06'

   //=========================================================
   
   //Edge symbol: 'text07'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("text07");
   //Edge symbol end:'text07'

   //=========================================================
   
   //Edge symbol: 'text08'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("text08");
   //Edge symbol end:'text08'

   //=========================================================
   
   //Edge symbol: 'textwolke'
   (function(symbolName) {   
   
   })("textwolke");
   //Edge symbol end:'textwolke'

   //=========================================================
   
   //Edge symbol: 'umhang01'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("umhang01");
   //Edge symbol end:'umhang01'

   //=========================================================
   
   //Edge symbol: 'pfeilunten'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${pfeilunten}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("pfeilunten");
   //Edge symbol end:'pfeilunten'

   //=========================================================
   
   //Edge symbol: 'pfeiloben'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${pfeiloben}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("pfeiloben");
   //Edge symbol end:'pfeiloben'

   //=========================================================
   
   //Edge symbol: 'FANTASIE01'
   (function(symbolName) {   
   
   })("FANTASIE01");
   //Edge symbol end:'FANTASIE01'

   //=========================================================
   
   //Edge symbol: 'FANTASIE02'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10700, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("FANTASIE02");
   //Edge symbol end:'FANTASIE02'

   //=========================================================
   
   //Edge symbol: 'FANTASIE04'
   (function(symbolName) {   
   
   })("FANTASIE04");
   //Edge symbol end:'FANTASIE04'

   //=========================================================
   
   //Edge symbol: 'FANTASIE03'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14400, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("FANTASIE03");
   //Edge symbol end:'FANTASIE03'

   //=========================================================
   
   //Edge symbol: 'dino_walk'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("dino_walk");
   //Edge symbol end:'dino_walk'

   //=========================================================
   
   //Edge symbol: 'squid_walk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1200, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("squid_walk");
   //Edge symbol end:'squid_walk'

   //=========================================================
   
   //Edge symbol: 'frau_walk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("frau_walk");
   //Edge symbol end:'frau_walk'

   //=========================================================
   
   //Edge symbol: 'elch_walk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("elch_walk");
   //Edge symbol end:'elch_walk'

   //=========================================================
   
   //Edge symbol: 'figur_walk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2400, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("figur_walk");
   //Edge symbol end:'figur_walk'

   //=========================================================
   
   //Edge symbol: 'woolf_walk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1800, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("woolf_walk");
   //Edge symbol end:'woolf_walk'

   //=========================================================
   
   //Edge symbol: 'sexy_walk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1600, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("sexy_walk");
   //Edge symbol end:'sexy_walk'

   //=========================================================
   
   //Edge symbol: 'fettarsch_walk'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("fettarsch_walk");
   //Edge symbol end:'fettarsch_walk'

   //=========================================================
   
   //Edge symbol: 'elch_head02'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("elch_head02");
   //Edge symbol end:'elch_head02'

   //=========================================================
   
   //Edge symbol: 'wolf_head'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("wolf_head");
   //Edge symbol end:'wolf_head'

   //=========================================================
   
   //Edge symbol: 'figur_head'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("figur_head");
   //Edge symbol end:'figur_head'

   //=========================================================
   
   //Edge symbol: 'fettarsch_head'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("fettarsch_head");
   //Edge symbol end:'fettarsch_head'

   //=========================================================
   
   //Edge symbol: 'dino_head'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("dino_head");
   //Edge symbol end:'dino_head'

   //=========================================================
   
   //Edge symbol: 'squid_head'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("squid_head");
   //Edge symbol end:'squid_head'

   //=========================================================
   
   //Edge symbol: 'frau_head'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("frau_head");
   //Edge symbol end:'frau_head'

   //=========================================================
   
   //Edge symbol: 'sexy_head'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("sexy_head");
   //Edge symbol end:'sexy_head'

   //=========================================================
   
   //Edge symbol: 'blitzblick'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 417, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("blitzblick");
   //Edge symbol end:'blitzblick'

   //=========================================================
   
   //Edge symbol: 'britzel'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 458, function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("britzel");
   //Edge symbol end:'britzel'

   //=========================================================
   
   //Edge symbol: 'schlusswolke'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("schlusswolke");
   //Edge symbol end:'schlusswolke'

   //=========================================================
   
   //Edge symbol: 'zuruckanfang'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("zuruckanfang");
   //Edge symbol end:'zuruckanfang'

   //=========================================================
   
   //Edge symbol: 'schluss'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("zuruckanfang2");mySymbolObject.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("schlusswolke");mySymbolObject.play();

      });
      //Edge binding end

   })("schluss");
   //Edge symbol end:'schluss'

   //=========================================================
   
   //Edge symbol: 'streetview01_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text01");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6368, function(sym, e) {
         // insert code here
      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text02");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("frau_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("elch_head02");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("FANTASIE01");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("britzel");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text03");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("frau_head");mySymbolObject.playReverse();
         
         
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("elch_head02");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text004");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 58500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("dino_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("fettarsch_head");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 59500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("FANTASIE02");mySymbolObject.play();// Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("britzel");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text005");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("fettarsch_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 72000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("dino_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 77000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text06");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 88500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("wolf_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("sexy_head");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 89500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("britzel");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("FANTASIE03");mySymbolObject01.play()
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text07");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 103500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("wolf_head");mySymbolObject.playReverse();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 104000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("sexy_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 116000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text08");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 128500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("squid_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("figur_head");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 129500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 130000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("FANTASIE04");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("britzel");maSymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 141500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("figur_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 142000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("squid_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 157000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elch_head02}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wolf_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${figur_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fettarsch_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dino_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${squid_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${frau_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sexy_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${squid_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fettarsch_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dino_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sexy_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wolf_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${figur_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${frau_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elch_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      })("streetview01_1");
   //Edge symbol end:'streetview01_1'

   //=========================================================
   
   //Edge symbol: 'streetview01_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text01");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6368, function(sym, e) {
         // insert code here
      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text02");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("frau_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("elch_head02");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("FANTASIE01");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("britzel");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text03");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("frau_head");mySymbolObject.playReverse();
         
         
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("elch_head02");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text004");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 58500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("dino_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("fettarsch_head");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 59500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("FANTASIE02");mySymbolObject.play();// Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("britzel");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text005");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("fettarsch_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 72000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("dino_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 77000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text06");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 88500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("wolf_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("sexy_head");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 89500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("britzel");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("FANTASIE03");mySymbolObject01.play()
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text07");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 103500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("wolf_head");mySymbolObject.playReverse();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 104000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("sexy_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 116000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text08");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 128500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("squid_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("figur_head");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 129500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 130000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("FANTASIE04");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("britzel");maSymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 141500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("figur_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 142000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("squid_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 157000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elch_head02}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wolf_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${figur_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fettarsch_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dino_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${squid_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${frau_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sexy_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${squid_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fettarsch_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dino_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sexy_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wolf_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${figur_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${frau_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elch_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      })("streetview01_2");
   //Edge symbol end:'streetview01_2'

   //=========================================================
   
   //Edge symbol: 'streetview01_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text01");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6368, function(sym, e) {
         // insert code here
      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text02");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("frau_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("elch_head02");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("FANTASIE01");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("britzel");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text03");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("frau_head");mySymbolObject.playReverse();
         
         
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("elch_head02");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text004");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 58500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("dino_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("fettarsch_head");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 59500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("FANTASIE02");mySymbolObject.play();// Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("britzel");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text005");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("fettarsch_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 72000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("dino_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 77000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text06");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 88500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("wolf_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("sexy_head");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 89500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("britzel");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("FANTASIE03");mySymbolObject01.play()
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text07");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 103500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("wolf_head");mySymbolObject.playReverse();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 104000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("sexy_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 116000, function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("text08");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 128500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("squid_head");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("figur_head");mySymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 129500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("blitzblick");mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 130000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("FANTASIE04");mySymbolObject.play();
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject01 = sym.getSymbol("britzel");maSymbolObject01.play();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 141500, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("figur_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 142000, function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var mySymbolObject = sym.getSymbol("squid_head");mySymbolObject.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 157000, function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elch_head02}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wolf_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${figur_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fettarsch_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dino_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${squid_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${frau_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sexy_head}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${squid_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fettarsch_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dino_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sexy_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wolf_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${figur_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${frau_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${elch_walk}", "click", function(sym, e) {
         sym.stop();
         
         sym.$("FANTASIE01").hide();
         
         sym.$("FANTASIE02").hide();
         
         sym.$("FANTASIE03").hide();
         
         sym.$("FANTASIE04").hide();
         
         
         sym.$("text02").hide();
         
         sym.$("text07").hide();
         
         sym.$("text06").hide();
         
         sym.$("text005").hide();
         
         sym.$("text01").hide();
         
         sym.$("text08").hide();
         
         sym.$("text004").hide();
         
         sym.$("text03").hide();
         
         
         
         
         
         
         
         
         
         var mySymbolObject = sym.getSymbol("schluss");mySymbolObject.play();
         
         var mySymbolObject01 = sym.getSymbol("wolke01");mySymbolObject01.stop();
         
         var mySymbolObject02 = sym.getSymbol("wolke02");mySymbolObject02.stop();
         
         var mySymbolObject03 = sym.getSymbol("wolke03");mySymbolObject03.stop();
         
         var mySymbolObject04 = sym.getSymbol("wolke04");mySymbolObject04.stop();
         
         var mySymbolObject05 = sym.getSymbol("squid_walk");mySymbolObject05.stop();
         
         var mySymbolObject06 = sym.getSymbol("frau_walk");mySymbolObject06.stop();
         
         var mySymbolObject07 = sym.getSymbol("sexy_walk");mySymbolObject07.stop();
         
         var mySymbolObject08 = sym.getSymbol("fettarsch_walk");mySymbolObject08.stop();
         
         var mySymbolObject09 = sym.getSymbol("dino_walk");mySymbolObject09.stop();
         
         var mySymbolObject10 = sym.getSymbol("figur_walk");mySymbolObject10.stop();
         
         var mySymbolObject11 = sym.getSymbol("wolf_walk");mySymbolObject11.stop();
         
         var mySymbolObject12 = sym.getSymbol("elch_walk");mySymbolObject12.stop();

      });
      //Edge binding end

      })("streetview01_3");
   //Edge symbol end:'streetview01_3'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-54949302");