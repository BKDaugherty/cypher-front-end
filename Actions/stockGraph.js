export const setTimeScale = (timeScale) => {
  return {
        type: 'STOCKGRAPH_SET_TIMESCALE',
        timeScale:timeScale,
    };
}
