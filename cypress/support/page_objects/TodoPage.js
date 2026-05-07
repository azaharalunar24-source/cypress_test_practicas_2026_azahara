class TodoPage {
   elements = {
    input: () => cy.get('.new-todo'),
    items: () => cy.get('.todo-list li'),
    check: () => cy.get('[data-testid="todo-item-toggle"]'),
    borrar: () => cy.get('.destroy')
  }
  visitar() {
    cy.visit('https://todomvc.com/examples/react/dist/');
  }

  crearTarea(texto) {
    this.elements.input().type(`${texto}{enter}`);
  }
}

export const todoPage = new TodoPage();