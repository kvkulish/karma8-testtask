import { Fixtures } from '@playwright/test';
import { FirstPage } from '../Pages/first-page';
import { SignupPage } from '../Pages/signup-page';
import { Calculator } from '../Pages/calculator'
import { ContextPagesFixture } from './context-pages';

export type PlaywrightPagesFixture = {
  firstPage: FirstPage;
  signupPage: SignupPage;
  calculator: Calculator;
};

export const pagesFixture: Fixtures<PlaywrightPagesFixture, ContextPagesFixture> = {
    signupPage: async ({ contextPage }, use) => {
    const signupPage = new SignupPage(contextPage);

    await use(signupPage);
  },
  firstPage: async ({ contextPage }, use) => {
    const firstPage = new FirstPage(contextPage);

    await use(firstPage);
  },
  calculator: async ({ contextPage }, use) => {
    const calculator = new Calculator(contextPage);

    await use(calculator);
  }
  
};
