window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var player = GetPlayer();

var tasks = [
    {
        name: "Client Complaint",
        score: Number(player.GetVar("CC_Total"))
    },
    {
        name: "Project Update Today",
        score: Number(player.GetVar("PU_Total"))
    },
    {
        name: "Executive Presentation",
        score: Number(player.GetVar("EP_Total"))
    }
];

// Sort highest score first
tasks.sort(function(a, b) {
    return b.score - a.score;
});

// Store rankings in Storyline variables
player.SetVar("Rank1", tasks[0].name);
player.SetVar("Rank2", tasks[1].name);
player.SetVar("Rank3", tasks[2].name);



}

window.Script2 = function()
{
  var player = GetPlayer();

// Client Complaint
var ccTotal =
    Number(player.GetVar("CC_Impact")) +
    Number(player.GetVar("CC_Deadline")) +
    Number(player.GetVar("CC_Consequence"));

player.SetVar("CC_Total", ccTotal);

// Project Update Today
var puTotal =
    Number(player.GetVar("PU_Impact")) +
    Number(player.GetVar("PU_Deadline")) +
    Number(player.GetVar("PU_Consequence"));

player.SetVar("PU_Total", puTotal);

// Executive Presentation
var epTotal =
    Number(player.GetVar("EP_Impact")) +
    Number(player.GetVar("EP_Deadline")) +
    Number(player.GetVar("EP_Consequence"));

player.SetVar("EP_Total", epTotal);
}

};
