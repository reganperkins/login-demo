import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-common-types';

import './WrappedInput.scss';
interface IOnKeyUp {
  (): void;
}
interface IOnFocus {
  (): void;
}

interface IProps {
  name: string;
  type: string;
  invalid: boolean;
  onKeyUp?: IOnKeyUp;
  onFocus?: IOnFocus;
  icon?: IconName;
  autoFocus?: boolean;
}

const WrappedInput = React.forwardRef((props: IProps, ref?: React.Ref<HTMLInputElement>) => {
  return (
    <span className={props.invalid ? 'invalid': ''}>
      <input
        onKeyUp={props.onKeyUp}
        onFocus={props.onFocus}
        type={props.type}
        name={props.name}
        placeholder=' '
        autoComplete="off"
        autoFocus={props.autoFocus}
        ref={ref}
      />
      <label htmlFor={props.name}>{props.name}</label>
      { props.icon &&
        <FontAwesomeIcon icon={props.icon} className="icon" />
      }
    </span>
  );
})

export default WrappedInput;