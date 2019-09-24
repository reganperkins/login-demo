import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './WrappedInput.scss';

interface IProps {
  name: string;
  type: string;
  icon?: string;
  autoFocus?: boolean;
}

const WrappedInput: React.SFC<IProps> = (props) => {
  return (
    <span>
      <input type={props.type} name={props.name} placeholder=' ' autoComplete="off" autoFocus={props.autoFocus} />
      <label htmlFor={props.name}>{props.name}</label>
      { props.icon &&
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
      }
    </span>
  );
}

export default WrappedInput;