// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var members = [];
  
  for(var i = 0; i < musicians.length; i++)
  {
    var memDescription = `${musicians[i]} plays ${instruments[i]}`;
    members.push(memDescription);
  }
  return members;
}

function johnLennonFacts(facts)
{
  var i = 0;
  
  while(facts[i] > 0)
  {
    facts[i] += "!!!";
    i--;
  }
  return facts;
}
