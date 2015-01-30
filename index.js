
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
	"SPIES"
];

module.exports = function () {
	var surprise = surprises[Math.floor(Math.random() * surprises.length)];
	return surprise + " MOTHAFUCKA";
}