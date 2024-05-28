import { SignupPage } from '../Pages/signup-page';
//import { FirstPage } from '../Pages/first-page';
import { searchTest as test } from './tests';

test.beforeEach(async ({ signupPage }) => {
  await signupPage.visit('/');
});

test('Try it for free button leads to Signup page', async ({ firstPage , signupPage  }) => {

  await firstPage.clickTryItForFree();

  await signupPage.urlContainsText('signup')

});
