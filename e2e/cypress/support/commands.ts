import 'cypress-wait-until';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/naming-convention
        interface Chainable {
            auth0Login: typeof auth0Login,
            createToken: typeof createToken,
            getToken: typeof getToken,
            listEdit: typeof listEdit,
            verifyCreation: typeof verifyCreation,
            verifyListUpdate: typeof verifyListUpdate,
            verifyDelete: typeof verifyDelete,
            verifyInshowUpdate: typeof verifyInshowUpdate,
            verifyFailure: typeof verifyFailure,
            generateCsv: typeof generateCsv,
            useDynamicDropDown: typeof useDynamicDropDown,
            createAllExport: typeof createAllExport,
            searchItem: typeof searchItem,
            useDynamicDropDownClick: typeof useDynamicDropDownClick,
            loadMenuItem: typeof loadMenuItem,
        }
    }
}

let Id: string;

export function auth0Login(endpoint = ''): void {
  Cypress.log({
    name: 'loginViaAuth0',
  });

  const options = {
    method: 'POST',

    url: Cypress.env('auth_url'),

    body: {
      username: Cypress.env('auth_username'),
      password: Cypress.env('auth_password'),
    },

  };

  cy.request(options).then((resp: any) => resp.body).then((body: any) => {
    const access_token = body.token;

    window.sessionStorage.setItem('tokenUser', access_token);
    window.sessionStorage.setItem('authenticatedUser', Cypress.env('auth_username'));
  });

  cy.visit(`/${endpoint}`);
}

Cypress.Commands.add('auth0Login', auth0Login);

export function createToken() : any {
  cy.request(
    'POST',
    Cypress.env('auth_url'),
    {
      username: Cypress.env('auth_username'),
      password: Cypress.env('auth_password'),
    });
}

Cypress.Commands.add('createToken', createToken);

export function getToken(url: string): void {
  const id = url.split('/');
  const urlLength = id.length - 2;
  Id = id[urlLength];
  cy.log(`This is the id generated: ${Id}`);
  cy.fixture('testData').then(data => {
    data._id = Id;
    cy.writeFile('cypress/fixtures/testData.json', { _id: Id });
  });
}

Cypress.Commands.add('getToken', getToken);

export function listEdit(): void {
  cy.readFile('cypress/fixtures/testData.json').then(data => {
    cy.get(`#icon-button-record-edit-${data._id}`).click();
  });
}

Cypress.Commands.add('listEdit', listEdit);

export function verifyCreation(result: 'updated' | 'created', fieldName?: string): void {
  cy.get('#button-record-save').click({ force: true });
  cy.get('#message-notification-success-text').should('contain', `Element ${result}`);
  if (result === 'created') {
    cy.url().then(url => {
      cy.getToken(url);
    });
  }
  cy.get('#button-record-list').click({ force: true });
  if (fieldName) {
    cy.contains(fieldName).should('be.visible');
  }
}
Cypress.Commands.add('verifyCreation', verifyCreation);

/**
 * Ensures that a form submission fails and no success message is shown
 * but instead search for a particular error message
 * // todo: enhance this to have error message per field
 * @param result
 * @param errorMsg
 */
export function verifyFailure(errorMsg = 'Required field'): void {
  cy.get('#button-record-save').click({ force: true });
  cy.get('#message-notification-success-text').should('not.exist');
  cy.contains(errorMsg).should('be.visible').should('have.class', 'Mui-error');
}

Cypress.Commands.add('verifyFailure', verifyFailure);

// todo: should also work for non text fields like checkboxes or icons
export function verifyListUpdate(updateField: string, updateName: string): void {
  cy.readFile('cypress/fixtures/testData.json').then(data => {
    cy.get(`#icon-button-record-edit-${data._id}`).click();
  });
  cy.get(updateField).clear().type(`${updateName}`);
  cy.verifyCreation('updated', updateName);
}

Cypress.Commands.add('verifyListUpdate', verifyListUpdate);

// todo: rename to camel case
// todo: should also work for non text fields like checkboxes or icons
export function verifyInshowUpdate(updateField: string, updateName: string): void {
  cy.readFile('cypress/fixtures/testData.json').then(data => {
    cy.get(`#icon-button-record-show-${data._id}`).click();
  });
  cy.get('#button-record-show').should('not.exist');
  cy.get('#button-record-edit').should('be.visible').click();
  cy.get(updateField).clear().type(`${updateName}`);
  cy.verifyCreation('updated', updateName);
}

Cypress.Commands.add('verifyInshowUpdate', verifyInshowUpdate);

export function verifyDelete(fieldName: string): void {
  cy.readFile('cypress/fixtures/testData.json').then(data => {
    cy.get(`#icon-button-record-show-${data._id}`).click();
  });
  cy.get('#button-record-delete').click();
  cy.get('[label="Delete"]').click();
  cy.get('#message-notification-success-text').should('contain', 'Element deleted');
  cy.contains(fieldName).should('not.exist');
}

Cypress.Commands.add('verifyDelete', verifyDelete);

export function generateCsv(exportTitle: string): void {
  cy.get('#button-export-dialog').click();
  cy.get('#export-form').should('be.visible');
}

Cypress.Commands.add('generateCsv', generateCsv);

export function useDynamicDropDown(fieldTag: string, queryName: string): void {
  cy.get(fieldTag).type(queryName);
  cy.get('.react-window-list').should('have.length.at.least', 1);
  cy.contains('.react-window-list', queryName).should('be.visible').then(() => {
    cy.waitUntil(() => cy.get('[data-testid="aor-autocomplete-input-list"]').first().then(button => { cy.wrap(button).type('{enter}'); }));
  });
}

Cypress.Commands.add('useDynamicDropDown', useDynamicDropDown);

export function createAllExport(filePath: string): void {
  cy.get('#button-select-all').click().type('{enter}');
  cy.readFile(filePath, { timeout: 5000 }).should('have.length.gt', 50);
}

Cypress.Commands.add('createAllExport', createAllExport);

export function useDynamicDropDownClick(primaryLocator: string, elementId: string, query: string): void {
  cy.get(primaryLocator).type(query);
  cy.get(elementId).then($elem => {
    $elem.trigger('click');
  });
}

Cypress.Commands.add('useDynamicDropDownClick', useDynamicDropDownClick);

export function searchItem(searchName: string, result: string): void {
  cy.get('#advanced-search').clear().type(`${searchName}{enter}`);
  cy.contains('[id*="datagrid-table-accounts"]', result, { timeout: 20000 }).should('be.visible', { timeout: 20000 });
}

Cypress.Commands.add('searchItem', searchItem);

export function loadMenuItem(menuName: string, menuItem: string, listName: string, subMenu = true): void {
  cy.get('#menu-button').click();
  cy.get(`[data-testid="${menuName}"]`).click();
  if (subMenu) {
    cy.get(`#menu-item-${menuItem}`).click();
  }
  cy.get('h2').should('contain.text', `${listName}`);
  cy.get(`[data-testid="${menuName}"]`).click();
  cy.get('#menu-button').click();
}

Cypress.Commands.add('loadMenuItem', loadMenuItem);