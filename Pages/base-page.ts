import test, { expect, Page , Browser } from '@playwright/test';
//import { Navbar } from '../components/navigation/navbar';
//import { Searchbar } from '../components/navigation/searchbar';

export class BasePage {
//  readonly navbar: Navbar;
//  readonly searchbar: Searchbar;

  constructor(protected page: Page) {
 //   this.navbar = new Navbar(page);
 //   this.searchbar = new Searchbar(page);
  }

  async visit(url: string): Promise<void> {
    await test.step(`Opening the url "${url}"`, async () => {
      await this.page.goto(url, { waitUntil: 'networkidle' });
    });
  }

  async reload(): Promise<void> {
    const currentUrl = this.page.url();

    await test.step(`Reloading page with url "${currentUrl}"`, async () => {
      await this.page.reload({ waitUntil: 'domcontentloaded' });
    });
  }

  async urlContainsText(text: string) {
        
    await expect(this.page).toHaveURL(text);

  }

}
