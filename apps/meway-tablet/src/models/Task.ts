
const PersonSchema = {
  name: 'Person',
  properties: {
    _id: 'string',
    title: 'string',
    company: 'string',
    interests: 'string',
    channels: 'string[]',
    locations: 'string[]',
    min_age: 'int',
    max_age: 'int',
    gender: 'string',
    location_types: 'string[]',
  },
    primaryKey :'_id',
  
};

export default PersonSchema;

