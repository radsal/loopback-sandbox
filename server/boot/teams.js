'use strict';

module.exports = function(app) {
  var postgresDs = app.dataSources.postgresDs;
  //var mongodbDs = app.dataSources.mongodbDs;
  var Teams = app.models.Teams;

  postgresDs.automigrate(function(err, result) {
  // mongodbDs.automigrate(function(err, result) {
    if (err) throw err;
    Teams.upsert({
      Name: 'Liverpool Football Club',
      Manager: 'Jurgen Klopp',
      Players: ['Phillipe Coutinho', 'Roberto Firmino', 'Adam Lallana'],
    }, function(err, result) {
      if (err) throw err;
      console.log('Result: ' + require('util').inspect(result));
    }); 
  });
  Teams.find({where: { Players:"Adam Lallana"}
      }, function(err, result) {
        if (err) throw err;
        console.log('Find Query Result: ' + require('util').inspect(result));
      });
};