
import { createNewSource } from './methods/createNewSource.js';
import { sourceCollections } from './methods/sourceCollections.js';
import { sourceImports } from './methods/importCSRD.js';
import { updateSources } from './methods/updateSources.js';
//import { assignAdminClaim } from './methods/firebaseRoles.js';

export const createSource = createNewSource;
export const updateSource = updateSources;
export const sourceCollectionsList = sourceCollections;
//local functions don't deploy please
export const docsImports = sourceImports;  
//export const createAdmin = assignAdminClaim;
