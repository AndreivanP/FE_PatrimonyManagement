const selectors = require('../support/selectors/asset-form');

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        interface Chainable {
            createNewAsset: typeof createNewAsset,
            checkWhetherAssetIsCreated: typeof checkWhetherAssetIsCreated,
            checkMandatoryMessage: typeof checkMandatoryMessage,
            checkCurrentValueAssetList: typeof checkCurrentValueAssetList
        }
    }
}

export function createNewAsset(assetName: string = '', broker = '', startDate: string = '',
    isActive: boolean = true, isVariableIncome: boolean = false, initialValue: string = '',
    interestRate: string = '', currentValue: string = '', expiryDate = ''): void {
    if (assetName != '') {
        cy.get(selectors.default.assetName).type(assetName);
    }

    if (broker != '') {
        cy.get(selectors.default.broker).type(broker);
    }

    if (startDate != '') {
        cy.get(selectors.default.date).type(startDate);
    }

    if (isActive === true) {
        cy.get(selectors.default.isActiveCheckBox).click();
    }

    if (isVariableIncome === true) {
        cy.get(selectors.default.variableIncomeCheckBox).click();
    }

    if (initialValue != '') {
        cy.get(selectors.default.initialValue).type(initialValue);
    }

    if (interestRate != '') {
        cy.get(selectors.default.currentValue).type(interestRate);
    }

    if (currentValue != '') {
        cy.get(selectors.default.currentValue).clear().then(() => {
            cy.get(selectors.default.currentValue).type(currentValue);
        });
    }

    if (expiryDate != '') {
        cy.get(selectors.default.expiryDate).type(expiryDate);
    }

    cy.get(selectors.default.btnSave).click();
}

Cypress.Commands.add('createNewAsset', createNewAsset);

export function checkWhetherAssetIsCreated(assetName: string): void {
    let count = 0;
    cy.get('.table > tbody > tr > :nth-child(1)').each(($elem) => {
        if ($elem.text() === assetName) {
            count += 1;
        }
    }).then(() => {
        // by the time ".each" is finished, the count has been updated
        expect(count, 'Asset count').to.equal(1);
    })
}

Cypress.Commands.add('checkWhetherAssetIsCreated', checkWhetherAssetIsCreated);

export function checkCurrentValueAssetList(currentValue: string): void {
    let count = 0;
    cy.get('.table > tbody > tr > :nth-child(3)').each(($elem) => {
        if ($elem.text() === currentValue) {
            count += 1;
        }
    }).then(() => {
        // by the time ".each" is finished, the count has been updated
        expect(count, 'Asset count').to.equal(1);
    })
}

Cypress.Commands.add('checkCurrentValueAssetList', checkCurrentValueAssetList);

export function checkMandatoryMessage(selector: any, message: string): void {
    cy.get(selector).then(($input) => {
        expect($input[0].validationMessage).to.eq(message)
    })
}

Cypress.Commands.add('checkMandatoryMessage', checkMandatoryMessage);