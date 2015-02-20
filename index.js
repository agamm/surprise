
var surprises = [
	"SURPRISE",
	"SOME FRIES",
	"DAMN FILES",
	"SUPPLIES",
	"BOWTIES",
	"MADE PIE",
	"REVISE",
	"SNAKE EYES",
	"BAPTIZE",
	"MY CREYS",
	"DISGUISE",
	"SUNRISE",
	"LIES",
	"SIGNS",
	"ALL RISE",
	"LIKEWISE",
	"SOME THIGHS",
	"SPIES",
	"SOME RICE",
	"FIRST PRIZE",
	"WRONG SIZE",
];

module.exports = function () {
	var surprise = surprises[Math.floor(Math.random() * surprises.length)];
	return surprise + " MOTHAFUCKA";
}