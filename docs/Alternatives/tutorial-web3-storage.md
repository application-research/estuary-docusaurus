---
sidebar_position: 6
---

# Web3.Storage
## Overview
At the core of web3.storage is a storage service to safely secure and make your data available - giving developers the power of decentralized storage and content addressing via simple client libraries or an HTTP API.

Content uploaded to web3.storage is stored on instances of Elastic IPFS, a cloud-native implementation of IPFS to stay reliable and performant with the scale of uploads we were seeing. Elastic IPFS ensures your data is continuously and quickly available over the IPFS network once your data is uploaded.

Generally, before data is uploaded, it is locally converted into a CAR file, which contains your data transformed into a format that IPFS can consume (a directed acyclic graph, or DAG). This is very powerful - in this process, a content address is locally generated for your data, giving you a guarantee of your data’s fingerprint. Further, you can construct the DAG in useful ways, like making individual files within your folders or key-value pairs in your JSON have their own content addresses.

Once the CAR file is uploaded, a queue of geographically distributed Filecoin storage providers - selected for performance and availability - bid for the right to store these deals.
The Filecoin storage network provides a global network of storage providers who bid against each other to store data. web3.storage makes a minimum of 5 deals with the various storage providers.

These storage providers generate cryptographic proofs that they are continuously storing your data. The additional redundancy provided by these storage providers is very powerful. You can use the Filecoin blockchain to directly validate that your data is actually physically being stored - without having to take web3.storage’s word for it!

## Pricing
web3.storage offers a free tier that will allow you to store 5GiB of data for free. If you need additional storage, take a look at their pricing model @ https://web3.storage/pricing/

## API Token
Before being able to upload any files you will need to log into web3.storage and generate an API key. This can be done through their UI at web3.storage. Simply log in using your github account or sign up with your email. Once logged in, go under Account -> Create an API Token. This page should be familiar if you are used to generate API Keys in Estuary. Once you create a new key, we should be able to interact with their API now.

## Uploading Files
Store files using web3.storage. You can upload either a single file or multiple files.

Send the POST request with one of the following:

- a single file, with a single blob/file object as the body
- multiple files, as FormData with Content-Disposition headers for each part to specify filenames and the request header Content-Type: multipart/form-data

> Requests to this endpoint have a maximum payload size of 100MB. To upload larger files, see the documentation for the /car endpoint.

```shell
$ curl -X POST --data-binary @file.txt -H 'Authorization: Bearer YOUR_API_KEY' https://api.web3.storage/upload  -s | jq
{
  "cid":"bafkreid65ervf7fmfnbhyr2uqiqipufowox4tgkrw4n5cxgeyls4mha3ma"
}
```

## Retrieving Files
Now that we have uploaded a file, we should be able to fetch its cid directly in our browser with their `w3s.link` gateway.

`https://bafkreid65ervf7fmfnbhyr2uqiqipufowox4tgkrw4n5cxgeyls4mha3ma.ipfs.w3s.link/`

## Status
If you want to look at your file status, you can do so by calling the status endpoint with your cid.

```shell
$ curl 'https://api.web3.storage/status/bafybeidwfngv7n5y7ydbzotrwl3gohgr2lv2g7vn6xggwcjzrf5emknrki' -s | jq
{
    "cid": "bafkreid65ervf7fmfnbhyr2uqiqipufowox4tgkrw4n5cxgeyls4mha3ma",
    "dagSize": 519,
    "created": "2021-08-11T08:25:21.905806+00:00",
    "pins": [
        {
            "status": "Pinned",
            "updated": "2021-08-11T08:35:42.726691+00:00",
            "peerId": "12D3KooWSnniGsyAF663gvHdqhyfJMCjWJv54cGSzcPiEMAfanvU",
            "peerName": "web3-storage-dc13",
            "region": null
        },
        ...
    ],
    "deals": [
        {
            "dealId": 38314728,
            "storageProvider": "f02095132",
            "status": "Active",
            "pieceCid": "baga6ea4seaqesuag2dgpsenmmtyeitgi73b2eha7dj6ssmjqeihbrsxmuoumsba",
            "dataCid": "bafybeidtjfi5dqvdyadbadjukrzm2fuljw7wid35rn3bacdoopcdnug4ae",
            "dataModelSelector": "Links/146/Hash/Links/35/Hash/Links/0/Hash",
            "activation": "2023-05-29T02:15:00+00:00",
            "expiration": "2024-11-11T02:15:00+00:00",
            "created": "2023-08-31T13:25:03.463083+00:00",
            "updated": "2023-08-31T13:25:03.463083+00:00"
        },
        ...
    ]
}
```

Here is an overview of the fields returned by the status field and their description:

- `cid` contains the same CID that was passed into the status method, so you don't have to keep track of which response goes with which request.
- `created` contains an ISO-8601 datetime string indicating when the content was first uploaded to web3.storage.
- `dagSize` contains the size in bytes of the Directed Acyclic Graph (DAG) that contains all the uploaded content. This is the size of the data that is transferred over the network to web3.storage during upload, and is slightly larger than the total size of the files on disk.
- `pins` contains an array of objects describing the IPFS nodes that have pinned the data, making it available for fast retrieval using the IPFS network.
- `deals` contains an array of objects describing the Filecoin storage providers that have made storage deals. These storage providers have committed to storing the data for an agreed period of time. Note that it may take up to 48 hours after uploading data to web3.storage before Filecoin deals are activated.

## Pinning
web3.storage provides a pinning service that complies with the IPFS Pinning Service API specification. **web3.storage's Pinning Service API is not to be used for ongoing production traffic, but rather for one-time migrations.**

**You do not need to request access if you are storing data with web3.storage directly. Data stored with web3.storage is persisted indefinitely by default. This API is only useful if you are looking to store data with web3.storage that is already available on the IPFS network. Even in these situations, if you are able to, we recommend you generate a CAR file from a IPFS node hosting the content and directly upload that to web3.storage (e.g., run ipfs dag export from your local node) rather than use the Pinning API.**

For a full list and documentation of all the available pinning service endpoints, visit the IPFS Pinning Service API endpoint documentation.

### Requesting access
To request access to the pinning service for your web3.storage account, you will need to navigate to your token management page and click the button labeled "Request API Pinning Access". Fill out the form and then, once approved, you will be able to access the pinning service API endpoints using your API token.
### Using the HTTP API
The web3.storage pinning service endpoint for all requests is https://api.web3.storage/pins.

> Web3.storage Pinning APIs only support raw, dag-pb, dag-cbor and dag-json IPLD codecs. The API doesn't support pinning content by providing IPNS records pointing to it.

### Add a pin
```shell
curl -X POST 'https://api.web3.storage/pins' \
  --header 'Accept: */*' \
  --header 'Authorization: Bearer <YOUR_AUTH_KEY_JWT>' \
  --header 'Content-Type: application/json' \
  -d '{
  "cid": "<CID_TO_BE_PINNED>",
  "name": "PreciousData.pdf"
}'
```

### List pins
```shell
curl -X GET 'https://api.web3.storage/pins' \
  --header 'Accept: */*' \
  --header 'Authorization: Bearer <YOUR_AUTH_KEY_JWT>'
```

## Additional Resources
You can find additional resources @ https://web3.storage/docs