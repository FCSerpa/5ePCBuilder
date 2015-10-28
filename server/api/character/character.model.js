'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CharacterSchema = new Schema({
	name: String,
	characterClass: [{name: String, specialization: String, options: [String]}],
	race: {race: String, subrace: String, options: [String]},
	background: {name: String, trait: String, ideal: String, bond: String, flaw: String},
	alignment: String,
	xp: Number,
	abilities: {str: Number, dex: Number, con: Number, intel: Number, wis: Number, cha: Number},
	gold: Number,
	equipment: {armor: [{name: String, bonus: Number, type: Number}], 
				weapon: [{name: String, damageType: String, damageDie: Number, type: Number, keywords: [String], range: Number}],
				miscelaneous: [String]},
	proficiencies: {armorType: Number, armorName: [String], weaponType: Number, weaponName: [String], tools: [String], instruments: [String], languages: [String]},
	spells: [[String], [String], [String], [String], [String], [String], [String], [String], [String], [String]],
	appearance: {eyes: String, hair: String, age: Number, height: String, Weight: String, Skin: String},
	image: String,
	share: Boolean,
	user: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Character', CharacterSchema);