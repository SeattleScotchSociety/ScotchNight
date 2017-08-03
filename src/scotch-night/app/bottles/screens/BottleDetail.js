// @flow
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Rating, ButtonGroup, Button, Slider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GrowingTextInput from '../../components/GrowingTextInput';

import Reviews from '../../reviews';
let { addReview } = Reviews.Actions;

function NoteDisplay(props) {
    let { note, rating } = props;

    if (!rating) { rating = 0 }

    return (
        <View style={{ flexDirection: 'column' }}>
            <Text style={styles.subheader}>{note}</Text>
            <View style={styles.notes}>
                <View style={{ backgroundColor: '#a6a6a5', width: `${rating}%` }} />
            </View>
        </View>
    );
}

function NoteEditor(props) {
    let { note, rating, onChange, resetCount } = props;

    if (!rating) { rating = 0 }

    return (
        <View style={{ flexDirection: 'column' }}>
            <Text style={styles.subheader}>{note}</Text>
            <Slider thumbStyle={{ backgroundColor: '#00817d', marginTop: 3, marginLeft: -1 }} trackStyle={{ height: 10, backgroundColor: '#fff', borderColor: '#a6a6a5', borderWidth: 1, width: '98%' }} key={`${note}${resetCount}`} maximumValue={100} value={rating} onSlidingComplete={onChange} />
        </View>
    );
}

function Overview(props) {
    let { view, notes, thoughts } = props;

    if (view !== 0) {
        return null;
    }

    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 15 }}>
                <Rating imageSize={40} readonly startingValue={4.5} />
            </View>
            <NoteDisplay note='Finish' rating={notes ? notes.finish : 0} />
            <NoteDisplay note='Fruity' rating={notes ? notes.fruity : 0} />
            <NoteDisplay note='Vanilla' rating={notes ? notes.vanilla : 0} />
            <NoteDisplay note='Smoky' rating={notes ? notes.smoky : 0} />
            <NoteDisplay note='Citrus' rating={notes ? notes.citrus : 0} />
            <NoteDisplay note='Oily' rating={notes ? notes.oily : 0} />
            <NoteDisplay note='Peppery' rating={notes ? notes.peppery : 0} />
            <Text style={styles.subheader}>My Thoughts</Text>
            <Text style={{ marginTop: 10 }}>{thoughts ? thoughts : 'No additional notes'}</Text>
        </View>
    );
}

function MyNotes(props) {
    let { onFinishRating, view, notes, save, reset, resetCount, onChange } = props;

    if (view !== 1) {
        return null;
    }

    console.log('my thoughts: ' + notes.thoughts);

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 15 }}>
                <Rating key={resetCount} imageSize={40} startingValue={notes.rating ? notes.rating : 0} onFinishRating={onFinishRating} />
            </View>
            <NoteEditor resetCount={resetCount} note='Finish' rating={notes.finish} onChange={onChange.bind(null, 'finish')} />
            <NoteEditor resetCount={resetCount} note='Fruity' rating={notes.fruity} onChange={onChange.bind(null, 'fruity')} />
            <NoteEditor resetCount={resetCount} note='Vanilla' rating={notes.vanilla} onChange={onChange.bind(null, 'vanilla')} />
            <NoteEditor resetCount={resetCount} note='Smoky' rating={notes.smoky} onChange={onChange.bind(null, 'smoky')} />
            <NoteEditor resetCount={resetCount} note='Citrus' rating={notes.citrus} onChange={onChange.bind(null, 'citrus')} />
            <NoteEditor resetCount={resetCount} note='Oily' rating={notes.oily} onChange={onChange.bind(null, 'oily')} />
            <NoteEditor resetCount={resetCount} note='Peppery' rating={notes.peppery} onChange={onChange.bind(null, 'peppery')} />
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.subheader}>My Thoughts</Text>
                <GrowingTextInput
                    minHeight={60}
                    value={notes.thoughts}
                    onChangeText={onChange.bind(null, 'thoughts')}
                    autoCapitalize="sentences"
                    autoCorrect={false}
                    blurOnSubmit={false}
                    returnKeyType="next"
                    style={{ flex: 1, height: 45, marginTop: 5, marginHorizontal: -15, paddingHorizontal: 20, paddingVertical: 5, fontSize: 16, borderColor: '#ccc', borderWidth: 1 }} />
            </View>
            <Button title='Save' backgroundColor='#00817d' style={{ marginVertical: 15 }} onPress={save} />
            <Button title='Reset' onPress={reset} />
        </View>
    );
}

class BottleDetail extends React.Component {
    static navigationOptions = {
        title: 'Tasting Menu'
    };

    constructor(props) {
        super(props);

        this._handleOnPressRating = this._handleOnPressRating.bind(this);
        this._handleSelectView = this._handleSelectView.bind(this);
        this._handleOnResetNotes = this._handleOnResetNotes.bind(this);
        this._handleOnSaveNotes = this._handleOnSaveNotes.bind(this);
        this._handleOnChange = this._handleOnChange.bind(this);

        let notes = this.props.notes ? { ...this.props.notes } : {};

        this.state = {
            resetCount: 0,
            notes: notes,
            view: 0
        };
    }

    _handleSelectView(index) {
        this.setState({ view: index });
    }

    _handleOnPressRating(rating) {
        this.setState({ notes: { rating: rating } });
    }

    _handleOnChange(note, value) {
        let update = { ...this.state.notes };
        update[note] = value;
        this.setState({ notes: update });
    }

    _handleOnSaveNotes() {
        let { addReview } = this.props.actions;

        addReview(this.state.notes);

        this.setState({ view: 0 });
        this.view.scrollTo({ x: 0, y: 0, animated: true });
    }

    _handleOnResetNotes() {
        let update = Object.assign({}, this.props.navigation.state.params.bottle.memberNotes);
        this.setState({ resetCount: this.state.resetCount + 1, notes: update });
    }

    render() {
        let { view, resetCount } = this.state;
        let { bottle, notes } = this.props;

        return (
            <ScrollView style={styles.container} ref={(view => { this.view = view; })}>
                <View style={{ marginBottom: 100 }}>
                    <Text style={styles.header}>{`${bottle.distillery} ${bottle.name}`}</Text>
                    <ButtonGroup
                        buttons={['Overview', 'My Notes']}
                        containerStyle={{ height: 30, marginTop: 20 }}
                        selectedIndex={view}
                        onPress={this._handleSelectView} />
                    <Overview view={view} notes={notes} thoughts={this.state.notes.thoughts} />
                    <MyNotes resetCount={resetCount} notes={this.state.notes} view={view} onFinishRating={this._handleOnPressRating} reset={this._handleOnResetNotes} save={this._handleOnSaveNotes} onChange={this._handleOnChange} />
                </View>
            </ScrollView>
        );
    }
};

const PROVIDER_IMAGE_SIZE = 40;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        flexDirection: 'column'
    },
    header: {
        color: '#00817d',
        fontSize: 18,
        fontWeight: 'bold'
    },
    subheader: {
        color: '#00817d',
        fontWeight: 'bold'
    },
    notes: {
        marginVertical: 10,
        height: 10,
        borderColor: '#a6a6a5',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%'
    }
});

function mapStateToProps(state) {
    let currentBottle = state.bottles.selected;
    let notes = state.reviews.all;
    // let ratings = [];

    // if (currentBottle.bottles) {
    //     ratings = _.filter(state.bottles.all, bottle => currentEvent.bottles.includes(bottle.id));
    // }

    return { bottle: currentBottle, notes };
}

function mapDispatchToProps(dispatch) {
    let actions = { addReview };

    return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BottleDetail);

