// ./src/azure-storage-blob.ts

// <snippet_package>
// THIS IS SAMPLE CODE ONLY - NOT MEANT FOR PRODUCTION USE
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';

// THIS IS SAMPLE CODE ONLY - DON'T STORE TOKEN IN PRODUCTION CODE
const sasToken = process.env.storagesastoken || "sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-12-31T20:37:06Z&st=2020-12-30T12:37:06Z&spr=https&sig=w4HMCfrowpz1zMM0zu27a1veWjDz%2FgynzS%2BafSpX8pg%3D"; // Fill string with your SAS token
const containerName = `datas`;
const storageAccountName = process.env.storageresourcename || "sauveurstore"; // Fill string with your Storage resource name
// </snippet_package>

// <snippet_isStorageConfigured>
// Feature flag - disable storage feature to app if not configured
export const isStorageConfigured = () => {
  return (!storageAccountName || !sasToken) ? false : true;
}
// </snippet_isStorageConfigured>

// <snippet_getBlobsInContainer>
// return list of blobs in container to display
const getBlobsInContainer = async (containerClient: ContainerClient) => {
  const returnedBlobUrls: string[] = [];

  // get list of blobs in container
  // eslint-disable-next-line
  for await (const blob of containerClient.listBlobsFlat()) {
    // if image is public, just construct URL
    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    );
  }

  return returnedBlobUrls;
}
// </snippet_getBlobsInContainer>

// <snippet_createBlobInContainer>
const createBlobInContainer = async (containerClient: ContainerClient, file: File, name: string) => {

  try {
    // create blobClient for container
    const blobClient = containerClient.getBlockBlobClient(name);

    // set mimetype as determined from browser with file upload control
    const options = { blobHTTPHeaders: { blobContentType: file.type } };

    // upload file
    await blobClient.uploadBrowserData(file, options);

    return true;
  } catch {
    return false;
  }



}
// </snippet_createBlobInContainer>

// <snippet_uploadFileToBlob>
const uploadFileToBlob = async (file: File | null, name: string): Promise<string[]> => {
  if (!file) return [];

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );

  // get Container - full public read access
  const containerClient: ContainerClient = blobService.getContainerClient(containerName);
  // await containerClient.createIfNotExists({
  //   access: 'container',
  // });

  // upload file
  let result = await createBlobInContainer(containerClient, file, name);

  // get list of blobs in container
  return result
};
// </snippet_uploadFileToBlob>

export default uploadFileToBlob;

