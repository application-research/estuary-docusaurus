import * as React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import './swagger-ui.scss'

function PageSwaggerTest(props) {
  return (
    // @ts-ignore
    <SwaggerUI url="https://raw.githubusercontent.com/application-research/estuary/master/docs/swagger.json" docExpansion="list" deepLinking={true} />
  );
}

export default PageSwaggerTest;

