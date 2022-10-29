import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const endpoint = '/content/add-ipfs';
const markdown =
  `# ➟ ` +
  endpoint +
  `

Use this endpoint to take an existing IPFS CID, and make storage deals for it.

* Here is an example of a CID [bafybeidj7c2e3daplalccukbps4eze7473gyshspev76xi4sjfmfkuaofe](https://bafybeidj7c2e3daplalccukbps4eze7473gyshspev76xi4sjfmfkuaofe.ipfs.dweb.link/)

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/content/post_content_add_ipfs)

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.estuary.tech/feedback).
`;

const key = `api-content-add-ipfs`;

const CID = 'bafybeidj7c2e3daplalccukbps4eze7473gyshspev76xi4sjfmfkuaofe';
const name = '1882818-2021-nature-videos.zip';

const code = `class Example extends React.Component {
              componentDidMount() {
                fetch('https://api.estuary.tech/content/add-ipfs', {
                  method: 'POST',
                  headers: {
                    Authorization: 'Bearer REPLACE_ME_WITH_API_KEY',
                  },
                  body: JSON.stringify({
root: 'YOUR_CID_HERE',
})
                })
                  .then(data => {
                    return data.json();
                  })
                  .then(data => {
                    this.setState({ ...data });
                  });
              }

              render() {
                return <pre>{JSON.stringify(this.state, null, 1)}</pre>;
              }
            }`;

const curl = `curl -X POST https://api.estuary.tech/content/add-ipfs -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json" -d '{"root": "REPLACE_ME_WITH_CID"}'`;

function APIContentAddIPFS(props) {
  return (
    <App
      title="Estuary Documentation: API: /content/add-ipfs"
      description="https://api.estuary.tech/content/add-ipfs"
      url={`https://docs.estuary.tech/${key}`}
      active={key}
      curl={curl}
      markdown={markdown}
      code={code}
    />
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default APIContentAddIPFS;
