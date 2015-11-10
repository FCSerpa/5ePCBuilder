'use strict';

var _ = require('lodash');
var Character = require('./character.model');

// Get list of characters
exports.index = function(req, res) {
  Character.find(function (err, characters) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(characters);
  });
};

// Get a single character
exports.show = function(req, res) {
  Character.findById(req.params.id, function (err, character) {
    if(err) { return handleError(res, err); }
    if(!character) { return res.status(404).send('Not Found'); }
    return res.json(character);
  });
};

// Creates a new character in the DB.
exports.create = function(req, res) {
  //Character.create(req.body, function(err, character) {
  var newCharacter = new Character(req.body);
  console.log(newCharacter);
  newCharacter.save(function (err, character) {
    //console.log(character);
    if(err) { return handleError(res, err); }
    return res.status(201).json(character);
  });
};

// Updates an existing character in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Character.findById(req.params.id, function (err, character) {
    if (err) { return handleError(res, err); }
    if(!character) { return res.status(404).send('Not Found'); }
    var updated = _.merge(character, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(character);
    });
  });
};

// Deletes a character from the DB.
exports.destroy = function(req, res) {
  Character.findById(req.params.id, function (err, character) {
    if(err) { return handleError(res, err); }
    if(!character) { return res.status(404).send('Not Found'); }
    character.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}