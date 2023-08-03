import React from 'react';
import { ScrollView } from 'react-native';
import ResourceListItem from './ResourceListItem';

const ResourcesList = ({ resources }) => (
  <ScrollView>
    {resources.map((resource) => <ResourceListItem key={resource.name} resource={resource} />)}
  </ScrollView>
);

export default ResourcesList;
