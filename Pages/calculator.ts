import { expect, Page } from '@playwright/test';
import { BasePage } from './base-page';
import { Button } from '../page-factory/button';
import { Link } from '../page-factory/link';
import { Input } from '../page-factory/input';
import { variants } from '../TestData/calculatorValues.json'

export class Calculator extends BasePage {

  private readonly totalDataStoredSlider: Input;
  private readonly monthlyDownloadedDataSlider: Input;

  
  private  dataApiStoredInputWidth;
  private  dataDownloadInputWidth;
  
  constructor(public page: Page) {
    super(page);

    this.totalDataStoredSlider = new Input({ page, locator: '#dataApiStoredInput', name: 'Total Data Stored' });
    this.monthlyDownloadedDataSlider = new Input({ page, locator: '#dataDownloadInput', name: 'Monthly Downloaded Data' })

  }

  async checkCalculator(): Promise<void> {

    await expect(this.page.locator('#dataApiStoredInput')).toBeVisible();

    await this.page.locator('#dataApiStoredInput').boundingBox().then((elementParams)=>{
      
      this.dataApiStoredInputWidth = elementParams.width;
      console.log(this.dataApiStoredInputWidth)
    })
    await this.page.locator('#dataDownloadInput').boundingBox().then((elementParams)=>{
      
      this.dataDownloadInputWidth = elementParams.width;
      console.log(this.dataDownloadInputWidth)
    })

    for (const element of variants) {

        //console.log(box)
        let dataApiStoredInputXToClick = this.dataApiStoredInputWidth * (element.totalDataStored / 100 );

        let dataDownloadInputXToClick = this.dataDownloadInputWidth * (element.monthlyDownloadedData / 100)
        
        console.log( dataApiStoredInputXToClick, dataDownloadInputXToClick )
  
        await this.page.locator('#dataApiStoredInput').click({position: { x: dataApiStoredInputXToClick ,  y: 0 }})
        await this.page.locator('#dataDownloadInput').click({position: { x: dataDownloadInputXToClick ,  y: 0}})

        await expect(this.page.locator('#tbApiStored')).toHaveText(element.expectedTotalDataStored.toString());
        await expect(this.page.locator('#tbDownload')).toHaveText(element.expectedMonthlyDownloadedData.toString());

        await expect(this.page.locator('#apiTable')).toHaveScreenshot(`calc-${element.totalDataStored.toString()}-${element.monthlyDownloadedData.toString()}.png`);

      }
  }
  
}
