const selectors = require('../support/selectors/asset-form');

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        interface Chainable {
            createNewAsset: typeof createNewAsset,
            checkWhetherAssetIsCreated: typeof checkWhetherAssetIsCreated,
        }
    }
}

export function createNewAsset(assetName: string, initialValue: string, currentValue: string): void {
    cy.get(selectors.default.assetName).type(assetName);
    cy.get(selectors.default.initialValue).type(initialValue);
    cy.get(selectors.default.currentValue).type(currentValue);
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