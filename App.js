
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
// Importar la biblioteca para las validaciones (react-hook-form)
import { useForm, Controller } from "react-hook-form";

export default function App() {
  // Definiciones del formulario con sus respectivos estados, errores, etc
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      password: '',
      age:''
    }
  });

  const onSubmit = (data)=>{
    console.log(data);//objeto
    //desestructurar el objeto
    const {fullname,email,phone,password,age}=data;
    console.log(fullname)
    //limpiar formulario
    reset();
  }
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
         required: true,
         maxLength:30,
         minLength:2,
         pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nombre Completo"
            mode='outlined'
            left={<TextInput.Icon icon="account" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullname"
      />
      {errors.fullname?.type == 'required' && <Text style={{color:'red'}}>el nombre completo es obligatorio</Text>}
      {errors.fullname?.type == 'maxLength' && <Text style={{color:'red'}}>el nombre completo debe tener maximo 30 caracteres</Text>}
      {errors.fullname?.type == 'minLength' && <Text style={{color:'red'}}>el nombre completo debe tener minimo 2 caracteres</Text>}
      {errors.fullname?.type == 'pattern' && <Text style={{color:'red'}}>el nombre solo permite letras y espacios</Text>}

        <Button 
        style={{marginTop:20}}
        icon="send" 
        mode="contained" 
        onPress={handleSubmit(onSubmit)}
        >ENVIAR </Button>   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

