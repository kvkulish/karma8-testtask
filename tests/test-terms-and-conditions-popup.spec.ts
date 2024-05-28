import { SignupPage } from '../Pages/signup-page';
import { FirstPage } from '../Pages/first-page';
import { searchTest as test } from './tests';

test.beforeEach(async ({ firstPage }) => {
  await firstPage.visit('/');
});

test('Terms and conditions popup opens from main page', async ({ page , firstPage }) => {
  
  await firstPage.openTermsAndConditionsPopup();

  await firstPage.checkIfTermsAndConditionsPopupIsOpened();

});