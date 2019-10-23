import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import history from '../../../services/history';
import api from '../../../services/api';
import {
  editMeetupSuccess,
  deleteMeetupStateSuccess,
  updateMeetupSuccess,
  deleteMeetupSuccess,
} from './actions';

export function* edit({ payload }) {
  try {
    const { id } = payload;

    /* const profile = Object.assign({ name, email },rest.oldPassword ? rest : {}); */

    const response = yield call(api.get, 'mymeetups');

    const findMeetup = response.data.find(m => {
      return String(id) === String(m.id);
    });

    if (findMeetup) {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; // fetchs the user time zone
      const pattern = "MMMM dd, 'at' HH'h'mm'm'";

      const zonedDate = utcToZonedTime(parseISO(findMeetup.date), timezone); // adapta a hora vinda de api pra o horário da time zone
      const data = {
        ...findMeetup,
        formattedDate: format(zonedDate, pattern, { timezone }),
      };
      yield put(editMeetupSuccess(data));
    } else {
      yield put(editMeetupSuccess(null));
    }

    history.push('/details');
  } catch (err) {
    toast.error('Failed to update profile.');
  }
}
export function* erase() {
  yield put(deleteMeetupStateSuccess());
  history.push('/edit/0');
}

// create or update meetups
export function* update({ payload }) {
  try {
    const { meetupId } = payload.data;
    if (meetupId === '0') {
      // if id equal 0, it means the meetup is new and needs to be created
      yield call(api.post, `meetups`, payload.data);
      toast.success('Meetup created.');
      history.push('/mymeetups');
    } else {
      const response = yield call(api.put, `meetups/${meetupId}`, payload.data);
      yield put(updateMeetupSuccess(response.data));
      toast.success('Meetup updated.');
      history.push('/mymeetups');
    }
  } catch (err) {
    toast.error('Failed to update/create meetup.');
  }
}

export function* deleteMeetup({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.delete, `meetups/${id}`);
    console.tron.log(response);
    toast.success('Succesfully deleted meetup');
    yield put(deleteMeetupSuccess());
    history.push('/mymeetups');
  } catch (err) {
    toast.error('Failed to delete meetup.');
  }
}

export default all([
  takeLatest('@meetup/EDIT_MEETUP_REQUEST', edit),
  takeLatest('@meetup/DELETE_MEETUP_STATE_REQUEST', erase),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', update),
  takeLatest('@meetup/DELETE_MEETUP_REQUEST', deleteMeetup),
]);
