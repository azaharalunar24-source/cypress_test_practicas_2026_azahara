describe('visitar pagina', () => {
  it('passes', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
  })
})
describe('crear tarea', () => {
  it('passes', () => {
    cy.visit('https:/todomvc.com/examples/react/dist/')
    cy.get('.new-todo')
    .type('comprar café{enter}')
  })
  })
  describe('marcar tarea como completada', () => {
  it('passes', () => {
    cy.visit('https:/todomvc.com/examples/react/dist/')
    cy.get('.new-todo')
    .type('comprar café{enter}')
    cy.get('[data-testid="todo-item-toggle"]').click()
    })
  })
  describe('desmarcar tarea completada', () => {
  it('passes', () => {
    cy.visit('https:/todomvc.com/examples/react/dist/')
    cy.get('.new-todo')
    .type('comprar café{enter}')
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
    })
  })
  describe('editar tarea', () => {
  it('passes', () => {
    cy.visit('https:/todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('comprar café{enter}')
    cy.contains('comprar café').dblclick()
    cy.focused().clear().type('comprar pan{enter}')
    cy.contains('comprar pan').should('be.visible')
  })
  })
    describe('borrar tarea', () => {
  it('passes', () => {
    cy.visit('https:/todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('comprar café{enter}')
    cy.get('.destroy').click({ force: true })
  })
  })
  describe('Filtrar tareas', () => {
  it('debe filtrar tareas por su estado (Todas, Activas, Completadas)', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea Activa 1{enter}')
    cy.get('.new-todo').type('Tarea Activa 2{enter}')
    cy.get('.new-todo').type('Tarea Completada{enter}')
    cy.get('.toggle').last().click()
    cy.contains('Completed').click()
    cy.contains('Tarea Completada').should('be.visible')
    cy.contains('Tarea Activa 1').should('not.exist')
    cy.contains('Active').click()
    cy.contains('Tarea Activa 1').should('be.visible')
    cy.contains('Tarea Activa 2').should('be.visible')
    cy.get('.filters').contains('Completed').click()
    cy.get('.filters').contains('Active').click()
    cy.get('.filters').contains('All').click()
  })
})