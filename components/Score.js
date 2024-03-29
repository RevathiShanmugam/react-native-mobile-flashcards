import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    Platform,
    StyleSheet
} from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

export default class Decks extends Component {
  handleBackToDeck  = () => {
       const { navigation } = this.props
       const {
                   getCards,
                   deckID,
                   title,
                   addCardToState
               } = navigation.state.params
       navigation.navigate('Cards', {
           deckID,
           title,
           addCardToState,
           getCards
       })
   }
   handleRetakeQuiz = () => {
        const { navigation, resetQuiz } = this.props
        const {
            getCards,
            deckID,
            title,
            addCardToState
        } = navigation.state.params

        resetQuiz(() => {
            navigation.navigate('Question', {
                deckID,
                title,
                addCardToState,
                getCards
            })
        })
    }

    componentDidMount = () => {
        // User completed a quiz so...
        clearLocalNotification().then(setLocalNotification)
    }

    render() {
      const { score } = this.props
        return (
          <View>
                <View style={styles.top}>
                    <Text style={styles.score}>{score}%</Text>
                </View>
                <View style={styles.bottom}>
                <TouchableOpacity
                        style={
                            Platform.OS === 'ios'
                                ? styles.iosSubmitOutlineBtn
                                : styles.androidSubmitOutlineBtn
                        }
                        onPress={() => this.handleBackToDeck()}
                    >
                        <Text style={styles.submitOutlineBtnText}>
                            Go back to the deck
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            Platform.OS === 'ios'
                                ? styles.iosSubmitBtn
                                : styles.androidSubmitBtn
                        }
                      onPress={() => this.handleRetakeQuiz()}
                    >
                        <Text style={styles.submitBtnText}>
                            Retake the Quiz
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  scoreContainer: {
      backgroundColor: 'white',
      justifyContent: 'space-between'
    },
    top: {
        justifyContent: 'flex-start'
    },
    bottom: {
        justifyContent: 'flex-end'
    },
    score: {
        alignSelf: 'center',
        color: '#28AE28',
        fontSize: 100
    },
    iosSubmitBtn: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 7,
        height: 45
    },
    androidSubmitBtn: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 2,
        height: 45,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtnText: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center'
      },
  iosSubmitOutlineBtn: {
      backgroundColor: 'white',
      padding: 10,
      borderColor: '#007AFF',
      borderWidth: 1,
      borderRadius: 4,
      height: 45,
      marginBottom: 4
  },
  androidSubmitOutlineBtn: {
      backgroundColor: 'white',
      padding: 10,
      borderColor: '#007AFF',
      borderWidth: 1,
      borderRadius: 4,
      height: 45,
      alignSelf: 'flex-end',
      justifyContent: 'center',
      alignItems: 'center'
  },
  submitOutlineBtnText: {
      color: '#007AFF',
      fontSize: 22,
      textAlign: 'center'
  },
  center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 30,
      marginRight: 30
  }
})
