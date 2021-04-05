export enum ConnectionServiceAction {
  Create = 'Create',
}

export enum CredDefServiceAction {
  Create = 'Create',
  Details = 'Details',
}

export enum CredExServiceAction {
  Create = 'Create',
}

export enum CredServiceAction {
  Create = 'Create',
}

export enum LedgerServiceAction {
  TAA_Fetch = 'TAA Fetch',
  TAA_Accept = 'TAA Accept',
}

export enum MultitenancyServiceAction {
  Create = 'Create',
  Remove = 'Remove',
  Details = 'Details',
}

// TODO: Singularize for consistency
export enum SchemasServiceAction {
  Create = 'Create',
  List = 'List',
  Details = 'Details',
}

export enum WalletServiceAction {
  Create = 'Create',
  Publish = 'Publish',
  Fetch = 'Fetch',
}

export enum IssuerRegistrationServiceAction {
  Submit = 'Submit',
}

// TODO: Singularize for consistency
export enum ServiceType {
  Connection = 'Connection',
  CredDef = 'Credential Definition',
  CredEx = 'Credential Exchange',
  Cred = 'Credential',
  Schemas = 'Schemas',
  Ledger = 'Ledger',
  Multitenancy = 'Multitenancy',
  Wallet = 'Wallet',
  IssuerRegistration = 'IssuerRegistration',
}

export enum WebhookTopic {
  Connections = 'connections',
  IssueCredential = 'issue_credential',
}

export enum CredExState {
  OfferSent = 'offer_sent',
  RequestReceived = 'request_received',
  Issued = 'credential_issued',
}
