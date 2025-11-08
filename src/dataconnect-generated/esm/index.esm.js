import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'picto-100',
  location: 'us-east4'
};

export const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';

export function createUser(dc) {
  return executeMutation(createUserRef(dc));
}

export const listEventsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListEvents');
}
listEventsRef.operationName = 'ListEvents';

export function listEvents(dc) {
  return executeQuery(listEventsRef(dc));
}

export const purchaseTicketRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'PurchaseTicket', inputVars);
}
purchaseTicketRef.operationName = 'PurchaseTicket';

export function purchaseTicket(dcOrVars, vars) {
  return executeMutation(purchaseTicketRef(dcOrVars, vars));
}

export const myPageantRegistrationsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'MyPageantRegistrations');
}
myPageantRegistrationsRef.operationName = 'MyPageantRegistrations';

export function myPageantRegistrations(dc) {
  return executeQuery(myPageantRegistrationsRef(dc));
}

