import React, {useCallback, useEffect, useMemo} from 'react';
import {useApp, useUser} from '@realm/react';
import {Pressable, StyleSheet, Text} from 'react-native';

import PersonSchema from './models/Task';
import {TaskRealmContext} from './models';
import {buttonStyles} from './styles/button';
import {shadows} from './styles/shadows';
import colors from './styles/colors';
import RealmDB from './components/RealmDb';
const {useRealm, useQuery} = TaskRealmContext;

export const AppSync: React.FC = () => {
  const realm = useRealm();
  const user = useUser();
  const app = useApp();

  const databaseOptions = {
    path: 'meway-tablet.realm',
    schema: [PersonSchema],
    schemaVersion: 0, //optional
};

  const queryAllTodoLists = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        const allTodoLists = realm.objects('PersonSchema');
        resolve(allTodoLists);
    }).catch((error) => {
        reject(error);
    });
});
// console.log(queryAllTodoLists());
  const handleLogout = useCallback(() => {
    user?.logOut();
  }, [user]);

  return (
    <>
      <RealmDB/>
      <Text style={styles.idText}>Syncing with app id: {app.id}</Text>
      <Pressable style={styles.authButton} onPress={handleLogout}>
        <Text
          style={styles.authButtonText}>{`Logout ${user?.profile.email}`}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  idText: {
    color: '#999',
    paddingHorizontal: 20,
  },
  authButton: {
    ...buttonStyles.button,
    ...shadows,
    backgroundColor: colors.purpleDark,
  },
  authButtonText: {
    ...buttonStyles.text,
  },
});
