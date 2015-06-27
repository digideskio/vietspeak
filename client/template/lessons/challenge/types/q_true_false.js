Template.qTrueFalse.helpers({

	question: function() {
		var phrase = this.phrases[Session.get("qNumber")];
		return phrase.question;
	},
	isCorrect: function() {
		return Session.get("isCorrect");
	},
	gotFeedback: function() {
		return Session.equals("qState", QSTATE.CONTINUE);
	},
	trueChecked: function() {
		return Session.get("trueChecked");
	},
	falseChecked: function() {
		return Session.get("falseChecked");
	}
});

Template.qTrueFalse.events({

	"click .choice": function(ev) {
		// Select a choice
		var selectedIndex = 0;

		if (ev.target === $('#choice-true')[0]) {
			Session.set("trueChecked", true);
			Session.set("falseChecked", false);
		} else if (ev.target === $('#choice-false')[0]) {
			Session.set("trueChecked", false);
			Session.set("falseChecked", true);
		}

		// Allow for answering
		enableSubmitButton();
	},

	"keypress": function(ev) {

		switch(ev.keyCode) {

			default:
				break;

			// Simulate selecting options
			case KEYCODE_ONE:
				console.log(choices[i]);

				$('#choice-true').click();
				break;

			case KEYCODE_TWO:
				$('#choice-fasle').click();
				break;
		}

	}
});

// ----------------------
// Public functions
// ----------------------

aTrueFalse = function(phrase) {
	if (phrase.answer == true) {
		return Session.get("trueChecked");
	} else {
		return Session.get("falseChecked");
	}
}
