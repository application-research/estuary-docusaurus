import styles from '@site/legacy/components/RichText.module.scss';

import * as React from 'react';
import * as U from '@site/legacy/common/utilities';

import { Remarkable } from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';

export default function RichText(props) {
  return (
{props.children}
  );
}
