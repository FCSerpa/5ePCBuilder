'use strict';

angular.module('5ePcApp')
  .controller('CharactersNewCtrl', function ($scope, Auth, $http) {
    $scope.message = 'Hello';
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
        $scope.character.abilities.str = base + racial;
    };

     $scope.totalDex = function(base, racial){
        $scope.character.abilities.dex = base + racial;
    };

     $scope.totalCon = function(base, racial){
        $scope.character.abilities.con = base + racial;
    };

     $scope.totalIntel = function(base, racial){
        $scope.character.abilities.intel = base + racial;
    };

     $scope.totalWis = function(base, racial){
        $scope.character.abilities.wis = base + racial;
    };

     $scope.totalCha = function(base, racial){
        $scope.character.abilities.cha = base + racial;
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
        if (line === 1 && $scope.character.race.race === 'Elf') {
            return 'High Elf';
        } else if (line === 2 && $scope.character.race.race === 'Elf') {
            return 'Wood Elf';
        } else if (line === 1 && $scope.character.race.race === 'Dwarf') {
            return 'Hill Dwarf';
        } else if (line === 2 && $scope.character.race.race === 'Dwarf') {
            return 'Mountain Dwarf';
        } else if (line === 1 && $scope.character.race.race === 'Halfling') {
            return 'Lightfoot Halfling';
        } else if (line === 2 && $scope.character.race.race === 'Halfling') {
            return 'Stout Halfling';
        } 
    };

    $scope.selectTrait = function(line) {
        if (line === 1 && $scope.character.background.name === 'Soldier') {
            return 'I’m always polite and respectful.';
        } else if (line === 2 && $scope.character.background.name === 'Soldier') {
            return 'I’m haunted by memories of war. I can’t get the images of violence out of my mind.';
        } else if (line === 3 && $scope.character.background.name === 'Soldier') {
            return 'I’ve lost too many friends, and I’m slow to make new ones.';
        } else if (line === 4 && $scope.character.background.name === 'Soldier') {
            return 'I’m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.';
        } else if (line === 5 && $scope.character.background.name === 'Soldier') {
            return 'I can stare down a hell hound without flinching.';
        } else if (line === 6 && $scope.character.background.name === 'Soldier') {
            return 'I enjoy being strong and like breaking things.';
        } else if (line === 7 && $scope.character.background.name === 'Soldier') {
            return 'I have a crude sense of humor.';
        } else if (line === 8 && $scope.character.background.name === 'Soldier') {
            return 'I face problems head-on. A simple, direct solution is the best path to success.';
        } else if (line === 1 && $scope.character.background.name === 'Acolyte') {
            return 'I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.';
        } else if (line === 2 && $scope.character.background.name === 'Acolyte') {
            return 'I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.';
        } else if (line === 3 && $scope.character.background.name === 'Acolyte') {
            return 'I see omens in every event and action. The gods try to speak to us, we just need to listen.';
        } else if (line === 4 && $scope.character.background.name === 'Acolyte') {
            return 'Nothing can shake my optimistic attitude.';
        } else if (line === 5 && $scope.character.background.name === 'Acolyte') {
            return 'I quote (or misquote) sacred texts and proverbs in almost every situation.';
        } else if (line === 6 && $scope.character.background.name === 'Acolyte') {
            return 'I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.';
        } else if (line === 7 && $scope.character.background.name === 'Acolyte') {
            return 'I’ve enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.';
        } else if (line === 8 && $scope.character.background.name === 'Acolyte') {
            return 'I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world.';
        } else if (line === 1 && $scope.character.background.name === 'Criminal') {
            return 'I always have a plan for what to do when things go wrong.';
        } else if (line === 2 && $scope.character.background.name === 'Criminal') {
            return 'I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.';
        } else if (line === 3 && $scope.character.background.name === 'Criminal') {
            return 'The first thing I do in a new place is note the locations of everything valuable—or where such things could be hidden.';
        } else if (line === 4 && $scope.character.background.name === 'Criminal') {
            return 'I would rather make a new friend than a new enemy.';
        } else if (line === 5 && $scope.character.background.name === 'Criminal') {
            return 'I am incredibly slow to trust. Those who seem the fairest often have the most to hide.';
        } else if (line === 6 && $scope.character.background.name === 'Criminal') {
            return 'I don’t pay attention to the risks in a situation. Never tell me the odds.';
        } else if (line === 7 && $scope.character.background.name === 'Criminal') {
            return 'The best way to get me to do something is to tell me I can’t do it.';
        } else if (line === 8 && $scope.character.background.name === 'Criminal') {
            return 'I blow up at the slightest insult.';
        } else if (line === 1 && $scope.character.background.name === 'Folk Hero') {
            return 'I judge people by their actions, not their words.';
        } else if (line === 2 && $scope.character.background.name === 'Folk Hero') {
            return 'If someone is in trouble, I’m always ready to lend help.';
        } else if (line === 3 && $scope.character.background.name === 'Folk Hero') {
            return 'When I set my mind to something, I follow through no matter what gets in my way.';
        } else if (line === 4 && $scope.character.background.name === 'Folk Hero') {
            return 'I have a strong sense of fair play and always try to find the most equitable solution to arguments.';
        } else if (line === 5 && $scope.character.background.name === 'Folk Hero') {
            return 'I’m confident in my own abilities and do what I can to instill confidence in others.';
        } else if (line === 6 && $scope.character.background.name === 'Folk Hero') {
            return 'Thinking is for other people. I prefer action.';
        } else if (line === 7 && $scope.character.background.name === 'Folk Hero') {
            return 'I misuse long words in an attempt to sound smarter.';
        } else if (line === 8 && $scope.character.background.name === 'Folk Hero') {
            return 'I get bored easily. When am I going to get on with my destiny?';
        } else if (line === 1 && $scope.character.background.name === 'Sage') {
            return 'I use polysyllabic words that convey the impression of great erudition.';
        } else if (line === 2 && $scope.character.background.name === 'Sage') {
            return 'I’ve read every book in the world’s greatest libraries— or I like to boast that I have.';
        } else if (line === 3 && $scope.character.background.name === 'Sage') {
            return 'I’m used to helping out those who aren’t as smart as I am, and I patiently explain anything and everything to others.';
        } else if (line === 4 && $scope.character.background.name === 'Sage') {
            return 'There’s nothing I like more than a good mystery.';
        } else if (line === 5 && $scope.character.background.name === 'Sage') {
            return 'I’m willing to listen to every side of an argument before I make my own judgment.';
        } else if (line === 6 && $scope.character.background.name === 'Sage') {
            return 'I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost . . . everyone . . . is . . . compared . . . to me.';
        } else if (line === 7 && $scope.character.background.name === 'Sage') {
            return 'I am horribly, horribly awkward in social situations.';
        } else if (line === 8 && $scope.character.background.name === 'Sage') {
            return 'I’m convinced that people are always trying to steal my secrets.';
        }
    };

    $scope.selectIdeal = function(line) {
        if (line === 1 && $scope.character.background.name === 'Soldier') {
            return 'Greater Good. Our lot is to lay down our lives in defense of others. (Good)';
        } else if (line === 2 && $scope.character.background.name === 'Soldier') {
            return 'Responsibility. I do what I must and obey just authority. (Lawful)';
        } else if (line === 3 && $scope.character.background.name === 'Soldier') {
            return 'Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)';
        } else if (line === 4 && $scope.character.background.name === 'Soldier') {
            return 'Might. In life as in war, the stronger force wins. (Evil)';
        } else if (line === 5 && $scope.character.background.name === 'Soldier') {
            return 'Live and Let Live. Ideals aren’t worth killing over or going to war for. (Neutral)';
        } else if (line === 6 && $scope.character.background.name === 'Soldier') {
            return 'Nation. My city, nation, or people are all that matter. (Any)';
        } else if (line === 1 && $scope.character.background.name === 'Acolyte') {
            return 'Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)';
        } else if (line === 2 && $scope.character.background.name === 'Acolyte') {
            return 'Charity. I always try to help those in need, no matter what the personal cost. (Good)';
        } else if (line === 3 && $scope.character.background.name === 'Acolyte') {
            return 'Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)';
        } else if (line === 4 && $scope.character.background.name === 'Acolyte') {
            return 'Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)';
        } else if (line === 5 && $scope.character.background.name === 'Acolyte') {
            return 'Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)';
        } else if (line === 6 && $scope.character.background.name === 'Acolyte') {
            return 'Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings. (Any)';
        } else if (line === 1 && $scope.character.background.name === 'Criminal') {
            return 'Honor. I don’t steal from others in the trade. (Lawful)';
        } else if (line === 2 && $scope.character.background.name === 'Criminal') {
            return 'Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)';
        } else if (line === 3 && $scope.character.background.name === 'Criminal') {
            return 'Charity. I steal from the wealthy so that I can help people in need. (Good)';
        } else if (line === 4 && $scope.character.background.name === 'Criminal') {
            return 'Greed. I will do whatever it takes to become wealthy. (Evil)';
        } else if (line === 5 && $scope.character.background.name === 'Criminal') {
            return 'People. I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)';
        } else if (line === 6 && $scope.character.background.name === 'Criminal') {
            return 'Redemption. There’s a spark of good in everyone. (Good)';
        } else if (line === 1 && $scope.character.background.name === 'Folk Hero') {
            return 'Respect. People deserve to be treated with dignity and respect. (Good)';
        } else if (line === 2 && $scope.character.background.name === 'Folk Hero') {
            return 'Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)';
        } else if (line === 3 && $scope.character.background.name === 'Folk Hero') {
            return 'Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)';
        } else if (line === 4 && $scope.character.background.name === 'Folk Hero') {
            return 'Might. If I become strong, I can take what I want— what I deserve. (Evil)';
        } else if (line === 5 && $scope.character.background.name === 'Folk Hero') {
            return 'Sincerity. There’s no good in pretending to be something I’m not. (Neutral)';
        } else if (line === 6 && $scope.character.background.name === 'Folk Hero') {
            return 'Destiny. Nothing and no one can steer me away from my higher calling. (Any)';
        } else if (line === 1 && $scope.character.background.name === 'Sage') {
            return 'Knowledge. The path to power and self-improvement is through knowledge. (Neutral)';
        } else if (line === 2 && $scope.character.background.name === 'Sage') {
            return 'Beauty. What is beautiful points us beyond itself toward what is true. (Good)';
        } else if (line === 3 && $scope.character.background.name === 'Sage') {
            return 'Logic. Emotions must not cloud our logical thinking. (Lawful)';
        } else if (line === 4 && $scope.character.background.name === 'Sage') {
            return 'No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)';
        } else if (line === 5 && $scope.character.background.name === 'Sage') {
            return 'Power. Knowledge is the path to power and domination. (Evil)';
        } else if (line === 6 && $scope.character.background.name === 'Sage') {
            return 'Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)';
        }
    };

    $scope.selectBond = function(line) {
        if (line === 1 && $scope.character.background.name === 'Soldier') {
            return 'I would still lay down my life for the people I served with.';
        } else if (line === 2 && $scope.character.background.name === 'Soldier') {
            return 'Someone saved my life on the battlefield. To this day, I will never leave a friend behind.';
        } else if (line === 3 && $scope.character.background.name === 'Soldier') {
            return 'My honor is my life.';
        } else if (line === 4 && $scope.character.background.name === 'Soldier') {
            return 'I’ll never forget the crushing defeat my company suffered or the enemies who dealt it.';
        } else if (line === 5 && $scope.character.background.name === 'Soldier') {
            return 'Those who fight beside me are those worth dying for.';
        } else if (line === 6 && $scope.character.background.name === 'Soldier') {
            return 'I fight for those who cannot fight for themselves.';
        } else if (line === 1 && $scope.character.background.name === 'Acolyte') {
            return 'I would die to recover an ancient relic of my faith that was lost long ago.';
        } else if (line === 2 && $scope.character.background.name === 'Acolyte') {
            return 'I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.';
        } else if (line === 3 && $scope.character.background.name === 'Acolyte') {
            return 'I owe my life to the priest who took me in when my parents died.';
        } else if (line === 4 && $scope.character.background.name === 'Acolyte') {
            return 'Everything I do is for the common people.';
        } else if (line === 5 && $scope.character.background.name === 'Acolyte') {
            return 'I will do anything to protect the temple where I served.';
        } else if (line === 6 && $scope.character.background.name === 'Acolyte') {
            return 'I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.';
        } else if (line === 1 && $scope.character.background.name === 'Criminal') {
            return 'I’m trying to pay off an old debt I owe to a generous benefactor.';
        } else if (line === 2 && $scope.character.background.name === 'Criminal') {
            return 'My ill-gotten gains go to support my family.';
        } else if (line === 3 && $scope.character.background.name === 'Criminal') {
            return 'Something important was taken from me, and I aim to steal it back.';
        } else if (line === 4 && $scope.character.background.name === 'Criminal') {
            return 'I will become the greatest thief that ever lived.';
        } else if (line === 5 && $scope.character.background.name === 'Criminal') {
            return 'I’m guilty of a terrible crime. I hope I can redeem myself for it.';
        } else if (line === 6 && $scope.character.background.name === 'Criminal') {
            return 'Someone I loved died because of I mistake I made. That will never happen again.';
        } else if (line === 1 && $scope.character.background.name === 'Folk Hero') {
            return 'I have a family, but I have no idea where they are. One day, I hope to see them again.';
        } else if (line === 2 && $scope.character.background.name === 'Folk Hero') {
            return 'I worked the land, I love the land, and I will protect the land.';
        } else if (line === 3 && $scope.character.background.name === 'Folk Hero') {
            return 'A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.';
        } else if (line === 4 && $scope.character.background.name === 'Folk Hero') {
            return 'My tools are symbols of my past life, and I carry them so that I will never forget my roots.';
        } else if (line === 5 && $scope.character.background.name === 'Folk Hero') {
            return 'I protect those who cannot protect themselves.';
        } else if (line === 6 && $scope.character.background.name === 'Folk Hero') {
            return 'I wish my childhood sweetheart had come with me to pursue my destiny.';
        } else if (line === 1 && $scope.character.background.name === 'Sage') {
            return 'It is my duty to protect my students.';
        } else if (line === 2 && $scope.character.background.name === 'Sage') {
            return 'I have an ancient text that holds terrible secrets that must not fall into the wrong hands.';
        } else if (line === 3 && $scope.character.background.name === 'Sage') {
            return 'I work to preserve a library, university, scriptorium, or monastery.';
        } else if (line === 4 && $scope.character.background.name === 'Sage') {
            return 'My life’s work is a series of tomes related to a specific field of lore.';
        } else if (line === 5 && $scope.character.background.name === 'Sage') {
            return 'I’ve been searching my whole life for the answer to a certain question.';
        } else if (line === 6 && $scope.character.background.name === 'Sage') {
            return 'I sold my soul for knowledge. I hope to do great deeds and win it back.';
        }
    };

    $scope.selectFlaw = function(line) {
        if (line === 1 && $scope.character.background.name === 'Soldier') {
            return 'The monstrous enemy we faced in battle still leaves me quivering with fear.';
        } else if (line === 2 && $scope.character.background.name === 'Soldier') {
            return 'I have little respect for anyone who is not a proven warrior.';
        } else if (line === 3 && $scope.character.background.name === 'Soldier') {
            return 'I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.';
        } else if (line === 4 && $scope.character.background.name === 'Soldier') {
            return 'My hatred of my enemies is blind and unreasoning.';
        } else if (line === 5 && $scope.character.background.name === 'Soldier') {
            return 'I obey the law, even if the law causes misery.';
        } else if (line === 6 && $scope.character.background.name === 'Soldier') {
            return 'I’d rather eat my armor than admit when I’m wrong.';
        } else if (line === 1 && $scope.character.background.name === 'Acolyte') {
            return 'I judge others harshly, and myself even more severely.';
        } else if (line === 2 && $scope.character.background.name === 'Acolyte') {
            return 'I put too much trust in those who wield power within my temple’s hierarchy.';
        } else if (line === 3 && $scope.character.background.name === 'Acolyte') {
            return 'My piety sometimes leads me to blindly trust those that profess faith in my god.';
        } else if (line === 4 && $scope.character.background.name === 'Acolyte') {
            return 'I am inflexible in my thinking.';
        } else if (line === 5 && $scope.character.background.name === 'Acolyte') {
            return 'I am suspicious of strangers and expect the worst of them.';
        } else if (line === 6 && $scope.character.background.name === 'Acolyte') {
            return 'Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.';
        } else if (line === 1 && $scope.character.background.name === 'Criminal') {
            return 'When I see something valuable, I can’t think about anything but how to steal it.';
        } else if (line === 2 && $scope.character.background.name === 'Criminal') {
            return 'When faced with a choice between money and my friends, I usually choose the money.';
        } else if (line === 3 && $scope.character.background.name === 'Criminal') {
            return 'If there’s a plan, I’ll forget it. If I don’t forget it, I’ll ignore it.';
        } else if (line === 4 && $scope.character.background.name === 'Criminal') {
            return 'I have a “tell” that reveals when I’m lying.';
        } else if (line === 5 && $scope.character.background.name === 'Criminal') {
            return 'I turn tail and run when things look bad.';
        } else if (line === 6 && $scope.character.background.name === 'Criminal') {
            return 'An innocent person is in prison for a crime that I committed. I’m okay with that.';
        } else if (line === 1 && $scope.character.background.name === 'Folk Hero') {
            return 'The tyrant who rules my land will stop at nothing to see me killed.';
        } else if (line === 2 && $scope.character.background.name === 'Folk Hero') {
            return 'I’m convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.';
        } else if (line === 3 && $scope.character.background.name === 'Folk Hero') {
            return 'The people who knew me when I was young know my shameful secret, so I can never go home again.';
        } else if (line === 4 && $scope.character.background.name === 'Folk Hero') {
            return 'I have a weakness for the vices of the city, especially hard drink.';
        } else if (line === 5 && $scope.character.background.name === 'Folk Hero') {
            return 'Secretly, I believe that things would be better if I were a tyrant lording over the land.';
        } else if (line === 6 && $scope.character.background.name === 'Folk Hero') {
            return 'I have trouble trusting in my allies.';
        } else if (line === 1 && $scope.character.background.name === 'Sage') {
            return 'I am easily distracted by the promise of information.';
        } else if (line === 2 && $scope.character.background.name === 'Sage') {
            return 'Most people scream and run when they see a demon. I stop and take notes on its anatomy.';
        } else if (line === 3 && $scope.character.background.name === 'Sage') {
            return 'Unlocking an ancient mystery is worth the price of a civilization.';
        } else if (line === 4 && $scope.character.background.name === 'Sage') {
            return 'I overlook obvious solutions in favor of complicated ones.';
        } else if (line === 5 && $scope.character.background.name === 'Sage') {
            return 'I speak without really thinking through my words, invariably insulting others.';
        } else if (line === 6 && $scope.character.background.name === 'Sage') {
            return 'I can’t keep a secret to save my life, or anyone else’s.';
        }
    };

    $scope.racialBonusStr = 0;
    $scope.racialBonusDex = 0;
    $scope.racialBonusCon = 0;
    $scope.racialBonusIntel = 0;
    $scope.racialBonusWis = 0;
    $scope.racialBonusCha = 0;

    $scope.getRacialBonus = function(race){
        $scope.character.race.subrace = '';
        $scope.elfSight();
        if (race === 'Elf') {
            $scope.racialBonusDex = 2;
            $scope.racialBonusStr = 0;
            $scope.racialBonusCon = 0;
            $scope.racialBonusIntel = 0;
            $scope.racialBonusWis = 0;
            $scope.racialBonusCha = 0;
        }else if (race === 'Dwarf') {
            $scope.racialBonusCon = 2;
            $scope.racialBonusStr = 0;
            $scope.racialBonusDex = 0;
            $scope.racialBonusIntel = 0;
            $scope.racialBonusWis = 0;
            $scope.racialBonusCha = 0;
        }else if (race === 'Halfling') {
            $scope.racialBonusDex = 2;
            $scope.racialBonusStr = 0;
            $scope.racialBonusCon = 0;
            $scope.racialBonusIntel = 0;
            $scope.racialBonusWis = 0;
            $scope.racialBonusCha = 0;
        }else if (race === 'Human') {
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

    $scope.getSubracialBonus = function(subrace){
        if (subrace === 'High Elf') {
            $scope.racialBonusIntel = 1;
            $scope.racialBonusWis = 0;
        } else if (subrace === 'Wood Elf') {
            $scope.racialBonusWis = 1;
            $scope.racialBonusIntel = 0;
        } else if (subrace === 'Hill Dwarf') {
            $scope.racialBonusWis = 1;
            $scope.racialBonusStr = 0;
        } else if (subrace === 'Mountain Dwarf') {
            $scope.racialBonusStr = 2;
            $scope.racialBonusWis = 0;
        } else if (subrace === 'Lightfoot Halfling') {
            $scope.racialBonusCha = 1;
            $scope.racialBonusCon = 0;
        } else if (subrace === 'Stout Halfling') {
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

    $scope.skilled = function(background){
    	if (background === 'Acolyte'){
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
    	} else if (background === 'Criminal'){
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
    	} else if (background === 'Folk Hero'){
    		$scope.character.skills.animalHandling = true;
    		$scope.character.skills.survival = true;
    		$scope.character.skills.insight = false;
    		$scope.character.skills.religion = false;
    		$scope.character.skills.deception = false;
    		$scope.character.skills.stealth = false;
    		$scope.character.skills.arcana = false;
    		$scope.character.skills.history = false;
    		$scope.character.skills.intimidation = false;
    		$scope.character.skills.athletics = false;
    	} else if (background === 'Sage'){
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
    	} else if (background === 'Soldier'){
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
    };

    $scope.classSkill = function(skill){
    	if ((skill === 'Athletics') && (($scope.character.characterClass.name === 'Fighter') || ($scope.character.characterClass.name === 'Rogue'))){
    		return false;
    	} else if ((skill === 'Acrobatics') && (($scope.character.characterClass.name === 'Fighter') || ($scope.character.characterClass.name === 'Rogue'))){
    		return false;
    	} else if ((skill === 'Sleight of Hand') && ($scope.character.characterClass.name === 'Rogue')){
    		return false;
    	} else if ((skill === 'Stealth') && ($scope.character.characterClass.name === 'Rogue')){
    		return false;
    	} else if ((skill === 'Arcana') && ($scope.character.characterClass.name === 'Wizard')){
    		return false;
    	} else if ((skill === 'History') && (($scope.character.characterClass.name === 'Wizard') || ($scope.character.characterClass.name === 'Cleric') || ($scope.character.characterClass.name === 'Fighter'))){
    		return false;
    	} else if ((skill === 'Investigation') && (($scope.character.characterClass.name === 'Wizard') || ($scope.character.characterClass.name === 'Rogue'))){
    		return false;
    	} else if ((skill === 'Nature') && ( null )){
    		return false;
    	} else if ((skill === 'Religion') && (($scope.character.characterClass.name === 'Wizard') || ($scope.character.characterClass.name === 'Cleric') || ($scope.character.characterClass.name === 'Rogue'))){
    		return false;
    	} else if ((skill === 'Animal Handling') && ($scope.character.characterClass.name === 'Fighter')){
    		return false;
    	} else if ((skill === 'Insight') && (($scope.character.characterClass.name === 'Wizard') || ($scope.character.characterClass.name === 'Cleric') || ($scope.character.characterClass.name === 'Fighter') || ($scope.character.characterClass.name === 'Rogue'))){
    		return false;
    	} else if ((skill === 'Medicine') && (($scope.character.characterClass.name === 'Wizard') || ($scope.character.characterClass.name === 'Wizard') || ($scope.character.characterClass.name === 'Cleric') || ($scope.character.characterClass.name === 'Rogue'))){
    		return false;
    	} else if ((skill === 'Perception') && (($scope.character.characterClass.name === 'Fighter') || ($scope.character.characterClass.name === 'Rogue'))){
    		return false;
    	} else if ((skill === 'Survival') && (($scope.character.characterClass.name === 'Fighter') || ($scope.character.characterClass.name === 'Rogue'))){
    		return false;
    	} else if ((skill === 'Deception') && ($scope.character.characterClass.name === 'Rogue')){
    		return false;
    	} else if ((skill === 'Intimidation') && (($scope.character.characterClass.name === 'Fighter') || ($scope.character.characterClass.name === 'Rogue'))){
    		return false;
    	} else if ((skill === 'Performance') && ($scope.character.characterClass.name === 'Rogue')){
    		return false;
    	} else if ((skill === 'Persuasion') && (($scope.character.characterClass.name === 'Cleric') || ($scope.character.characterClass.name === 'Rogue'))){
    		return false;
    	} else {
    		return true;
    	}
    };

    $scope.elfSight = function(){
    	if ($scope.character.race.race === 'Elf'){
    		$scope.character.skills.perception = true;
    	} else if ($scope.character.race.race !== 'Elf'){
            $scope.character.skills.perception = false;
        }
    };

    $scope.skillNumber = function(){
    	if ($scope.character.characterClass.name === 'Cleric'){
    		return 2;
    	}else if ($scope.character.characterClass.name === 'Fighter'){
    		return 2;
    	}else if ($scope.character.characterClass.name === 'Rogue'){
    		return 4;
    	}else if ($scope.character.characterClass.name === 'Wizard'){
    		return 2;
    	}
    };

    $scope.saved = function(classs){
    	if (classs === 'Cleric'){
    		$scope.character.savingThrows.wis = true;
    		$scope.character.savingThrows.cha = true;
    		$scope.character.savingThrows.str = false;
    		$scope.character.savingThrows.con = false;
    		$scope.character.savingThrows.dex = false;
    		$scope.character.savingThrows.intel = false;
    	} else if (classs === 'Fighter'){
    		$scope.character.savingThrows.str = true;
    		$scope.character.savingThrows.con = true;
    		$scope.character.savingThrows.wis = false;
    		$scope.character.savingThrows.cha = false;
    		$scope.character.savingThrows.dex = false;
    		$scope.character.savingThrows.intel = false;
    	} else if (classs === 'Rogue'){
    		$scope.character.savingThrows.dex = true;
    		$scope.character.savingThrows.intel = true;
    		$scope.character.savingThrows.wis = false;
    		$scope.character.savingThrows.cha = false;
    		$scope.character.savingThrows.str = false;
    		$scope.character.savingThrows.con = false;

    	} else if (classs === 'Wizard'){
    		$scope.character.savingThrows.intel = true;
    		$scope.character.savingThrows.wis = true;
    		$scope.character.savingThrows.cha = false;
    		$scope.character.savingThrows.str = false;
    		$scope.character.savingThrows.con = false;
    		$scope.character.savingThrows.dex = false;
    	}
    };

    $scope.skillBonus = function(skill, ability) {
    	var proficiency;
    	if (skill){
    		proficiency = 2;
    	} else {
    		proficiency = 0;
   		}
    	return $scope.abilityBonus(ability) + proficiency;
    };

    $scope.saveBonus = function(save, ability) {
    	var proficiency;
    	if(save){
    		proficiency = 2;
    	} else {
    		proficiency = 0;
    	}
    	return $scope.abilityBonus(ability) + proficiency;
    };

    $scope.speed = function(race, subrace){
    	if (race === 'Dwarf' || race === 'Halfling'){
    		return 25;
    	} else if (subrace === 'Wood Elf'){
    		return 35;
    	}else {
    		return 30;
    	}
    };

    $scope.maxHP = function(classs, con, subrace){
    	var hitDie;
    	var raceMod;
    	if (classs === 'Fighter'){
    		hitDie = 10;
    	}else if (classs === 'Wizard'){
    		hitDie = 6;
    	} else {
    		hitDie = 8;
    	}
    	if (subrace === 'Hill Dwarf'){
    		raceMod = 1;
    	}else {
    		raceMod = 0;
    	}
    	return hitDie + raceMod + con;
    };

    $scope.hitDie = function(classs){
    	if (classs === 'Fighter'){
    		return '1d10';
    	} else if (classs === 'Wizard'){
    		return '1d6';
    	} else {
    		return '1d8';
    	}
    };

    $scope.addCharacter = function() {
      $http.post('/api/characters', { name: $scope.character });
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
		savingThrows: {str: false, dex: false, con: false, intel: false, wis: false, cha: false},
		proficiencies: {armorType: Number, armorName: [String], weaponType: Number, weaponName: [String], tools: [String], instruments: [String], languages: [String]},
		spells: [[String], [String], [String], [String], [String], [String], [String], [String], [String], [String]],
		appearance: {eyes: String, hair: String, age: Number, height: String, Weight: String, Skin: String},
		image: String,
		user: '',

		};
    };

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
		savingThrows: {str: false, dex: false, con: false, intel: false, wis: false, cha: false},
		proficiencies: {armorType: Number, armorName: [String], weaponType: Number, weaponName: [String], tools: [String], instruments: [String], languages: [String]},
		spells: [[String], [String], [String], [String], [String], [String], [String], [String], [String], [String]],
		appearance: {eyes: String, hair: String, age: Number, height: String, Weight: String, Skin: String},
		image: String,
		user: '',

	};

  });
