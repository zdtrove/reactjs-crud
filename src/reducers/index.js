import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';

const myReducer = combineReducers({
	tasks, // tasks : tasks
	isDisplayForm, // isDisplayForm : isDisplayForm
	itemEditing, // itemEditing : itemEditing
	filterTable // filterTable : filterTable
});

export default myReducer;