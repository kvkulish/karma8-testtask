import test from '@playwright/test';
import { LocatorProps } from '../types/page-factory/component';
import { Component } from './component';
import { expect,Page } from '@playwright/test';

export class Checkbox extends Component {
  get typeOf(): string {
    return 'button';
  }

  async enable(locatorProps: LocatorProps = {}): Promise<void> {
    await test.step(`Enabling the ${this.typeOf} with name "${this.componentName}"`, async () => {
      const locator = this.getLocator(locatorProps);
  
         await locator.getAttribute('class').then(async (res)=>{
          if(res.includes('is-error')){
            await this.page.locator('.rb-checkbox label').click();
            //locator.click()
          }
          console.log(res);  
        });

  })
  }


}
