import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const UP = () => {
  return(
    <View>
      <Image source={{ uri: 'https://w7.pngwing.com/pngs/460/800/png-transparent-material-icon-plus-icon-add-symbol-material-flat.png' }} style ={styles.up} />
    </View>
  ) 
};
const Blung = () => {
  const file = 'MY'
  const manager = 'FILES'
  return(
    <View>
      <Text style ={styles.blung}>{file} {manager}</Text>
    </View>
  )
};
const Title = props =>{
  return(
    <View>
      <Text style ={styles.title}>{props.like}</Text>
    </View>
  )
};
const Subject = props => {
  return(
    <View>
      <Text style={styles.sub} >{props.subcode}</Text>
    </View>
  )
};

const SubjectDesc = props => {
  return(
    <View>
      <Text style={styles.subdesc}>{props.subdesc}</Text>
    </View>
  )
};
const Units = props => {
  return(
    <View>
      <Text style={styles.units}>Units: {props.units}</Text>
    </View>
  )
};

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.head}>
        <UP/>
        <Blung/>
        <Title like = "FOLDERS"/>
      </View>

      <Text style={styles.subtitle}>PHOTOS</Text>  
      <Text style={styles.subtext}>March 19,2014</Text>  
      
      <View style={styles.sublist}>
        <Subject  subcode= ''/>
          <View>
            <SubjectDesc subdesc= 'DOCUMENTS'/>
          </View> 
      </View>
      <View style={styles.sublist}>
        <Subject  subcode= ''/>
          <View>
            <SubjectDesc subdesc= 'SPREADSHEET'/>
          </View> 
      </View>
      <View style={styles.sublist}>
        <Subject  subcode= ''/>
          <View>
            <SubjectDesc subdesc= 'FOLDER'/>
          </View> 
      </View>
      <View style={styles.sublist}>
        <Subject  subcode= ''/>
          <View>
            <SubjectDesc subdesc= 'UPLOAD PHOTOS OR VIDEOS'/>
          </View> 
      </View>
      <View style={styles.sublist}>
        <Subject  subcode= ''/>
          <View>
            <SubjectDesc subdesc= 'USE CAMERA'/>
          </View> 
      </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  head: {
    backgroundColor: '#48d1cc',
    alignItems: 'left',
    justifyContent: 'left',
    height: 120,
    width: 400,
    
    
  },
  up: {
    marginLeft: '20px',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  blung:{
    color: '#fff',
    fontSize: '30px',
    marginLeft: '20px' 
  },
  title: {
    color: '#fff',
    marginLeft: '20px',
  },

  subtitle:{
    marginRight:'260px',
    fontSize: '25px',
  },
  subtext:{
    marginRight:'260px',
    fontSize: '15px',
    marginBottom:'5px'
  },
  sublist: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width: 400,
    backgroundColor: '#DCDCDC',
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 10,
    marginBottom:'50px',
    marginTop:'10px',
  },

  sub:{
    fontSize: '20px', 
    fontWeight:'bold',
    marginLeft:'20px'
  },
  subdesc:{
    marginLeft:'10px'
  },
  
  
});