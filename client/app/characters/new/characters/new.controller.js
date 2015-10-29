'use strict';

angular.module('5ePcApp')
  .controller('CharactersNewCtrl', function ($scope, Auth) {
    $scope.message = 'Hello';
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.Math = window.Math;

    $scope.points = function(str, dex, con, intel, wis, cha){
    	var pointValue = 27;
    	if (str < 14){
    		pointValue = pointValue - (str - 8);
    	}else if (str > 13){
    		pointValue = pointValue - (5 + 2*(str - 13));
    	};
    	if (dex < 14){
    		pointValue = pointValue - (dex - 8);
    	}else if (dex > 13){
    		pointValue = pointValue - (5 + 2*(dex - 13));
    	};
    	if (con < 14){
    		pointValue = pointValue - (con - 8);
    	}else if (con > 13){
    		pointValue = pointValue - (5 + 2*(con - 13));
    	};
    	if (intel < 14){
    		pointValue = pointValue - (intel - 8);
    	}else if (intel > 13){
    		pointValue = pointValue - (5 + 2*(intel - 13));
    	};
    	if (wis < 14){
    		pointValue = pointValue - (wis - 8);
    	}else if (wis > 13){
    		pointValue = pointValue - (5 + 2*(wis - 13));
    	};
    	if (cha < 14){
    		pointValue = pointValue - (cha - 8);
    	}else if (cha > 13){
    		pointValue = pointValue - (5 + 2*(cha - 13));
    	};
    	return pointValue;
    };

    $scope.abilityBonus = function(ability){
    	return Math.floor((ability - 10)/2);
    }

    $scope.speed = function(race, subrace){
    	if (race === "Dwarf" || race === "Halfling"){
    		return 25;
    	} else if (subrace === "Wood Elf"){
    		return 35;
    	}else return 30;
    }

    $scope.maxHP = function(classs, con, subrace){
    	var hitDie;
    	var raceMod;
    	if (classs === "Fighter"){
    		hitDie = 10;
    	}else if (classs === "Wizard"){
    		hitDie = 6;
    	} else hitDie = 8;
    	if (subrace === "Hill Dwarf"){
    		raceMod = 1;
    	}else raceMod = 0;
    	return hitDie + raceMod + con;
    }

    $scope.hitDie = function(classs){
    	if (classs === "Fighter"){
    		return "1d10";
    	} else if (classs === "Wizard"){
    		return "1d6";
    	} else return "1d8";
    }

	$scope.character = {

		name: '',
		characterClass: [{name: '', specialization: String, options: [String]}],
		race: {race: '', subrace: '', options: [String]},
		background: {name: '', trait: '', ideal: '', bond: '', flaw: ''},
		alignment: '',
		xp: 0,
		abilities: {str: 8, dex: 8, con: 8, intel: 8, wis: 8, cha: 8},
		gold: 0,
		equipment: {armor: [{name: String, bonus: Number, type: Number}], 
					weapon: [{name: String, damageType: String, damageDie: Number, type: Number, keywords: [String], range: Number}],
					miscelaneous: [String]},
		skills: {acrobatics: Boolean, sleightOfHand: Boolean, stealth: Boolean, arcana: Boolean, history: Boolean, investigation: Boolean, nature: Boolean, religion: Boolean, animalHanlding: Boolean, insight: Boolean, medicine: Boolean, perception: Boolean, survival: Boolean, deception: Boolean, intimidation: Boolean, performance: Boolean, persuasion: Boolean},
		proficiencies: {armorType: Number, armorName: [String], weaponType: Number, weaponName: [String], tools: [String], instruments: [String], languages: [String]},
		spells: [[String], [String], [String], [String], [String], [String], [String], [String], [String], [String]],
		appearance: {eyes: String, hair: String, age: Number, height: String, Weight: String, Skin: String},
		image: String

		// name: '',
		// characterClass: '',
		// level: 1,
		// race: '',
		// background: '',
		// trait: '',
		// ideal: '',
		// bond: '',
		// flaw: '',
		// alignment: '',
		// player: '',
		// xp: 0,
		// str: 8,
		// dex: 8,
		// con: 8,
		// intel: 8,
		// wis: 8,
		// cha: 8,
		// gold: 0,
		// equipment: []
	};

  });
