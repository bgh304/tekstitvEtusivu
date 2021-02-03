import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [teksti, setTeksti] = React.useState('');
  const [paaotsikot, setPaaotsikot] = React.useState([]);
  const [taulukko, setTaulukko] = React.useState(['']);

  const appId = 'app_id=54f9aa7b&app_key=a97594ea4ede5b1b3cb63319222ad645';

  React.useEffect(() => {
    fetch('https://external.api.yle.fi/v1/teletext/pages/100.json?app_id=54f9aa7b&app_key=a97594ea4ede5b1b3cb63319222ad645')
    .then(response => response.json())
    .then(responseData => {
      setPaaotsikot(responseData.teletext.page.subpage[0].content[0].line);
    })
    .catch(err => console.log('Error: ' + err))
  }, [])

  return (
    <View style={styles.container}>
      <FlatList data={paaotsikot} renderItem={({item}) => <Text>{item.Text}</Text>}  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0
  },
});

/*<View style={styles.container}>
<Text>{paaotsikot[0].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[1].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[2].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[3].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[4].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[5].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[6].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[7].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[8].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[9].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[10].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[11].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[12].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[13].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[14].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[15].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[16].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[17].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[18].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[19].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[20].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[21].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[22].Text}</Text>
</View>
<View style={styles.container}>
<Text>{paaotsikot[23].Text}</Text>
</View>*/