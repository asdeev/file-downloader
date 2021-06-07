import * as React from 'react';

import { FileData } from 'shared/@types';

import { DownloadHeader, DownloadTable } from 'components/organisms';

import { tableHeaders } from './constants';

interface propTypes {
  filesList: FileData[];
}

const DownloadManager: React.FC<propTypes> = (props: propTypes) => {
  const { filesList } = props;
  const [downloadData, setDownloadData] = React.useState<FileData[]>([]);

  React.useEffect(() => {
    setDownloadData([...filesList]);
  }, [filesList]);

  const handleFileSelectAllChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const {
      target: { checked },
    } = event;

    const newDownloadData = downloadData.map((data) => {
      let selected = false;
      if (data.status.toLowerCase() === 'available') {
        selected = checked;
      }
      return {
        ...data,
        selected,
      };
    });
    setDownloadData(newDownloadData);
  };

  const handleFileSelectChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const {
      target: { name, checked },
    } = event;

    const newDownloadData = [...downloadData];

    const index = newDownloadData.findIndex((el) => el.name === name);
    if (index !== -1) {
      newDownloadData[index].selected = checked;
      setDownloadData(newDownloadData);
    }
  };

  const handleFileDownload = (): void => {
    const selected = downloadData.filter((data) => data.selected);

    const alertMessage = selected
      .map((s) => `Device: ${s.device}\nPath: ${s.path}\n`)
      .join('\n');
    alert(alertMessage);
  };

  return (
    <div data-testid="download-manager" className="download-manager">
      <DownloadHeader
        filesList={downloadData}
        onChange={handleFileSelectAllChange}
        onClick={handleFileDownload}
      />
      <DownloadTable
        onChange={handleFileSelectChange}
        tableData={downloadData}
        tableHeaders={tableHeaders}
      />
    </div>
  );
};

export default DownloadManager;
