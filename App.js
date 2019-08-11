import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import Decks from './components/Decks'
import Cards from './components/Cards'
import Question from './components/Question'
import Answer from './components/Answer'
import Score from './components/Score'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'

function UdaciStatusBar({ backgroundColor, ...props }) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar
                translucent
                // backgroundColor={backgroundColor}
                {...props}
            />
        </View>
    )
}

const MainNavigator = createStackNavigator(
    {
        Home: {
            screen: Decks,
            navigationOptions: {
                title: 'Flashcard Decks',
            }
        },
        Cards: {
            screen: Cards,
            navigationOptions: {
                title: 'Cards',
                headerMode: 'none',
                headerTitleStyle: {
                    fontSize: 24
                }
            }
        },
        NewQuestion: {
            screen: NewQuestion,
            navigationOptions: {
                title: 'Add a Card',
                headerTitleStyle: {
                    fontSize: 24
                }
            }
        },
        Question: {
            screen: Question,
            navigationOptions: {
                title: 'Question',
                headerTitleStyle: {
                    fontSize: 24
                }
            }
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                title: 'Create a Deck',
                headerTitleStyle: {
                    fontSize: 24
                }
            }
        },
        Answer: {
            screen: Answer,
            navigationOptions: {
                title: 'Answer',
                headerTitleStyle: {
                    fontSize: 24
                }
            }
        },
        Score: {
            screen: Score,
            navigationOptions: {
                title: 'Quiz Results',
                headerTitleStyle: {
                    fontSize: 24
                }
            }
        }
    },
    {
        // headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            headerTitleStyle: {
                color: 'orange',
                fontSize: 24
            }
        }
    }
)

const MainContainer = createAppContainer(MainNavigator)
export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <UdaciStatusBar barStyle="dark-content" />
        {/* <Decks /> */}
        {/* <Cards /> */}
        {/* <Question /> */}
        {/*<Answer />*/}
        {/* <Score /> */}
        {/* <NewDeck /> */}
        {/* <NewQuestion /> */}
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 headerTitle: {
     fontSize: 24
   }
});
