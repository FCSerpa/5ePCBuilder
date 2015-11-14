'use strict';

angular.module('5ePcApp')
  .controller('CharactersViewCtrl', function ($scope, $stateParams, User, Character) {
    $scope.character = Character.get({id:$stateParams.id});

    $scope.player = User.get({id:$scope.character.user_id});

    $scope.isDwarf = function() {
        if ($scope.character.race.race === 'Dwarf'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isMountainDwarf = function() {
        if ($scope.character.race.subrace === 'Mountain Dwarf'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isHillDwarf = function() {
        if ($scope.character.race.subrace === 'Hill Dwarf'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isElf = function() {
        if ($scope.character.race.race === 'Elf'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isHighElf = function() {
        if ($scope.character.race.subrace === 'High Elf'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isWoodElf = function() {
        if ($scope.character.race.subrace === 'Wood Elf'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isHalfling = function() {
        if ($scope.character.race.race === 'Halfling'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isStoutHalfling = function() {
        if ($scope.character.race.subrace === 'Stout Halfling'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isLightfootHalfling = function() {
        if ($scope.character.race.subrace === 'Lightfoot Halfling'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isHuman = function() {
        if ($scope.character.race.race === 'Human'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isCleric = function() {
        if ($scope.character.characterClass.name === 'Cleric') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isLifeDomain = function() {
        if ($scope.character.characterClass.specialization === 'Life Domain') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isFighter = function() {
        if ($scope.character.characterClass.name === 'Fighter') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isChampion = function() {
        if ($scope.character.characterClass.specialization === 'Champion') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isArcheryStyle = function() {
        if ($scope.character.characterClass.choices === 'Archery Fighting Style') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isDefenseStyle = function() {
        if ($scope.character.characterClass.choices === 'Defense Fighting Style') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isDuelingStyle = function() {
        if ($scope.character.characterClass.choices === 'Dueling Fighting Style') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isGreatWeaponStyle = function() {
        if ($scope.character.characterClass.choices === 'Great Weapon Fighting Style') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isProtectionStyle = function() {
        if ($scope.character.characterClass.choices === 'Protection Fighting Style') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isTwoWeaponStyle = function() {
        if ($scope.character.characterClass.choices === 'Two-Weapon Fighting Style') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isRogue = function() {
        if ($scope.character.characterClass.name === 'Rogue') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isThief = function() {
        if ($scope.character.characterClass.specialization === 'Thief') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isWizard = function() {
        if ($scope.character.characterClass.name === 'Wizard') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isEvoker = function() {
        if ($scope.character.characterClass.specialization === 'Evocation') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isAcolyte = function() {
        if ($scope.character.background.name === 'Acolyte') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isFolkHero = function() {
        if ($scope.character.background.name === 'Folk Hero') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isCriminal = function() {
        if ($scope.character.background.name === 'Criminal') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isSage = function() {
        if ($scope.character.background.name === 'Sage') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isSoldier = function() {
        if ($scope.character.background.name === 'Soldier') {
            return true;
        } else {
            return false;
        }
    };

    $scope.abilityBonus = function(ability){
    	var bonus = Math.floor((ability - 10)/2);
    	return bonus;
    };

    $scope.displayAbilityBonus = function(ability){
    	var bonus = $scope.abilityBonus(ability);
    	if (bonus >= 0) {
    		return "+" + bonus;
    	}
    	return bonus;
    }


    $scope.getAC = function() {
        var ac = 10;
        if (!$scope.character.classEquipment.armor[0]) {
            ac = ac + $scope.abilityBonus($scope.character.abilities.dex);
        } else if ($scope.character.classEquipment.armor[0] === 'leather armor') {
            ac = ac + 1 + $scope.abilityBonus($scope.character.abilities.dex);
        } else if (($scope.character.classEquipment.armor[0] === 'scale mail') && ($scope.abilityBonus($scope.character.abilities.dex) <= 2)) {
            ac = ac + 4 + $scope.abilityBonus($scope.character.abilities.dex);
        } else if (($scope.character.classEquipment.armor[0] === 'scale mail') && ($scope.abilityBonus($scope.character.abilities.dex) > 2)) {
            ac = ac + 4 + 2;
        } else if ($scope.character.classEquipment.armor[0] === 'chain mail') {
            ac = ac + 6;
        }
        if ($scope.character.classEquipment.armor[1]) {
            ac = ac + 2;
        }
        if ($scope.character.classEquipment.armor[0] && $scope.isDefenseStyle()) {
            ac = ac + 1;
        }
        return ac;
    };

    $scope.printEquipment = function() {
        var gear = [];
        $scope.character.classEquipment.weapon.forEach(function(stuff) {
            if (stuff) {
            gear.push(stuff);
            }
        });    
        $scope.character.classEquipment.armor.forEach(function(stuff) {
            if (stuff) {
            gear.push(stuff);
            }
        });
        $scope.character.classEquipment.miscelaneous.forEach(function(stuff) {
            if (stuff) {
            gear.push(stuff);
            }
        });
        if ($scope.character.classEquipment.pack) {
            gear.push($scope.character.classEquipment.pack);
        }
        $scope.character.backgroundEquipment.forEach(function(stuff) {
            if (stuff) {
            gear.push(stuff);
            }
        });
        //console.log(gear);
        return gear.join(', ');
    };

    $scope.skillBonus = function(skill, ability) {
    	var proficiency;
    	var bonus;
    	if (skill){
    		proficiency = 2;
    	} else {
    		proficiency = 0;
   		}
    	bonus = $scope.abilityBonus(ability) + proficiency;
    	if (bonus >= 0) {
    		return "+" + bonus;
    	}
    	return bonus;
    };

    $scope.saveBonus = function(save, ability) {
    	var proficiency;
    	var bonus;
    	if(save){
    		proficiency = 2;
    	} else {
    		proficiency = 0;
    	}
    	bonus = $scope.abilityBonus(ability) + proficiency;
    	if (bonus >= 0) {
    		return "+" + bonus;
    	}
    	return bonus;
    };

    $scope.speed = function(){
    	if ($scope.isDwarf() || $scope.isHalfling()){
    		return 25;
    	} else if ($scope.isWoodElf()){
    		return 35;
    	}else {
    		return 30;
    	}
    };

    $scope.maxHP = function(con){
    	var hitDie;
    	var raceMod;
    	if ($scope.isFighter()){
    		hitDie = 10;
    	}else if ($scope.isWizard()){
    		hitDie = 6;
    	} else {
    		hitDie = 8;
    	}
    	if ($scope.isHillDwarf()){
    		raceMod = 1;
    	}else {
    		raceMod = 0;
    	}
    	return hitDie + raceMod + con;
    };

    $scope.hitDie = function(){
    	if ($scope.isFighter()){
    		return '1d10';
    	} else if ($scope.isWizard()){
    		return '1d6';
    	} else {
    		return '1d8';
    	}
    };

    $scope.spells = {
        cleric: [['Guidance', 'Light', 'Resistance', 'Sacred Flame', 'Spare the Dying', 'Thaumaturgy'],
                ['Bless', 'Command', 'Cure Wounds', 'Detect Magic', 'Guiding Bolt', 'Healing Word', 'Inflict Wounds', 'Sanctuary', 'Shield of Faith']],
        wizard: [['Dancing Lights', 'Fire Bolt', 'Light', 'Mage Hand', 'Minor Illusion', 'Prestidigitation', 'Ray of Frost', 'Shocking Grasp'],
                ['Burning Hands', 'Charm Person', 'Comprehend Languages', 'Detect Magic', 'Identify', 'Mage Armor', 'Magic Missile', 'Shield', 'Silent Image', 'Sleep', 'Thunderwave']]
    };

});
