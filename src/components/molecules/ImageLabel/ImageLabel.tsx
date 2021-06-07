import * as React from 'react';

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import { Label } from 'components/atoms';

interface propTypes extends FontAwesomeIconProps {
  ariaHidden?: boolean;
  imageClass?: string;
  label: string;
  labelClass?: string;
}

const ImageLabel: React.FC<propTypes> = (props: propTypes) => {
  const { ariaHidden, icon, imageClass, label, labelClass } = props;
  return (
    <div data-test-id="image-label">
      <FontAwesomeIcon
        className={imageClass}
        icon={icon}
        aria-hidden={ariaHidden ? 'true' : 'false'}
      />
      <Label className={`margin-left-8 ${labelClass}`} value={label} />
    </div>
  );
};

export default ImageLabel;
