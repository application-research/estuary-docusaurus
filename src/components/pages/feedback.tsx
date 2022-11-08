import styles from '@site/legacy/pages/Page.module.scss';
import rstyles from '@site/legacy/components/RichText.module.scss';

import * as React from 'react';
import * as U from '@site/legacy/common/utilities';

import Layout from "@theme/Layout";
import Input from '@site/legacy/components/Input';
import Textarea from '@site/legacy/components/Textarea';
import Button from '@site/legacy/components/Button';


function Feedback(props) {
  const [state, setState] = React.useState({
    name: '',
    twitter: '',
    email: '',
    message: '',
    success: false,
    loading: false,
  });

  return (
    < >
      {state.success ? (
        <div className={U.classNames(styles.group, rstyles.block)}>
          <h1 style={{ marginTop: 22 }}>Thank you!</h1>
          <p>
            Everyone on our team will get a chance to read this feedback. Thank you for submitting
            it!
          </p>
        </div>
      ) : (
        <div>
          <p>
            Would you like to provide feedback for Estuary? Please submit it below. We may follow up
            with you for further questions!
          </p>

          <div className={styles.title} style={{ marginTop: 48 }}>
            Name
          </div>
          <Input
            style={{ marginTop: 8 }}
            value={state.name}
            placeholder="ex: Jessica Smith"
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="name"
          />
          <div className={styles.title}>E-mail (optional)</div>
          <Input
            style={{ marginTop: 8 }}
            value={state.email}
            placeholder="ex: jessica.smith@protocol.ai"
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="email"
          />
          <div className={styles.title}>Twitter (optional)</div>
          <Input
            style={{ marginTop: 8 }}
            value={state.twitter}
            placeholder="ex: filecoin"
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="twitter"
          />
          <div className={styles.title}>
            What would improve your experience with Estuary? (Max: 5000 characters)
          </div>
          <Textarea
            style={{ marginTop: 8 }}
            value={state.message}
            onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
            name="message"
            maxLength={5000}
          />

          <div className={styles.action}>
            <Button
              loading={state.loading}
              onClick={async () => {
                if (U.isEmpty(state.name)) {
                  alert('You must provide a name.');
                  return;
                }

                if (U.isEmpty(state.message)) {
                  alert('You must provide feedback');
                  return;
                }

                setState({ ...state, loading: true });
                try {
                  fetch('https://estuary-docs.onrender.com/api/send-feedback', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      name: state.name,
                      email: state.email,
                      twitter: state.twitter,
                      message: state.message,
                    }),
                  });
                } catch (e) {
                  console.log(e);
                }

                setState({
                  ...state,
                  success: true,
                  loading: true,
                  message: '',
                });
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Feedback;
