Modules.both.users = {};

let papaClickMethod = (papas) => {
	check(papas, Number);

	if(! Meteor.userId()){
		throw Meteor.Error(403, "You need to be a user");
	}

	Meteor.users.update({_id: Meteor.userId()}, {$inc: {"score" : papas}});

	return papas;
};

Modules.both.users.updateScore = papaClickMethod;