import ScActionTypes from './ScActionTypes';
import ScDispatcher from './ScDispatcher';

const Actions = {
  requireData() {
    ScDispatcher.dispatch({
      type: ScActionTypes.REQUIRE_DATA,
    });
  },
};

export default Actions;
