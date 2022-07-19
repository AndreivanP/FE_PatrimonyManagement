import {default as selectors} from '../support/selectors/asset-form';
import {default as listSelectors} from '../support/selectors/asset-list';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        interface Chainable {
            handleAsset: typeof handleAsset,
            checkMandatoryMessage: typeof checkMandatoryMessage,
            checkAssetList: typeof checkAssetList,
            deleteAssetByName: typeof deleteAssetByName
        }
    }
}

export function handleAsset( {assetName = '', broker = '', startDate = '',
                              isActive = true, isVariableIncome = false, initialValue = '',
                              interestRate = '', currentValue = '', expiryDate = ''}): void {
    if (assetName != '') {
        cy.get(selectors.assetName).should('be.visible');
        cy.get(selectors.assetName).clear().type(assetName);
    }

    if (broker != '') {
        cy.get(selectors.broker).click().clear().type(broker);
    }

    if (startDate != '') {
        cy.get(selectors.date).click().clear().type(startDate);
    }

    if (isActive === true) {
        cy.get(selectors.isActiveCheckBox).click();
    }

    if (isVariableIncome === true) {
        cy.get(selectors.variableIncomeCheckBox).click();
    }

    if (initialValue != '') {
        cy.get(selectors.initialValue).click().clear().type(initialValue);
    }

    if (interestRate != '') {
        cy.get(selectors.currentValue).click().clear().type(interestRate);
    }

    if (currentValue != '') {
        cy.get(selectors.currentValue).click().clear().type(currentValue);
    }

    if (expiryDate != '') {
        cy.get(selectors.expiryDate).click().clear().type(expiryDate);
    }

    cy.get(selectors.btnSave).click();
}

Cypress.Commands.add('handleAsset', handleAsset);

export function checkAssetList(fieldToCheck: string, newValue: string): void {
    cy.get('#mui-1').select('1000');
    switch(fieldToCheck) {
        case 'name':
            fieldToCheck = listSelectors.listAssetName
            break;
        case 'initialValue':
            fieldToCheck = listSelectors.listInitialValue
            break;
        case 'currentValue':
            fieldToCheck = listSelectors.listCurrentValue
            break;
        case 'company':
            listSelectors.listAssetCompany
            break;
        default:
            ''
    }

    let count = 0;
    cy.get(fieldToCheck).each(($elem) => {
        if ($elem.text() === newValue) {
            count += 1;
        }
    }).then(() => {
        // by the time ".each" is finished, the count has been updated
        expect(count, 'Asset count').to.equal(1);
    })
}

Cypress.Commands.add('checkAssetList', checkAssetList);

export function checkMandatoryMessage(selector: any, message: string): void {
    cy.get(selector).then(($input) => {
        expect($input[0].validationMessage).to.eq(message)
    })
}

Cypress.Commands.add('checkMandatoryMessage', checkMandatoryMessage);

export function deleteAssetByName(assetName: string): void {
    cy.get('#mui-1').select('1000');

    cy.get(listSelectors.listAssetName).each(($elem) => {
        if ($elem.text() === assetName) {
            cy.wrap($elem)
                .parent()
                .parent()
                .parent()
                .siblings()
                .find(listSelectors.iconDelete)
                .click()
        }
    });

    let count = 0;
    cy.get('.MuiDialogContent-root').each(($elem) => {
        console.log($elem.text())
        if($elem.text().includes(assetName)){
            cy.wrap($elem)
                .next()
                .find(listSelectors.btnYesDelete)
                .click({force: true})
                count += 1;
        }
        if(count === 1) {
            return false;
        }
    });
}

Cypress.Commands.add('deleteAssetByName', deleteAssetByName);