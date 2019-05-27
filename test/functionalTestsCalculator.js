import { AngularJSSelector } from 'testcafe-angular-selectors';
import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://localhost:3456/`;
	
const operatorSelect = AngularJSSelector.byOptions('value for (key, value) in operators');
const operatorOption = operatorSelect.find('option');

test('My first test with Ionic Frames', async t => {
    await t
        .typeText(AngularJSSelector.byModel('first'), '0')
		.typeText(AngularJSSelector.byModel('second'), '0')
        .click('#gobutton')
		.expect(AngularJSSelector.byBinding('latest').innerText).eql('0');
});

test('Add test with Ionic Frames', async t => {
    await t
        .typeText(AngularJSSelector.byModel('first'), '1')
		.typeText(AngularJSSelector.byModel('second'), '1')
		.click(AngularJSSelector.byModel('operator'))
		.click(Selector('option').filter('[value="ADDITION"]'))
        .click('#gobutton')
		.expect(AngularJSSelector.byBinding('latest').innerText).eql('2');
});

test('Substract test with Ionic Frames', async t => {
    await t
        .typeText(AngularJSSelector.byModel('first'), '10')
		.expect(AngularJSSelector.byModel('operator').exists).ok()
		.expect(AngularJSSelector.byOptions('value for (key, value) in operators').exists).ok()
		.click(AngularJSSelector.byModel('operator'))
		.click(Selector('option').filter('[value="SUBTRACTION"]'))
		.expect(AngularJSSelector.byModel('operator').value).eql('SUBTRACTION')
		.typeText(AngularJSSelector.byModel('second'), '4')
        .click('#gobutton')
		.expect(AngularJSSelector.byBinding('latest').innerText).eql('6');
});