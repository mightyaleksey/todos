'use strict';

exports.createChangeAction = createChangeAction;
exports.createRemoveAction = createRemoveAction;
exports.createSubmitAction = createSubmitAction;
exports.isChangeAction = isChangeAction;
exports.isRemoveAction = isRemoveAction;
exports.isSubmitAction = isSubmitAction;

function createChangeAction(fieldName, value) {
  return {
    type: 'CHANGE',
    fieldName,
    value,
  };
}

function createRemoveAction(fieldName, value) {
  return {
    type: 'REMOVE',
    fieldName,
    value,
  };
}

function createSubmitAction(fieldName, value) {
  return {
    type: 'SUBMIT',
    fieldName,
    value,
  };
}

function isChangeAction(action) {
  return action && action.type === 'CHANGE';
}

function isRemoveAction(action) {
  return action && action.type === 'REMOVE';
}

function isSubmitAction(action) {
  return action && action.type === 'SUBMIT';
}
