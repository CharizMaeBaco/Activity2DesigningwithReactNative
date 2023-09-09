import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const FILE = () => {
      return (
    <div>    
      <View>
      <Image source= {{ uri: 'https://cdn6.aptoide.com/imgs/6/6/d/66d6fb5efbe2c10001d2279fb5aee85e_icon.png' }}
            style= {styles.file}
      />
      <View style = {styles.watchView}>
      <Text style = {styles.watchText}>MY FILES</Text>
      </View>

      </View >
    </div>  
  ); 
}


const Logo = () => {
  return (
    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/8106/8106985.png' }} 
            style ={styles.logoStyle}  
    />
  )

}
const DownIconss = () => {
  return (
    <div>
      <View  style={styles.box}>
      <Image
       source={{
        uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png'}} 
        style={styles.logoStyle1} 
        />
      <Image
       source={{
        uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png'}} 
        style={styles.logoStyle1} 
        />  
      <Image
       source={{
        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAADFBMVEX///8AAABxcXG+vr62nBwIAAAFFElEQVR4nO1d7ZasIAzbkfd/5xVQwW9oWmg55s/ds3eAhLSIjl3+/mTgZkwn+N8KDSgBT/k3w53gf+v19Gb4jiDhmapbP9OOVSUiv8LZdvHTsowIcCRaQYyiOJtV0Od2FqNDi4NnFe+BAY5nPpm6IYNzeK+Fq6/6kVlnsY8t86gCg7rWUmRkhJ5bSpGTEXpvJsVJZ6XoPG1oMWGylke0mS1x18WjKkF0xpreSTixvXFDOyKETOlwYydiSp+d0PRj7rB5WK1gDq+OzwtYw6vvvTXf6L3CagVXovTWwaSkW5rnYFDS7QZ0D3jxUvN4E5xQNTrAZViRDkiJKh1+2SHSITeUAnXt0rFe5aAp0aeDpkSjDooShd/BBNTy0qqjlpnTtfDmqKOmbeHN4SrSRGeiryhPeL0JElHKT3GCRJQS1JwgEWVpoj2wPEo4OgM6ZiXvUaM/sDzeg8tCYHm88bQRWB4vltgILI/ny6IdQ17y3Y4hz/luJdMjHthyf6sii3tLbBnywNeWIX+3hK0ZcsvYnCE3q6w9Q244GzTkcuGydFFPuLi8W7qoJ5wtsWnIRUKwPHC4qrR4AsOYx3Sveep12+evHngcHIjja68jyAhFJuC4B1vx/og6YFP2yQ1HFl3HDGzonQdoZEE6QCU77mBkJR2+Hqyoia8lS62QwfNoAiNry/Pa9XSTAs1jRh6MLDqdbQqg4d3VjwQ4YFqRtlsfyQYw25BAdwxZstEHUwSLjokxtrAUcVhwgM09Nv4sKUKnAcfWliQcKUInggtZBYApghJxDEJiSIFXEQVCFgXg/Y0eIeDuU4GQJTnsC4kS0HsRFUJ8dvDci/QVEjSMIwR9WVuJEKbb9b5C/Ju9QwjxYTWGkGEcGUkI/CRZh5BpECFzXA0iZBhHPiEJn5CVwyck7+QTkvAJWTl8QvJOPiEJn5CVw7dpzDC3H+bG6hOy4hOy4HsctOvDjfPIdKCH2KMIGeaLnmG+ehtAyBJUnb+eZnjzYf2eHV3DA8jtY3NoMhcFPC8CUmeD4e2g7a0g9H1VyBKs9dLH+i/LO6Y0S6DGC7aQ4kkSEpn1PVOOFOG6JFKU0FvmSNOAboB/K+pW8vQGMzh8+gncAGeVChXVI6kRNnwWUHDRBfZuPLprTe3xMhhECTqLuaF4pRi1DgavhNm5wFFMSTMFr7Pacecosfpz9VI4ysX2ljJVIV6eMHRX8sZz7tDBA4uFuhEH5iyx1QXHWNL+F5zucKpotVriejZglKJjo+l+kRE20/2KtEVLrjkbtOSasj1L7hibs+SOsDVL7vkas+Seri1Lnthaurw/XvgsWfK8zbVjyctOxM4m+O2+w0pwvfO0EVwFW1wblpTc0Or+O9IRZbOtP7gK7530B1fpkxLtSsr56U6TmvMVNKdJ1cMFzcFVx02vklpmWtOk/gASnUpIR8IoTHjSIT0Kj1ggPg1VdowVMLXKlIxytNgoh72BZ4eqUQKfgarlEo/zUOEJyzmZCg4N5ToluLcSvnOb+yrhPH+6Z8rzji16fv0T2DO0U8pLTGCP8JIZs3l4iUVB4/CSnLiGpgjPmmN5DbFgHPmdUZP4auK8Ex+lWS7KSmkVvcKDNZURBhRxpbmMMCi7lC4ywsAT48isndVjwqsNAhzHUSQgBXwmO5uRMCFEfOPeZmQIdKrFOGUqIlydmMqPN4Zn93s7DslN8VNaRWyIRH++0uWE8B8GNGy4Le1hquM54x97vxEP27XwmgAAAABJRU5ErkJggg=='}} 
        style={styles.logoStyle1} 
        />   
         
      </View>
      
    </div>   
  )
}
const Btn = () => {
  const btn1 = ''
  
    return(
      <Text style={styles.topFont}>    {btn1}   </Text>
    )
};




export default function App() {
  return (
    <View style={styles.container}> 
     <View style={styles.box}>
        <Logo/>
        <View>
          <Btn/>
        </View>
      </View> 
    <View>
       
      <FILE/>
      <Image source= {{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/512px-Circle-icons-image.svg.png' }}
            style= {styles.logoStyle2}
      />
      </View>  
      
      
      <Text style = {styles.topFont}>CREATE</Text>
      <Text style = {styles.topFont}>💼 Documents     </Text>
      <Text style = {styles.topFont}>📝Spreadsheets   </Text>
      <Text style = {styles.topFont}>📁Folder  </Text>
      
      <View style={styles.box}> 
      </View>
      
      <Text style = {styles.topFont1}>⌛ Upload Photos or Videos</Text>
      <Text style = {styles.topFont1}>☎ Camera</Text>
      <View style={styles.box1}> 
      </View>
      
      <View style={styles.box2}>
        <DownIconss/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    marginLeft: 50,
    backgroundColor: 'white',
    maxHeight: 732,
    maxWidth: 412,
  },
  watchView: {
    backgroundColor:'white',
    position: 'absolute',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 150,
    marginLeft: 40,
    height: 30,
  },   
  watchText: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    color: 'blue',
    marginLeft: 30,
    marginRight: 5
  },
  file: {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    width: 200, 
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'blue'
  },  
  logoStyle: {
    marginLeft: 5,
    width: 50,
    height: 50,
    marginTop: 5
  },
  logoStyle1: {
    marginLeft: 50,
    margin: 10,
    width: 40,
    height: 40,
    textAlign: 'center'
  },
  logoStyle2: {
    marginLeft: 45,
    marginTop: 155,
    width: 20,
    height: 20,
    position: 'absolute'
  },
  profileStyle: {
    marginLeft: 90,
    width: 40,
    height: 40,
    marginTop: 9
  },
  topFont: {
    color:'black',
    fontSize: '20px',
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 10  
  },
  topFont1: {
    color:'black',
    fontSize: '20px',
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 10  
  },
  box: {
    backgroundColor: 'white',
    width: 410, 
    height: 50,
    flexDirection: 'row',
    marginBottom: 10,
    
  },
  box1: {
    backgroundColor: 'white',
    width: 410, 
    height: 50,
    flexDirection: 'row'
  },
  box2: {
    backgroundColor: 'white',
    width: 410, 
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 100
  },
  cWatchdp: {
    width: 350, 
    height: 150,
    flexDirection: 'row',
    marginBottom: 2,
    margin: 2,
    borderRadius: 2,
    borderWidth: 3,
  },  
});