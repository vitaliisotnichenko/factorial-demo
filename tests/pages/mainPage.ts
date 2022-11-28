import {expect, Locator, Page} from '@playwright/test';
import {BasePage} from "../src/helpers/basePage";

export class MainPage extends BasePage {
    readonly inputField: Locator;
    readonly submitButton: Locator;
    readonly result: Locator

    constructor(page: Page) {
        super(page)
        this.inputField = page.locator('.toppy #number');
        this.submitButton = page.locator('.toppy #getFactorial');
        this.result = page.locator('.toppy #resultDiv');
    }

    async submitInputField(factorialField: string) {
        await this.inputField.type(factorialField);
        await this.submitButton.click();
    }

    async calculateFactorial(factorialField: number) {
        if(factorialField == 0) {
            return 1;
        }
        if(factorialField < 0 ) {
            return undefined;
        }
        for(let i = factorialField; --i; ) {
            factorialField *= i;
        }
        return factorialField;
    }

    async verifyResult(number: number, answer: number) {
        await expect (this.result).toHaveText( `The factorial of ${number} is: ${answer}`);
    }
}