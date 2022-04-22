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
  // [START vision_batch_annotate_files_gcs]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  //const gcsSourceUri = 'gs://ttrpgoverlays.appspot.com/TTRPG/MCG/Cypher_System_Rulebook-xsm-compressed.pdf';
  const bucketName = 'ttrpgoverlays.appspot.com';
// Path to PDF file within bucket
   const fileName = '/TTRPG/MCG/Cypher_System_Rulebook-xsm-compressed.pdf';
// The folder to store the results
  const outputPrefix = 'results'
  const gcsSourceUri = `gs://${bucketName}/${fileName}`;
  const gcsDestinationUri = `gs://${bucketName}/${outputPrefix}/`;

  // Imports the Google Cloud client libraries
  const {ImageAnnotatorClient} = require('@google-cloud/vision').v1;

  // Instantiates a client
  const client = new ImageAnnotatorClient();

  // You can send multiple files to be annotated, this sample demonstrates how to do this with
  // one file. If you want to use multiple files, you have to create a request object for each file that you want annotated.
  async function batchAnnotateFiles() {
    // First Specify the input config with the file's uri and its type.
    // Supported mime_type: application/pdf, image/tiff, image/gif
    // https://cloud.google.com/vision/docs/reference/rpc/google.cloud.vision.v1#inputconfig
    const inputConfig = {
      mimeType: 'application/pdf',
      gcsSource: {
        uri: gcsSourceUri,
      },
    };
    const outputConfig = {
      gcsDestination: {
        uri: gcsDestinationUri,
      },
    };


    // Set the type of annotation you want to perform on the file
    // https://cloud.google.com/vision/docs/reference/rpc/google.cloud.vision.v1#google.cloud.vision.v1.Feature.Type
    const features = [{type: 'DOCUMENT_TEXT_DETECTION'}];

    // Build the request object for that one file. Note: for additional files you have to create
    // additional file request objects and store them in a list to be used below.
    // Since we are sending a file of type `application/pdf`, we can use the `pages` field to
    // specify which pages to process. The service can process up to 5 pages per document file.
    // https://cloud.google.com/vision/docs/reference/rpc/google.cloud.vision.v1#google.cloud.vision.v1.AnnotateFileRequest
    const fileRequest = {
      inputConfig: inputConfig,
      features: features,
      outputConfig: outputConfig
    };

    // Add each `AnnotateFileRequest` object to the batch request.
    const request = {
      requests: [fileRequest],
    };

    // Make the synchronous batch request.
    const [result] = await client.batchAnnotateFiles(request);

    // Process the results, just get the first result, since only one file was sent in this
    // sample.
    const reu = result.responses;
      console.log(result)
    
  }

  batchAnnotateFiles();
  // [END vision_batch_annotate_files_gcs]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
