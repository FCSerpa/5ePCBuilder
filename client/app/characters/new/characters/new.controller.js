'use strict';

angular.module('5ePcApp')
  .controller('CharactersNewCtrl', function ($scope, Auth) {
    $scope.message = 'Hello';
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.Math = window.Math;
    $scope.proficiencyBonus = 2;

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

    $scope.skilled = function(background){
    	if (background === "Acolyte"){
    		$scope.character.skills.religion = true;
    		$scope.character.skills.insight = true;
    		$scope.character.skills.stealth = false;
    		$scope.character.skills.deception = false;
    		$scope.character.skills.animalHanlding = false;
    		$scope.character.skills.survival = false;
    		$scope.character.skills.arcana = false;
    		$scope.character.skills.history = false;
    		$scope.character.skills.intimidation = false;
    		$scope.character.skills.athletics = false;
    	} else if (background === "Criminal"){
    		$scope.character.skills.deception = true;
    		$scope.character.skills.stealth = true;
    		$scope.character.skills.insight = false;
    		$scope.character.skills.religion = false;
    		$scope.character.skills.animalHanlding = false;
    		$scope.character.skills.survival = false;
    		$scope.character.skills.arcana = false;
    		$scope.character.skills.history = false;
    		$scope.character.skills.intimidation = false;
    		$scope.character.skills.athletics = false;
    	} else if (background === "Folk Hero"){
    		$scope.character.skills.animalHanlding = true;
    		$scope.character.skills.survival = true;
    		$scope.character.skills.insight = false;
    		$scope.character.skills.religion = false;
    		$scope.character.skills.deception = false;
    		$scope.character.skills.stealth = false;
    		$scope.character.skills.arcana = false;
    		$scope.character.skills.history = false;
    		$scope.character.skills.intimidation = false;
    		$scope.character.skills.athletics = false;
    	} else if (background === "Sage"){
    		$scope.character.skills.arcana = true;
    		$scope.character.skills.history = true;
    		$scope.character.skills.insight = false;
    		$scope.character.skills.religion = false;
    		$scope.character.skills.deception = false;
    		$scope.character.skills.stealth = false;
    		$scope.character.skills.animalHanlding = false;
    		$scope.character.skills.survival = false;
    		$scope.character.skills.intimidation = false;
    		$scope.character.skills.athletics = false;
    	} else if (background === "Soldier"){
    		$scope.character.skills.intimidation = true;
    		$scope.character.skills.athletics = true;
    		$scope.character.skills.insight = false;
    		$scope.character.skills.religion = false;
    		$scope.character.skills.deception = false;
    		$scope.character.skills.stealth = false;
    		$scope.character.skills.animalHanlding = false;
    		$scope.character.skills.survival = false;
    		$scope.character.skills.arcana = false;
    		$scope.character.skills.history = false;
    	}
    }

    $scope.skillBonus = function(skill, ability) {
    	var proficiency;
    	if (skill){
    		proficiency = 2;
    	} else proficiency = 0;
   
    	return $scope.abilityBonus(ability) + proficiency;
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
		skills: {athletics: false, acrobatics: false, sleightOfHand: false, stealth: false, arcana: false, history: false, investigation: false, nature: false, religion: false, animalHanlding: false, insight: false, medicine: false, perception: false, survival: false, deception: false, intimidation: false, performance: false, persuasion: false},
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
