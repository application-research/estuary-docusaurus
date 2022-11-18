import clsx from "clsx";
import * as React from 'react';
import ApiDemoPanel from '@site/node_modules/docusaurus-theme-openapi/lib-next/theme/ApiDemoPanel';
import styles from '@site/node_modules/docusaurus-theme-openapi/lib-next/theme/ApiItem/styles.module.css';


import Markdown from '@site/legacy/tutorial-uploading-your-first-file.md'

const apiDemoData = JSON.parse('{"description":"This endpoint is used to upload new content.","tags":["content"],"parameters":[{"description":"Collection UUID","name":"coluuid","in":"query","schema":{"type":"string"}},{"description":"Replication value","name":"replication","in":"query","schema":{"type":"integer"}},{"description":"Ignore Dupes true/false","name":"ignore-dupes","in":"query","schema":{"type":"string"}},{"description":"Lazy Provide true/false","name":"lazy-provide","in":"query","schema":{"type":"string"}},{"description":"Directory","name":"dir","in":"query","schema":{"type":"string"}}],"requestBody":{"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"data":{"description":"File to upload","type":"string","format":"binary"},"filename":{"description":"Filenam to use for upload","type":"string"}},"required":["data"]}}},"required":true},"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"object","properties":{"cid":{"type":"string"},"estuaryId":{"type":"integer"},"providers":{"type":"array","items":{"type":"string"}},"retrieval_url":{"type":"string"}}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"type":"object","properties":{"code":{"type":"integer"},"details":{"type":"string"},"reason":{"type":"string"}}}}}},"500":{"description":"Internal Server Error","content":{"application/json":{"schema":{"type":"object","properties":{"code":{"type":"integer"},"details":{"type":"string"},"reason":{"type":"string"}}}}}}},"method":"post","path":"/content/add","servers":[{"url":"https://api.estuary.tech"}],"security":[{"bearerAuth":[]}],"securitySchemes":{"bearerAuth":{"type":"apiKey","name":"Authorization","in":"header"}},"info":{"description":"This is the API for the Estuary application.","title":"Estuary API","termsOfService":"http://estuary.tech","contact":{"name":"API Support","url":"https://docs.estuary.tech/feedback"},"license":{"name":"Apache 2.0 Apache-2.0 OR MIT","url":"https://github.com/application-research/estuary/blob/master/LICENSE.md"},"version":"0.0.0"},"postman":{"name":"Add new content","description":{"content":"This endpoint is used to upload new content.","type":"text/plain"},"url":{"path":["content","add"],"host":["{{baseUrl}}"],"query":[{"description":{"content":"Collection UUID","type":"text/plain"},"key":"coluuid","value":"<string>"},{"description":{"content":"Replication value","type":"text/plain"},"key":"replication","value":"<integer>"},{"description":{"content":"Ignore Dupes true/false","type":"text/plain"},"key":"ignore-dupes","value":"<string>"},{"description":{"content":"Lazy Provide true/false","type":"text/plain"},"key":"lazy-provide","value":"<string>"},{"description":{"content":"Directory","type":"text/plain"},"key":"dir","value":"<string>"}],"variable":[]},"header":[{"key":"Content-Type","value":"multipart/form-data"}],"method":"POST","body":{"mode":"formdata","formdata":[{"description":{"content":"File to upload","type":"text/plain"},"key":"data","value":"<binary>","type":"text"},{"description":{"content":"Filenam to use for upload","type":"text/plain"},"key":"filename","value":"<string>","type":"text"}]}}}')


function TutorialUploadingYourFirstFile(props) {
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

export default TutorialUploadingYourFirstFile;
