'use strict';

angular.module('5ePcApp')
  .controller('CharactersNewCtrl', function ($scope, Auth, $location, Character) {
    
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.Math = window.Math;
    $scope.proficiencyBonus = 2;

    $scope.baseStr = 8;
    $scope.baseDex = 8;
    $scope.baseCon = 8;
    $scope.baseIntel = 8;
    $scope.baseWis = 8;
    $scope.baseCha = 8;

    $scope.totalStr = function(base, racial){
        $scope.character.data.abilities.str = base + racial;
    };

     $scope.totalDex = function(base, racial){
        $scope.character.data.abilities.dex = base + racial;
    };

     $scope.totalCon = function(base, racial){
        $scope.character.data.abilities.con = base + racial;
    };

     $scope.totalIntel = function(base, racial){
        $scope.character.data.abilities.intel = base + racial;
    };

     $scope.totalWis = function(base, racial){
        $scope.character.data.abilities.wis = base + racial;
    };

     $scope.totalCha = function(base, racial){
        $scope.character.data.abilities.cha = base + racial;
    };


    $scope.points = function(str, dex, con, intel, wis, cha){
    	var pointValue = 27;
    	if (str < 14){
    		pointValue = pointValue - (str - 8);
    	}else if (str > 13){
    		pointValue = pointValue - (5 + 2*(str - 13));
    	}
    	if (dex < 14){
    		pointValue = pointValue - (dex - 8);
    	}else if (dex > 13){
    		pointValue = pointValue - (5 + 2*(dex - 13));
    	}
    	if (con < 14){
    		pointValue = pointValue - (con - 8);
    	}else if (con > 13){
    		pointValue = pointValue - (5 + 2*(con - 13));
    	}
    	if (intel < 14){
    		pointValue = pointValue - (intel - 8);
    	}else if (intel > 13){
    		pointValue = pointValue - (5 + 2*(intel - 13));
    	}
    	if (wis < 14){
    		pointValue = pointValue - (wis - 8);
    	}else if (wis > 13){
    		pointValue = pointValue - (5 + 2*(wis - 13));
    	}
    	if (cha < 14){
    		pointValue = pointValue - (cha - 8);
    	}else if (cha > 13){
    		pointValue = pointValue - (5 + 2*(cha - 13));
    	}
    	return pointValue;
    };

    $scope.selectSubrace = function(line) {
        if (line === 1 && $scope.isElf()) {
            return 'High Elf';
        } else if (line === 2 && $scope.isElf()) {
            return 'Wood Elf';
        } else if (line === 1 && $scope.isDwarf()) {
            return 'Hill Dwarf';
        } else if (line === 2 && $scope.isDwarf()) {
            return 'Mountain Dwarf';
        } else if (line === 1 && $scope.isHalfling()) {
            return 'Lightfoot Halfling';
        } else if (line === 2 && $scope.isHalfling()) {
            return 'Stout Halfling';
        } 
    };

    $scope.selectSpecialization = function(line) {
        if (line === 1 && $scope.isCleric()) {
            return 'Life Domain';
        } else if (line === 1 && $scope.isFighter()) {
            return 'Champion';
        } else if (line === 1 && $scope.isRogue()) {
            return 'Thief';
        } else if (line === 1 && $scope.isWizard()) {
            return 'Evocation';
        } 
    };

    $scope.racialBonusStr = 0;
    $scope.racialBonusDex = 0;
    $scope.racialBonusCon = 0;
    $scope.racialBonusIntel = 0;
    $scope.racialBonusWis = 0;
    $scope.racialBonusCha = 0;

    $scope.isDwarf = function() {
        if ($scope.character.data.race.race === 'Dwarf'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isMountainDwarf = function() {
        if ($scope.character.data.race.subrace === 'Mountain Dwarf'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isHillDwarf = function() {
        if ($scope.character.data.race.subrace === 'Hill Dwarf'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isElf = function() {
        if ($scope.character.data.race.race === 'Elf'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isHighElf = function() {
        if ($scope.character.data.race.subrace === 'High Elf'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isWoodElf = function() {
        if ($scope.character.data.race.subrace === 'Wood Elf'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isHalfling = function() {
        if ($scope.character.data.race.race === 'Halfling'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isStoutHalfling = function() {
        if ($scope.character.data.race.subrace === 'Stout Halfling'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isLightfootHalfling = function() {
        if ($scope.character.data.race.subrace === 'Lightfoot Halfling'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isHuman = function() {
        if ($scope.character.data.race.race === 'Human'){
            return true;
        } else {
            return false;
        }
    };

    $scope.isCleric = function() {
        if ($scope.character.data.characterClass.name === 'Cleric') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isLifeDomain = function() {
        if ($scope.character.data.characterClass.specialization === 'Life Domain') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isFighter = function() {
        if ($scope.character.data.characterClass.name === 'Fighter') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isChampion = function() {
        if ($scope.character.data.characterClass.specialization === 'Champion') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isArcheryStyle = function() {
        if ($scope.character.data.characterClass.choices === 'Archery Fighting Style') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isDefenseStyle = function() {
        if ($scope.character.data.characterClass.choices === 'Defense Fighting Style') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isDuelingStyle = function() {
        if ($scope.character.data.characterClass.choices === 'Dueling Fighting Style') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isGreatWeaponStyle = function() {
        if ($scope.character.data.characterClass.choices === 'Great Weapon Fighting Style') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isProtectionStyle = function() {
        if ($scope.character.data.characterClass.choices === 'Protection Fighting Style') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isTwoWeaponStyle = function() {
        if ($scope.character.data.characterClass.choices === 'Two-Weapon Fighting Style') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isRogue = function() {
        if ($scope.character.data.characterClass.name === 'Rogue') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isThief = function() {
        if ($scope.character.data.characterClass.specialization === 'Thief') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isWizard = function() {
        if ($scope.character.data.characterClass.name === 'Wizard') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isEvoker = function() {
        if ($scope.character.data.characterClass.specialization === 'Evocation') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isAcolyte = function() {
        if ($scope.character.data.background.name === 'Acolyte') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isFolkHero = function() {
        if ($scope.character.data.background.name === 'Folk Hero') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isCriminal = function() {
        if ($scope.character.data.background.name === 'Criminal') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isSage = function() {
        if ($scope.character.data.background.name === 'Sage') {
            return true;
        } else {
            return false;
        }
    };

    $scope.isSoldier = function() {
        if ($scope.character.data.background.name === 'Soldier') {
            return true;
        } else {
            return false;
        }
    };

    $scope.getRacialBonus = function(){
        $scope.character.data.race.subrace = '';
        weaponProficiencies();
        $scope.elfSight();
        if ($scope.isElf()) {
            $scope.racialBonusDex = 2;
            $scope.racialBonusStr = 0;
            $scope.racialBonusCon = 0;
            $scope.racialBonusIntel = 0;
            $scope.racialBonusWis = 0;
            $scope.racialBonusCha = 0;
        }else if ($scope.isDwarf()) {
            $scope.racialBonusCon = 2;
            $scope.racialBonusStr = 0;
            $scope.racialBonusDex = 0;
            $scope.racialBonusIntel = 0;
            $scope.racialBonusWis = 0;
            $scope.racialBonusCha = 0;
        }else if ($scope.isHalfling()) {
            $scope.racialBonusDex = 2;
            $scope.racialBonusStr = 0;
            $scope.racialBonusCon = 0;
            $scope.racialBonusIntel = 0;
            $scope.racialBonusWis = 0;
            $scope.racialBonusCha = 0;
        }else if ($scope.isHuman()) {
            $scope.racialBonusStr = 1;
            $scope.racialBonusDex = 1;
            $scope.racialBonusCon = 1;
            $scope.racialBonusIntel = 1;
            $scope.racialBonusWis = 1;
            $scope.racialBonusCha = 1;
        }
        $scope.totalStr($scope.baseStr, $scope.racialBonusStr);
        $scope.totalDex($scope.baseDex, $scope.racialBonusDex);
        $scope.totalCon($scope.baseCon, $scope.racialBonusCon);
        $scope.totalIntel($scope.baseIntel, $scope.racialBonusIntel);
        $scope.totalWis($scope.baseWis, $scope.racialBonusWis);
        $scope.totalCha($scope.baseCha, $scope.racialBonusCha);
    };

    $scope.getSubracialBonus = function(){
        if ($scope.isHighElf()) {
            $scope.racialBonusIntel = 1;
            $scope.racialBonusWis = 0;
        } else if ($scope.isWoodElf()) {
            $scope.racialBonusWis = 1;
            $scope.racialBonusIntel = 0;
        } else if ($scope.isHillDwarf()) {
            $scope.racialBonusWis = 1;
            $scope.racialBonusStr = 0;
        } else if ($scope.isMountainDwarf()) {
            $scope.racialBonusStr = 2;
            $scope.racialBonusWis = 0;
        } else if ($scope.isLightfootHalfling()) {
            $scope.racialBonusCha = 1;
            $scope.racialBonusCon = 0;
        } else if ($scope.isStoutHalfling()) {
            $scope.racialBonusCon = 1;
            $scope.racialBonusCha = 0;
        }
        $scope.totalStr($scope.baseStr, $scope.racialBonusStr);
        $scope.totalDex($scope.baseDex, $scope.racialBonusDex);
        $scope.totalCon($scope.baseCon, $scope.racialBonusCon);
        $scope.totalIntel($scope.baseIntel, $scope.racialBonusIntel);
        $scope.totalWis($scope.baseWis, $scope.racialBonusWis);
        $scope.totalCha($scope.baseCha, $scope.racialBonusCha);
    };

    $scope.abilityBonus = function(ability){
    	return Math.floor((ability - 10)/2);
    };


    $scope.displayAbilityBonus = function(ability){
        var bonus = $scope.abilityBonus(ability);
        if (bonus >= 0) {
            return "+" + bonus;
        }
        return bonus;
    }

    $scope.skilled = function(){
        resetBackground();
    	if ($scope.isAcolyte()){
    		$scope.character.data.skills.religion = true;
    		$scope.character.data.skills.insight = true;
    	} else if ($scope.isCriminal()){
    		$scope.character.data.skills.deception = true;
    		$scope.character.data.skills.stealth = true;
    	} else if ($scope.isFolkHero()){
    		$scope.character.data.skills.animalHandling = true;
    		$scope.character.data.skills.survival = true;
    	} else if ($scope.isSage()){
    		$scope.character.data.skills.arcana = true;
    		$scope.character.data.skills.history = true;
    	} else if ($scope.isSoldier()){
    		$scope.character.data.skills.intimidation = true;
    		$scope.character.data.skills.athletics = true;
    	} getBackgroundEquipment();
    };

    $scope.getAC = function() {
        var ac = 10;
        if (!$scope.character.data.classEquipment.armor[0]) {
            ac = ac + $scope.abilityBonus($scope.character.data.abilities.dex);
        } else if ($scope.character.data.classEquipment.armor[0] === 'leather armor') {
            ac = ac + 1 + $scope.abilityBonus($scope.character.data.abilities.dex);
        } else if (($scope.character.data.classEquipment.armor[0] === 'scale mail') && ($scope.abilityBonus($scope.character.data.abilities.dex) <= 2)) {
            ac = ac + 4 + $scope.abilityBonus($scope.character.data.abilities.dex);
        } else if (($scope.character.data.classEquipment.armor[0] === 'scale mail') && ($scope.abilityBonus($scope.character.data.abilities.dex) > 2)) {
            ac = ac + 4 + 2;
        } else if ($scope.character.data.classEquipment.armor[0] === 'chain mail') {
            ac = ac + 6;
        }
        if ($scope.character.data.classEquipment.armor[1]) {
            ac = ac + 2;
        }
        if ($scope.character.data.classEquipment.armor[0] && $scope.isDefenseStyle()) {
            ac = ac + 1;
        }
        return ac;
    };

    $scope.selectTrait = function(line) {
        if (line === 1 && $scope.isSoldier()) {
            return 'I’m always polite and respectful.';
        } else if (line === 2 && $scope.isSoldier()) {
            return 'I’m haunted by memories of war. I can’t get the images of violence out of my mind.';
        } else if (line === 3 && $scope.isSoldier()) {
            return 'I’ve lost too many friends, and I’m slow to make new ones.';
        } else if (line === 4 && $scope.isSoldier()) {
            return 'I’m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.';
        } else if (line === 5 && $scope.isSoldier()) {
            return 'I can stare down a hell hound without flinching.';
        } else if (line === 6 && $scope.isSoldier()) {
            return 'I enjoy being strong and like breaking things.';
        } else if (line === 7 && $scope.isSoldier()) {
            return 'I have a crude sense of humor.';
        } else if (line === 8 && $scope.isSoldier()) {
            return 'I face problems head-on. A simple, direct solution is the best path to success.';
        } else if (line === 1 && $scope.isAcolyte()) {
            return 'I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.';
        } else if (line === 2 && $scope.isAcolyte()) {
            return 'I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.';
        } else if (line === 3 && $scope.isAcolyte()) {
            return 'I see omens in every event and action. The gods try to speak to us, we just need to listen.';
        } else if (line === 4 && $scope.isAcolyte()) {
            return 'Nothing can shake my optimistic attitude.';
        } else if (line === 5 && $scope.isAcolyte()) {
            return 'I quote (or misquote) sacred texts and proverbs in almost every situation.';
        } else if (line === 6 && $scope.isAcolyte()) {
            return 'I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.';
        } else if (line === 7 && $scope.isAcolyte()) {
            return 'I’ve enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.';
        } else if (line === 8 && $scope.isAcolyte()) {
            return 'I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world.';
        } else if (line === 1 && $scope.isCriminal()) {
            return 'I always have a plan for what to do when things go wrong.';
        } else if (line === 2 && $scope.isCriminal()) {
            return 'I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.';
        } else if (line === 3 && $scope.isCriminal()) {
            return 'The first thing I do in a new place is note the locations of everything valuable—or where such things could be hidden.';
        } else if (line === 4 && $scope.isCriminal()) {
            return 'I would rather make a new friend than a new enemy.';
        } else if (line === 5 && $scope.isCriminal()) {
            return 'I am incredibly slow to trust. Those who seem the fairest often have the most to hide.';
        } else if (line === 6 && $scope.isCriminal()) {
            return 'I don’t pay attention to the risks in a situation. Never tell me the odds.';
        } else if (line === 7 && $scope.isCriminal()) {
            return 'The best way to get me to do something is to tell me I can’t do it.';
        } else if (line === 8 && $scope.isCriminal()) {
            return 'I blow up at the slightest insult.';
        } else if (line === 1 && $scope.isFolkHero()) {
            return 'I judge people by their actions, not their words.';
        } else if (line === 2 && $scope.isFolkHero()) {
            return 'If someone is in trouble, I’m always ready to lend help.';
        } else if (line === 3 && $scope.isFolkHero()) {
            return 'When I set my mind to something, I follow through no matter what gets in my way.';
        } else if (line === 4 && $scope.isFolkHero()) {
            return 'I have a strong sense of fair play and always try to find the most equitable solution to arguments.';
        } else if (line === 5 && $scope.isFolkHero()) {
            return 'I’m confident in my own abilities and do what I can to instill confidence in others.';
        } else if (line === 6 && $scope.isFolkHero()) {
            return 'Thinking is for other people. I prefer action.';
        } else if (line === 7 && $scope.isFolkHero()) {
            return 'I misuse long words in an attempt to sound smarter.';
        } else if (line === 8 && $scope.isFolkHero()) {
            return 'I get bored easily. When am I going to get on with my destiny?';
        } else if (line === 1 && $scope.isSage()) {
            return 'I use polysyllabic words that convey the impression of great erudition.';
        } else if (line === 2 && $scope.isSage()) {
            return 'I’ve read every book in the world’s greatest libraries— or I like to boast that I have.';
        } else if (line === 3 && $scope.isSage()) {
            return 'I’m used to helping out those who aren’t as smart as I am, and I patiently explain anything and everything to others.';
        } else if (line === 4 && $scope.isSage()) {
            return 'There’s nothing I like more than a good mystery.';
        } else if (line === 5 && $scope.isSage()) {
            return 'I’m willing to listen to every side of an argument before I make my own judgment.';
        } else if (line === 6 && $scope.isSage()) {
            return 'I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost . . . everyone . . . is . . . compared . . . to me.';
        } else if (line === 7 && $scope.isSage()) {
            return 'I am horribly, horribly awkward in social situations.';
        } else if (line === 8 && $scope.isSage()) {
            return 'I’m convinced that people are always trying to steal my secrets.';
        }
    };

    $scope.selectIdeal = function(line) {
        if (line === 1 && $scope.isSoldier()) {
            return 'Greater Good. Our lot is to lay down our lives in defense of others. (Good)';
        } else if (line === 2 && $scope.isSoldier()) {
            return 'Responsibility. I do what I must and obey just authority. (Lawful)';
        } else if (line === 3 && $scope.isSoldier()) {
            return 'Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)';
        } else if (line === 4 && $scope.isSoldier()) {
            return 'Might. In life as in war, the stronger force wins. (Evil)';
        } else if (line === 5 && $scope.isSoldier()) {
            return 'Live and Let Live. Ideals aren’t worth killing over or going to war for. (Neutral)';
        } else if (line === 6 && $scope.isSoldier()) {
            return 'Nation. My city, nation, or people are all that matter. (Any)';
        } else if (line === 1 && $scope.isAcolyte()) {
            return 'Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)';
        } else if (line === 2 && $scope.isAcolyte()) {
            return 'Charity. I always try to help those in need, no matter what the personal cost. (Good)';
        } else if (line === 3 && $scope.isAcolyte()) {
            return 'Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)';
        } else if (line === 4 && $scope.isAcolyte()) {
            return 'Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)';
        } else if (line === 5 && $scope.isAcolyte()) {
            return 'Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)';
        } else if (line === 6 && $scope.isAcolyte()) {
            return 'Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings. (Any)';
        } else if (line === 1 && $scope.isCriminal()) {
            return 'Honor. I don’t steal from others in the trade. (Lawful)';
        } else if (line === 2 && $scope.isCriminal()) {
            return 'Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)';
        } else if (line === 3 && $scope.isCriminal()) {
            return 'Charity. I steal from the wealthy so that I can help people in need. (Good)';
        } else if (line === 4 && $scope.isCriminal()) {
            return 'Greed. I will do whatever it takes to become wealthy. (Evil)';
        } else if (line === 5 && $scope.isCriminal()) {
            return 'People. I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)';
        } else if (line === 6 && $scope.isCriminal()) {
            return 'Redemption. There’s a spark of good in everyone. (Good)';
        } else if (line === 1 && $scope.isFolkHero()) {
            return 'Respect. People deserve to be treated with dignity and respect. (Good)';
        } else if (line === 2 && $scope.isFolkHero()) {
            return 'Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)';
        } else if (line === 3 && $scope.isFolkHero()) {
            return 'Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)';
        } else if (line === 4 && $scope.isFolkHero()) {
            return 'Might. If I become strong, I can take what I want— what I deserve. (Evil)';
        } else if (line === 5 && $scope.isFolkHero()) {
            return 'Sincerity. There’s no good in pretending to be something I’m not. (Neutral)';
        } else if (line === 6 && $scope.isFolkHero()) {
            return 'Destiny. Nothing and no one can steer me away from my higher calling. (Any)';
        } else if (line === 1 && $scope.isSage()) {
            return 'Knowledge. The path to power and self-improvement is through knowledge. (Neutral)';
        } else if (line === 2 && $scope.isSage()) {
            return 'Beauty. What is beautiful points us beyond itself toward what is true. (Good)';
        } else if (line === 3 && $scope.isSage()) {
            return 'Logic. Emotions must not cloud our logical thinking. (Lawful)';
        } else if (line === 4 && $scope.isSage()) {
            return 'No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)';
        } else if (line === 5 && $scope.isSage()) {
            return 'Power. Knowledge is the path to power and domination. (Evil)';
        } else if (line === 6 && $scope.isSage()) {
            return 'Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)';
        }
    };

    $scope.selectBond = function(line) {
        if (line === 1 && $scope.isSoldier()) {
            return 'I would still lay down my life for the people I served with.';
        } else if (line === 2 && $scope.isSoldier()) {
            return 'Someone saved my life on the battlefield. To this day, I will never leave a friend behind.';
        } else if (line === 3 && $scope.isSoldier()) {
            return 'My honor is my life.';
        } else if (line === 4 && $scope.isSoldier()) {
            return 'I’ll never forget the crushing defeat my company suffered or the enemies who dealt it.';
        } else if (line === 5 && $scope.isSoldier()) {
            return 'Those who fight beside me are those worth dying for.';
        } else if (line === 6 && $scope.isSoldier()) {
            return 'I fight for those who cannot fight for themselves.';
        } else if (line === 1 && $scope.isAcolyte()) {
            return 'I would die to recover an ancient relic of my faith that was lost long ago.';
        } else if (line === 2 && $scope.isAcolyte()) {
            return 'I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.';
        } else if (line === 3 && $scope.isAcolyte()) {
            return 'I owe my life to the priest who took me in when my parents died.';
        } else if (line === 4 && $scope.isAcolyte()) {
            return 'Everything I do is for the common people.';
        } else if (line === 5 && $scope.isAcolyte()) {
            return 'I will do anything to protect the temple where I served.';
        } else if (line === 6 && $scope.isAcolyte()) {
            return 'I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.';
        } else if (line === 1 && $scope.isCriminal()) {
            return 'I’m trying to pay off an old debt I owe to a generous benefactor.';
        } else if (line === 2 && $scope.isCriminal()) {
            return 'My ill-gotten gains go to support my family.';
        } else if (line === 3 && $scope.isCriminal()) {
            return 'Something important was taken from me, and I aim to steal it back.';
        } else if (line === 4 && $scope.isCriminal()) {
            return 'I will become the greatest thief that ever lived.';
        } else if (line === 5 && $scope.isCriminal()) {
            return 'I’m guilty of a terrible crime. I hope I can redeem myself for it.';
        } else if (line === 6 && $scope.isCriminal()) {
            return 'Someone I loved died because of I mistake I made. That will never happen again.';
        } else if (line === 1 && $scope.isFolkHero()) {
            return 'I have a family, but I have no idea where they are. One day, I hope to see them again.';
        } else if (line === 2 && $scope.isFolkHero()) {
            return 'I worked the land, I love the land, and I will protect the land.';
        } else if (line === 3 && $scope.isFolkHero()) {
            return 'A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.';
        } else if (line === 4 && $scope.isFolkHero()) {
            return 'My tools are symbols of my past life, and I carry them so that I will never forget my roots.';
        } else if (line === 5 && $scope.isFolkHero()) {
            return 'I protect those who cannot protect themselves.';
        } else if (line === 6 && $scope.isFolkHero()) {
            return 'I wish my childhood sweetheart had come with me to pursue my destiny.';
        } else if (line === 1 && $scope.isSage()) {
            return 'It is my duty to protect my students.';
        } else if (line === 2 && $scope.isSage()) {
            return 'I have an ancient text that holds terrible secrets that must not fall into the wrong hands.';
        } else if (line === 3 && $scope.isSage()) {
            return 'I work to preserve a library, university, scriptorium, or monastery.';
        } else if (line === 4 && $scope.isSage()) {
            return 'My life’s work is a series of tomes related to a specific field of lore.';
        } else if (line === 5 && $scope.isSage()) {
            return 'I’ve been searching my whole life for the answer to a certain question.';
        } else if (line === 6 && $scope.isSage()) {
            return 'I sold my soul for knowledge. I hope to do great deeds and win it back.';
        }
    };

    $scope.selectFlaw = function(line) {
        if (line === 1 && $scope.isSoldier()) {
            return 'The monstrous enemy we faced in battle still leaves me quivering with fear.';
        } else if (line === 2 && $scope.isSoldier()) {
            return 'I have little respect for anyone who is not a proven warrior.';
        } else if (line === 3 && $scope.isSoldier()) {
            return 'I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.';
        } else if (line === 4 && $scope.isSoldier()) {
            return 'My hatred of my enemies is blind and unreasoning.';
        } else if (line === 5 && $scope.isSoldier()) {
            return 'I obey the law, even if the law causes misery.';
        } else if (line === 6 && $scope.isSoldier()) {
            return 'I’d rather eat my armor than admit when I’m wrong.';
        } else if (line === 1 && $scope.isAcolyte()) {
            return 'I judge others harshly, and myself even more severely.';
        } else if (line === 2 && $scope.isAcolyte()) {
            return 'I put too much trust in those who wield power within my temple’s hierarchy.';
        } else if (line === 3 && $scope.isAcolyte()) {
            return 'My piety sometimes leads me to blindly trust those that profess faith in my god.';
        } else if (line === 4 && $scope.isAcolyte()) {
            return 'I am inflexible in my thinking.';
        } else if (line === 5 && $scope.isAcolyte()) {
            return 'I am suspicious of strangers and expect the worst of them.';
        } else if (line === 6 && $scope.isAcolyte()) {
            return 'Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.';
        } else if (line === 1 && $scope.isCriminal()) {
            return 'When I see something valuable, I can’t think about anything but how to steal it.';
        } else if (line === 2 && $scope.isCriminal()) {
            return 'When faced with a choice between money and my friends, I usually choose the money.';
        } else if (line === 3 && $scope.isCriminal()) {
            return 'If there’s a plan, I’ll forget it. If I don’t forget it, I’ll ignore it.';
        } else if (line === 4 && $scope.isCriminal()) {
            return 'I have a “tell” that reveals when I’m lying.';
        } else if (line === 5 && $scope.isCriminal()) {
            return 'I turn tail and run when things look bad.';
        } else if (line === 6 && $scope.isCriminal()) {
            return 'An innocent person is in prison for a crime that I committed. I’m okay with that.';
        } else if (line === 1 && $scope.isFolkHero()) {
            return 'The tyrant who rules my land will stop at nothing to see me killed.';
        } else if (line === 2 && $scope.isFolkHero()) {
            return 'I’m convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.';
        } else if (line === 3 && $scope.isFolkHero()) {
            return 'The people who knew me when I was young know my shameful secret, so I can never go home again.';
        } else if (line === 4 && $scope.isFolkHero()) {
            return 'I have a weakness for the vices of the city, especially hard drink.';
        } else if (line === 5 && $scope.isFolkHero()) {
            return 'Secretly, I believe that things would be better if I were a tyrant lording over the land.';
        } else if (line === 6 && $scope.isFolkHero()) {
            return 'I have trouble trusting in my allies.';
        } else if (line === 1 && $scope.isSage()) {
            return 'I am easily distracted by the promise of information.';
        } else if (line === 2 && $scope.isSage()) {
            return 'Most people scream and run when they see a demon. I stop and take notes on its anatomy.';
        } else if (line === 3 && $scope.isSage()) {
            return 'Unlocking an ancient mystery is worth the price of a civilization.';
        } else if (line === 4 && $scope.isSage()) {
            return 'I overlook obvious solutions in favor of complicated ones.';
        } else if (line === 5 && $scope.isSage()) {
            return 'I speak without really thinking through my words, invariably insulting others.';
        } else if (line === 6 && $scope.isSage()) {
            return 'I can’t keep a secret to save my life, or anyone else’s.';
        }
    };

    function resetBackground() {
        $scope.character.data.skills.intimidation = false;
        $scope.character.data.skills.athletics = false;
        $scope.character.data.skills.insight = false;
        $scope.character.data.skills.religion = false;
        $scope.character.data.skills.deception = false;
        $scope.character.data.skills.stealth = false;
        $scope.character.data.skills.animalHandling = false;
        $scope.character.data.skills.survival = false;
        $scope.character.data.skills.arcana = false;
        $scope.character.data.skills.history = false;
        $scope.character.data.background.trait = '';
        $scope.character.data.background.bond = '';
        $scope.character.data.background.ideal = '';
        $scope.character.data.background.flaw = '';
        $scope.character.data.backgroundEquipment = [];
    }

    function getBackgroundEquipment() {
        if ($scope.isAcolyte()) {
            $scope.character.data.backgroundEquipment.push('holy symbol', 'prayer book or prayer wheel', '5 sticks of incense', 'vestments', 'set of common clothes', 'belt pouch containing 15 gp');
        } else if ($scope.isCriminal()) {
            $scope.character.data.backgroundEquipment.push('crowbar', 'set of dark common clothes', 'including a hood', 'belt pouch containing 15 gp');
        } else if ($scope.isFolkHero()) {
            $scope.character.data.backgroundEquipment.push('set of artisan’s tools (one of your choice)', 'shovel', 'iron pot', 'set of common clothes', 'belt pouch containing 10 gp');
        } else if ($scope.isSage()) {
            $scope.character.data.backgroundEquipment.push('bottle of black ink', 'quill', 'small knife', 'letter from a dead colleague posing a question you have not yet been able to answer', 'set of common clothes', 'belt pouch containing 10 gp');
        } else if ($scope.isSoldier()) {
            $scope.character.data.backgroundEquipment.push('insignia of rank', 'trophy taken from a fallen enemy (dagger, broken blade, or piece of a banner)', 'set of bone dice or deck of cards', 'set of common clothes', 'belt pouch containing 10 gp');
        }
    }

    function getClassEquipment() {
        if ($scope.isCleric()) {
            $scope.character.data.classEquipment.armor[1] = 'shield';
            //$scope.character.data.classEquipment.weapon.push();
            $scope.character.data.classEquipment.miscelaneous.push('holy symbol');
        } else if ($scope.isFighter()) {
            //$scope.character.data.classEquipment.armor.push();
            //$scope.character.data.classEquipment.weapon.push();
            //$scope.character.data.classEquipment.miscelaneous.push();
        } else if ($scope.isRogue()) {
            $scope.character.data.classEquipment.armor[0] = 'leather armor';
            $scope.character.data.classEquipment.weapon[2] = 'dagger';
            $scope.character.data.classEquipment.weapon[3] = 'dagger';
            $scope.character.data.classEquipment.miscelaneous.push('thieves\' tools');
        } else if ($scope.isWizard()) {
            //$scope.character.data.classEquipment.armor.push();
            //$scope.character.data.classEquipment.weapon.push();
            $scope.character.data.classEquipment.miscelaneous.push('spellbook');
        }
    }

    $scope.clericChoice = '';
    $scope.ifAnySimpleWeapon = false;
    $scope.clericChoiceFunc = function() {
        if ($scope.clericChoice === 'light_crossbow') {
            $scope.ifAnySimpleWeapon = false;
            $scope.character.data.classEquipment.weapon[1] = 'light_crossbow';
            $scope.character.data.classEquipment.weapon[5] = '20 bolts';
        } else if ($scope.clericChoice === 'any simple weapon') {
            $scope.ifAnySimpleWeapon = true;
        } console.log($scope.clericChoice);
    };

    $scope.fighterChoice1 = '';
    $scope.fighterChoice1Func = function() {
        if ($scope.fighterChoice1 === 'chain mail') {
            $scope.character.data.classEquipment.armor[0] = 'chain mail';
            $scope.character.data.classEquipment.weapon[0] = '';
            $scope.character.data.classEquipment.weapon[5] = '';
        } else if ($scope.fighterChoice1 === 'leather, longbow, and 20 arrows') {
            $scope.character.data.classEquipment.armor[0] = 'leather armor';
            $scope.character.data.classEquipment.weapon[0] = 'longbow';
            $scope.character.data.classEquipment.weapon[5] = '20 arrows';
        }
    };

    $scope.fighterChoice2 = '';
    $scope.isOneWeapon = false;
    $scope.isTwoWeapons = false;
    $scope.fighterChoice2Func = function() {
        if ($scope.fighterChoice2 === 'shield') {
            $scope.character.data.classEquipment.armor[1] = 'shield';
            $scope.character.data.classEquipment.weapon[2] = '';
            $scope.isOneWeapon = true;
            $scope.isTwoWeapons = false;
        } else if ($scope.fighterChoice2 === '2 weapons') {
            $scope.character.data.classEquipment.armor[1] = '';
            $scope.isOneWeapon = true;
            $scope.isTwoWeapons = true;
        } 
    };

    $scope.fighterChoice3 = '';
    $scope.fighterChoice3Func = function() {
        if ($scope.fighterChoice3 === 'crossbow') {
            $scope.character.data.classEquipment.weapon[3] = 'light_crossbow';
            $scope.character.data.classEquipment.weapon[6] = '20 bolts';
        } else if ($scope.fighterChoice3 === 'handaxes') {
            $scope.character.data.classEquipment.weapon[3] = 'handaxe';
            $scope.character.data.classEquipment.weapon[4] = 'handaxe';
            $scope.character.data.classEquipment.weapon[6] = '';
        }
    };

    $scope.rogueChoice1 = '';
    $scope.rogueChoice1Func = function() {
        if ($scope.rogueChoice1 === 'shortbow') {
            $scope.character.data.classEquipment.weapon[1] = 'shortbow';
            $scope.character.data.classEquipment.weapon[5] = '20 arrows';
        } else if ($scope.rogueChoice1 === 'shortsword') {
            $scope.character.data.classEquipment.weapon[1] = 'shortsword';
            $scope.character.data.classEquipment.weapon[5] = '';
        }
    };

    function resetClassEquipment() {
        $scope.character.data.classEquipment.armor = ['', ''];
        $scope.character.data.classEquipment.weapon = ['', '', '', '', '', '', ''];
        $scope.character.data.classEquipment.miscelaneous = [];
        $scope.character.data.classEquipment.pack = '';
    }

    $scope.printEquipment = function() {
        var gear = [];
        $scope.character.data.classEquipment.weapon.forEach(function(stuff) {
            if (stuff) {
            gear.push(stuff);
            }
        });    
        $scope.character.data.classEquipment.armor.forEach(function(stuff) {
            if (stuff) {
            gear.push(stuff);
            }
        });
        $scope.character.data.classEquipment.miscelaneous.forEach(function(stuff) {
            if (stuff) {
            gear.push(stuff);
            }
        });
        if ($scope.character.data.classEquipment.pack) {
            gear.push($scope.character.data.classEquipment.pack);
        }
        $scope.character.data.backgroundEquipment.forEach(function(stuff) {
            if (stuff) {
            gear.push(stuff);
            }
        });
        //console.log(gear);
        return gear.join(', ');
    };

    $scope.classSkill = function(skill){
    	if ((skill === 'Athletics') && (($scope.isFighter()) || ($scope.isRogue()))){
    		return false;
    	} else if ((skill === 'Acrobatics') && (($scope.isFighter()) || ($scope.isRogue()))) {
    		return false;
    	} else if ((skill === 'Sleight of Hand') && ($scope.isRogue())){
    		return false;
    	} else if ((skill === 'Stealth') && ($scope.isRogue())){
    		return false;
    	} else if ((skill === 'Arcana') && ($scope.isWizard())){
    		return false;
    	} else if ((skill === 'History') && (($scope.isWizard() || ($scope.isCleric()) || ($scope.isFighter())))){
    		return false;
    	} else if ((skill === 'Investigation') && (($scope.isWizard() || ($scope.isRogue())))){
    		return false;
    	} else if ((skill === 'Nature') && ( null )){
    		return false;
    	} else if ((skill === 'Religion') && (($scope.isWizard() || ($scope.isCleric()) || ($scope.isRogue())))){
    		return false;
    	} else if ((skill === 'Animal Handling') && ($scope.isFighter())){
    		return false;
    	} else if ((skill === 'Insight') && (($scope.isWizard() || ($scope.isCleric()) || ($scope.isFighter()) || ($scope.isRogue())))){
    		return false;
    	} else if ((skill === 'Medicine') && (($scope.isWizard() || ($scope.isWizard()) || ($scope.isCleric()) || ($scope.isRogue())))){
    		return false;
    	} else if ((skill === 'Perception') && (($scope.isFighter() || ($scope.isRogue())))){
    		return false;
    	} else if ((skill === 'Survival') && (($scope.isFighter() || ($scope.isRogue())))){
    		return false;
    	} else if ((skill === 'Deception') && ($scope.isRogue())){
    		return false;
    	} else if ((skill === 'Intimidation') && (($scope.isFighter() || ($scope.isRogue())))){
    		return false;
    	} else if ((skill === 'Performance') && ($scope.isRogue())){
    		return false;
    	} else if ((skill === 'Persuasion') && (($scope.isCleric() || ($scope.isRogue())))){
    		return false;
    	} else {
    		return true;
    	}
    };

    $scope.elfSight = function(){
    	if ($scope.isElf()){
    		$scope.character.data.skills.perception = true;
    	} else if (!$scope.isElf()){
            $scope.character.data.skills.perception = false;
        }
    };

    $scope.skillNumber = function(){
    	if ($scope.isCleric()){
    		return 2;
    	}else if ($scope.isFighter()){
    		return 2;
    	}else if ($scope.isRogue()){
    		return 4;
    	}else if ($scope.isWizard()){
    		return 2;
    	}
    };

    $scope.saved = function(){
        resetClassEquipment();
    	if ($scope.isCleric()){
    		$scope.character.data.savingThrows.wis = true;
    		$scope.character.data.savingThrows.cha = true;
    		$scope.character.data.savingThrows.str = false;
    		$scope.character.data.savingThrows.con = false;
    		$scope.character.data.savingThrows.dex = false;
    		$scope.character.data.savingThrows.intel = false;
    	} else if ($scope.isFighter()){
    		$scope.character.data.savingThrows.str = true;
    		$scope.character.data.savingThrows.con = true;
    		$scope.character.data.savingThrows.wis = false;
    		$scope.character.data.savingThrows.cha = false;
    		$scope.character.data.savingThrows.dex = false;
    		$scope.character.data.savingThrows.intel = false;
    	} else if ($scope.isRogue()){
    		$scope.character.data.savingThrows.dex = true;
    		$scope.character.data.savingThrows.intel = true;
    		$scope.character.data.savingThrows.wis = false;
    		$scope.character.data.savingThrows.cha = false;
    		$scope.character.data.savingThrows.str = false;
    		$scope.character.data.savingThrows.con = false;
    	} else if ($scope.isWizard()){
    		$scope.character.data.savingThrows.intel = true;
    		$scope.character.data.savingThrows.wis = true;
    		$scope.character.data.savingThrows.cha = false;
    		$scope.character.data.savingThrows.str = false;
    		$scope.character.data.savingThrows.con = false;
    		$scope.character.data.savingThrows.dex = false;
    	} 
        getClassEquipment();
        weaponProficiencies();
        resetSpells();
    };

    $scope.skillBonus = function(skill, ability) {
        var proficiency;
    	if (skill){
    		proficiency = 2;
    	} else {
    		proficiency = 0;
   		}
    	var bonus = $scope.abilityBonus(ability) + proficiency;
        if (bonus >= 0) {
            return "+" + bonus;
        }
        return bonus;
    };

    $scope.saveBonus = function(save, ability) {
    	var proficiency;
    	if(save){
    		proficiency = 2;
    	} else {
    		proficiency = 0;
    	}
    	var bonus = $scope.abilityBonus(ability) + proficiency;
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

    function weaponProficiencies(){
        if ($scope.isCleric()){
            $scope.character.data.proficiencies.weaponType = 0;
        } else if ($scope.isFighter()){
            $scope.character.data.proficiencies.weaponType = 1;
        } else if ($scope.isRogue()){
            $scope.character.data.proficiencies.weaponType = 0;
        } else if ($scope.isWizard()){
            $scope.character.data.proficiencies.weaponType = -1;
        }
        if ($scope.isWizard() && $scope.isElf()){
            $scope.character.data.proficiencies.weaponName =['light_crossbow', 'dagger', 'dart', 'sling', 'quarterstaff', 'longsword', 'shortsword', 'longbow', 'shortbow'];
        } else if ($scope.isWizard() && $scope.isDwarf()){
            $scope.character.data.proficiencies.weaponName =['light_crossbow', 'dagger', 'dart', 'sling', 'quarterstaff', 'battleaxe', 'handaxe', 'light_hammer', 'warhammer'];
        } else if ($scope.isWizard() && (!$scope.isDwarf() || !$scope.isElf())){
            $scope.character.data.proficiencies.weaponName =['light_crossbow', 'dagger', 'dart', 'sling', 'quarterstaff'];
        } else if ($scope.isRogue() && $scope.isElf()){
            $scope.character.data.proficiencies.weaponName = ['hand_crossbow', 'shortsword', 'longsword', 'rapier', 'longbow'];
        } else if ($scope.isRogue() && $scope.isDwarf()){
            $scope.character.data.proficiencies.weaponName = ['hand_crossbow', 'shortsword', 'longsword', 'rapier', 'battleaxe', 'handaxe', 'light_hammer', 'warhammer'];
        } else if ($scope.isRogue() && (!$scope.isDwarf() || !$scope.isElf())){
            $scope.character.data.proficiencies.weaponName = ['hand_crossbow', 'shortsword', 'longsword', 'rapier'];
        } else if ($scope.isDwarf() && $scope.isCleric()){
            $scope.character.data.proficiencies.weaponName = ['battleaxe', 'handaxe', 'light_hammer', 'warhammer'];
        } else if ($scope.isElf() && $scope.isCleric()){
            $scope.character.data.proficiencies.weaponName = ['longsword', 'shortsword', 'longbow', 'shortbow'];
        } else $scope.character.data.proficiencies.weaponName = [];
    };

    $scope.displayWeaponProficiencies = function(){
        var profs;
        if ($scope.character.data.proficiencies.weaponType === 0){
            return 'simple weapons, ' + $scope.character.data.proficiencies.weaponName.join(', ');
        }else if ($scope.character.data.proficiencies.weaponType === 1){
            return 'simple weapons and martial weapons';
        } else {
            return $scope.character.data.proficiencies.weaponName.join(', ');
        }
    }

    $scope.toHit = function(weap){
        var proficiencyBonus = 0;
        if ($scope.weapons.simple.hasOwnProperty(weap)){
            if (($scope.character.data.proficiencies.weaponType >= 0) || ($scope.character.data.proficiencies.weaponName.indexOf(weap) > -1)){
                proficiencyBonus = 2;
            }
            if ($scope.weapons.simple[weap].properties[0]){
                return proficiencyBonus + $scope.abilityBonus($scope.character.data.abilities.dex);
            }else if ($scope.weapons.simple[weap].properties[1]){
                if ($scope.character.data.abilities.dex > $scope.character.data.abilities.str){
                    return proficiencyBonus + $scope.abilityBonus($scope.character.data.abilities.dex);
                } else {
                    return proficiencyBonus + $scope.abilityBonus($scope.character.data.abilities.str);
                }
            }else {
                return proficiencyBonus + $scope.abilityBonus($scope.character.data.abilities.str);
            }
        } else if ($scope.weapons.martial.hasOwnProperty(weap)){
            if (($scope.character.data.proficiencies.weaponType >= 1) || ($scope.character.data.proficiencies.weaponName.indexOf(weap) > -1)){
                proficiencyBonus = 2;
            }
            if ($scope.weapons.martial[weap].properties[0]){
                return proficiencyBonus + $scope.abilityBonus($scope.character.data.abilities.dex);
            }else if ($scope.weapons.martial[weap].properties[1]){
                if ($scope.character.data.abilities.dex > $scope.character.data.abilities.str){
                    return proficiencyBonus + $scope.abilityBonus($scope.character.data.abilities.dex);
                } else {
                    return proficiencyBonus + $scope.abilityBonus($scope.character.data.abilities.str);
                }
            }else {
                return proficiencyBonus + $scope.abilityBonus($scope.character.data.abilities.str);
            }
        }
    };

    function resetSpells() {
        $scope.character.data.spells[0][0] = '';
        $scope.character.data.spells[0][1] = '';
        $scope.character.data.spells[0][2] = '';
        $scope.character.data.spells[0][3] = '';
        $scope.character.data.spells[0][4] = '';
        $scope.character.data.spells[1] = [];
    }

    $scope.addCharacter = function() {
        $scope.character.data.user_id = Auth.getCurrentUser()._id;
        $scope.character.data.userName = Auth.getCurrentUser().name;
        $scope.character.data.image = $scope.character.data.image || '../assets/images/profilegandalf.jpg';
        if (typeof $scope.character.data.level === 'string'){
            $scope.character.data.level = parseInt($scope.character.data.level);
        }
        if (typeof $scope.character.data.abilities.str === 'string'){
            $scope.character.data.abilities.str = parseInt($scope.character.data.abilities.str);
        }
        if (typeof $scope.character.data.abilities.dex === 'string'){
            $scope.character.data.abilities.dex = parseInt($scope.character.data.abilities.dex);
        }
        if (typeof $scope.character.data.abilities.con === 'string'){
            $scope.character.data.abilities.con = parseInt($scope.character.data.abilities.con);
        }
        if (typeof $scope.character.data.abilities.intel === 'string'){
            $scope.character.data.abilities.intel = parseInt($scope.character.data.abilities.intel);
        }
        if (typeof $scope.character.data.abilities.wis === 'string'){
            $scope.character.data.abilities.wis = parseInt($scope.character.data.abilities.wis);
        }
        if (typeof $scope.character.data.abilities.cha === 'string'){
            $scope.character.data.abilities.cha = parseInt($scope.character.data.abilities.cha);
        }
        Character.save($scope.character.data, function(){
            $location.path('/characters');
        });
    };

    $scope.reset = function(){
        $scope.character.data = {
        name: '',
        characterClass: {name: '', specialization: '', choices: ['']},
        race: {race: '', subrace: '', options: ['']},
        background: {name: '', trait: '', ideal: '', bond: '', flaw: ''},
        alignment: '',
        xp: 0,
        level: 1,
        abilities: {str: 8, dex: 8, con: 8, intel: 8, wis: 8, cha: 8},
        gold: 0,
        classEquipment: {armor: ['', ''], 
                    weapon: ['', '', '', '', '', '', ''],
                    miscelaneous: [],
                    pack: ''},
        backgroundEquipment: [],
        skills: {athletics: false, acrobatics: false, sleightOfHand: false, stealth: false, arcana: false, history: false, investigation: false, nature: false, religion: false, animalHanlding: false, insight: false, medicine: false, perception: false, survival: false, deception: false, intimidation: false, performance: false, persuasion: false},
        savingThrows: {str: false, dex: false, con: false, intel: false, wis: false, cha: false},
        proficiencies: {armorType: -1, armorName: [''], weaponType: -1, weaponName: [], tools: [''], instruments: [''], languages: ['']},
        spells: [['', '', '', '', '', ''], [], [], [], [], [], [], [], [], []],
        appearance: {eyes: '', hair: '', age: '', height: '', Weight: '', Skin: ''},
        image: '',
        share: true,
        user_id: '',
        userName: ''
        };
    };


    $scope.character = new Character();
	$scope.character.data = {
		name: '',
		characterClass: {name: '', specialization: '', choices: ['']},
		race: {race: '', subrace: '', options: ['']},
		background: {name: '', trait: '', ideal: '', bond: '', flaw: ''},
		alignment: '',
		xp: 0,
        level: 1,
		abilities: {str: 8, dex: 8, con: 8, intel: 8, wis: 8, cha: 8},
		gold: 0,
	    classEquipment: {armor: ['', ''], 
					weapon: ['', '', '', '', '', '', ''],
					miscelaneous: [],
                    pack: ''},
        backgroundEquipment: [],
		skills: {athletics: false, acrobatics: false, sleightOfHand: false, stealth: false, arcana: false, history: false, investigation: false, nature: false, religion: false, animalHanlding: false, insight: false, medicine: false, perception: false, survival: false, deception: false, intimidation: false, performance: false, persuasion: false},
		savingThrows: {str: false, dex: false, con: false, intel: false, wis: false, cha: false},
		proficiencies: {armorType: -1, armorName: [''], weaponType: -1, weaponName: [], tools: [''], instruments: [''], languages: ['']},
		spells: [['', '', '', '', '', ''], [], [], [], [], [], [], [], [], []],
		appearance: {eyes: '', hair: '', age: '', height: '', Weight: '', Skin: ''},
		image: '',
        share: true,
		user_id: '',
        userName: ''
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

angular.module('5ePcApp').factory('Character', function($resource) {
    return $resource('/api/characters/:id');

});

