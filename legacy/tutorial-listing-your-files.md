# Listing your files

After you have [uploaded a file](/Tutorial/tutorial-uploading-your-first-file). You will probably want to list all of your files. To do so you can use the code explorer to the right, just follow these steps:

1. Click Authorize to the right and enter in your HTTP Authentication header. Remember to add the Bearer prefix so the field looks something like this: `Bearer ESTxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxARY`
2. Click the Execute button and your browser will send the API Request!

Once you do so, here is an example of the output:

```
 "42": {
  "id": 36534620,
  "updatedAt": "2022-09-06T22:21:08.039349Z",
  "cid": "bafybeicgpn...uo4xloxypuwm",
  "name": "nature-6.mp4",
  "userId": 243,
  "description": "",
  "size": 83073242,
  "type": 0,
  "active": true,
  "offloaded": false,
  "replication": 6,
  "aggregatedIn": 0,
  "aggregate": false,
  "pinning": false,
  "pinMeta": "",
  "replace": false,
  "origins": "",
  "failed": false,
  "location": "SHUTTLE1f8fbb04-44c2-41a2-a8ac-d3057589dd93HANDLE",
  "dagSplit": false,
  "splitFrom": 0
 },
```

You can use the CID to retrieve the file immediately by using an IPFS Gateway. Here is an example:

> [https://api.estuary.tech/gw/ipfs/bafybeicgpn...xypuwm](https://api.estuary.tech/gw/ipfs/bafybeicgpnok4bl2rkf4ceojlb376henq6f6ufwqqvyyzmuo4xloxypuwm)

The general format for accessing your content by CID is as follows: **https://api.estuary.tech/gw/ipfs/YOUR_DESIRED_CID**

### You are done

You have successfuly put data on the Filecoin Network and you can get a list of the data that will be replicated across Filecoin miners. Check out the rest of our API documentation to learn what else you can do with your API key.

Let us know if you have any [questions](/give-feedback)!
