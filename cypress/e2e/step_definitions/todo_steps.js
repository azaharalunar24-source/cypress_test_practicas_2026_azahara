import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { todoPage } from "../../support/page_objects/TodoPage";

Given("que el usuario navega a la página de tareas", () => {
  todoPage.visitar();
});

When("agrega la tarea {string}", (tarea) => {
  todoPage.crearTarea(tarea);
});

Then("la lista debe contener {string}", (tarea) => {
  todoPage.elements.items().should('contain', tarea);
});