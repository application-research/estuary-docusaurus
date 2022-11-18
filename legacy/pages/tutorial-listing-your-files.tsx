import clsx from "clsx";
import * as React from 'react';
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import styles from '@site/node_modules/docusaurus-theme-openapi/lib-next/theme/ApiItem/styles.module.css';

let ApiDemoPanel = (_) => (
  <div
    style={{
      marginTop: "3.5em",
    }}
  />
);

if (ExecutionEnvironment.canUseDOM) {
  ApiDemoPanel = require('@site/node_modules/docusaurus-theme-openapi/lib-next/theme/ApiDemoPanel').default
}

import Markdown from '@site/legacy/tutorial-listing-your-files.md'

const apiDemoData = JSON.parse('{"description":"This endpoint lists all content","tags":["content"],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"string"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"type":"object","properties":{"code":{"type":"integer"},"details":{"type":"string"},"reason":{"type":"string"}}}}}},"500":{"description":"Internal Server Error","content":{"application/json":{"schema":{"type":"object","properties":{"code":{"type":"integer"},"details":{"type":"string"},"reason":{"type":"string"}}}}}}},"method":"get","path":"/content/list","servers":[{"url":"https://api.estuary.tech"}],"security":[{"bearerAuth":[]}],"securitySchemes":{"bearerAuth":{"type":"apiKey","name":"Authorization","in":"header"}},"info":{"description":"This is the API for the Estuary application.","title":"Estuary API","termsOfService":"http://estuary.tech","contact":{"name":"API Support","url":"https://docs.estuary.tech/feedback"},"license":{"name":"Apache 2.0 Apache-2.0 OR MIT","url":"https://github.com/application-research/estuary/blob/master/LICENSE.md"},"version":"0.0.0"},"postman":{"name":"List all pinned content","description":{"content":"This endpoint lists all content","type":"text/plain"},"url":{"path":["content","list"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"method":"GET"}}')



function TutorialListingYourFiles(props) {
  return (
    <div className="row">
      <div className="col">
        <div className={styles.apiItemContainer}>
          <article>
            <div className={clsx("theme-api-markdown", "markdown")}>
              <Markdown />
            </div>
          </article>
        </div>
      </div>
      <div className={clsx("col",  "col--5" )}>
        <ApiDemoPanel item={apiDemoData} />
      </div>
    </div>
  );
}

export default TutorialListingYourFiles;
