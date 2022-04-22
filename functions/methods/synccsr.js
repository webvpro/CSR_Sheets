// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(
) {
  const bucketName = 'ttrpgoverlays.appspot.com';
// Path to json file within bucket
   const fileName = '/TTRPG/MCG/json/abilities.json';

  

  // Imports the Google Cloud client libraries
  const {Firestore} = require('@google-cloud/firestore');
  const {Storage} = require('@google-cloud/storage');
  // Instantiates a client
  const firestore = new Firestore();
  const storage = new Storage();
  
  function csrSync() {

      console.log('read file')
      const file = await storage.bucket(bucketName).file(fileName).download();
      let csrObj = JSON.parse(file[1]);
      console.log(csrObj)
    
  }

  csrSync();
  
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
