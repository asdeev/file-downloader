import * as React from 'react';

import { FileData } from 'shared/@types';

import { Checkbox, Label } from 'components/atoms';
import { ImageButton } from 'components/molecules';

interface propTypes {
  filesList: FileData[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const DownloadHeader: React.FC<propTypes> = (props: propTypes) => {
  const { filesList, onChange, onClick } = props;

  const selectedCount = filesList.filter((file) => file.selected).length;
  const availableCount = filesList.filter(
    (file) => file.status.toLowerCase() === 'available'
  ).length;

  const selectedLabel =
    selectedCount > 0 ? `Selected ${selectedCount}` : 'None Selected';

  return (
    <div className="download-header">
      <Checkbox
        className="margin-left-8"
        indeterminate={selectedCount > 0 && selectedCount < availableCount}
        name="selectAll"
        onChange={onChange}
        value={selectedCount === availableCount}
      />
      <Label className="margin-left-8" value={selectedLabel} />
      <ImageButton
        ariaHidden={true}
        className="margin-left-16"
        disabled={selectedCount === 0}
        icon="download"
        label="Download Selected"
        onClick={onClick}
      />
    </div>
  );
};

export default DownloadHeader;
