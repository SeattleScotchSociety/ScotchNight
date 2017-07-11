import React from 'react';
import { ListItem } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const EventListItem = (props: any) => {
    let { id, date, title, location, onPress } = props;

    if(id === -1) {
        return (
            <ListItem key={title} title={'No Events'} />
        );
    }

    let dt = new Date(date);
    let dtStr = `${months[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`;

    return (<ListItem key={title} title={`${dtStr} - ${title} @ ${location}`} onPress={onPress} />);
};

export default EventListItem;
