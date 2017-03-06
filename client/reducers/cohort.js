import cohort from '../../server/dummy-cohort.json';

/* --------------    ACTION CONSTANTS    ---------------- */

const FETCH_COHORT = 'FETCH_COHORT';

/* --------------    ACTION CREATORS    ----------------- */

/* --------------    THUNKS/DISPATCHERS    -------------- */

export const fetchCohort = cohortIdProbably =>
  dispatch =>
    // This will be an axios call later
    dispatch({ type: FETCH_COHORT, cohort });


/* ------------------    REDUCER    --------------------- */

const initialState = {
  name    : '',
  students: [],
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
  case FETCH_COHORT:
    newState = action.cohort;
    break;
  default:
    return state;
  }
  return newState;
};
