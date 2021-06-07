import * as React from 'react';

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import { Button, Label } from 'components/atoms';

interface propTypes extends FontAwesomeIconProps {
  ariaHidden?: boolean;
  buttonClass?: string;
  disabled?: boolean;
  imageClass?: string;
  label: string;
  labelClass?: string;
  onClick: () => void;
}

const ImageLabel: React.FC<propTypes> = (props: propTypes) => {
  const {
    ariaHidden,
    className,
    disabled,
    icon,
    imageClass,
    label,
    labelClass,
    onClick,
  } = props;

  return (
    <Button
      data-testid="image-button"
      className={className}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <FontAwesomeIcon
        className={imageClass}
        icon={icon}
        aria-hidden={ariaHidden ? 'true' : 'false'}
      />
      <Label className={`margin-left-8 ${labelClass}`} value={label} />
    </Button>
  );
};

export default ImageLabel;
