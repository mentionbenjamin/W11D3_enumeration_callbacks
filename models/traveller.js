const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journeys => journeys.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journeys => journeys.endLocation);
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map(journeys => journeys.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journeys => journeys.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journeys => journeys.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
