
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  line: {
    width:320,
    marginLeft:30,
    borderBottomWidth: 2,
    borderBottomColor: '#000'
},
  table: {
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 5, 
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    marginBottom:15
    
  },
  cell: {
    borderWidth: 0,
    borderColor: 'transparent',
    width: 100,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Table = () => {
  return (
    <>
    <Text style={{fontWeight: 'bold',marginLeft:30,marginTop:30,justifyContent:'space-between'}}>On Going Analysis</Text>
    <View style={styles.line} />
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.row}>
        
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text>Disease Name</Text>
          </View>
          <View style={styles.cell}>
            <Text>12th Feb,2022</Text>
          </View>
          <View style={styles.cell}>
            <Text>Moderate</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text>Disease Name</Text>
          </View>
          <View style={styles.cell}>
            <Text>12th Feb,2022</Text>
          </View>
          <View style={styles.cell}>
            <Text>Early</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text>Disease Name</Text>
          </View>
          <View style={styles.cell}>
            <Text>12th Feb,2022</Text>
          </View>
          <View style={styles.cell}>
            <Text>Moderate</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text>Disease Name</Text>
          </View>
          <View style={styles.cell}>
            <Text>12th Feb,2022</Text>
          </View>
          <View style={styles.cell}>
            <Text>Moderate</Text>
          </View>
        </View>
      </View>
    </View>
    </>
  );
};

export default Table;
