---
sidebar_position: 5
---

# How Estuary works

## IPFS and Filecoin

Estuary is a decentralized data storage service built on the key decentralized-web protocols [IPFS](https://ipfs.io) and [Filecoin](https://filecoin.io). Estuary allows users to:

- Store and retrieve content quickly using IPFS.
- Use an IPFS API that adheres to the [IPFS Pinning Services API Spec](https://ipfs.github.io/pinning-services-api-spec/).
- Store content on Filecoin with proposition receipts and successful deal receipts.

The Filecoin network allows for _persistent_, _interoperable_, _verifiable_, and _provable_ decentralized storage. IPFS is used for content addressing and cached retrievals.

When you store data using Estuary, that data will go to an Estuary _node_. Initially, all data is stored in _hot-storage_ using IPFS. While this data is stored, each node will look through a curated list of Filecoin storage providers and initiate storage deals to move hot-storage data into long term cold-storage.

### How Estuary makes Filecoin storage deals

All data is currently uploaded to our hosted Estuary Node (Written in Go) in North America. Filecoin deals are made immediately against miners listed on our index. When a file is uploaded:

1. A proposal receipt is provided.
2. The deal machine will continue to make deals until 6 storage deals are sealed on the Filecoin Network with 6 different storage providers. The location is variable.
3. Each deal is proposed for at least a year (in fil-epochs), and is a verified client deal.
4. For each successful deal, a Filecoin storage deal receipt is provided with duration and miner information.

### How Estuary handles retrieval deals

Given any given person, let us imagine they made a request for their data. As an example: [cid:Qmch2cHCE4WXV32vyaLgWXYqE7VSLYwrT7xJ6tpxqq3NP5](https://dweb.link/ipfs/Qmch2cHCE4WXV32vyaLgWXYqE7VSLYwrT7xJ6tpxqq3NP5).

**Case A**

- That data is already pinned to an IPFS/Estuary node.
- The CID is served back to the requester immediately.

**Case B**

- That data is not pinned to an IPFS/Estuary node
- The Estuary node makes a retrieval deal against a Filecoin miner using FIL it has in escrow.
- Once the retrieval deal is successful, that data is pinned to the node.
- The CID is served back to the requester.

Still confusing? Check out the [source code](https://github.com/application-research/estuary/blob/master/retrieval.go).
