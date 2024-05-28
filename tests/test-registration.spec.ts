import { SignupPage } from '../Pages/signup-page';
import { searchTest as test } from './tests';

test.beforeEach(async ({ signupPage }) => {
  await signupPage.visit('/signup');
});

test('Registration form is able to make new account', async ({ page , signupPage }) => {

  await signupPage.checkTermsAndConditions();

  await signupPage.setFullName('fulname');

  await signupPage.setEmail('');

  await signupPage.setPassword('Password123');

  await signupPage.signupButton.click();


  await signupPage.urlContainsText(/verify\/info/);

  await signupPage.verifyPageHasCorrectEmail();

});

