import { Calculator } from '../Pages/calculator';
import { FirstPage } from '../Pages/first-page';
import { searchTest as test } from './tests';

test.beforeEach(async ({ calculator , firstPage }) => {
  await calculator.visit('/#calculator');
});

test('Total Data Stored calculator updates on slider', async ({ page , calculator , firstPage }) => {

  await calculator.checkCalculator();

});


