import {createRealmContext} from '@realm/react';
import PersonSchema from './Task'

export const TaskRealmContext = createRealmContext({
  schema: [PersonSchema],
});


