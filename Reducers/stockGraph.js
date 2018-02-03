//Default state
const defaultState = {
    stockGraphTimeScale:"1M"
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'STOCKGRAPH_SET_TIMESCALE':
            return Object.assign({}, state, {
                stockGraphTimeScale: action.timeScale,
            });
        default:
            return state;
    }
}
