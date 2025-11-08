import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateUserData {
  user_insert: User_Key;
}

export interface Event_Key {
  id: UUIDString;
  __typename?: 'Event_Key';
}

export interface Hobby_Key {
  id: UUIDString;
  __typename?: 'Hobby_Key';
}

export interface ListEventsData {
  events: ({
    id: UUIDString;
    name: string;
    date: DateString;
    location: string;
    price: number;
  } & Event_Key)[];
}

export interface MyPageantRegistrationsData {
  pageantRegistrations: ({
    id: UUIDString;
    registrationDate: TimestampString;
    hobbies?: string | null;
    specificPageantInfo?: string | null;
  } & PageantRegistration_Key)[];
}

export interface PageantRegistration_Key {
  id: UUIDString;
  __typename?: 'PageantRegistration_Key';
}

export interface PurchaseTicketData {
  ticketPurchase_insert: TicketPurchase_Key;
}

export interface PurchaseTicketVariables {
  eventId: UUIDString;
  quantity: number;
}

export interface TicketPurchase_Key {
  id: UUIDString;
  __typename?: 'TicketPurchase_Key';
}

export interface UserHobby_Key {
  userId: UUIDString;
  hobbyId: UUIDString;
  __typename?: 'UserHobby_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface ListEventsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListEventsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListEventsData, undefined>;
  operationName: string;
}
export const listEventsRef: ListEventsRef;

export function listEvents(): QueryPromise<ListEventsData, undefined>;
export function listEvents(dc: DataConnect): QueryPromise<ListEventsData, undefined>;

interface PurchaseTicketRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: PurchaseTicketVariables): MutationRef<PurchaseTicketData, PurchaseTicketVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: PurchaseTicketVariables): MutationRef<PurchaseTicketData, PurchaseTicketVariables>;
  operationName: string;
}
export const purchaseTicketRef: PurchaseTicketRef;

export function purchaseTicket(vars: PurchaseTicketVariables): MutationPromise<PurchaseTicketData, PurchaseTicketVariables>;
export function purchaseTicket(dc: DataConnect, vars: PurchaseTicketVariables): MutationPromise<PurchaseTicketData, PurchaseTicketVariables>;

interface MyPageantRegistrationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<MyPageantRegistrationsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<MyPageantRegistrationsData, undefined>;
  operationName: string;
}
export const myPageantRegistrationsRef: MyPageantRegistrationsRef;

export function myPageantRegistrations(): QueryPromise<MyPageantRegistrationsData, undefined>;
export function myPageantRegistrations(dc: DataConnect): QueryPromise<MyPageantRegistrationsData, undefined>;

