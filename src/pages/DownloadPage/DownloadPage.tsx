import * as React from 'react';

import { DownloadManager } from 'components/templates';

import { filesList } from './constants';

const DownloadPage: React.VFC = () => {
  return (
    <div>
      <h3>File Download Page</h3>
      <DownloadManager filesList={filesList} />
    </div>
  );
};

export default DownloadPage;
