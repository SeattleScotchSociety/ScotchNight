import React from 'react';
import { ListItem } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const EventListItem = (props: any) => {
    let { date, title, location, onPress } = props;
    let dt = new Date(date);
    let dtStr = `${months[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`;

    return (<ListItem title={`${dtStr} - ${title} @ ${location}`} onPress={onPress} />);
};

export default EventListItem;
