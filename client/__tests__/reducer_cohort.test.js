import reducer, { fetchCohort } from '../reducers/cohort';
import cohort from '../../server/dummy-cohort.json';

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        name    : '',
        students: [],
      }
    );
  });

  it('should handle FETCH_COHORT', () => {
    expect(
      reducer([], {
        type: 'FETCH_COHORT',
        cohort
      })
    ).toEqual(cohort);

    expect(
      reducer(
        { name: '1702-FSA-CH', students: [ 'Connie Lee' ]},
        {
          type: 'FETCH_COHORT',
          cohort
        }
      )
    ).toEqual(cohort);
  });
});
