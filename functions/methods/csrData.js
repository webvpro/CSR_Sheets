function setGenre() {
    var i = 0;
  
    //clear pretty much everything
    document.getElementById('focus').options.length = 0;
    clearThem();
    clearEdgePlus();
    clearPoolPlus();
    document.getElementById('skills').innerHTML = " ";
    document.getElementById('powers').innerHTML = " ";
    document.getElementById('equipment').innerHTML = " ";
    document.getElementById('inabilities').innerHTML = " ";
    document.getElementById('notes').innerHTML = " ";
    document.getElementById('reserved').innerHTML = " ";
    
    //repopulate focus according to genre
    switch(document.getElementById('genre').value) {
    case "fantasy":
     document.getElementById('focus').options[i++] = new Option("Abides in Stone","abides",true,true);
     document.getElementById('focus').options[i++] = new Option("Awakens Dreams","awakens",false,false);
     document.getElementById('focus').options[i++] = new Option("Bears a Halo of Fire","bears",false,false);
     document.getElementById('focus').options[i++] = new Option("Blazes With Radiance","blazes",false,false);
     document.getElementById('focus').options[i++] = new Option("Builds Robots","buildsR",false,false);
     document.getElementById('focus').options[i++] = new Option("Channels Divine Blessings","channels",false,false);
     document.getElementById('focus').options[i++] = new Option("Commands Mental Powers","commands",false,false);
     document.getElementById('focus').options[i++] = new Option("Consorts With the Dead","consorts",false,false);
     document.getElementById('focus').options[i++] = new Option("Controls Beasts","controlsB",false,false);
     document.getElementById('focus').options[i++] = new Option("Crafts Illusions","craftsI",false,false);
     document.getElementById('focus').options[i++] = new Option("Crafts Unique Objects","craftsUO",false,false);
     document.getElementById('focus').options[i++] = new Option("Defends the Gate","defendsG",false,false);
     document.getElementById('focus').options[i++] = new Option("Defends the Weak","defendsW",false,false);
     document.getElementById('focus').options[i++] = new Option("Descends From Nobility","descends",false,false);
     document.getElementById('focus').options[i++] = new Option("Emerged From the Obelisk","emerged",false,false);
     document.getElementById('focus').options[i++] = new Option("Entertains","entertains",false,false);
     document.getElementById('focus').options[i++] = new Option("Exists in Two Places at Once","exists2",false,false);
     document.getElementById('focus').options[i++] = new Option("Exists Partially Out of Phase","existsP",false,false);
     document.getElementById('focus').options[i++] = new Option("Explores Dark Places","exploresDP",false,false);
     document.getElementById('focus').options[i++] = new Option("Fights Dirty","fightsD",false,false);
     document.getElementById('focus').options[i++] = new Option("Fights With Panache","fightsWP",false,false);
     document.getElementById('focus').options[i++] = new Option("Focuses Mind Over Matter","focusesMM",false,false);
     document.getElementById('focus').options[i++] = new Option("Howls at the Moon","howls",false,false);
     document.getElementById('focus').options[i++] = new Option("Hunts","huntsWGS",false,false);
     document.getElementById('focus').options[i++] = new Option("Infiltrates","infiltrates",false,false);
     document.getElementById('focus').options[i++] = new Option("Keeps a Magic Ally","keeps",false,false);
     document.getElementById('focus').options[i++] = new Option("Leads","leads",false,false);
     document.getElementById('focus').options[i++] = new Option("Lives in the Wilderness","livesIW",false,false);
     document.getElementById('focus').options[i++] = new Option("Looks For Trouble","looks",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Defense","mastersD",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Spells","mastersS",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters the Swarm","mastersI",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Weaponry","mastersW",false,false);
     document.getElementById('focus').options[i++] = new Option("Metes Out Justice","metes",false,false);
     document.getElementById('focus').options[i++] = new Option("Moves Like a Cat","movesC",false,false);
     document.getElementById('focus').options[i++] = new Option("Murders","murders",false,false);
     document.getElementById('focus').options[i++] = new Option("Needs No Weapon","needs",false,false);
     document.getElementById('focus').options[i++] = new Option("Never Says Die","never",false,false);
     document.getElementById('focus').options[i++] = new Option("Performs Feats of Strength","performs",false,false);
     document.getElementById('focus').options[i++] = new Option("Rages","rages",false,false);
     document.getElementById('focus').options[i++] = new Option("Rides the Lightning","rides",false,false);
     document.getElementById('focus').options[i++] = new Option("Sailed Beneath the Jolly Roger","sailed",false,false);
     document.getElementById('focus').options[i++] = new Option("Sees Beyond","sees",false,false);
     document.getElementById('focus').options[i++] = new Option("Separates Mind From Body","separates",false,false);
     document.getElementById('focus').options[i++] = new Option("Shepherds Spirits","shepherdsS",false,false);
     document.getElementById('focus').options[i++] = new Option("Siphons Power","siphons",false,false);
     document.getElementById('focus').options[i++] = new Option("Slays Monsters","slays",false,false);
     document.getElementById('focus').options[i++] = new Option("Speaks For the Land","speaksFL",false,false);
     document.getElementById('focus').options[i++] = new Option("Stands Like a Bastion","stands",false,false);
     document.getElementById('focus').options[i++] = new Option("Throws With Deadly Accuracy","throws",false,false);
     document.getElementById('focus').options[i++] = new Option("Thunders","thunders",false,false);
     document.getElementById('focus').options[i++] = new Option("Travels Through Time","travels",false,false);
     document.getElementById('focus').options[i++] = new Option("Was Foretold","wasF",false,false);
     document.getElementById('focus').options[i++] = new Option("Wears a Sheen of Ice","wearsSI",false,false);
     document.getElementById('focus').options[i++] = new Option("Wields Two Weapons at Once","wields2",false,false);
     document.getElementById('focus').options[i++] = new Option("Works Miracles","worksM",false,false);
     document.getElementById('focus').options[i++] = new Option("Works the Back Alleys","worksBA",false,false);
     break;
    case "modern":
     document.getElementById('focus').options[i++] = new Option("Calculates the Incalculable","calculates",true,true);
     document.getElementById('focus').options[i++] = new Option("Commands Mental Powers","commands",false,false);
     document.getElementById('focus').options[i++] = new Option("Conducts Weird Science","conducts",false,false);
     document.getElementById('focus').options[i++] = new Option("Consorts With the Dead","consorts",false,false);
     document.getElementById('focus').options[i++] = new Option("Crafts Unique Objects","craftsUO",false,false);
     document.getElementById('focus').options[i++] = new Option("Doesn't Do Much","doesnt",false,false);
     document.getElementById('focus').options[i++] = new Option("Drives Like a Maniac","drives",false,false);
     document.getElementById('focus').options[i++] = new Option("Entertains","entertains",false,false);
     document.getElementById('focus').options[i++] = new Option("Explores Dark Places","exploresDP",false,false);
     document.getElementById('focus').options[i++] = new Option("Fights Dirty","fightsD",false,false);
     document.getElementById('focus').options[i++] = new Option("Focuses Mind Over Matter","focusesMM",false,false);
     document.getElementById('focus').options[i++] = new Option("Helps Their Friends","helps",false,false);
     document.getElementById('focus').options[i++] = new Option("Howls at the Moon","howls",false,false);
     document.getElementById('focus').options[i++] = new Option("Hunts","huntsWGS",false,false);
     document.getElementById('focus').options[i++] = new Option("Infiltrates","infiltrates",false,false);
     document.getElementById('focus').options[i++] = new Option("Interprets the Law","interprets",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Idolized By Millions","idolized",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Licensed to Carry","licensed",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Wanted By the Law","wanted",false,false);
     document.getElementById('focus').options[i++] = new Option("Leads","leads",false,false);
     document.getElementById('focus').options[i++] = new Option("Learns Quickly","learns",false,false);
     document.getElementById('focus').options[i++] = new Option("Lives in the Wilderness","livesIW",false,false);
     document.getElementById('focus').options[i++] = new Option("Looks For Trouble","looks",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters the Swarm","mastersI",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Weaponry","mastersW",false,false);
     document.getElementById('focus').options[i++] = new Option("Moves Like a Cat","movesC",false,false);
     document.getElementById('focus').options[i++] = new Option("Murders","murders",false,false);
     document.getElementById('focus').options[i++] = new Option("Needs No Weapon","needs",false,false);
     document.getElementById('focus').options[i++] = new Option("Never Says Die","never",false,false);
     document.getElementById('focus').options[i++] = new Option("Operates Undercover","operates",false,false);
     document.getElementById('focus').options[i++] = new Option("Plays Too Many Games","playsG",false,false);
     document.getElementById('focus').options[i++] = new Option("Runs Away","runs",false,false);
     document.getElementById('focus').options[i++] = new Option("Sees Beyond","sees",false,false);
     document.getElementById('focus').options[i++] = new Option("Separates Mind From Body","separates",false,false);
     document.getElementById('focus').options[i++] = new Option("Shepherds the Community","shepherdsC",false,false);
     document.getElementById('focus').options[i++] = new Option("Slays Monsters","slays",false,false);
     document.getElementById('focus').options[i++] = new Option("Solves Mysteries","solves",false,false);
     document.getElementById('focus').options[i++] = new Option("Throws With Deadly Accuracy","throws",false,false);
     document.getElementById('focus').options[i++] = new Option("Wields Two Weapons at Once","wields2",false,false);
     document.getElementById('focus').options[i++] = new Option("Works For a Living","worksFL",false,false);
     document.getElementById('focus').options[i++] = new Option("Works the Back Alleys","worksBA",false,false);
     document.getElementById('focus').options[i++] = new Option("Works the System","worksS",false,false);
     document.getElementById('focus').options[i++] = new Option("Would Rather Be Reading","reading",false,false);
     break;
    case "monomag":
     document.getElementById('focus').options[i++] = new Option("Calculates the Incalculable","calculates",true,true);
     document.getElementById('focus').options[i++] = new Option("Conducts Weird Science","conducts",false,false);
     document.getElementById('focus').options[i++] = new Option("Crafts Unique Objects","craftsUO",false,false);
     document.getElementById('focus').options[i++] = new Option("Doesn't Do Much","doesnt",false,false);
     document.getElementById('focus').options[i++] = new Option("Drives Like a Maniac","drives",false,false);
     document.getElementById('focus').options[i++] = new Option("Entertains","entertains",false,false);
     document.getElementById('focus').options[i++] = new Option("Explores Dark Places","exploresDP",false,false);
     document.getElementById('focus').options[i++] = new Option("Fights Dirty","fightsD",false,false);
     document.getElementById('focus').options[i++] = new Option("Helps Their Friends","helps",false,false);
     document.getElementById('focus').options[i++] = new Option("Hunts","huntsWGS",false,false);
     document.getElementById('focus').options[i++] = new Option("Infiltrates","infiltrates",false,false);
     document.getElementById('focus').options[i++] = new Option("Interprets the Law","interprets",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Idolized By Millions","idolized",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Licensed to Carry","licensed",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Wanted By the Law","wanted",false,false);
     document.getElementById('focus').options[i++] = new Option("Leads","leads",false,false);
     document.getElementById('focus').options[i++] = new Option("Learns Quickly","learns",false,false);
     document.getElementById('focus').options[i++] = new Option("Lives in the Wilderness","livesIW",false,false);
     document.getElementById('focus').options[i++] = new Option("Looks For Trouble","looks",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Weaponry","mastersW",false,false);
     document.getElementById('focus').options[i++] = new Option("Moves Like a Cat","movesC",false,false);
     document.getElementById('focus').options[i++] = new Option("Murders","murders",false,false);
     document.getElementById('focus').options[i++] = new Option("Needs No Weapon","needs",false,false);
     document.getElementById('focus').options[i++] = new Option("Never Says Die","never",false,false);
     document.getElementById('focus').options[i++] = new Option("Operates Undercover","operates",false,false);
     document.getElementById('focus').options[i++] = new Option("Plays Too Many Games","playsG",false,false);
     document.getElementById('focus').options[i++] = new Option("Runs Away","runs",false,false);
     document.getElementById('focus').options[i++] = new Option("Shepherds the Community","shepherdsC",false,false);
     document.getElementById('focus').options[i++] = new Option("Solves Mysteries","solves",false,false);
     document.getElementById('focus').options[i++] = new Option("Throws With Deadly Accuracy","throws",false,false);
     document.getElementById('focus').options[i++] = new Option("Wields Two Weapons at Once","wields2",false,false);
     document.getElementById('focus').options[i++] = new Option("Works For a Living","worksFL",false,false);
     document.getElementById('focus').options[i++] = new Option("Works the Back Alleys","worksBA",false,false);
     document.getElementById('focus').options[i++] = new Option("Works the System","worksS",false,false);
     document.getElementById('focus').options[i++] = new Option("Would Rather Be Reading","reading",false,false);
     break;
    case "scifi":
     document.getElementById('focus').options[i++] = new Option("Absorbs Energy","absorbs",true,true);
     document.getElementById('focus').options[i++] = new Option("Battles Robots","battles",false,false);
     document.getElementById('focus').options[i++] = new Option("Builds Robots","buildsR",false,false);
     document.getElementById('focus').options[i++] = new Option("Calculates the Incalculable","calculates",false,false);
     document.getElementById('focus').options[i++] = new Option("Commands Mental Powers","commands",false,false);
     document.getElementById('focus').options[i++] = new Option("Conducts Weird Science","conducts",false,false);
     document.getElementById('focus').options[i++] = new Option("Dances With Dark Matter","dances",false,false);
     document.getElementById('focus').options[i++] = new Option("Doesn't Do Much","doesnt",false,false);
     document.getElementById('focus').options[i++] = new Option("Drives Like a Maniac","drives",false,false);
     document.getElementById('focus').options[i++] = new Option("Entertains","entertains",false,false);
     document.getElementById('focus').options[i++] = new Option("Fights Dirty","fightsD",false,false);
     document.getElementById('focus').options[i++] = new Option("Fights With Panache","fightsWP",false,false);
     document.getElementById('focus').options[i++] = new Option("Focuses Mind Over Matter","focusesMM",false,false);
     document.getElementById('focus').options[i++] = new Option("Fuses Flesh and Steel","fusesFS",false,false);
     document.getElementById('focus').options[i++] = new Option("Fuses Mind and Machine","fusesMM",false,false);
     document.getElementById('focus').options[i++] = new Option("Helps Their Friends","helps",false,false);
     document.getElementById('focus').options[i++] = new Option("Hunts","huntsWGS",false,false);
     document.getElementById('focus').options[i++] = new Option("Infiltrates","infiltrates",false,false);
     document.getElementById('focus').options[i++] = new Option("Interprets the Law","interprets",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Idolized By Millions","idolized",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Wanted By the Law","wanted",false,false);
     document.getElementById('focus').options[i++] = new Option("Learns Quickly","learns",false,false);
     document.getElementById('focus').options[i++] = new Option("Looks For Trouble","looks",false,false);
     document.getElementById('focus').options[i++] = new Option("Loves the Void","loves",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Defense","mastersD",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Weaponry","mastersW",false,false);
     document.getElementById('focus').options[i++] = new Option("Moves Like a Cat","movesC",false,false);
     document.getElementById('focus').options[i++] = new Option("Murders","murders",false,false);
     document.getElementById('focus').options[i++] = new Option("Needs No Weapon","needs",false,false);
     document.getElementById('focus').options[i++] = new Option("Never Says Die","never",false,false);
     document.getElementById('focus').options[i++] = new Option("Operates Undercover","operates",false,false);
     document.getElementById('focus').options[i++] = new Option("Pilots Starcraft","pilots",false,false);
     document.getElementById('focus').options[i++] = new Option("Plays Too Many Games","playsG",false,false);
     document.getElementById('focus').options[i++] = new Option("Siphons Power","siphons",false,false);
     document.getElementById('focus').options[i++] = new Option("Solves Mysteries","solves",false,false);
     document.getElementById('focus').options[i++] = new Option("Talks to Machines","talks",false,false);
     document.getElementById('focus').options[i++] = new Option("Travels Through Time","travels",false,false);
     document.getElementById('focus').options[i++] = new Option("Wears Power Armor","wearsPA",false,false);
     document.getElementById('focus').options[i++] = new Option("Works For a Living","worksFL",false,false);
     document.getElementById('focus').options[i++] = new Option("Works the Back Alleys","worksBA",false,false);
     document.getElementById('focus').options[i++] = new Option("Works the System","worksS",false,false);
     document.getElementById('focus').options[i++] = new Option("Would Rather Be Reading","reading",false,false);
     break;
    case "superhero":
     document.getElementById('focus').options[i++] = new Option("Abides in Stone","abides",true,true);
     document.getElementById('focus').options[i++] = new Option("Absorbs Energy","absorbs",false,false);
     document.getElementById('focus').options[i++] = new Option("Bears a Halo of Fire","bears",false,false);
     document.getElementById('focus').options[i++] = new Option("Blazes With Radiance","blazes",false,false);
     document.getElementById('focus').options[i++] = new Option("Brandishes an Exotic Shield","brandishes",false,false);
     document.getElementById('focus').options[i++] = new Option("Commands Mental Powers","commands",false,false);
     document.getElementById('focus').options[i++] = new Option("Controls Gravity","controlsG",false,false);
     document.getElementById('focus').options[i++] = new Option("Crafts Illusions","craftsI",false,false);
     document.getElementById('focus').options[i++] = new Option("Dances With Dark Matter","dances",false,false);
     document.getElementById('focus').options[i++] = new Option("Defends the Weak","defendsW",false,false);
     document.getElementById('focus').options[i++] = new Option("Emerged From the Obelisk","emerged",false,false);
     document.getElementById('focus').options[i++] = new Option("Employs Magnetism","employs",false,false);
     document.getElementById('focus').options[i++] = new Option("Exists in Two Places at Once","exists2",false,false);
     document.getElementById('focus').options[i++] = new Option("Exists Partially Out of Phase","existsP",false,false);
     document.getElementById('focus').options[i++] = new Option("Fights With Panache","fightsWP",false,false);
     document.getElementById('focus').options[i++] = new Option("Flies Faster Than a Bullet","flies",false,false);
     document.getElementById('focus').options[i++] = new Option("Focuses Mind Over Matter","focusesMM",false,false);
     document.getElementById('focus').options[i++] = new Option("Fuses Flesh and Steel","fusesFS",false,false);
     document.getElementById('focus').options[i++] = new Option("Fuses Mind and Machine","fusesMM",false,false);
     document.getElementById('focus').options[i++] = new Option("Grows to Towering Heights","grows",false,false);
     document.getElementById('focus').options[i++] = new Option("Howls at the Moon","howls",false,false);
     document.getElementById('focus').options[i++] = new Option("Hunts","huntsWGS",false,false);
     document.getElementById('focus').options[i++] = new Option("Infiltrates","infiltrates",false,false);
     document.getElementById('focus').options[i++] = new Option("Keeps a Magic Ally","keeps",false,false);
     document.getElementById('focus').options[i++] = new Option("Leads","leads",false,false);
     document.getElementById('focus').options[i++] = new Option("Looks For Trouble","looks",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Defense","mastersD",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Spells","mastersS",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Weaponry","mastersW",false,false);
     document.getElementById('focus').options[i++] = new Option("Metes Out Justice","metes",false,false);
     document.getElementById('focus').options[i++] = new Option("Moves Like a Cat","movesC",false,false);
     document.getElementById('focus').options[i++] = new Option("Moves Like the Wind","movesW",false,false);
     document.getElementById('focus').options[i++] = new Option("Needs No Weapon","needs",false,false);
     document.getElementById('focus').options[i++] = new Option("Never Says Die","never",false,false);
     document.getElementById('focus').options[i++] = new Option("Operates Undercover","operates",false,false);
     document.getElementById('focus').options[i++] = new Option("Performs Feats of Strength","performs",false,false);
     document.getElementById('focus').options[i++] = new Option("Rages","rages",false,false);
     document.getElementById('focus').options[i++] = new Option("Rides the Lightning","rides",false,false);
     document.getElementById('focus').options[i++] = new Option("Siphons Power","siphons",false,false);
     document.getElementById('focus').options[i++] = new Option("Solves Mysteries","solves",false,false);
     document.getElementById('focus').options[i++] = new Option("Stands Like a Bastion","stands",false,false);
     document.getElementById('focus').options[i++] = new Option("Talks to Machines","talks",false,false);
     document.getElementById('focus').options[i++] = new Option("Throws With Deadly Accuracy","throws",false,false);
     document.getElementById('focus').options[i++] = new Option("Thunders","thunders",false,false);
     document.getElementById('focus').options[i++] = new Option("Travels Through Time","travels",false,false);
     document.getElementById('focus').options[i++] = new Option("Was Foretold","wasF",false,false);
     document.getElementById('focus').options[i++] = new Option("Wears a Sheen of Ice","wearsSI",false,false);
     document.getElementById('focus').options[i++] = new Option("Wears Power Armor","wearsPA",false,false);
     break;
    case "postapoc":
     document.getElementById('focus').options[i++] = new Option("Absorbs Energy","absorbs",true,true);
     document.getElementById('focus').options[i++] = new Option("Builds Robots","buildsR",false,false);
     document.getElementById('focus').options[i++] = new Option("Doesn't Do Much","doesnt",false,false);
     document.getElementById('focus').options[i++] = new Option("Drives Like a Maniac","drives",false,false);
     document.getElementById('focus').options[i++] = new Option("Entertains","entertains",false,false);
     document.getElementById('focus').options[i++] = new Option("Fights Dirty","fightsD",false,false);
     document.getElementById('focus').options[i++] = new Option("Helps Their Friends","helps",false,false);
     document.getElementById('focus').options[i++] = new Option("Hunts","huntsWGS",false,false);
     document.getElementById('focus').options[i++] = new Option("Leads","leads",false,false);
     document.getElementById('focus').options[i++] = new Option("Learns Quickly","learns",false,false);
     document.getElementById('focus').options[i++] = new Option("Lives in the Wilderness","livesIW",false,false);
     document.getElementById('focus').options[i++] = new Option("Looks For Trouble","looks",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Defense","mastersD",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Weaponry","mastersW",false,false);
     document.getElementById('focus').options[i++] = new Option("Moves Like a Cat","movesC",false,false);
     document.getElementById('focus').options[i++] = new Option("Murders","murders",false,false);
     document.getElementById('focus').options[i++] = new Option("Needs No Weapon","needs",false,false);
     document.getElementById('focus').options[i++] = new Option("Never Says Die","never",false,false);
     document.getElementById('focus').options[i++] = new Option("Performs Feats of Strength","performs",false,false);
     document.getElementById('focus').options[i++] = new Option("Runs Away","runs",false,false);
     document.getElementById('focus').options[i++] = new Option("Scavenges","scavenges",false,false);
     document.getElementById('focus').options[i++] = new Option("Throws With Deadly Accuracy","throws",false,false);
     document.getElementById('focus').options[i++] = new Option("Wears Power Armor","wearsPA",false,false);
     document.getElementById('focus').options[i++] = new Option("Wields Two Weapons at Once","wields2",false,false);
     break;
    case "historical":
     document.getElementById('focus').options[i++] = new Option("Calculates the Incalculable","calculates",true,true);
     document.getElementById('focus').options[i++] = new Option("Crafts Unique Objects","craftsUO",false,false);
     document.getElementById('focus').options[i++] = new Option("Descends From Nobility","descends",false,false);
     document.getElementById('focus').options[i++] = new Option("Doesn't Do Much","doesnt",false,false);
     document.getElementById('focus').options[i++] = new Option("Entertains","entertains",false,false);
     document.getElementById('focus').options[i++] = new Option("Explores Dark Places","exploresDP",false,false);
     document.getElementById('focus').options[i++] = new Option("Fights Dirty","fightsD",false,false);
     document.getElementById('focus').options[i++] = new Option("Helps Their Friends","helps",false,false);
     document.getElementById('focus').options[i++] = new Option("Hunts","huntsWGS",false,false);
     document.getElementById('focus').options[i++] = new Option("Infiltrates","infiltrates",false,false);
     document.getElementById('focus').options[i++] = new Option("Interprets the Law","interprets",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Idolized By Millions","idolized",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Licensed to Carry","licensed",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Wanted By the Law","wanted",false,false);
     document.getElementById('focus').options[i++] = new Option("Leads","leads",false,false);
     document.getElementById('focus').options[i++] = new Option("Learns Quickly","learns",false,false);
     document.getElementById('focus').options[i++] = new Option("Lives in the Wilderness","livesIW",false,false);
     document.getElementById('focus').options[i++] = new Option("Looks For Trouble","looks",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Weaponry","mastersW",false,false);
     document.getElementById('focus').options[i++] = new Option("Moves Like a Cat","movesC",false,false);
     document.getElementById('focus').options[i++] = new Option("Murders","murders",false,false);
     document.getElementById('focus').options[i++] = new Option("Needs No Weapon","needs",false,false);
     document.getElementById('focus').options[i++] = new Option("Never Says Die","never",false,false);
     document.getElementById('focus').options[i++] = new Option("Operates Undercover","operates",false,false);
     document.getElementById('focus').options[i++] = new Option("Runs Away","runs",false,false);
     document.getElementById('focus').options[i++] = new Option("Sailed Beneath the Jolly Roger","sailed",false,false);
     document.getElementById('focus').options[i++] = new Option("Solves Mysteries","solves",false,false);
     document.getElementById('focus').options[i++] = new Option("Throws With Deadly Accuracy","throws",false,false);
     document.getElementById('focus').options[i++] = new Option("Wields Two Weapons at Once","wields2",false,false);
     document.getElementById('focus').options[i++] = new Option("Works For a Living","worksFL",false,false);
     document.getElementById('focus').options[i++] = new Option("Works the Back Alleys","worksBA",false,false);
     document.getElementById('focus').options[i++] = new Option("Works the System","worksS",false,false);
     document.getElementById('focus').options[i++] = new Option("Would Rather Be Reading","reading",false,false);
     break;
    case "anything":
     document.getElementById('focus').options[i++] = new Option("Abides in Stone","abides",true,true);
     document.getElementById('focus').options[i++] = new Option("Absorbs Energy","absorbs",false,false);
     document.getElementById('focus').options[i++] = new Option("Awakens Dreams","awakens",false,false);
     document.getElementById('focus').options[i++] = new Option("Battles Robots","battles",false,false);
     document.getElementById('focus').options[i++] = new Option("Bears a Halo of Fire","bears",false,false);
     document.getElementById('focus').options[i++] = new Option("Blazes With Radiance","blazes",false,false);
     document.getElementById('focus').options[i++] = new Option("Builds Robots","buildsR",false,false);
     document.getElementById('focus').options[i++] = new Option("Brandishes an Exotic Shield","brandishes",false,false);
     document.getElementById('focus').options[i++] = new Option("Calculates the Incalculable","calculates",false,false);
     document.getElementById('focus').options[i++] = new Option("Channels Divine Blessings","channels",false,false);
     document.getElementById('focus').options[i++] = new Option("Commands Mental Powers","commands",false,false);
     document.getElementById('focus').options[i++] = new Option("Conducts Weird Science","conducts",false,false);
     document.getElementById('focus').options[i++] = new Option("Consorts With the Dead","consorts",false,false);
     document.getElementById('focus').options[i++] = new Option("Controls Beasts","controlsB",false,false);
     document.getElementById('focus').options[i++] = new Option("Controls Gravity","controlsG",false,false);
     document.getElementById('focus').options[i++] = new Option("Crafts Illusions","craftsI",false,false);
     document.getElementById('focus').options[i++] = new Option("Crafts Unique Objects","craftsUO",false,false);
     document.getElementById('focus').options[i++] = new Option("Dances With Dark Matter","dances",false,false);
     document.getElementById('focus').options[i++] = new Option("Defends the Gate","defendsG",false,false);
     document.getElementById('focus').options[i++] = new Option("Defends the Weak","defendsW",false,false);
     document.getElementById('focus').options[i++] = new Option("Descends From Nobility","descends",false,false);
     document.getElementById('focus').options[i++] = new Option("Doesn't Do Much","doesnt",false,false);
     document.getElementById('focus').options[i++] = new Option("Drives Like a Maniac","drives",false,false);
     document.getElementById('focus').options[i++] = new Option("Emerged From the Obelisk","emerged",false,false);
     document.getElementById('focus').options[i++] = new Option("Employs Magnetism","employs",false,false);
     document.getElementById('focus').options[i++] = new Option("Entertains","entertains",false,false);
     document.getElementById('focus').options[i++] = new Option("Exists in Two Places at Once","exists2",false,false);
     document.getElementById('focus').options[i++] = new Option("Exists Partially Out of Phase","existsP",false,false);
     document.getElementById('focus').options[i++] = new Option("Explores Dark Places","exploresDP",false,false);
     document.getElementById('focus').options[i++] = new Option("Fights Dirty","fightsD",false,false);
     document.getElementById('focus').options[i++] = new Option("Fights With Panache","fightsWP",false,false);
     document.getElementById('focus').options[i++] = new Option("Flies Faster Than a Bullet","flies",false,false);
     document.getElementById('focus').options[i++] = new Option("Focuses Mind Over Matter","focusesMM",false,false);
     document.getElementById('focus').options[i++] = new Option("Fuses Flesh and Steel","fusesFS",false,false);
     document.getElementById('focus').options[i++] = new Option("Fuses Mind and Machine","fusesMM",false,false);
     document.getElementById('focus').options[i++] = new Option("Grows to Towering Heights","grows",false,false);
     document.getElementById('focus').options[i++] = new Option("Helps Their Friends","helps",false,false);
     document.getElementById('focus').options[i++] = new Option("Howls at the Moon","howls",false,false);
     document.getElementById('focus').options[i++] = new Option("Hunts","huntsWGS",false,false);
     document.getElementById('focus').options[i++] = new Option("Infiltrates","infiltrates",false,false);
     document.getElementById('focus').options[i++] = new Option("Interprets the Law","interprets",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Idolized By Millions","idolized",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Licensed to Carry","licensed",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Wanted By the Law","wanted",false,false);
     document.getElementById('focus').options[i++] = new Option("Keeps a Magic Ally","keeps",false,false);
     document.getElementById('focus').options[i++] = new Option("Leads","leads",false,false);
     document.getElementById('focus').options[i++] = new Option("Learns Quickly","learns",false,false);
     document.getElementById('focus').options[i++] = new Option("Lives in the Wilderness","livesIW",false,false);
     document.getElementById('focus').options[i++] = new Option("Looks For Trouble","looks",false,false);
     document.getElementById('focus').options[i++] = new Option("Loves the Void","loves",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Defense","mastersD",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Spells","mastersS",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters the Swarm","mastersI",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Weaponry","mastersW",false,false);
     document.getElementById('focus').options[i++] = new Option("Metes Out Justice","metes",false,false);
     document.getElementById('focus').options[i++] = new Option("Moves Like a Cat","movesC",false,false);
     document.getElementById('focus').options[i++] = new Option("Moves Like the Wind","movesW",false,false);
     document.getElementById('focus').options[i++] = new Option("Murders","murders",false,false);
     document.getElementById('focus').options[i++] = new Option("Needs No Weapon","needs",false,false);
     document.getElementById('focus').options[i++] = new Option("Never Says Die","never",false,false);
     document.getElementById('focus').options[i++] = new Option("Operates Undercover","operates",false,false);
     document.getElementById('focus').options[i++] = new Option("Performs Feats of Strength","performs",false,false);
     document.getElementById('focus').options[i++] = new Option("Pilots Starcraft","pilots",false,false);
     document.getElementById('focus').options[i++] = new Option("Plays Too Many Games","playsG",false,false);
     document.getElementById('focus').options[i++] = new Option("Rages","rages",false,false);
     document.getElementById('focus').options[i++] = new Option("Rides the Lightning","rides",false,false);
     document.getElementById('focus').options[i++] = new Option("Runs Away","runs",false,false);
     document.getElementById('focus').options[i++] = new Option("Sailed Beneath the Jolly Roger","sailed",false,false);
     document.getElementById('focus').options[i++] = new Option("Scavenges","scavenges",false,false);
     document.getElementById('focus').options[i++] = new Option("Sees Beyond","sees",false,false);
     document.getElementById('focus').options[i++] = new Option("Separates Mind From Body","separates",false,false);
     document.getElementById('focus').options[i++] = new Option("Shepherds Spirits","shepherdsS",false,false);
     document.getElementById('focus').options[i++] = new Option("Shepherds the Community","shepherdsC",false,false);
     document.getElementById('focus').options[i++] = new Option("Shreds the Walls of the World","shreds",false,false);
     document.getElementById('focus').options[i++] = new Option("Siphons Power","siphons",false,false);
     document.getElementById('focus').options[i++] = new Option("Slays Monsters","slays",false,false);
     document.getElementById('focus').options[i++] = new Option("Solves Mysteries","solves",false,false);
     document.getElementById('focus').options[i++] = new Option("Speaks For the Land","speaksFL",false,false);
     document.getElementById('focus').options[i++] = new Option("Stands Like a Bastion","stands",false,false);
     document.getElementById('focus').options[i++] = new Option("Talks to Machines","talks",false,false);
     document.getElementById('focus').options[i++] = new Option("Throws With Deadly Accuracy","throws",false,false);
     document.getElementById('focus').options[i++] = new Option("Thunders","thunders",false,false);
     document.getElementById('focus').options[i++] = new Option("Travels Through Time","travels",false,false);
     document.getElementById('focus').options[i++] = new Option("Was Foretold","wasF",false,false);
     document.getElementById('focus').options[i++] = new Option("Wears a Sheen of Ice","wearsSI",false,false);
     document.getElementById('focus').options[i++] = new Option("Wears Power Armor","wearsPA",false,false);
     document.getElementById('focus').options[i++] = new Option("Wields Two Weapons at Once","wields2",false,false);
     document.getElementById('focus').options[i++] = new Option("Works For a Living","worksFL",false,false);
     document.getElementById('focus').options[i++] = new Option("Works Miracles","worksM",false,false);
     document.getElementById('focus').options[i++] = new Option("Works the Back Alleys","worksBA",false,false);
     document.getElementById('focus').options[i++] = new Option("Works the System","worksS",false,false);
     document.getElementById('focus').options[i++] = new Option("Would Rather Be Reading","reading",false,false);
     break;
    case "steampunk":
     document.getElementById('focus').options[i++] = new Option("Awakens Dreams","awakens",true,true);
     document.getElementById('focus').options[i++] = new Option("Battles Robots","battles",false,false);
     document.getElementById('focus').options[i++] = new Option("Builds Robots","buildsR",false,false);
     document.getElementById('focus').options[i++] = new Option("Calculates the Incalculable","calculates",false,false);
     document.getElementById('focus').options[i++] = new Option("Commands Mental Powers","commands",false,false);
     document.getElementById('focus').options[i++] = new Option("Conducts Weird Science","conducts",false,false);
     document.getElementById('focus').options[i++] = new Option("Consorts With the Dead","consorts",false,false);
     document.getElementById('focus').options[i++] = new Option("Controls Beasts","controlsB",false,false);
     document.getElementById('focus').options[i++] = new Option("Crafts Illusions","craftsI",false,false);
     document.getElementById('focus').options[i++] = new Option("Crafts Unique Objects","craftsUO",false,false);
     document.getElementById('focus').options[i++] = new Option("Doesn't Do Much","doesnt",false,false);
     document.getElementById('focus').options[i++] = new Option("Drives Like a Maniac","drives",false,false);
     document.getElementById('focus').options[i++] = new Option("Entertains","entertains",false,false);
     document.getElementById('focus').options[i++] = new Option("Exists in Two Places at Once","exists2",false,false);
     document.getElementById('focus').options[i++] = new Option("Exists Partially Out of Phase","existsP",false,false);
     document.getElementById('focus').options[i++] = new Option("Explores Dark Places","exploresDP",false,false);
     document.getElementById('focus').options[i++] = new Option("Fights Dirty","fightsD",false,false);
     document.getElementById('focus').options[i++] = new Option("Fights With Panache","fightsWP",false,false);
     document.getElementById('focus').options[i++] = new Option("Focuses Mind Over Matter","focusesMM",false,false);
     document.getElementById('focus').options[i++] = new Option("Fuses Flesh and Steel","fusesFS",false,false);
     document.getElementById('focus').options[i++] = new Option("Howls at the Moon","howls",false,false);
     document.getElementById('focus').options[i++] = new Option("Hunts Nonhumans","huntsN",false,false);
     document.getElementById('focus').options[i++] = new Option("Hunts Outcasts","huntsO",false,false);
     document.getElementById('focus').options[i++] = new Option("Hunts","huntsWGS",false,false);
     document.getElementById('focus').options[i++] = new Option("Infiltrates","infiltrates",false,false);
     document.getElementById('focus').options[i++] = new Option("Interprets the Law","interprets",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Idolized By Millions","idolized",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Licensed to Carry","licensed",false,false);
     document.getElementById('focus').options[i++] = new Option("Is Wanted By the Law","wanted",false,false);
     document.getElementById('focus').options[i++] = new Option("Leads","leads",false,false);
     document.getElementById('focus').options[i++] = new Option("Learns Quickly","learns",false,false);
     document.getElementById('focus').options[i++] = new Option("Lives in the Wilderness","livesIW",false,false);
     document.getElementById('focus').options[i++] = new Option("Looks For Trouble","looks",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Defense","mastersD",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters the Swarm","mastersI",false,false);
     document.getElementById('focus').options[i++] = new Option("Masters Weaponry","mastersW",false,false);
     document.getElementById('focus').options[i++] = new Option("Metes Out Justice","metes",false,false);
     document.getElementById('focus').options[i++] = new Option("Moves Like a Cat","movesC",false,false);
     document.getElementById('focus').options[i++] = new Option("Moves Like the Wind","movesW",false,false);
     document.getElementById('focus').options[i++] = new Option("Murders","murders",false,false);
     document.getElementById('focus').options[i++] = new Option("Needs No Weapon","needs",false,false);
     document.getElementById('focus').options[i++] = new Option("Never Says Die","never",false,false);
     document.getElementById('focus').options[i++] = new Option("Operates Undercover","operates",false,false);
     document.getElementById('focus').options[i++] = new Option("Performs Feats of Strength","performs",false,false);
     document.getElementById('focus').options[i++] = new Option("Rages","rages",false,false);
     document.getElementById('focus').options[i++] = new Option("Runs Away","runs",false,false);
     document.getElementById('focus').options[i++] = new Option("Sees Beyond","sees",false,false);
     document.getElementById('focus').options[i++] = new Option("Separates Mind From Body","separates",false,false);
     document.getElementById('focus').options[i++] = new Option("Shepherds Spirits","shepherdsS",false,false);
     document.getElementById('focus').options[i++] = new Option("Shepherds the Community","shepherdsC",false,false);
     document.getElementById('focus').options[i++] = new Option("Slays Monsters","slays",false,false);
     document.getElementById('focus').options[i++] = new Option("Solves Mysteries","solves",false,false);
     document.getElementById('focus').options[i++] = new Option("Talks to Machines","talks",false,false);
     document.getElementById('focus').options[i++] = new Option("Throws With Deadly Accuracy","throws",false,false);
     document.getElementById('focus').options[i++] = new Option("Travels Through Time","travels",false,false);
     document.getElementById('focus').options[i++] = new Option("Was Foretold","wasF",false,false);
     document.getElementById('focus').options[i++] = new Option("Wears Power Armor","wearsPA",false,false);
     document.getElementById('focus').options[i++] = new Option("Wields Two Weapons at Once","wields2",false,false);
     document.getElementById('focus').options[i++] = new Option("Works For a Living","worksFL",false,false);
     document.getElementById('focus').options[i++] = new Option("Works Miracles","worksM",false,false);
     document.getElementById('focus').options[i++] = new Option("Works the Back Alleys","worksBA",false,false);
     document.getElementById('focus').options[i++] = new Option("Works the System","worksS",false,false);
     document.getElementById('focus').options[i++] = new Option("Would Rather Be Reading","reading",false,false);
     break;
      
    }
  }
  
  function clearPoolPlus() {
    document.getElementById('mplus').innerHTML = " ";
    document.getElementById('splus').innerHTML = " ";
    document.getElementById('iplus').innerHTML = " ";
  
  }
  
  function clearEdgePlus() {
    document.getElementById('meplus').innerHTML = " ";
    document.getElementById('seplus').innerHTML = " ";
    document.getElementById('ieplus').innerHTML = " ";
  
  }
  
  function clearThem() {
        document.getElementById('ta1').innerHTML = "";
        document.getElementById('ta2').innerHTML = "";
        document.getElementById('ta3').innerHTML = "";
        document.getElementById('ta4').innerHTML = "";
        document.getElementById('ta5').innerHTML = "";
        document.getElementById('ta6').innerHTML = "";
        document.getElementById('ta7').innerHTML = "";
        document.getElementById('ta8').innerHTML = "";
        document.getElementById('ta9').innerHTML = "";
        document.getElementById('ta10').innerHTML = "";
        document.getElementById('ta11').innerHTML = "";
        document.getElementById('ta12').innerHTML = "";
        document.getElementById('ta13').innerHTML = "";
        document.getElementById('ta14').innerHTML = "";
        document.getElementById('ta15').innerHTML = "";
        document.getElementById('ta16').innerHTML = "";
        document.getElementById('ta17').innerHTML = "";
        document.getElementById('ta18').innerHTML = "";
        document.getElementById('ta19').innerHTML = "";
        document.getElementById('ta20').innerHTML = "";
        document.getElementById('ta21').innerHTML = "";
  //      document.getElementById('ta22').innerHTML = "";
  //      document.getElementById('ta23').innerHTML = "";
  //      document.getElementById('ta24').innerHTML = "";
        document.getElementById('choose2').innerHTML = "<br />";
  }
  
  function calculateIt() {
    var text;
    var strDesc = document.getElementById("descriptor").value;
    var strType = document.getElementById("type").value;
    var strFocus = document.getElementById("focus").value;
    var strFlavor = document.getElementById("flavor").value;
    var nMight = 0;
    var nSpeed = 0;
    var nInt = 0;
    var nExtra = 6;
    var nME = 0;
    var nSE = 0;
    var nIE = 0;
    var nXE = 0;
    var nShins = 0;
    var nCyphers = 2;
    var strEquipment = "<br /><b>Equipment</b><br />";
    var strSkills = "<b>Skills (Trained)</b><br />";
    var strInabs = "<br /><b>Inabilities</b><br />";
    var strPows = "<b>Specials</b><br />";
  
    document.getElementById('tas').value = 4;
    document.getElementById('mplus').innerHTML = "+";
    document.getElementById('splus').innerHTML = "+";
    document.getElementById('iplus').innerHTML = "+";
  
    document.getElementById('mlabel').innerHTML = "Might:";
    document.getElementById('melabel').innerHTML = "M-Edge:";
    document.getElementById('slabel').innerHTML = "Speed:";
    document.getElementById('selabel').innerHTML = "S-Edge:";
    document.getElementById('ilabel').innerHTML = "Intellect:";
    document.getElementById('ielabel').innerHTML = "I-Edge:";
  
    document.getElementById('poolun').innerHTML = "Unassigned:";
    document.getElementById('edgeun').innerHTML = "&nbsp; &nbsp; &nbsp; Unassigned:";
    document.getElementById('poolshdr').innerHTML = "<b>Pools&nbsp;</b>";
    document.getElementById('edgeshdr').innerHTML = "<b>Edges&nbsp;</b>";
  
    switch(strType) {    
      case "glaive":
        nMight = 10;
        nSpeed = 10;
        nInt = 8;
        nXE = 1;
        strEquipment = strEquipment + "2 weapons<br />1 expensive item<br />2 moderate-priced items<br />4 inexpensive items<br />";
        strPows = strPows + "Practiced w/ all weapons<br />";
        document.getElementById('ta1').innerHTML = "Improved Edge (enabler)<br />";
        document.getElementById('ta2').innerHTML = "Bash (1 Mt, action)<br />";
        document.getElementById('ta3').innerHTML = "Trained w/o Armor (enabler)<br />";
        document.getElementById('ta4').innerHTML = "Practiced in armor (-1)<br />";
        document.getElementById('ta5').innerHTML = "Overwatch (1 In, action)<br />";
        document.getElementById('ta6').innerHTML = "Physical Skills (enabler)<br />";
        document.getElementById('ta7').innerHTML = "Swipe (1 Sp, action)<br />";
        document.getElementById('ta8').innerHTML = "No Need Weapons (enabler)<br />";
        document.getElementById('ta9').innerHTML = "Control Field (1 Mt, action)<br />";
        document.getElementById('ta10').innerHTML = "Pierce (1 Sp, action)<br />";
        document.getElementById('ta11').innerHTML = "Quick Throw (2 Sp, action)<br />";
        document.getElementById('ta12').innerHTML = "";
        document.getElementById('ta13').innerHTML = "";
        document.getElementById('ta14').innerHTML = "";
        document.getElementById('ta15').innerHTML = "";
        document.getElementById('choose2').innerHTML = "<br /><b>Choose 4 Warrior Abilities</b><br />";
        document.getElementById('meplus').innerHTML = "+";
        document.getElementById('seplus').innerHTML = "+";
        document.getElementById('reserved').innerHTML = "<b>Player Intrusions</b><br />Perfect Setup<br />Old Friend<br />Weapon Break<br /> <br />";
        break;
      case "nano":
        nMight = 7;
        nSpeed = 9;
        nInt = 12;
        nIE = 1;
        nCyphers = 3;
        strEquipment = strEquipment + "2 expensive items<br />2 moderate-priced items<br />4 inexpensive items<br />";
        document.getElementById('ta1').innerHTML = "Ward (enabler)<br />";
        document.getElementById('ta2').innerHTML = "Onslaught (1 Int, action)<br />";
        document.getElementById('ta3').innerHTML = "Magic Training (enabler)<br />";
        document.getElementById('ta4').innerHTML = "Shatter (2 Int, action)<br />";
        document.getElementById('ta5').innerHTML = "Reso. Field (1 Int, action)<br />";
        document.getElementById('ta6').innerHTML = "Erase Memories (3 Int, action)<br />";
        document.getElementById('ta7').innerHTML = "Distortion (2 Int, action)<br />";
        document.getElementById('ta8').innerHTML = "Far Step (2 Int, action)<br />";
        document.getElementById('ta9').innerHTML = "Hedge Magic (1 Int, action)<br />";
        document.getElementById('ta10').innerHTML = "Push (2 Int, action)<br />";
        document.getElementById('ta11').innerHTML = "Scan (2 Int, action)<br />";
        document.getElementById('ta12').innerHTML = "";
        document.getElementById('ta13').innerHTML = "";
        document.getElementById('ta14').innerHTML = "";
        document.getElementById('ta15').innerHTML = "";
        document.getElementById('choose2').innerHTML = "<br /><b>Choose 4 Adept Abilities</b><br />";
        document.getElementById('reserved').innerHTML = "<b>Player Intrusions</b><br />Advantageous Malfunction<br />Convenient Idea<br />Inexplicably Unbroken<br /> <br />";
        break;
      case "jack":
        nMight = 10;
        nSpeed = 10;
        nInt = 10;
        nXE = 1;
        nShins = 8;
        strEquipment = strEquipment + "2 weapons (light or med.)<br />Armor (light)<br />Pack of light tools<br />";
        strSkills = strSkills + "Choose 1 skill (not attack or def.)<br />Jack Flex skill<br />";
        strPows = strPows + "Practiced w/ med. &amp; light weapons<br />";
        document.getElementById('ta1').innerHTML = "Practiced in Armor (-1)<br />";
        document.getElementById('ta2').innerHTML = "Rope Trick (enabler)<br />";
        document.getElementById('ta3').innerHTML = "Sabotage (enabler)<br />";
        document.getElementById('ta4').innerHTML = "Skill w/ Def. (enabler)<br />";
        document.getElementById('ta5').innerHTML = "Trained w/o Armor (enabler)<br />";
        document.getElementById('ta6').innerHTML = "Vision (enabler)<br />";
        document.getElementById('ta7').innerHTML = "Bash (1 Mt, action)<br />";
        document.getElementById('ta8').innerHTML = "Thrust (1 Mt, action)<br />";
        document.getElementById('ta9').innerHTML = "Combat Ruse (1 Sp, action)<br />";
        document.getElementById('ta10').innerHTML = "Pierce (1 Sp, action)<br />";
        document.getElementById('ta11').innerHTML = "Decipher (1 Int, action)<br />";
        document.getElementById('ta12').innerHTML = "Gather Rumors (1+ Int, few hrs)";
        document.getElementById('ta13').innerHTML = "Hedge Magic (1 Int, action)<br />";
        document.getElementById('ta14').innerHTML = "Tracer (1 Int, action)<br />";
        document.getElementById('ta15').innerHTML = "";
        document.getElementById('choose2').innerHTML = "<br /><b>Choose 2 Jack Tricks o' the Trade</b><br />";
        document.getElementById('ieplus').innerHTML = "+";
        document.getElementById('meplus').innerHTML = "+";
        document.getElementById('seplus').innerHTML = "+";
        break;
      case "glint":
        nMight = 8;
        nSpeed = 9;
        nInt = 11;
        nIE = 1;
        strEquipment = strEquipment + "1 weapon<br />2 expensive items<br />2 moderate-priced items<br />4 inexpensive items<br />";
        strPows = strPows + "Practiced w/ light weapons<br />";
        document.getElementById('ta1').innerHTML = "Insp. Aggress. (2 In, action)<br />";
        document.getElementById('ta2').innerHTML = "Enthrall (1 In, action)<br />";
        document.getElementById('ta3').innerHTML = "Erase Memories (3 In, action)<br />";
        document.getElementById('ta4').innerHTML = "Encouragement (1 In, action)<br />";
        document.getElementById('ta5').innerHTML = "Fast Talk (1 In, action)<br />";
        document.getElementById('ta6').innerHTML = "Practiced w/ medium weapons<br />";
        document.getElementById('ta7').innerHTML = "2 Interac. Skills (enabler)<br />";
        document.getElementById('ta8').innerHTML = "Spin Identity (2+ In, action)<br />";
        document.getElementById('ta9').innerHTML = "Terrifying Pres. (2+ In, act.)<br />";
        document.getElementById('ta10').innerHTML = "Understanding (2 In, action)<br />";
        document.getElementById('ta11').innerHTML = "Babel (enabler)<br />";
        document.getElementById('ta12').innerHTML = "Demeanor of Command (2 In, action)<br />";
        document.getElementById('ta13').innerHTML = "Anecdote (2 In, action)<br />";
        document.getElementById('ta14').innerHTML = "";
        document.getElementById('ta15').innerHTML = "";
        document.getElementById('choose2').innerHTML = "<br /><b>Choose 4 Speaker Abilities</b><br />";
        document.getElementById('reserved').innerHTML = "<b>Player Intrusions</b><br />Friendly NPC<br />Perfect Suggestion<br />Unexpected Gift<br /> <br />";
        break;
      case "seeker":
        nMight = 10;
        nSpeed = 9;
        nInt = 9;
        nME = 1;
        nCyphers = 2;
        strEquipment = strEquipment + "1 weapon<br />2 expensive items<br />2 moderate-priced items<br />4 inexpensive items<br />";
        strPows = strPows + "Practiced w/ med. &amp; light weapons<br />";
        document.getElementById('ta1').innerHTML = "Block (3 Sp, action)<br />";
        document.getElementById('ta2').innerHTML = "Find the Way (enabler)<br />";
        document.getElementById('ta3').innerHTML = "2 Physical Skills (enabler)<br />";
        document.getElementById('ta4').innerHTML = "Practiced in Armor (-1)<br />";
        document.getElementById('ta5').innerHTML = "Trained w/o Armor (enabler)<br />";
        document.getElementById('ta6').innerHTML = "Mus. of Iron (2 Mt, enabler)<br />";
        document.getElementById('ta7').innerHTML = "Decipher (1 Int, action)<br />";
        document.getElementById('ta8').innerHTML = "Practiced w/ all weapons<br />";
        document.getElementById('ta9').innerHTML = "Improved Edge (enabler)<br />";
        document.getElementById('ta10').innerHTML = "Danger Sense (1 Sp, enabler)<br />";
        document.getElementById('ta11').innerHTML = "Endurance (enabler)<br />";
        document.getElementById('ta12').innerHTML = "Fleet of Foot (enabler)<br />";
        document.getElementById('ta13').innerHTML = "No Need Weapons (enabler)<br />";
        document.getElementById('ta14').innerHTML = "Surging Conf. (1 Mt, enabler)<br />";
        document.getElementById('ta15').innerHTML = "2 Knowledge Skills (enabler)<br />";
        document.getElementById('choose2').innerHTML = "<br /><b>Choose 4 Explorer Abilities</b><br />";
        document.getElementById('reserved').innerHTML = "<b>Player Intrusions</b><br />Fort. Malfunction<br />Serend. Landmark<br />Weak Strain<br /> <br />";
        break;
      // add the default keyword here
    }
  
    switch(strFlavor) {
     // === Cypher System "flavors" ===
      case "Stealth":
        document.getElementById('ta16').innerHTML = "Danger Sense (1 Sp, enabler)<br />";
        document.getElementById('ta17').innerHTML = "Choose 2 stealthy skills<br />";
        document.getElementById('ta18').innerHTML = "Goad (2 Mt, enabler)<br />";
        document.getElementById('ta19').innerHTML = "Legerdemain (1 Sp, action)<br />";
        document.getElementById('ta20').innerHTML = "Opportunist (enabler)<br />";
        document.getElementById('ta21').innerHTML = "";
        document.getElementById('ta22').innerHTML = "";
        document.getElementById('ta23').innerHTML = "";
        document.getElementById('ta24').innerHTML = "";
        break;
      case "Technology":
        document.getElementById('ta16').innerHTML = "Datajack (1 Int, action)<br />";
        document.getElementById('ta17').innerHTML = "Hacker (2 Int, action)<br />";
        document.getElementById('ta18').innerHTML = "Machine Interf. (2 In, enab.)<br />";
        document.getElementById('ta19').innerHTML = "Scramble Machine (2 In, act.)<br />";
        document.getElementById('ta20').innerHTML = "Choose 2 techy skills<br />";
        document.getElementById('ta21').innerHTML = "Tinker (1 Int, action)<br />";
        document.getElementById('ta22').innerHTML = "";
        document.getElementById('ta23').innerHTML = "";
        document.getElementById('ta24').innerHTML = "";
        break;
      case "Magic":
        document.getElementById('ta16').innerHTML = "Closed Mind (enabler)<br />";
        document.getElementById('ta17').innerHTML = "Entang. Force (1+ In, act.)<br />";
        document.getElementById('ta18').innerHTML = "Hedge Magic (1 Int, action)<br />";
        document.getElementById('ta19').innerHTML = "Magic Training (enabler)<br />";
        document.getElementById('ta20').innerHTML = "Mental Link (1+ In, action)<br />";
        document.getElementById('ta21').innerHTML = "Premonition (2 Int, action)<br />";
        document.getElementById('ta22').innerHTML = "Blessing OTG (special)<br />";
        document.getElementById('ta23').innerHTML = "";
        document.getElementById('ta24').innerHTML = "";
        break;
      case "Combat":
        document.getElementById('ta16').innerHTML = "Danger Sense (1 Sp, enabler)<br />";
        document.getElementById('ta17').innerHTML = "Practiced in armor (-1)<br />";
        document.getElementById('ta18').innerHTML = "Practiced w/ med. &amp; light weapons<br />";
        document.getElementById('ta19').innerHTML = "";
        document.getElementById('ta20').innerHTML = "";
        document.getElementById('ta21').innerHTML = "";
        document.getElementById('ta22').innerHTML = "";
        document.getElementById('ta23').innerHTML = "";
        document.getElementById('ta24').innerHTML = "";
        break;
      case "SkillsKnowledge":
        document.getElementById('ta16').innerHTML = "Choose 2 interaction skills<br />";
        document.getElementById('ta17').innerHTML = "Choose 2 investigative skills<br />";
        document.getElementById('ta18').innerHTML = "Choose 2 knowledge skills<br />";
        document.getElementById('ta19').innerHTML = "Choose 2 physical skills<br />";
        document.getElementById('ta20').innerHTML = "Choose 2 travel skills<br />";
        document.getElementById('ta21').innerHTML = "";
        document.getElementById('ta22').innerHTML = "";
        document.getElementById('ta23').innerHTML = "";
        document.getElementById('ta24').innerHTML = "";
        break;
      case "Vanilla":
        document.getElementById('ta16').innerHTML = "";
        document.getElementById('ta17').innerHTML = "";
        document.getElementById('ta18').innerHTML = "";
        document.getElementById('ta19').innerHTML = "";
        document.getElementById('ta20').innerHTML = "";
        document.getElementById('ta21').innerHTML = "";
        document.getElementById('ta22').innerHTML = "";
        document.getElementById('ta23').innerHTML = "";
        document.getElementById('ta24').innerHTML = "";
        break;
    }
  
    switch(strDesc) {
     // === descriptors for Revised Cypher System Character Generator ===
      case "Appealing":
        nInt = nInt +2;
        strSkills = strSkills + "Pleasant social interaction<br />Resisting persuasion/seduction<br />";
        break;
      case "Beneficent":
        strSkills = strSkills + "Pleasant soc. interact. / Gain trust<br />";
        strPows = strPows + "Generous (enabler)<br />Altruistic (enabler)<br />Helpful (enabler)<br />";
        strInabs = strInabs + "Int tasks when alone<br />Speed tasks when alone<br />";
        break;
      case "Brash":
        nSpeed = nSpeed +2;
        strSkills = strSkills + "Initiative<br />Overcoming fear/intim.<br />";
        strPows = strPows + "First Strike (enabler)<br />";
        break;
      case "Chaotic":
        nSpeed = nSpeed +4;
        strPows = strPows + "Chaotic (1/day, enabler)<br />";
        strSkills = strSkills + "Intellect Defense<br />";
        strInabs = strInabs + "Might Defense<br />";
        break;
      case "Calm":
        nInt = nInt +2;
        strPows = strPows + "Trivia (1/reco, enabler)<br />";
        strSkills = strSkills + "4 nonphysical skills<br />";
        strInabs = strInabs + "Physical attacks<br />Climbling<br />Running<br />Jumping<br />Swimming<br />";
        break;
      case "Abrasive":
        nMight = nMight +2;
        strSkills = strSkills + "See thru lies &amp; deception<br />Choose 2:<br />&nbsp; <i>(climb, run, break things, jump, swim, lockpick, stealth, repair)</i><br />";
        strInabs = strInabs + "Pleasant social interaction<br />";
        break;
      case "Half-Giant":
        nMight = nMight +4;
        strInabs = strInabs + "Initiative<br />Stealth<br />Fine manip. (e.g. lockpicking, repair)<br />";
        strPows = strPows + "Mass &amp; Strength (enabler)<br />Breaker (enabler)<br />";
        strEquipment = strEquipment + "1 add'l heavy weapon<br />";
        break;
      case "Helborn":
        nInt = nInt +2;
        strPows = strPows + "Fire-adapted (enabler)<br />Helborn Magic (special: page 259)<br/>Inner Evil (negative)<br />";
        strSkills = strSkills + "Magic &amp; underworld lore<br />";
        strInabs = strInabs + "Persuade or deceive<br />";
        break;
      case "Aggressive":
        nMight = nMight +2;
        nSpeed = nSpeed +2;
        strSkills = strSkills + "Initiative<br />";
        strPows = strPows + "First Strike (enabler)<br />";
        strInabs = strInabs + "Pleasant social interaction<br />";
        break;
      case "Altruistic":
        nMight = nMight +3;
        strPows = strPows + "Expert Helper (enabler)<br />";
        strSkills = strSkills + "Pleasant social interaction<br />";
        break;
      case "Amusing":
        nInt = nInt +2;
        strPows = strPows + "Disarm With Humor (3 Int, action)<br />";
        strSkills = strSkills + "Pleasant social interaction<br />";
        break;
      case "Charming":
        nInt = nInt +2;
        strEquipment = strEquipment + "1 add'l moderate-priced item<br />";
        strPows = strPows + "Influential Contact (NPC)<br />";
        strInabs = strInabs + "Lore, knowledge, understanding<br />Resisting mental attacks<br />";
        strSkills = strSkills + "Positive/pleasant social interaction<br />Abilities that influence minds<br />";
        break;
      case "Clever":
        nInt = nInt +2;
        strEquipment = strEquipment + "1 add'l expensive item<br />";
        strInabs = strInabs + "Lore, knowledge, understanding<br />";
        strSkills = strSkills + "Lies &amp; trickery<br />Resist mental effects<br />IDing or assessing danger<br />Assessing quality/importance/function/power<br />";
        break;
      case "Clumsy":
        nMight = nMight +2;
        nSpeed = nSpeed -2;
        strPows = strPows + "Dumb Luck (special)<br />";
        strInabs = strInabs + "Balance, grace, coordination<br />";
        strSkills = strSkills + "Pleasant social interaction when self-deprecating<br />Breaking things<br />";
        break;
      case "Craven":
        nSpeed = nSpeed +2;
        strEquipment = strEquipment + "Good luck charm<br />";
        strInabs = strInabs + "Any dangerous task attempted alone<br />Initiative<br />";
        strSkills = strSkills + "Stealth<br />Running<br />Escape danger / wheedle out of trouble<br />";
        break;
      case "Creative":
        nInt = nInt +2;
        strInabs = strInabs + "Pleasant social interaction<br />";
        strSkills = strSkills + "Creating narratives incl. deception<br />Choose 1 creative skill<br />Puzzle-solving<br />";
        break;
      case "Cruel":
        nInt = nInt +2;
        strEquipment = strEquipment + "Memento (moderated-priced)<br />";
        strPows = strPows + "Cruelty (enabler)<br />";
        strInabs = strInabs + "Ascertain motives/feelings<br />";
        strSkills = strSkills + "Deceive/intimidate/persuade others in pain<br />";
        break;
      case "Deliberate":
        nInt = nInt +4;
        strInabs = strInabs + "Speed defense<br />";
        strSkills = strSkills + "Puzzle-solving<br />See thru deception<br />Perception<br />";
        break;
      case "Devout":
        nInt = nInt +3;
        strPows = strPows + "Steadfast (enabler, 1/day)<br />";
        break;
      case "Dishonorable":
        nSpeed = nSpeed +4;
        strPows = strPows + "Just Desserts (negative)<br />";
        strInabs = strInabs + "Pleasant social interaction<br />";
        strSkills = strSkills + "Stealth<br />Deception<br />Intimidation<br />";
        break;
      case "Doomed":
        nSpeed = nSpeed +2;
        strPows = strPows + "Doom (negative)<br />";
        strSkills = strSkills + "Speed defense<br />Intellect def. vs. loss of sanity<br />Perception<br />";
        break;
      case "Driven":
        nMight = nMight +2;
        strInabs = strInabs + "Perception<br />";
        strSkills = strSkills + "Intellect defense<br />Driven Flex skill<br />";
        break;
      case "Efficient":
        nSpeed = nSpeed +2;
        strInabs = strInabs + "Deceiving others<br />";
        strSkills = strSkills + "See thru deception<br />Intellect defense<br />Perception &amp; puzzle-solving<br />";
        break;
      case "Empathic":
        nInt = nInt +4;
        strInabs = strInabs + "Intellect defense<br />";
        strSkills = strSkills + "Sense emotions/dispositions<br />Social interaction<br />";
        break;
      case "Exiled":
        nMight = nMight +2;
        strPows = strPows + "Loner (negative)<br />";
        strInabs = strInabs + "Social interaction<br />";
        strEquipment = strEquipment + "Memento from your past<br />";
        strSkills = strSkills + "Foraging &amp; hunting<br />Sneaking<br />Find safe place to rest/hide<br />";
        break;
      case "Fast":
        nSpeed = nSpeed +2;
        strPows = strPows + "Fast (enabler)<br />";
        strSkills = strSkills + "Running<br />";
        strInabs = strInabs + "Might defense<br />";
        break;
      case "Fabulous":
        nSpeed = nSpeed +2;
        strEquipment = strEquipment + "Add'l set of clothing (fabulous)<br />";
        strPows = strPows + "Artistic (special)<br />";
        strSkills = strSkills + "Creating art (any kind)<br />Speed defense<br />Pleasant social interaction<br />";
        break;
      case "Foolish":
        nInt = nInt -4;
        strPows = strPows + "Carefree (enabler)<br />Intellect Weakness (negative)<br />";
        strInabs = strInabs + "Intellect defense<br />See thru deception/illusion/traps<br />";
        break;
      case "Graceful":
        nSpeed = nSpeed +2;
        strSkills = strSkills + "Balance &amp; careful movement<br />Speed defense<br />Physical performing arts<br />";
        break;
      case "Gregarious":
        nInt = nInt +2;
        strPows = strPows + "People Person (enabler, 1/recovery)<br />Getting the Word (special)<br />";
        break;
      case "Guarded":
        nInt = nInt +2;
        strInabs = strInabs + "Deception &amp; persuasion<br />";
        strSkills = strSkills + "Discern truth / see thru deception<br />Intellect defense<br />";
        break;
      case "Hardy":
        nMight = nMight +4;
        strPows = strPows + "Fast Healer (enabler)<br />Unstoppable<br />Ponderous (negative)<br />";
        strInabs = strInabs + "Initiative<br />";
        strSkills = strSkills + "Might defense<br />";
        break;
      case "Hideous":
        nExtra = nExtra +4;
        strInabs = strInabs + "Pleasant social interaction<br />";
        strSkills = strSkills + "Fear-based interaction incl. intimidate<br />Disguise &amp; stealth<br />";
        break;
      case "Honorable":
        nMight = nMight +2;
        strSkills = strSkills + "Pleasant social interaction<br />Ascertain motive &amp; see thru lies<br />";
        break;
      case "Impulsive":
        nSpeed = nSpeed +2;
        strInabs = strInabs + "Patience, willpower, discipline<br />";
        strSkills = strSkills + "Initiative<br />Speed defense<br />";
        break;
      case "Inquisitive":
        nInt = nInt +4;
        strEquipment = strEquipment + "Three books (any subject)<br />";
        strInabs = strInabs + "Initiative<br />Notice/hear danger<br />";
        strSkills = strSkills + "Learning &amp; getting info<br />Geography &amp; history<br />";
        break;
      case "Insolent":
        nSpeed = nSpeed +2;
        strEquipment = strEquipment + "Add'l oddity<br />";
        strPows = strPows + "Goad (action)<br />";
        strInabs = strInabs + "Social interaction<br />";
        strSkills = strSkills + "Intellect defense<br />";
        break;
      case "Intelligent":
        nInt = nInt +2;
        strSkills = strSkills + "Choose 1 knowledge skill<br />Remember direct experience<br />";
        break;
      case "Intuitive":
        nInt = nInt +2;
        strPows = strPows + "Know What to Do (1/reco, enab.)<br />";
        strSkills = strSkills + "Perception<br />";
        break;
      case "Jovial":
        nInt = nInt +2;
        strSkills = strSkills + "Pleasant social interaction<br />Puzzle-solving<br />";
        break;
      case "Kind":
        nInt = nInt +2;
        strPows = strPows + "Karma (action)<br />";
        strSkills = strSkills + "Pleasant social interaction<br />Discern dispostion<br />";
        strInabs = strInabs + "Detecting falsehoods<br />";
        break;
      case "Intimidating":
        strPows = strPows + "Lower Morale (2 Int, action)<br />Cause Fear (3 Int, action)<br />";
        strSkills = strSkills + "Intimidate<br />";
        break;
      case "Learned":
        nInt = nInt +2;
        strEquipment = strEquipment + "Two books (any subject)<br />";
        strInabs = strInabs + "Charm, persuasion, etiquette<br />";
        strSkills = strSkills + "Choose 3 knowledge skills<br />";
        break;
      case "Lucky":
        strPows = strPows + "Luck Pool (special)<br />Advantage (enabler)<br />";
        break;
      case "Lonely":
        nMight = nMight +2;
        strPows = strPows + "Side Track (cont. action, 1/recovery)<br />";
        strInabs = strInabs + "Climb, run, jump, swim<br />Resist mental attacks<br />";
        strSkills = strSkills + "Choose 4 noncombat skills<br />";
        break;
      case "Mad":
        nInt = nInt +4;
        strPows = strPows + "Fits of Insight (special)<br />Erratic Behavior (negative)<br />";
        strInabs = strInabs + "Resist mental attacks<br />";
        strSkills = strSkills + "1 weird knowledge skill<br />";
        break;
      case "Manipulative":
        nInt = nInt +2;
        strPows = strPows + "Cautious (negative)<br />";
        strSkills = strSkills + "Intimidation<br />Persuasion<br />Deception<br />";
        break;
      case "Meek":
        nSpeed = nSpeed +2;
        strPows = strPows + "Easily Intimidated (negative)<br />";
        strInabs = strInabs + "Resist intimidation/threats/fear<br />";
        strSkills = strSkills + "Sneak &amp; hide<br />Choose 2 knowledge skills<br />Perception<br />Speed defense<br />";
        break;
      case "Mercurial":
        nSpeed = nSpeed +2;
        strPows = strPows + "Changeable (enabler)<br />";
        strInabs = strInabs + "Intellect defense<br />";
        strSkills = strSkills + "Deception<br />";
        break;
      case "Mysterious":
        strPows = strPows + "Confounding (1/reco, enabler)<br />";
        strInabs = strInabs + "Getting people to believe/trust<br />";
        strSkills = strSkills + "Stealth<br />Resist interrogation<br />";
        break;
      case "Mystical":
        nInt = nInt +2;
        strPows = strPows + "Sense Magic (1 minute)<br />Hedge Magic (1 Int, action)<br />";
        strInabs = strInabs + "Charm, persuasion, deception<br />";
        strSkills = strSkills + "IDing/understanding the supernatural<br />";
        break;
      case "Mechanical":
        nInt = nInt +2;
        strEquipment = strEquipment + "Various tools<br />";
        strSkills = strSkills + "IDing/understanding machines<br />Using/repairing/crafting machines<br/>";
        break;
      case "Naive":
        strPows = strPows + "Fresh (enabler)<br />";
        strInabs = strInabs + "See thru deception<br />Ascertain motive<br />";
        strSkills = strSkills + "Perception<br />Intellect defense &amp; resisting temptation<br />";
        break;
      case "Noble":
        strEquipment = strEquipment + "Lv. 2 Mount OR Servant<br />1 add'l expensive item<br />";
        strPows = strPows + "Respect (enabler)<br />Noble Contact (NPC)<br />";
        strSkills = strSkills + "Etiquette &amp; interacting w/ nobility<br />";
        break;
      case "Obsessive":
        strPows = strPows + "Your Obsession (special)<br />Enthralled (enabler)<br />Preoccupied (negative)<br />";
        break;
      case "Passionate":
        strPows = strPows + "Fever (enabler)<br />Fire Inside (enabler, 1/recovery)<br />";
        strInabs = strInabs + "Restraint or subtlety (incl. sneaking/lying)<br />";
        strSkills = strSkills + "Running, climbing, swimming<br />";
        break;
      case "Perceptive":
        nInt = nInt +2;
        strEquipment = strEquipment + "Bag of light tools<br />";
        strInabs = strInabs + "Positive social interaction<br />";
        strSkills = strSkills + "Find/notice small details<br />IDing objects &amp; remembering trivia<br />Intimidating others<br />";
        break;
      case "Polyglot":
        nInt = nInt +2;
        strPows = strPows + "Language Mastery (special)<br />";
        strInabs = strInabs + "Scientific understanding<br />";
        strSkills = strSkills + "Choose 4 languages<br />Pleasant social interaction<br />";
        break;
      case "Rebellious":
        nMight = nMight +2;
        strPows = strPows + "Headstrong (negative)<br />";
        strSkills = strSkills + "Intellect defense<br />";
        break;
      case "Resilient":
        nMight = nMight +2;
        nInt = nInt +2;
        strPows = strPows + "Recover (1/day, action)<br />";
        strInabs = strInabs + "Moving, bending, breaking things<br />Knowledge &amp; puzzle-solving<br />";
        strSkills = strSkills + "Intellect defense<br />Might defense<br />";
        break;
      case "Resourceful":
        nInt = nInt +2;
        strEquipment = strEquipment + "Bag of light tools<br />";
        strPows = strPows + "Planner (action)<br />";
        strInabs = strInabs + "Notice danger<br />";
        strSkills = strSkills + "Learning &amp; getting info<br />";
        break;
      case "Risk-Taking":
        nSpeed = nSpeed +4;
        strPows = strPows + "Press Your Luck (1/reco, enabler)<br />";
        strInabs = strInabs + "Sneak / Stay quiet<br />";
        strSkills = strSkills + "Tasks involving chance<br />";
        break;
      case "Rugged":
        strEquipment = strEquipment + "Explorer's pack<br />";
        strInabs = strInabs + "Charm, persuasion, etiquette, deception<br />";
        strSkills = strSkills + "Climb, jump, run, swim<br />Training, riding, placating natural animals<br />IDing and using natural plants<br />";
        break;
      case "Sharp-Eyed":
        strPows = strPows + "Find the Flaw (enabler)<br />";
        strSkills = strSkills + "Initiave<br />Perception<br />";
        break;
      case "Skeptical":
        nInt = nInt +2;
        strSkills = strSkills + "Identifying<br />See thru tricks (must conc.)<br />";
        break;
      case "Spiritual":
        nInt = nInt +2;
        strPows = strPows + "Helpful (action)<br />";
        strInabs = strInabs + "Initiative<br />";
        strSkills = strSkills + "Pleasant social interaction<br />Int. defense &amp; resist temptation<br />";
        break;
      case "Stealthy":
        nSpeed = nSpeed +2;
        strInabs = strInabs + "Movement-related tasks<br />";
        strSkills = strSkills + "Stealth<br />Interaction using lies/trickery<br />Abilities using illus./trickery<br />";
        break;
      case "Strong":
        nMight = nMight +4;
        strEquipment = strEquipment + "Add'l weapon (med. or heavy)<br />";
        strSkills = strSkills + "Jumping<br />Breaking things<br />";
        break;
      case "Strong-Willed":
        nInt = nInt +4;
        strInabs = strInabs + "Knowledge, memorizing, puzzle-solving<br />";
        strSkills = strSkills + "Resist mental effects<br />Tasks req. great focus/concentration<br />";
        break;
      case "Subterranean":
        nMight = nMight +2;
        strEquipment = strEquipment + "Add'l glowglobe<br />Pitons x 12<br />Add'l rope<br />";
        strPows = strPows + "Unsettled in the open (negative)<br />";
        strSkills = strSkills + "Finding your way<br />Climbing<br />Squeeze into/outta tight places<br />";
        break;
      case "Swift":
        nSpeed = nSpeed +2;
        strInabs = strInabs + "Balance<br />";
        strSkills = strSkills + "Initiative<br />Running<br />";
        break;
      case "Tongue-Tied":
        nMight = nMight +2;
        nSpeed = nSpeed +2;
        strInabs = strInabs + "Social interaction<br />Verbal communication<br />";
        strSkills = strSkills + "Perception<br />Initiative (not social)<br />";
        break;
      case "Tough":
        strEquipment = strEquipment + "Add'l weapon (light)<br />";
        strPows = strPows + "Resilient (enabler)<br />Healthy (enabler)<br />";
        strSkills = strSkills + "Might defense<br />";
        break;
      case "Vengeful":
        strEquipment = strEquipment + "Add'l weapon (medium)<br />";
        strSkills = strSkills + "Intimidation or torture<br />Finding/following tracks<br />Speed defense<br />";
        break;
      case "Vigilant":
        nInt = nInt +2;
        strEquipment = strEquipment + "Spyglass<br />";
        strSkills = strSkills + "See thru deception<br />Initiative<br />";
        break;
      case "Virtuous":
        nMight = nMight +2;
        strSkills = strSkills + "Discern motives / see thru lies<br />Intellect defense<br />";
        break;
      case "Wealthy":
        strEquipment = strEquipment + "Add'l expensive item<br />All items very fine quality</br />";
        strPows = strPows + "Connected (special)<br />Money Is No Object (enabler)<br />";
        break;
      case "Weird":
        nInt = nInt +2;
        strPows = strPows + "Distinctive Physical Quirk (special)<br />A Sense for the Weird (special)<br />";
        strInabs = strInabs + "Pleasant social interaction<br />";
        strSkills = strSkills + "Supernatural knowledge<br />";
        break;
      case "Vicious":
        strEquipment = strEquipment + "Record of grudges</br />";
        strPows = strPows + "Berserk (negative)<br />Bloodthirsty (enabler)<br />";
        strSkills = strSkills + "Tracking creatures (special: see page 58)<br />";
        break;
  
     
  
     // === genre-specific species descriptors for Cypher System 2 ===
      case "Artificially":
        nInt = nInt +4;
        nMight = nMight +3;
        nSpeed = nSpeed +3;
        strPows = strPows + "Shell (enabler)<br />Limited Recovery (negative)<br />Mechanics, Not Medicine (negative)<br />Machine (In)vulnerabilities (enabler)<br />";
        strInabs = strInabs + "Pos. social interaction w/ organics (2 steps)<br />";
        document.getElementById('notes').innerHTML = "<b>Note</b><br />The 'Artificially Intelligent' descriptor is genre-specific. Check with your GM for final approval.<br />";
        break;    
      case "Dwarf":
        nMight = nMight +2;
        strSkills = strSkills + "Tasks related to stone<br />Use of stonework &amp; mining tools<br />";
        strPows = strPows + "Practiced with axe weapons<br />Vulnerability (negative)<br />";
        strEquipment = strEquipment + "1 axe<br />";
        document.getElementById('notes').innerHTML = "<b>Note</b><br />The 'Dwarf' descriptor is genre-specific. Check with your GM for final approval.<br />";
        break;
      case "Elf":
        nSpeed = nSpeed +2;
        strSkills = strSkills + "Perception (specialized)<br />Stealth tasks<br />Stealth (natural woodlands)<br />";
        strPows = strPows + "Practiced with bow weapons<br />Long-lived (enabler)<br />Fragile (negative)<br />";
        strEquipment = strEquipment + "Bow, quiver, &amp; arrows<br />";
        document.getElementById('notes').innerHTML = "<b>Note</b><br />The 'Elf' descriptor is genre-specific. Check with your GM for final approval.<br />";
        break;
      case "Quintar":
        nInt = nInt +4;
        strSkills = strSkills + "1 Knowledge skill<br />Social interac. w/ humans<br />";
        strPows = strPows + "Difficult Rest (negative)<br />";
        document.getElementById('notes').innerHTML = "<b>Note</b><br />The 'Quintar' descriptor is genre-specific. Check with your GM for final approval.<br />";
        break;    
      case "Morlock":
        nInt = nInt +2;
        nMight = nMight +2;
        nSpeed = nSpeed +2;
        strInabs = strInabs + "Pos. social interaction w/ non-morlocks<br />";
        strPows = strPows + "Partially Metallic (enabler)<br />Repair &amp; Maint. (negative)<br />";
        document.getElementById('notes').innerHTML = "<b>Note</b><br />The 'Morlock' descriptor is genre-specific. Check with your GM for final approval.<br />";
        break;     
      case "Roach":
        nSE = nSE +1;
        strInabs = strInabs + "Pos. social interaction w/ non-roaches<br />Combat (incl. Attack &amp; Def.)<br />Defense vs disease or poison<br />";
        strPows = strPows + "Carapace (enabler)<br />Cling (enabler)<br />Glide (enabler)<br />Sense by Scent (enabler)<br />";
        document.getElementById('notes').innerHTML = "<b>Note</b><br />The 'Roach' descriptor is genre-specific. Check with your GM for final approval.<br />";
        break;   
    }
  
    switch(strFocus) {    
      case "abides":
        strPows = strPows + "Golem Body (enabler)<br />Golem Healing (negative)<br />";
        break; 
      case "awakens":
        strPows = strPows + "Dreamcraft (1 Int, action+)<br />";
        strSkills = strSkills + "Mixing sleep elixirs<br />Tasks related to sleep<br />";
        break;
      case "absorbs":
        strPows = strPows + "Absorb Kinetic Energy (1 Int, enabler)<br />Release Energy (action)<br />";
        break;
      case "abuses":
        strPows = strPows + "Choose 1 Alchemical ability<br />";
        strEquipment = strEquipment + "Journal of drug recipes<br />Ingredients and tools for mixing drugs<br />Drug doses for a few weeks<br />";
        break;
      case "battles":
        strPows = strPows + "Machine Vulnerabilities (enabler)<br />Anti-Machine Abilities (enab.)";
        strSkills = strSkills + "Robotics &amp; computers<br />";
        break;
      case "bears":
        strPows = strPows + "Shroud of Flame (1 Int, enabler)<br />";
        break;
      case "blazes":
        strPows = strPows + "Illumin. Touch (1 Int, action)";
        strSkills = strSkills + "Perception involving sight<br />";
        break;
      case "becomes":
        strPows = strPows + "Energy Skin (1 Int, enabler)<br />Release Energy Blast (action)<br />";
        break;
      case "brandishes":
        strPows = strPows + "Force Field Shield (enab.)<br />Force Bash (1 Mt, action)";
        break;
      case "buildsR":
        strPows = strPows + "Robot Assistant (enabler)<br />";
        strSkills = strSkills + "Building/repairing robots<br />";
        strEquipment = strEquipment + "Robot tool kit<br />";
        break;
      case "calculates":
        strPows = strPows + "Predictive Equation (2 Int, action)<br />";
        strSkills = strSkills + "Standard &amp; higher math<br />";
        break;
      case "carries":
        strPows = strPows + "Archer (enabler)<br />";
        strSkills = strSkills + "Crafting arrows<br />";
        strEquipment = strEquipment + "Well-made bow<br />Arrows x 24<br />";
        break;
      case "channels":
        strPows = strPows + "Blessing of the Gods (special)<br />";
        break; 
      case "charges":
        strPows = strPows + "Charge Attack (1 Speed, enabler)<br />";
        strSkills = strSkills + "Initiative<br />";
        break;  
      case "commands":
        strPows = strPows + "Telepathic (1+ Int, action)<br />";
        break; 
      case "conducts":
        strPows = strPows + "Lab Analysis (3 Int, 2d20 mins)<br />";
        strSkills = strSkills + "Choose 1 science knowledge<br />";
        break; 
      case "conceals":
        strPows = strPows + "Natural-Born Liar (enabler)<br />";
        strSkills = strSkills + "Choose 1:<br />&nbsp; <i>(disguise, decept., lockpick, pickpocket, see thru decept., sl. of hand, stealth)</i><br />";
        break; 
      case "consorts":
        strPows = strPows + "Speaker for the Dead (2+ Int, action)<br />";
        break; 
      case "constantly":
        strPows = strPows + "Improved Mutation (enabler)<br />";
        strEquipment = strEquipment + "Substances to further mutations<br />";
        break;
      case "controlsB":
        strPows = strPows + "Beast Companion (NPC pet)<br />";
        break;
      case "controlsG":
        strPows = strPows + "Hover (1 Int, action)<br />";
        break;
      case "craftsI":
        strPows = strPows + "Minor Illusion (1 Int, action)<br />";
        break;
      case "craftsUO":
        strSkills = strSkills + "Choose 2 crafting skills<br />IDing any device<br />";
        strEquipment = strEquipment + "Crafting tools<br />";
        break;
      case "dances":
        strPows = strPows + "Ribbons of Dark Matter (2 Int, action)<br />";
        break;
      case "defendsG":
        strPows = strPows + "Fortified Position (2 Mt, action)<br />Rally to Me (2 Int, action)<br />";
        strEquipment = strEquipment + "Strange device<br />";
        break;
      case "defendsW":
        strPows = strPows + "Warding Shield (enabler)<br />";
        strSkills = strSkills + "Intellect defense<br />Initiative<br />";
        strEquipment = strEquipment + "A shield<br />";
        break;
      case "descends":
        strPows = strPows + "Privileged Nobility (enabler)<br />";
        strEquipment = strEquipment + "Clothing (expensive)<br />";
        document.getElementById('ta23').innerHTML = "Retinue (NPC follower)<br />";
        break;
      case "doesnt":
        strSkills = strSkills + "Choose 2 noncombat skills<br />";
        break;
      case "drives":
        strSkills = strSkills + "Drive/repair car/truck/motorcycle<br />";
        strPows = strPows + "Drive on the Edge (enabler)<br />";
        break;
      case "delved":
        strPows = strPows + "Void Matter Infusion (enabler)<br />";
        break;
      case "devotes":
        strPows = strPows + "Fanatic (enabler)<br />";
        strSkills = strSkills + "Choose 1 knowledge skill rel. to your cause<br />";
        strEquipment = strEquipment + "Booklet related to your cause<br />";
        break;
      case "emerged":
        strPows = strPows + "Crystalline Body (enabler)<br />";
        nMight = nMight +4;
        break;
      case "employs":
        strPows = strPows + "Move Metal (1 Int, action)<br />";
        break;
      case "entertains":
        strPows = strPows + "Levity (enabler)<br />";
        break;
      case "exists2":
        strPows = strPows + "Duplicate (2 Mt, action)<br />Share Senses (enabler)<br />";
        break;
      case "existsP":
        strPows = strPows + "Walk Through Walls (2 Int, action)<br />";
        break;
      case "exploresDP":
        strSkills = strSkills + "Searching<br />Listen<br />Climbing <br />Balance <br />Jumping <br />";
        break;
      case "exploresDW":
        strPows = strPows + "Diver (enabler)<br />Hold Breath (enabler)<br />";
        strEquipment = strEquipment + "Water-breathing oddity<br />";
        document.getElementById('ta15').innerHTML = "Create Water (2 Int, action)<br />";
        break;
      case "fell":
        strPows = strPows + "Uncanny (enabler)<br />";
        strSkills = strSkills + "Choose 1 esoteric knowledge skill<br />";
        strEquipment = strEquipment + "Bit and pieces of automatons<br />";
        break;
      case "fightsD":
        strPows = strPows + "Stalker (enabler)<br />";
        strSkills = strSkills + "Tracking<br />";
        break;
      case "fightsWP":
        strPows = strPows + "Attack Flourish (enabler)<br />";
        break;
      case "flies":
        strPows = strPows + "Hover (1 Int, action)<br />";
        break;
      case "figures":
        strPows = strPows + "Applied Observation (action)<br />";
        strEquipment = strEquipment + "Journal &amp; quill<br />";
        break;
      case "focusesMM":
        strPows = strPows + "Divert Attacks (4 Int, action)<br />";
        break;
      case "focuses2":
        strPows = strPows + "Greater Fugue State (enabler)<br />Easier Change (enabler)<br />";
        break;
      case "forges":
        strPows = strPows + "Share Focus (special)<br />Bond (enabler) <br />";
        break;
      case "fusesFS":
        nMight = nMight +3;
        nSpeed = nSpeed +3;
        strPows = strPows + "Enhanced Body (enabler)<br />";
        break;
      case "fusesMM":
        nInt = nInt +3;
        strSkills = strSkills + "Choose 2 knowledge skills<br />";
        break;
      case "grows":
        strPows = strPows + "Enlarge (1+ Mt, action)<br />Freakishly Large (enabler)<br />";
        break;
      case "gazes":
        nMight = nMight +4;
        nME = nME +1;
        strEquipment = strEquipment + "Manacles<br />";
        strPows = strPows + "Natural Weapons (action)<br />";
        break;
      case "helps":
        strPows = strPows + "Friendly Help (enabler)<br />";
        strSkills = strSkills + "Initiative<br />Intellect Defense<br />";
        document.getElementById('ta23').innerHTML = "Advice from Friend (1 Int, act.)<br />";
        break;
      case "howls":
        strPows = strPows + "Beast Form (action)<br />";
        break;
      case "huntsN":
        strPows = strPows + "Tracker &amp; Hunter (enabler)<br />Nonhuman Fighter (enabler)<br />";
        break;
      case "huntsO":
        strPows = strPows + "Outcast Fighter (enabler)<br />";
        strEquipment = strEquipment + "Hunting aids<br />";
        break;
      case "huntsWGS":
        strSkills = strSkills + "Following &amp; IDing tracks<br />";
        strPows = strPows + "Attack Flourish (enabler)<br />";
        break;
      case "infiltrates":
        strSkills = strSkills + "Sensing lies<br />Sense if target will believe lies<br />Choose 2 from: <i>(disguise, deception, lockpicking, pickpocketing, see thru deception, sleight of hand, or stealth)</i><br />";
        break; 
      case "interprets":
        strSkills = strSkills + "Deception / persuasion<br />Detecting falsehoods<br />Knowledge of the law<br />";
        break;
      case "idolized":
        strSkills = strSkills + "Choose 1 creative skill you are famous for<br />";
        strPows = strPows + "Entourage (NPC followers)<br />";
        break;
      case "leads":
        strSkills = strSkills + "All social interactions<br />";
        strPows = strPows + "Good Advice (enabler)<br />";
        break;
      case "licensed":
        strPows = strPows + "Gunner (enabler)<br />Practiced w/ guns<br />";
        break;
      case "wanted":
        nSpeed = nSpeed +3;
        strPows = strPows + "Danger Sense (enabler)<br />";
        break;
      case "keeps":
        strPows = strPows + "Bound Magic Ally (NPC follower)<br />";
        break;
      case "likes":
        strPows = strPows + "Feat of Strength (1 Mt, enabler)<br />";
        strEquipment = strEquipment + "A hammer<br />";
        break;
      case "livesIW":
        nMight = nMight +3;
        strSkills = strSkills + "Choose 2: <i>(climbing, swimming, navigation, or IDing plants and creatures)</i><br />";
        break;
      case "livesOR":
        strEquipment = strEquipment + "Your explorer's pack is upgraded<br />";
        nMight = nMight +4;
        strSkills = strSkills + "Choose 1 language<br />";
        break;
      case "looks":
        strSkills = strSkills + "Healing<br />";
        strPows = strPows + "Fists of Fury (enabler)<br />";
        break;
      case "learns":
        nInt = nInt +3;
        strSkills = strSkills + "Solve problems w/ mult. solutions<br />";
        break;
      case "loves":
        strPows = strPows + "Microgravity Adept (enabler)<br />";
        strSkills = strSkills + "Choose 2: <i>(vacuum welding, algae farming, ecosystem design, circuit design, spacecraft maint./repair, or similar)</i><br />";
        document.getElementById('ta23').innerHTML = "Have Spacesuit, Will... (enab.)<br />";
        break;
      case "makes":
        strEquipment = strEquipment + "Pack of light tools<br />";
        strSkills = strSkills + "Choose 1 crafting skill<br />";
        strPows = strPows + "Improvise (3 Int, enabler)<br />";
        break;
      case "manipulates":
        strPows = strPows + "Bubble of Protection (1+ Int, action)<br />";
        break;
      case "mastersD":
        strPows = strPows + "Shield Master (enabler)<br />";
        break;
      case "mastersS":
        strPows = strPows + "Spellbook (special: see pg 260)<br />Arcane Flare (1 Int, special)";
        strEquipment = strEquipment + "Spellbook or equivalent<br />";
        break; 
      case "mastersI":
        strPows = strPows + "Influence Swarm (1 Int, action)<br />";
        break;
      case "mastersW":
        strPows = strPows + "Weapon Master (enabler)<br />";
        strEquipment = strEquipment + "A high-quality weapon<br />";
        strSkills = strSkills + "Crafting tasks rel. to chosen weapon<br />";
        break;
      case "metes":
        strSkills = strSkills + "See thru deception incl. lies<br />";
        strPows = strPows + "Designation (action)<br />";
        break;
      case "movesC":
        strSkills = strSkills + "Balancing<br />";
        nSpeed = nSpeed + 6;
        break;
      case "movesW":
        strPows = strPows + "Fleet of Foot (1+ Sp., enab.)<br />";
        nSpeed = nSpeed + 6;
        break;
      case "murders":
        strSkills = strSkills + "Stealth &amp; disguise<br />";
        strPows = strPows + "Surprise Attack (enabler)<br />";
        break;
      case "needs":
        strPows = strPows + "Fists of Fury (enabler)<br />Flesh of Stone (enabler)<br />";
        break;
      case "never":
        strPows = strPows + "Rapid Recovery (enabler)<br />Push on Through (2 Mt, enabler)<br />";
        break;
      case "operates":
        strEquipment = strEquipment + "Disguise kit<br />";
        strSkills = strSkills + "Perception<br />Deception<br />Cryptography<br />Breaking into computers<br />";
        break;
      case "performs":
        nME = nME +1;
        strEquipment = strEquipment + "Weapon (heavy)<br />";
        strSkills = strSkills + "Carrying<br />Climbing<br />Jumping<br />Smashing things<br />";
        break;
      case "pilots":
        strSkills = strSkills + "All tasks rel. to piloting starcraft<br />";
        strPows = strPows + "Flex Lore Skill (enabler)<br />";
        break;
      case "playsG":
        strSkills = strSkills + "Choose 2 noncombat skills<br />";
        strPows = strPows + "Gamer (enabler)<br />";
        break;
      case "possesses":
        strEquipment = strEquipment + "Crystal lens<br />";
        strSkills = strSkills + "Visual perception<br />";
        strPows = strPows + "Illuminating Touch (1 Int, action)<br />";
        break;
      case "provides":
        strSkills = strSkills + "Healing<br />";
        strPows = strPows + "Good Advice (1 Int, action)<br />";
        break;
      case "rages":
        strPows = strPows + "Frenzy (enabler)<br />";
        break;
      case "reforges":
        strPows = strPows + "Rapid Reforging (action)<br />";
        nExtra = nExtra + 3;
        break;
      case "rides":
        strPows = strPows + "Charge (1+ Int, action)<br />Shock (1 Int, special)<br />";
        break;
      case "runs":
        strPows = strPows + "Go Defensive (1 Int, enab.)<br />";
        break;
      case "sailed":
        strSkills = strSkills + "Sailing &amp; coastal geography<br />";
        strPows = strPows + "Ignore the Pain (enabler)<br />";
        break;
      case "scavenges":
        strSkills = strSkills + "Might Defense<br />Stealth<br />Scavenging<br />";
        break;
      case "sees":
        strPows = strPows + "See the Unseen (enabler)<br />";
        break;
      case "separates":
        strPows = strPows + "Third Eye (1 Int, action)<br />";
        break;
      case "shepherdsS":
        strPows = strPows + "Question the Spirits (2 Int, action)<br />";
        break;
      case "shepherdsC":
        strSkills = strSkills + "Persuasion/intimidation rel. to your community<br />";
        strPows = strPows + "Community Knowledge (2 Int, action)<br />";
        break;
      case "shapes":
        strPows = strPows + "Create Liquid Item (1 Int, action)<br />";
        break;
      case "shreds":
        strPows = strPows + "Phase Sprint (1+ Spd, action)<br />Disrupting Touch (1+ Mt, enab.)<br />";
        break;
      case "siphons":
        strPows = strPows + "Drain Machine (2 Int, action)<br />";
        break;
      case "speaks":
        strEquipment = strEquipment + "Intellect artifact<br />";
        strSkills = strSkills + "Scan estry. (if you have it)<br />";
        strPows = strPows + "Knowledge Tap (1 Int, action)<br />Machine Interf. (2 Int, enabler)";
        break;
      case "slays":
        strSkills = strSkills + "Monster knowledge<br />Monster languages<br />";
        strPows = strPows + "Practiced with swords<br />Monster Bane (enabler)";
        break;
      case "speaksFL":
        strSkills = strSkills + "Wilderness navigation<br />IDing plants &amp; creatures<br />";
        strPows = strPows + "Seeds of Fury (1 Int, action)<br />";
        break;
      case "solves":
        strSkills = strSkills + "Perception<br />";
        strPows = strPows + "Investigator (enabler)";
        break;
      case "stands":
        strPows = strPows + "Experienced defender<br />Practiced in Armor (-1)<br />";
        break;
      case "stares":
        strEquipment = strEquipment + "1 weapon (any kind)<br />";
        strSkills = strSkills + "Perception &amp; intimidation<br />";
        strPows = strPows + "Rally On Me (2 Int, enabler)<br />";
        break;
      case "steps":
        strEquipment = strEquipment + "Add'l explorer's pack<br />";
        strSkills = strSkills + "Alternate dimension knowledge<br />";
        strPows = strPows + "Walk Through Walls (2 Int, action)<br />";
        break;
      case "talks":
        strSkills = strSkills + "Electrical machines (all tasks)<br />";
        strPows = strPows + "Distant Interface (2 In, action)<br />";
        break;
      case "throws":
        strPows = strPows + "Precision (enabler)<br />";
        break;
      case "thunders":
        strPows = strPows + "Thunder Beam (2 Mt., action)<br />";
        break;
      case "travels":
        strPows = strPows + "Anticipation (1 Int, enabler)<br />";
        break;
      case "wasF":
        strSkills = strSkills + "Choose 2: <i>(persuade, deceive, public speaking, see thru decept., intimidate)</i><br />Choose 1 Knowledge skill<br />";
        break;
      case "ventures":
        strEquipment = strEquipment + "Small starship (w/ GM approval)<br />";
        strSkills = strSkills + "Knowledge of nearby planets<br />";
        strPows = strPows + "Air Supply (enabler)<br />";
        break;
      case "wearsSI":
        strPows = strPows + "Ice Armor (1 Int, enabler)<br />";
        break;
      case "wearsPA":
        strEquipment = strEquipment + "Powered Armor (see pg 171)<br />";
        nMight = nMight +3;
        strPows = strPows + "Powered Armor (enabler)<br />";
        break;
      case "wieldsW":
        strPows = strPows + "Savage Whip (enabler)<br />";
        strEquipment = strEquipment + "Add'l whip (disguised as belt)<br />";
        break;
      case "wieldsP":
        strEquipment = strEquipment + "Add'l book (numenera)<br />";
        nInt = nInt +5;
        break;
      case "wields2":
        strPows = strPows + "Dual Light Wield (enabler)<br />";
        break;
      case "wonders":
        strEquipment = strEquipment + "Add'l oddity<br />";
        strSkills = strSkills + "Choose 1 noncombat skill<br />";
        strPows = strPows + "Asks the Question (1 Int, action)<br />";
        break;
      case "worksFL":
        strSkills = strSkills + "Carpentry<br />Plumbing<br />Electrical Repair<br />";
        strPows = strPows + "Handy (enabler)<br />";
        break;
      case "worksS":
        strSkills = strSkills + "Computer software/programming<br />";
        strPows = strPows + "Hack the Impossible (3 Int, action)<br />";
        break;
      case "worksM":
        strPows = strPows + "Healing Touch (1 Int, action)<br />";
        break;
      case "worksBA":
        strSkills = strSkills + "Choose 2: <i>(disguise, deception, lockpicking, pickpocketing, see thru deception, sleight of hand, or stealth)</i><br />";
        break;
      case "reading":
        strSkills = strSkills + "Choose 2 noncombat skills<br />";
        break;
  
    }
  
  
    // ==== set Pools and Edges ====
    document.getElementById("might").innerHTML = nMight;
    document.getElementById("speed").innerHTML = nSpeed;
    document.getElementById("int").innerHTML = nInt;
    document.getElementById("pool").innerHTML = nExtra;
    document.getElementById("medge").innerHTML = nME;
    document.getElementById("sedge").innerHTML = nSE;
    document.getElementById("iedge").innerHTML = nIE;
    document.getElementById("edge").innerHTML = nXE;
  
    // ==== set Equipment ====
    strEquipment = strEquipment + nCyphers + " cyphers<br />Clothing (obviously)<br /><br />";
    document.getElementById("equipment").innerHTML = strEquipment;
  
    // ==== set Powers, Skills, and Inabs ====
    document.getElementById("skills").innerHTML = strSkills + "<br />";
    document.getElementById("inabilities").innerHTML = strInabs;
    document.getElementById("powers").innerHTML = strPows;
  }