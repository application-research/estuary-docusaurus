---
sidebar_position: 6
---

# NFT.storage
## Overview
NFT.Storage is a long-term storage service designed for off-chain NFT data (like metadata, images, and other assets) for up to 31GiB in size per individual upload. Data is content addressed using IPFS, meaning the URI pointing to a piece of data (“ipfs://…”) is completely unique to that data (using a content identifier, or CID). IPFS URLs and CIDs can be used in NFTs and metadata to ensure the NFT forever actually refers to the intended data (eliminating things like rug pulls, and making it trustlessly verifiable what content an NFT is associated with).

NFT.Storage stores many copies of uploaded data on the public IPFS network in two primary ways: in dedicated IPFS servers managed by NFT.Storage, and decentralized on Filecoin. Since IPFS is a standard used by many different storage services, it's easy to redundantly store data uploaded to NFT.Storage on any other IPFS-compatible storage solution from pinning services, to your local IPFS node, to other storage networks like Arweave or Storj. And as time goes on, NFT.Storage will increasingly decentralize itself as a public good!

## Pricing
Because NFT.Storage participates in the Filecoin Plus program, all data uploaded through the service is eligible for this 10x reward multiplier. This is such a powerful incentive for Filecoin storage providers to store user data that they tend to be willing to offer free storage and retrieval services in order to get this block reward multiple. As a result, most storage providers offer free storage and retrieval on Filecoin today and will continue to do so as long as block rewards continue to be a powerful incentive. This should be true for a very long time. While there is some additional infrastructure cost associated with running the NFT.Storage service, Protocol Labs is committed to maintaining this infrastructure indefinitely as part of our mission to grow the decentralized storage ecosystem and preserve humanity's information for future generations.

## API Token
It only takes a few moments to get a free API token from NFT.Storage. This token enables you to interact with the NFT.Storage service without using the main website, enabling you to incorporate files stored using NFT.Storage directly into your applications and services.

- Click API Keys to go to your NFT.Storage account page.
- Click Create an API token.
- Enter a descriptive name for your API token and click Create.
- Make a note of the Token field somewhere secure where you know you won't lose it. You can click Copy to copy your new API token to your clipboard.

> Do not share your API token with anyone else. This key is specific to your account.

## Uploading Files
To upload a single file, send a POST request to /upload with the binary file data as the request body. The Content-Type header should be set to a type that's appropriate for the content, for example, image/jpeg.

```shell
$ curl --location 'https://api.nft.storage/upload' \
--header 'Authorization: Bearer YOUR_API_KEY' \
--header 'Content-Type: image/jpeg' \
--data '@/path/to/file.jpg' | jq
{
    "ok": true,
    "value": {
        "cid": "bafkreifqusopuy5k56dnhsknofeo2fd36frzddjbpi3fkn3vh2djdvtebm",
        "created": "2023-08-31T14:27:04.437+00:00",
        "type": "image/jpeg",
        "scope": "test",
        "files": [],
        "size": 104271,
        "name": "Upload at 2023-08-31T14:27:04.437Z",
        "pin": {
            "cid": "bafkreifqusopuy5k56dnhsknofeo2fd36frzddjbpi3fkn3vh2djdvtebm",
            "created": "2023-08-31T14:27:04.437+00:00",
            "size": 104271,
            "status": "pinned"
        },
        "deals": []
    }
}
```

> The /upload endpoint can accept up to 100 MiB in each HTTP request. If your files are larger than 100 MiB, see the section below on CAR files, which can be used to split uploads between several HTTP requests.

## Retrieving Files
Now that we have uploaded a file, we should be able to fetch its cid directly in our browser with their `nftstorage.link` gateway.

`https://bafybeigvgzoolc3drupxhlevdp2ugqcrbcsqfmcek2zxiw5wctk3xjpjwy.ipfs.nftstorage.link`

## Status
```shell
$ curl 'https://api.nft.storage/bafkreidr4m5ethn4bj25nnfnwb5ykcltivfceosuzlbfainfjom2nwkllm' \
--header 'Authorization: Bearer YOUR_API_KEY' | jq
{
  "ok": true,
  "value": {
    "cid": "bafkreidr4m5ethn4bj25nnfnwb5ykcltivfceosuzlbfainfjom2nwkllm",
    "created": "2022-12-15T13:30:47.155+00:00",
    "type": "application/car",
    "scope": "session",
    "files": [],
    "size": 68910,
    "name": "Upload at 2022-12-15T13:30:47.155Z",
    "pin": {
      "cid": "bafkreidr4m5ethn4bj25nnfnwb5ykcltivfceosuzlbfainfjom2nwkllm",
      "created": "2022-12-15T13:30:47.155+00:00",
      "size": 68910,
      "status": "pinned"
    },
    "deals": [
      {
        "status": "active",
        "lastChanged": "2023-08-31T14:15:03.709152+00:00",
        "chainDealID": 35317845,
        "datamodelSelector": "Links/134/Hash/Links/1/Hash/Links/0/Hash",
        "statusText": null,
        "dealActivation": "2023-05-08T16:43:00+00:00",
        "dealExpiration": "2024-10-21T16:43:00+00:00",
        "miner": "f020378",
        "pieceCid": "baga6ea4seaqmksbhhyjht4oxknuxm6ywkw5vr4tzge6s43y5f7cbiglalll22ny",
        "batchRootCid": "bafybeicb5ktvfmyittcvv33372sogtyzwssdeqfyo33esy3zbuljfdvlza"
      },
      ...
    ]
  }
}
```

## Pinning
You can ask NFT.Storage to archive data that is already on the IPFS distributed storage network with this API. This data will remain perpetually available over IPFS (backed by Filecoin decentralized storage).

NFT.Storage provides a pinning service that is modeled closely on the IPFS Pinning Service API specification. **NFT.Storage's Pinning Service API is not to be used for ongoing production traffic, but rather for one-time migrations.**

**You do not need to request access if you are storing data with NFT.Storage directly. Data stored with NFT.Storage is persisted indefinitely by default. This API is only useful if you are looking to store data with NFT.Storage that is already available on the IPFS network. Even in these situations, if you are able to, we recommend you generate a CAR file from a IPFS node hosting the content and directly upload that to NFT.Storage (e.g., run ipfs dag export from your local node) rather than use the Pinning API.**

For a full list and documentation of all the available pinning service endpoints, visit the IPFS Pinning Service API endpoint documentation.

### Requesting access
To request access to the pinning service for your NFT.Storage account, you will need to request access from your API Key account page. Once approved, you will be able to access the pinning service API endpoints using your API token.

### Using the HTTP API
The NFT.Storage pinning service endpoint for all requests is https://api.nft.storage/pins. For additional documentation, please see the IPFS Pinning Service API endpoint documentation.

### Add a pin
```shell
$ curl -X POST 'https://api.nft.storage/pins' \
--header 'Accept: */*' \
--header 'Authorization: Bearer <YOUR_AUTH_KEY_JWT>' \
--header 'Content-Type: application/json' \
-d '{
"cid": "QmCIDToBePinned",
"name": "PreciousData.pdf"
}'
```

### List successful pins
```shell
curl -X GET 'https://api.nft.storage/pins' \
--header 'Accept: */*' \
--header 'Authorization: Bearer <YOUR_AUTH_KEY_JWT>'
```

## Additional Resources
You can find additional resources @ https://nft.storage/docs