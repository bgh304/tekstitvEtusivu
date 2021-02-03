import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function Koti() {
  const [teksti, setTeksti] = React.useState([]);

  const appId = 'app_id=54f9aa7b&app_key=a97594ea4ede5b1b3cb63319222ad645';

  React.useEffect(() => {
    fetch('https://external.api.yle.fi/v1/teletext/pages/100.json?app_id=54f9aa7b&app_key=a97594ea4ede5b1b3cb63319222ad645')
    .then(response => response.json())
    .then(responseData => {
      setTeksti(responseData.teletext.page.subpage[0].content[0].line);
    })
    .catch(err => console.log('Error: ' + err))
  }, [])


    return(
        <View style={styles.container}>
            <Text>Koti</Text>
            <View style={styles.container}>
                <FlatList data={teksti} renderItem={({item}) => <Text>{item.Text}</Text>}  />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Koti;