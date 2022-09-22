
import { createNewSource } from './methods/createNewSource.js';
import { sourceCollections } from './methods/sourceCollections.js';
import { sourceImports } from './methods/cypherJsonImports.js';
//import { assignAdminClaim } from './methods/firebaseRoles.js';

export const createSource = createNewSource;
export const sourceCollectionsList = sourceCollections;
//local functions don't deploy please
export const csPubImports = sourceImports;  
//export const createAdmin = assignAdminClaim;
