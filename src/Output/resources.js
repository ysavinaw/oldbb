import P5Wrapper from 'react-p5-wrapper';
var rita = require('rita');

var corpus = `All angry about the bullshit. This bullshit has me whack. All black beyond the slime. The blackness that surrounds me. The evil this has laid on me. This evil black slime around me. You piece of demon work. You piece of slime. At night I lay awake. My heart stirs and sinks. My heart sinks at the disappointment. This disappointment is unbearable. The disappointment sinks my heart. My heart is heavy with grief. There is no way out. The sinning doesnt stop. Am I the victim or the victor.Is happy so abstract. Abstraction of happiness. Totally splintering beside the fire that burns.The fire that burns within me. The fun is vanishing. I see darkness everywhere. Totally rabid on this earth. I find dull inspiration. The inspiration is done. Flickering restless. Unreliable bullshit and my heart sinks heavy. I invoke the gods of yoke. I invoke the gods of consumerism. I invoke the gods of bullshit. I invoke the gods of let this bullshit work. I violate wanting rats below the clouds. Poisonous within the scope. Totally rabid with bullshit. I eat this black disaster bullshit. I invoke invisible meaning. Tighten up your wig. Tighten up your standards. Your standards are meaningless to me.Your standards are wavering restless. Dismayed I was. Dismayed I was to discover. Dismayed I was to uncover. Only to find that it disintegrates. Only to find that it breaks. Only to find that I am not the first. I fiddled and tried to no avail. I fiddled and tried. Exploding apple trees have more order than this. Exploding apple trees better built. Maybe ought to travel the seven seas. Maybe ought to give up and leave. To find another issue as bad as this. To find another problem as bad as this. To find another anything to up my hopes. In case you were wondering why. In case you were wondering. Infuriating to the core. Infuriating and unwielding. I call bullshit and you answer. Super crappyfragilisticexpeatrocious. Super crappyfragilisticexpeatrocious. What a burning ring of fire. Burning ring of fire. Throw it away. Throw it all away. Throw it out. Postmodernism in its grasp. Postmodernism in my own grasp. Fifty shades of pissed off. Fifty shades of broken hearted. Fifty shades of irritiated and on the brink. Fifty shades infuriating. Put it where the sun dont shine.`


var input;
var button;
var lexicon;
var rChain;
var renderPoem;

function setup() {
  P5Wrapper.noCanvas();
  lexicon = new rita.RiLexicon();
  rChain = new rita.RiMarkov(4);
  input = P5Wrapper.createInput(' ');
  button = P5Wrapper.createButton('submit');
  input.changed(processRita);
  button.mousePressed(processRita);
  input.size(200);
}

function processRita() {
  var s = input.value();
  var inputS = new rita.RiString(s);
  var words = inputS.words();
  var pos = inputS.pos();
  var output = ' ';


  for (var i = 0; i < words.length; i++) {
    if (/nn.*/.test(pos[i])) {
      output += lexicon.randomWord(pos[i]);
    }
    // if (pos[i] === 'nnp') {
    //   output+=words[i];
    // }
    // else if (pos[i] === 'vbp' ) {
    //   output += lexicon.randomWord(pos[i]);
    // }
    else {
      output += words[i];
    }
  output += " ";
}
  renderPoem = P5Wrapper.createP(output);
}

export default renderPoem;
