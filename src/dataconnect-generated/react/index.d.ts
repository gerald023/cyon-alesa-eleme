import { CreateUserData, ListEventsData, PurchaseTicketData, PurchaseTicketVariables, MyPageantRegistrationsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useListEvents(options?: useDataConnectQueryOptions<ListEventsData>): UseDataConnectQueryResult<ListEventsData, undefined>;
export function useListEvents(dc: DataConnect, options?: useDataConnectQueryOptions<ListEventsData>): UseDataConnectQueryResult<ListEventsData, undefined>;

export function usePurchaseTicket(options?: useDataConnectMutationOptions<PurchaseTicketData, FirebaseError, PurchaseTicketVariables>): UseDataConnectMutationResult<PurchaseTicketData, PurchaseTicketVariables>;
export function usePurchaseTicket(dc: DataConnect, options?: useDataConnectMutationOptions<PurchaseTicketData, FirebaseError, PurchaseTicketVariables>): UseDataConnectMutationResult<PurchaseTicketData, PurchaseTicketVariables>;

export function useMyPageantRegistrations(options?: useDataConnectQueryOptions<MyPageantRegistrationsData>): UseDataConnectQueryResult<MyPageantRegistrationsData, undefined>;
export function useMyPageantRegistrations(dc: DataConnect, options?: useDataConnectQueryOptions<MyPageantRegistrationsData>): UseDataConnectQueryResult<MyPageantRegistrationsData, undefined>;
