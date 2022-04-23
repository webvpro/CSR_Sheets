"use strict";

export class DiceFunctions {

	constructor() {
		this.rethrowFunctions = {};
		this.afterThrowFunctions = {};

		// these fucntions only trigger after a full throw is finished, including rerolls
		// this.registerAfterThrowFunction('t', this.template, this.templateHelp());

		this.registerAfterThrowFunction('a', this.advantage, this.advantageHelp());
		this.registerAfterThrowFunction('d', this.disadvantage, this.disadvantageHelp());
		//this.registerAfterThrowFunction('f', this.filter, this.filterHelp());

		// these functions can trigger during a roll, if you need to add more dice to the roll, do it here
		this.registerRethrowFunction('r', this.rethrowBasic, this.rethrowBasicHelp());
		//this.registerRethrowFunction('ra', this.rethrowAdvanced, this.rethrowAdvancedHelp());
	}

	registerRethrowFunction(funcName, callback, helptext){
		this.rethrowFunctions[funcName] = {
			name: funcName,
			help: helptext,
			method: callback
		};
	}

	registerAfterThrowFunction(funcName, callback, helptext) {
		this.afterThrowFunctions[funcName] = {
			name: funcName,
			help: helptext,
			method: callback
		};
	}

	// Array dicemeshList: contains only the dice results affected by this function
	// String args: an arbitrary string passed in through the original notation
	// returns Array dicemeshList: a modified dicemeshList to be used for totaling
	template(dicemeshList, args) {

		console.log('template(dicemeshList, args)', dicemeshList, args);

		// args is an array of values that were sperated by commas (',') following the function name
		let action = args.shift(); //grab first argument
		let resultList = [];

		for (let i=0, len=dicemeshList.length; i < len; ++i) {
			let dicemesh = dicemeshList[i];
			let result = dicemesh.getLastValue(); // current face values: {value: Int, label: String}
			let notation = dicemesh.notation; // a full DiceNotation object
			let diceobj =  window.DiceFactory.get(dicemesh.shape); // a full DicePreset object

			// DELETE RESULT
			// this isn't recommended as the model remains onscreen, but it's result will be missing
			// currently there is no provided method to safely remove the model from here
			if (action == 'delete') {
				if (result.value < 3) {
					// just... don't add the mesh to the returned list
					continue;
				}
			}

			// IGNORE RESULT - recommended
			// this is the recommended method to remove a result
			if (action == 'ignore') {
				if (result.value < 3) {
					// set ignore flag for entire dice entry
					// will show up in results with a strikethrough
					// will also be ignored during totals calculations
					result.ignore = true;
					dicemesh.setLastValue(result);
				}
			}

			// MODIFY RESULTS
			// a modify action does not update the dice model, use carefully
			if (action == 'modify') {
				// don't change existing values, instead add a new result to the roll history
				let newvalue = {value: result.value + 2, label: result.label, reason: 'modify +2'};
				dicemesh.result.push(newvalue);
			}

			// FORCE DIE TO SPECIFIC RESULT - recommended
			// this is the preferred method to change a die's value
			// it will display physically on the dice AND in the die's roll history
			if (action == 'force') {

				let forcedvalue = diceobj.values[Math.floor(Math.random() * diceobj.values.length)];

				window.DiceRoller.DiceRoom.DiceBox.swapDiceFace(dicemesh, forcedvalue);

				dicemesh.resultReason = 'forced result, random';
				dicemesh.storeRolledValue();
			}

			// add the dice to the results list
			resultList.push(dicemesh);

		}
		return resultList;
	}

	templateHelp() {
		let output = {};
		output['Name'] = 'Template Examples';
		output['Usage'] = '{t,[Action]}';
		output['Arguments'] = {
			'Action': ['delete','ignore','modify','force']
		};
		output['Description'] = 'Template functions showing exmples of deleting, ignoring, modifying, and forcing dice results';
		output['Examples'] = {
			'{t}': 'Does nothing.',
			'{t,delete}': 'Deletes all results that are < 3.',
			'{t,ignore}': 'Strikes out all results that are < 3.',
			'{t,modify}': 'Adds +2 to all results.',
			'{t,force}': 'Forces all results to another random result.'
		};
		return output;
	}

	// rethrow methods only recieve one die at a time
	// returns boolean to indicate if dice given needs to be rethrown
	rethrowBasic(dicemesh, args) {

		let latestresult = dicemesh.getLastValue();
		if (!latestresult.value) return false;

		return (latestresult.value == parseInt(args));
	}

	rethrowBasicHelp() {
		let output = {};
		output['Name'] = 'Reroll (Basic)';
		output['Usage'] = '{r,[Value]}';
		output['Arguments'] = {
			'Value' : ['Any Number']
		};
		output['Description'] = 'Reroll any dice matching the given Value';
		output['Examples'] = {
			'{r,1}': 'Reroll any 1\'s as many times as needed.',
			'{r,2}': 'Reroll any 2\'s as many times as needed.',
		};
		return output;
	}

