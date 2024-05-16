import { disableErrorHandling } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, Button } from 'react-native';

export default function App() {
  return (
   <View>
   
   <View style={styles.container}>
      
      <View>
      <Image source={{ uri: './img/Imagem8.png' }}
             style={styles.Imagem1}
      />
      </View>
          
      <View>
      <Image source={{ uri: './img/Imagem9.png' }}
             style={styles.Imagem2}
      />
      </View>
      
      <View>
      <Image source={{ uri: './img/Imagem6.png' }}
             style={styles.Imagem3}
      />
      </View>
      <StatusBar style="auto"/>
    </View>
   
   <View>
   
   <View style={styles.segundocontainer}>
        <Image source={{uri: './img/ImagemMaior.png' }}
              style={styles.ImagemMaior}
      />
      </View>
      
      </View> 
   
   <View style={styles.alinhamento}>
    <TextInput 
      style={styles.imput}
      placeholder="Digite seu e-mail"
    />
    <TextInput
      style={styles.imput}
      placeholder="Digite sua senha"
      secureTextEntry
    />
    </View>

   <View style={styles.button}>
   <Button
      title="Login"
      color={'red'}
    />
   </View>
   
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'up',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    margin: 80,
    marginLeft: 160,
    position: 'absolute',
  },
  Imagem1: {
    width: 83,
    height: 91,
  },
  Imagem2: {
    width: 89,
    height: 92,
  },
  Imagem3: {
    width: 95,
    height: 89,
  },
  ImagemMaior: {
    width: 330,
    height: 320,
  },
  segundocontainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'auto',
    margin: 'auto',
    marginLeft: 150,
    marginTop: 180,
    position: 'relative',
  },
  imput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    fontSize: 25,
    padding: 10,
    backgroundColor: 'white',
    marginLeft: 150,
    marginTop: 10,
    position: 'relative',
  },
 alinhamento: {
    alignItems: 'center',
    justifyContent: 'center',
  },
 button: {
  marginLeft: 135,
  alignItems: 'center',
 },
});
