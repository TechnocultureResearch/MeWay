import Realm, { User } from 'realm';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import PersonSchema from '../models/Task';
import { TaskRealmContext } from '../models';

const {useRealm} =TaskRealmContext;

const RealmDB = () => {
  const [setrealm, setRealm] = useState(null);
  const realm = useRealm();
  const createNewPerson = () => {
    realm.write(() => {
      const newPerson = realm.create('Person', {
        _id: '123',
        title: 'Engineer',
        company: 'Acme Inc.',
        interests: 'Technology',
        channels: ['Email', 'SMS'],
        locations: ['New York', 'San Francisco'],
        min_age: 25,
        max_age: 35,
        gender: 'Male',
        location_types: ['Urban', 'Suburban'],
      });
    });
  };
  return (
    <View>
      <Text onPress={createNewPerson}>Create new person</Text>
    </View>
  );
};

export default RealmDB;
