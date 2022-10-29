import styles from '@pages/Page.module.scss';

import * as React from 'react';

import App from '@components/App';

const endpoint = '/content/add';
const markdown = `# ➟ ` + endpoint + `

To add content to a collection that you have already created with the 'create collection' POST API call, use the /content/add endpoint passing the coluuid and dir (optional) query parameters.

### ?coluid=UUID-OF-YOUR-COLLECTION

Adding this query paramter will add the file to any collection.

### ?dir=/path/to/thing

Adding this query parameter will add the file to a specific path in the collection

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/collections/post_collections_add_content)

`;

const code = `class Example extends React.Component {
  upload(e) {
    e.persist();
    console.log(e.target.files);
    
    const formData  = new FormData();
    formData.append("data", e.target.files[0]);
    
    // NOTE
    // This example uses XMLHttpRequest() instead of fetch
    // because we want to show progress. But you can use
    // fetch in this example if you like.
    const xhr = new XMLHttpRequest();
    
    xhr.upload.onprogress = (event) => {
      this.setState({ 
        loaded: event.loaded, 
        total: event.total 
      });
    }
    
    xhr.open(
      "POST", 
      "https://api.estuary.tech/content/add"
    );
    xhr.setRequestHeader(
      "Authorization", 
      "Bearer REPLACE_ME_WITH_API_KEY"
    );
    xhr.send(formData);
  }

  render() {
    return (
      <React.Fragment>
        <input type="file" onChange={this.upload.bind(this)} />
        <br />
        <pre>{JSON.stringify(this.state, null, 1)}</pre>
      </React.Fragment>
    );
  }
}`;

const curl = `curl -X POST https://api.estuary.tech/content/add -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json"  -H "Content-Type: multipart/form-data" -F "file=FILE"`;

function APICollectionAddContent(props) {
  return (
    <App
      title="Estuary Documentation: API: /collections/add-content"
      description="https://api.estuary.tech/collections/add-content"
      url="https://docs.estuary.tech/collections-add-content"
      active="api-collections-add-content"
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

export default APICollectionAddContent;
