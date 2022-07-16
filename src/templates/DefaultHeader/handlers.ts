export const toggleFilterInput = (
  e: React.MouseEvent<HTMLElement>,
  currentDisplayState: boolean,
  setToggleState,
) => {
  e.stopPropagation();
  setToggleState(currentDisplayState);
};

export const handleFilterTab = (
  actionType:
    | 'CLICKED_SALE'
    | 'CLICKED_EXCLUSIVE'
    | 'CLICKED_SOLD_OUT'
    | 'RESET',
  dispatchFilterAction,
) => {
  const action = { type: actionType };
  dispatchFilterAction(action);
};
