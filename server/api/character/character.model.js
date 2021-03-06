'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CharacterSchema = new Schema({
	name: String,
	characterClass: {name: String, specialization: String, options: [String]},
	race: {race: String, subrace: String, options: [String]},
	background: {name: String, trait: String, ideal: String, bond: String, flaw: String},
	alignment: String,
	xp: Number,
	level: Number,
	abilities: {str: Number, dex: Number, con: Number, intel: Number, wis: Number, cha: Number},
	gold: Number,
	classEquipment: {armor: [String], 
				weapon: [String],
				miscelaneous: [String],
				pack: String},
	backgroundEquipment: [],
	skills: {athletics: Boolean, acrobatics: Boolean, sleightOfHand: Boolean, stealth: Boolean, arcana: Boolean, history: Boolean, investigation: Boolean, nature: Boolean, religion: Boolean, animalHanlding: Boolean, insight: Boolean, medicine: Boolean, perception: Boolean, survival: Boolean, deception: Boolean, intimidation: Boolean, performance: Boolean, persuasion: Boolean},
	savingThrows: {str: Boolean, dex: Boolean, con: Boolean, intel: Boolean, wis: Boolean, cha: Boolean},
	proficiencies: {},
	spells: {},
	appearance: {eyes: String, hair: String, age: Number, height: String, Weight: String, Skin: String},
	image: String,
	share: Boolean,
	user_id: String,
	userName: String
});

module.exports = mongoose.model('Character', CharacterSchema);