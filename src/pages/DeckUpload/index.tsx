import './index.scss';

import { Button, TextField } from '@mui/material';

import TheTopBar from '../../components/TheTopBar';
import AddUpper from '../../imgComponents/addUpper';
import TrashBin from '../../imgComponents/TrashBin';
import { useSetup } from './hooks';

type DeckUploadProps = {};

function DeckUpload(props: DeckUploadProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="deck_upload">
      <TheTopBar title="创建卡组" />
      <TextField
        className="deck_upload-input m"
        label="标题"
        variant="outlined"
        placeholder="例如：六级英语词汇"
      />
      <TextField
        className="deck_upload-input m"
        label="添加描述..."
        variant="outlined"
        multiline={true}
        maxRows="7"
      />
      <div className="deck_upload-cards">
        {new Array(5).fill(0).map((_, i) => (
          <div className="deck_upload-cards-item" key={i}>
            <div className="deck_upload-cards-item-opts">
              <div>{i + 1}</div>
              <div className="spacer"></div>
              <AddUpper className="deck_upload-cards-item-opts-icon" />
              <TrashBin className="deck_upload-cards-item-opts-icon" />
            </div>
            <TextField
              className="deck_upload-input m light"
              label="题目"
              variant="standard"
              multiline={true}
              maxRows="7"
            />
            <TextField
              className="deck_upload-input m light"
              label="答案"
              variant="standard"
              multiline={true}
              maxRows="7"
            />
          </div>
        ))}
        <Button variant="contained">创建</Button>
      </div>
    </div>
  );
}

export default DeckUpload;
