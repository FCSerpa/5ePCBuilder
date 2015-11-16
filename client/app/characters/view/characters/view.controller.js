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

    $scope.displayLanguages = function(){
        var langs = [];
        $scope.character.proficiencies.languages.forEach(function(stuff) {
            if (stuff) {
            langs.push(stuff);
            }
        });
        return langs.join(', ');
    };

	$scope.displayWeaponProficiencies = function(){
        var profs;
        if ($scope.character.proficiencies.weaponType === 0){
            return 'simple weapons, ' + $scope.character.proficiencies.weaponName.join(', ');
        }else if ($scope.character.proficiencies.weaponType === 1){
            return 'simple weapons and martial weapons';
        } else {
            return $scope.character.proficiencies.weaponName.join(', ');
        }
    }

     $scope.displayArmorProficiencies = function() {
        var arm;
        if ($scope.character.proficiencies.armorType === 0) {
            arm = 'light armor';
        } else if ($scope.character.proficiencies.armorType === 1) {
            arm = 'light and medium armor';
        } else if ($scope.character.proficiencies.armorType === 2) {
            arm = 'light, medium, and heavy armor';
        }
        if ($scope.character.proficiencies.armorName === 'shields') {
            arm += ' and shields';
        }
        return arm;
    }

    $scope.toHit = function(weap){
        var proficiencyBonus = 0;
        if ($scope.weapons.simple.hasOwnProperty(weap)){
            if (($scope.character.proficiencies.weaponType >= 0) || ($scope.character.proficiencies.weaponName.indexOf(weap) > -1)){
                proficiencyBonus = 2;
            }
            if ($scope.weapons.simple[weap].properties[0]){
                if ( $scope.isArcheryStyle() ) {
                    return proficiencyBonus + $scope.abilityBonus($scope.character.abilities.dex) + 2;
                    } else {
                    return proficiencyBonus + $scope.abilityBonus($scope.character.abilities.dex);
                    }
            }else if ($scope.weapons.simple[weap].properties[1]){
                if ($scope.character.abilities.dex > $scope.character.abilities.str){
                    return proficiencyBonus + $scope.abilityBonus($scope.character.abilities.dex);
                } else {
                    return proficiencyBonus + $scope.abilityBonus($scope.character.abilities.str);
                }
            }else {
                return proficiencyBonus + $scope.abilityBonus($scope.character.abilities.str);
            }
        } else if ($scope.weapons.martial.hasOwnProperty(weap)){
            if (($scope.character.proficiencies.weaponType >= 1) || ($scope.character.proficiencies.weaponName.indexOf(weap) > -1)){
                proficiencyBonus = 2;
            }
            if ($scope.weapons.martial[weap].properties[0]){
                if ( $scope.isArcheryStyle() ) {
                    return proficiencyBonus + $scope.abilityBonus($scope.character.abilities.dex) + 2;
                    } else {
                    return proficiencyBonus + $scope.abilityBonus($scope.character.abilities.dex);
                    }
            }else if ($scope.weapons.martial[weap].properties[1]){
                if ($scope.character.abilities.dex > $scope.character.abilities.str){
                    return proficiencyBonus + $scope.abilityBonus($scope.character.abilities.dex);
                } else {
                    return proficiencyBonus + $scope.abilityBonus($scope.character.abilities.str);
                }
            }else {
                return proficiencyBonus + $scope.abilityBonus($scope.character.abilities.str);
            }
        }
    };

    $scope.toDamage = function(weap){
        if ($scope.weapons.simple.hasOwnProperty(weap)){
            if ($scope.weapons.simple[weap].properties[0]){
                if ($scope.abilityBonus($scope.character.abilities.dex) < 0) {
                    return $scope.weapons.simple[weap].damage + $scope.abilityBonus($scope.character.abilities.dex) + ' ' + $scope.weapons.simple[weap].damageType;
                } else {
                    return $scope.weapons.simple[weap].damage + '+' + $scope.abilityBonus($scope.character.abilities.dex) + ' ' + $scope.weapons.simple[weap].damageType;
                }
            }else if ($scope.weapons.simple[weap].properties[1]){
                if ($scope.character.abilities.dex > $scope.character.abilities.str){
                    if ($scope.abilityBonus($scope.character.abilities.dex) < 0) {
                        return $scope.weapons.simple[weap].damage + $scope.abilityBonus($scope.character.abilities.dex) + ' ' + $scope.weapons.simple[weap].damageType;
                    } else {
                        return $scope.weapons.simple[weap].damage + '+' + $scope.abilityBonus($scope.character.abilities.dex) + ' ' + $scope.weapons.simple[weap].damageType;
                    }
                } else {
                    if ($scope.abilityBonus($scope.character.abilities.str) < 0) {
                        return $scope.weapons.simple[weap].damage + $scope.abilityBonus($scope.character.abilities.str) + ' ' + $scope.weapons.simple[weap].damageType;
                    } else {
                        return $scope.weapons.simple[weap].damage + '+' + $scope.abilityBonus($scope.character.abilities.str) + ' ' + $scope.weapons.simple[weap].damageType;
                    }
                }
            }else {
                if ($scope.abilityBonus($scope.character.abilities.str) < 0) {
                    return $scope.weapons.simple[weap].damage + $scope.abilityBonus($scope.character.abilities.str) + ' ' + $scope.weapons.simple[weap].damageType;
                } else {
                    return $scope.weapons.simple[weap].damage + '+' + $scope.abilityBonus($scope.character.abilities.str) + ' ' + $scope.weapons.simple[weap].damageType;
                }
            }
        } else if ($scope.weapons.martial.hasOwnProperty(weap)){
            if ($scope.weapons.martial[weap].properties[0]){
                if ($scope.abilityBonus($scope.character.abilities.dex) < 0) {
                    return $scope.weapons.martial[weap].damage + $scope.abilityBonus($scope.character.abilities.dex) + ' ' + $scope.weapons.martial[weap].damageType;
                } else {
                    return $scope.weapons.martial[weap].damage + '+' + $scope.abilityBonus($scope.character.abilities.dex) + ' ' + $scope.weapons.martial[weap].damageType;
                }
            }else if ($scope.weapons.martial[weap].properties[1]){
                if ($scope.character.abilities.dex > $scope.character.abilities.str){
                    if ($scope.abilityBonus($scope.character.abilities.dex) < 0) {
                        return $scope.weapons.martial[weap].damage + $scope.abilityBonus($scope.character.abilities.dex) + ' ' + $scope.weapons.martial[weap].damageType;
                    } else {
                        return $scope.weapons.martial[weap].damage + '+' + $scope.abilityBonus($scope.character.abilities.dex) + ' ' + $scope.weapons.martial[weap].damageType;
                    }
                } else {
                    if ($scope.abilityBonus($scope.character.abilities.str) < 0) {
                        return $scope.weapons.martial[weap].damage + $scope.abilityBonus($scope.character.abilities.str) + ' ' + $scope.weapons.martial[weap].damageType;
                    } else {
                        return $scope.weapons.martial[weap].damage + '+' + $scope.abilityBonus($scope.character.abilities.str) + ' ' + $scope.weapons.martial[weap].damageType;
                    }
                }
            }else {
                if ($scope.abilityBonus($scope.character.abilities.str) < 0) {
                    return $scope.weapons.martial[weap].damage + $scope.abilityBonus($scope.character.abilities.str) + ' ' + $scope.weapons.martial[weap].damageType;
                } else {
                    return $scope.weapons.martial[weap].damage + '+' + $scope.abilityBonus($scope.character.abilities.str) + ' ' + $scope.weapons.martial[weap].damageType;
                }
            }
        }
    };

    $scope.weapons = {
        //properties key- [ammunition, finesse, heavy, light, loading, range, reach, special, thrown, two-handed, versatile]
        simple: {club: {name: 'club', damage: 'id4', damageType: 'bludgeoning', properties: ['', '', '', 'light', '', '', '', '', '', '', '']},
                dagger: {name: 'dagger', damage: '1d4', damageType: 'piercing', properties: ['', 'finesse', '', 'light', '', 'range 20/60', '', '', 'thrown', '', '']},
                greatclub: {name: 'greatclub', damage: '1d8', damageType: 'bludgeoning', properties: ['', '', '', '', '', '', '', '', '', 'two-handed', '']},
                handaxe: {name: 'handaxe', damage: '1d6', damageType: 'slashing', properties: ['', '', '', '', '', 'range 20/60', '', '', 'thrown', '', '']},
                javelin: {name: 'javelin', damage: '1d6', damageType: 'piercing', properties: ['', '', '', '', '', 'range 30/120', '', '', 'thrown', '', '']},
                light_hammer: {name: 'light_hammer', damage: '1d4', damageType: 'bludgeoning', properties: ['', '', '', 'light', '', 'range 20/60', '', '', 'thrown', '', '']},
                mace: {name: 'mace', damage: '1d6', damageType: 'bludgeoning', properties: ['', '', '', '', '', '', '', '', '', '', '']},
                quarterstaff: {name: 'quarterstaff', damage: '1d6', damageType: 'bludgeoning', properties: ['', '', '', '', '', '', '', '', '', '', 'versatile (1d8)']},
                sickle: {name: 'sickle', damage: '1d4', damageType: 'slashing', properties: ['', '', '', 'light', '', '', '', '', '', '', '']},
                spear: {name: 'spear', damage: '1d6', damageType: 'piercing', properties: ['', '', '', '', '', 'range 20/60', '', '', 'thrown', '', 'versatile (1d8)']},
                light_crossbow: {name: 'light_crossbow', damage: '1d8', damageType: 'piercing', properties: ['ammunition', '', '', '', 'loading', 'range 80/320', '', '', '', 'two-handed', '']},
                dart: {name: 'dart', damage: '1d4', damageType: 'piercing', properties: ['', 'finesse', '', '', '', 'range 20/60', '', '', 'thrown', '', '']},
                shortbow: {name: 'shortbow', damage: '1d6', damageType: 'piercing', properties: ['ammunition', '', '', '', '', 'range 80/320', '', '', '', 'two-handed', '']},
                sling: {name: 'sling', damage: '1d4', damageType: 'bludgeoning', properties: ['ammunition', '', '', '', '', 'range 30/120', '', '', '', '', '']}},
        martial: {battleaxe: {name: 'battleaxe', damage: '1d8', damageType: 'slashing', properties: ['', '', '', '', '', '', '', '', '', '', 'versatile (1d10)']},
                flail: {name: 'flail', damage: '1d8', damageType: 'bludgeoning', properties: ['', '', '', '', '', '', '', '', '', '', '']},
                glaive: {name: 'glaive', damage: '1d10', damageType: 'slashing', properties: ['', '', 'heavy', '', '', '', 'reach', '', '', 'two-handed', '']},
                greataxe: {name: 'greataxe', damage: '1d12', damageType: 'slashing', properties: ['', '', 'heavy', '', '', '', '', '', '', 'two-handed', '']},
                greatsword: {name: 'greatsword', damage: '2d6', damageType: 'slashing', properties: ['', '', 'heavy', '', '', '', '', '', '', 'two-handed', '']},
                halberd: {name: 'halberd', damage: '1d10', damageType: 'slashing', properties: ['', '', 'heavy', '', '', '', 'reach', '', '', 'two-handed', '']},
                lance: {name: 'lance', damage: '1d12', damageType: 'piercing', properties: ['', '', '', '', '', '', 'reach', 'special', '', '', '']},
                longsword: {name: 'longsword', damage: '1d8', damageType: 'slashing', properties: ['', '', '', '', '', '', '', '', '', '', 'versatile (1d10']},
                maul: {name: 'maul', damage: '2d6', damageType: 'bludgeoning', properties: ['', '', 'heavy', '', '', '', '', '', '', 'two-handed', '']},
                morningstar: {name: 'morningstar', damage: '1d8', damageType: 'piercing', properties: ['', '', '', '', '', '', '', '', '', '', '']},
                pike: {name: 'pike', damage: '1d10', damageType: 'piercing', properties: ['', '', 'heavy', '', '', '', 'reach', '', '', 'two-handed', '']},
                rapier: {name: 'rapier', damage: '1d8', damageType: 'piercing', properties: ['', 'finesse', '', '', '', '', '', '', '', '', '']},
                scimitar: {name: 'scimitar', damage: '1d6', damageType: 'slashing', properties: ['', 'finesse', '', 'light', '', '', '', '', '', '', '']},
                shortsword: {name: 'shortsword', damage: '1d6', damageType: 'piercing', properties: ['', 'finesse', '', 'light', '', '', '', '', '', '', '']},
                trident: {name: 'trident', damage: '1d6', damageType: 'piercing', properties: ['', '', '', '', '', 'range 20/60', '', '', 'thrown', '', 'versatile (1d8)']},
                war_pick: {name: 'war_pick', damage: '1d8', damageType: 'piercing', properties: ['', '', '', '', '', '', '', '', '', '', '']},
                warhammer: {name: 'warhammer', damage: '1d8', damageType: 'bludgeoning', properties: ['', '', '', '', '', '', '', '', '', '', 'versatile (1d10)']},
                whip: {name: 'whip', damage: '1d4', damageType: 'slashing', properties: ['', 'finesse', '', '', '', '', 'reach', '', '', '', '']},
                blowgun: {name: 'blowgun', damage: '1', damageType: 'piercing', properties: ['ammunition', '', '', '', 'loading', 'range 25/100', '', '', '', '', '']},
                hand_crossbow: {name: 'hand_crossbow', damage: '1d6', damageType: 'piercing', properties: ['ammunition', '', '', 'light', 'loading', 'range 30/120', '', '', '', '', '']},
                heavy_crossbow: {name: 'heavy_crossbow', damage: '1d10', damageType: 'piercing', properties: ['ammunition', '', 'heavy', '', 'loading', 'range 100/400', '', '', '', 'two-handed', '']},
                longbow: {name: 'longbow', damage: '1d8', damageType: 'piercing', properties: ['ammunition', '', 'heavy', '', '', 'range 150/600', '', '', '', '', '']},
                net: {name: 'net', damage: '-', damageType: '-', properties: ['', '', '', '', '', 'range 5/15', '', 'special', 'thrown', '', '']}}
    };

    $scope.spells = {
        cleric: [['Guidance', 'Light', 'Resistance', 'Sacred Flame', 'Spare the Dying', 'Thaumaturgy'],
                ['Bless', 'Command', 'Cure Wounds', 'Detect Magic', 'Guiding Bolt', 'Healing Word', 'Inflict Wounds', 'Sanctuary', 'Shield of Faith']],
        wizard: [['Dancing Lights', 'Fire Bolt', 'Light', 'Mage Hand', 'Minor Illusion', 'Prestidigitation', 'Ray of Frost', 'Shocking Grasp'],
                ['Burning Hands', 'Charm Person', 'Comprehend Languages', 'Detect Magic', 'Identify', 'Mage Armor', 'Magic Missile', 'Shield', 'Silent Image', 'Sleep', 'Thunderwave']]
    };

});
