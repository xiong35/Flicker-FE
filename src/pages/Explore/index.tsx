import './index.scss';

import { Fab } from '@mui/material';

import DeckCard from '../../components/DeckCard';
import TheBottomTabs from '../../components/TheBottomTabs';
import AddIcon from '../../imgComponents/AddIcon';
import { useSetup } from './hooks';

type ExploreProps = {};

function Explore(props: ExploreProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="explore">
      <Fab color="primary" aria-label="add" className="explore-add">
        <AddIcon className="explore-add-icon" />
      </Fab>
      <div className="explore-deck_container">
        {Array.from({ length: 20 }, (v, i) => i).map((i) => (
          <DeckCard key={i} />
        ))}
      </div>
      <TheBottomTabs />
    </div>
  );
}

export default Explore;
