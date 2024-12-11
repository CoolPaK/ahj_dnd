import TasksColumn from './Components/TasksColumn/TasksColumn';
import StateService from './Utils/StateService';

const stateService = new StateService('board');
window.onload = () => {
  const isLoad = stateService.getFromStorage();
  if (!isLoad) {
    stateService.init(['ToDo', 'In progress', 'Done']);
  }

  stateService.getNames().forEach((name) => {
    const columnEl = new TasksColumn(name, stateService);
    columnEl.bindToDOM('.board');
  });
};

window.onbeforeunload = () => {
  stateService.saveToStorage();
};