	// rethrow methods only recieve one die at a time
	// returns boolean to indicate if dice given needs to be rethrown
	rethrowAdvanced(dicemesh, args) {
		if (!dicemesh.getFaceValue().value) return false;
		return (dicemesh.getFaceValue().value == parseInt(args));
	}

	rethrowAdvancedHelp() {
		let output = {};
		output['Name'] = 'Reroll (Advanced)';
		output['Usage'] = '{ra,[Operation],[MatchAgainst],[MatchLimit],[RerollLimit]}';
		output['Arguments'] = {
			'Operation': [
				'Use \'lt\' for \'<\'',
				'Use \'gt\' for \'>\'',
				'Use \'lte\' for \'<=\'',
				'Use \'gte\' for \'<=\'',
				'Use \'e\' for \'==\'',
				'Use \'ne\' for \'!=\''
			],
			'MatchAgainst' : ['Any Number', 'list of numbers, seperated by colon (\':\')', 'min', 'max'],
			'MatchLimit' : ['Any Number'],
			'RerollLimit' : ['Any Number']
		};
		output['Description'] = 'Rerolls dice using the given Operation against MatchAgainst for MatchLimit dice up to a maximum of RerollLimit times each.';
		output['Examples'] = {
			'{r,e,1}': 'Reroll any 1\'s as many times as needed.',
			'{r,gt,4,2}': 'Reroll the first 2 dice greater than 4 as many times as needed.',
			'{r,lte,2,3,4}': 'Reroll the first 3 dice less than or equal to 2 only four times each and then stop.',
			'{r,ne,2,,2}': 'Reroll any dice not equal to 2 only twice each and then stop.'
		};
		return output;
	}

	filter(dicemeshList, args) {
		let resultList = [];
		for (let i=0, len=dicemeshList.length; i < len; ++i) {
			let dicemesh = dicemeshList[i];
			let result = dicemesh.result;
			let notation = dicemesh.notation;
			let diceobj =  DiceFactory.get(dicemesh.shape);
			
		}
		return resultList;
	}

	filterHelp() {
		let output = {};
		output['Name'] = 'Filter';
		output['Usage'] = '{f,[Operation],[MatchAgainst],[MatchLimit]}';
		output['Arguments'] = {
			'Operation': [
				'Use \'lt\' for \'<\'',
				'Use \'gt\' for \'>\'',
				'Use \'lte\' for \'<=\'',
				'Use \'gte\' for \'<=\'',
				'Use \'e\' for \'==\'',
				'Use \'ne\' for \'!=\''
			],
			'MatchAgainst' : [
				'Any Number',
				'List of numbers, seperated by colon (\':\')',
				'\'min\'',
				'\'max\''
			],
			'MatchLimit' : ['Any Number']
		};
		output['Description'] = 'Ignores any dice results using the given Operation against MatchAgainst for MatchLimit dice.';
		output['Examples'] = {
			'{f,e,1}': 'Ignore any 1\'s.',
			'{f,gt,4,2}': 'Ignores the first 2 dice greater than 4.',
			'{f,ne,2}': 'Ignores any dice not equal to 2.'
		};
		return output;
	}

	advantage(dicemeshList, args) {
		let highest = null;

		//find highest dice, store it
		for (let i=0, len=dicemeshList.length; i < len; ++i) {
			let dicemesh = dicemeshList[i];

			if (!highest) highest = dicemesh;
			highest = highest.getLastValue().value >= dicemesh.getLastValue().value ? highest : dicemesh;
		}

		// loop through and mark the other dice as ignore
		for (let i=0, len=dicemeshList.length; i < len; ++i) {
			dicemeshList[i].ignoreLastValue((highest.uuid != dicemeshList[i].uuid));
		}
		return dicemeshList;
	}

	advantageHelp() {

		let output = {};
		output['Name'] = 'Advantage';
		output['Usage'] = '{a}';
		output['Arguments'] = { 'None':[] };
		output['Description'] = 'Selects the highest value of the given result';
		output['Examples'] = {
			'2d20{a}': 'Selects highest value of two D20\'s.',
			'5d10{a}': 'Selects the single highest result of five D10 rolls.'
		};
		return output;
	}

	disadvantage(dicemeshList, args) {
		let lowest = null;
		for (let i=0, len=dicemeshList.length; i < len; ++i) {
			let dicemesh = dicemeshList[i];

			if (!lowest) lowest = dicemesh;
			lowest = lowest.getLastValue().value <= dicemesh.getLastValue().value ? lowest : dicemesh;
		}

		// loop through and mark the other dice as ignore
		for (let i=0, len=dicemeshList.length; i < len; ++i) {
			dicemeshList[i].ignoreLastValue((lowest.uuid != dicemeshList[i].uuid));
		}
		return dicemeshList;
	}

	disadvantageHelp() {
		let output = {};
		output['Name'] = 'Disadvantage';
		output['Usage'] = '{d}';
		output['Arguments'] = { 'None':[] };
		output['Description'] = 'Selects the lowest value of the given result';
		output['Examples'] = {
			'2d20{a}': 'Selects lowest value of two D20\'s.',
			'5d10{a}': 'Selects the single lowest result of five D10 rolls.'
		};
		return output;
	}

}


