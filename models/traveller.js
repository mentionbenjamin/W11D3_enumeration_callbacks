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
 return this.journeys.reduce((accumulator, journey) => accumulator + journey.distance, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
   let transports = [];

   transports = this.journeys.map(journey => journey.transport);

   return transports.filter(function (value, index, self) {
     return (self.indexOf(value) === index);
   });

};


module.exports = Traveller;
