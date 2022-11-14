import styles from '@site/legacy/components/App.module.scss';

import * as React from 'react';

import CodeBlock from '@site/legacy/components/CodeBlock';
import App from '@site/legacy/components/App';
import Markdown from '@site/legacy/tutorial-get-an-api-key.md';

const code = `class Example extends React.Component {
  componentDidMount() {
    // NOTE
    // The viewer is a useful endpoint to introduce you
    // to our API. Once you can access Estuary through our API
    // you do not even need to visit https://estuary.tech
    fetch('https://api.estuary.tech/viewer', {
      method: "GET",
      headers: {
        Authorization: 'Bearer REPLACE_ME_WITH_API_KEY',
      },
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

const curl =
  'curl -X GET -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" https://api.estuary.tech/viewer';

function TutorialGetAnAPIKey(props) {
  return (
    <React.Fragment>
      <div className={styles.sections}>
        <div className={styles.sections__body}>
          <Markdown />
        </div>

        {curl || code ? (
          <div className={styles.sections__code}>
            <CodeBlock curl={curl} code={code} />
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default TutorialGetAnAPIKey;
