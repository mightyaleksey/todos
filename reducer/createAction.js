'use strict';

exports.createChangeAction = createChangeAction;
exports.createSubmitAction = createSubmitAction;
exports.isChangeAction = isChangeAction;
exports.isSubmitAction = isSubmitAction;

function createChangeAction(fieldName, value) {
  return {
    type: 'CHANGE',
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

function isSubmitAction(action) {
  return action && action.type === 'SUBMIT';
}
