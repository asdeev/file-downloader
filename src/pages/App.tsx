import * as React from 'react';

import DownloadPage from './DownloadPage';

class App extends React.PureComponent {
  public render(): React.ReactNode {
    return (
      <div className="root">
        <DownloadPage />
      </div>
    );
  }
}

export default App;
