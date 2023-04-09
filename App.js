
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


      <Controller
        control={control}
        rules={{
         required: true,
         maxLength:30,
         minLength:6,
        pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ@ ]+$/g,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Email"
            mode='outlined'
            left={<TextInput.Icon icon="email" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />

      {errors.email?.type == 'required' && <Text style={{color:'red'}}>el correo completo es obligatorio</Text>}
      {errors.email?.type == 'maxLength' && <Text style={{color:'red'}}>el correo completo debe tener maximo 30 caracteres</Text>}
      {errors.email?.type == 'minLength' && <Text style={{color:'red'}}>el correo completo debe tener minimo 26 caracteres</Text>}
      {errors.email?.type == 'pattern' && <Text style={{color:'red'}}>el correo solo permite letras y espacios</Text>} 
      

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
            label="Phone"
            mode='outlined'
            left={<TextInput.Icon icon="phone" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="phone"
      />

      {errors.phone?.type == 'required' && <Text style={{color:'red'}}>el telefono completo es obligatorio</Text>}
      {errors.phone?.type == 'maxLength' && <Text style={{color:'red'}}>el telefono completo debe tener maximo 10 numeros</Text>}
      {errors.phone?.type == 'minLength' && <Text style={{color:'red'}}>el telefono completo debe tener minimo 6 numeros</Text>}
      {errors.phone?.type == 'pattern' && <Text style={{color:'red'}}>el telefono solo permite numeros</Text>}

      <Controller
        control={control}
        rules={{
         required: true,
         maxLength:30,
         minLength:5,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Password"
            secureTextEntry
            mode='outlined'
            left={<TextInput.Icon icon="key" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />

      {errors.password?.type == 'required' && <Text style={{color:'red'}}>el password es obligatorio</Text>}
      {errors.password?.type == 'maxLength' && <Text style={{color:'red'}}>el password completo debe tener maximo 30 caracteres</Text>}
      {errors.password?.type == 'minLength' && <Text style={{color:'red'}}>el pasword completo debe tener minimo 5 numeros</Text>}
      

      <Controller
        control={control}
        rules={{
         required: true,
         maxLength:3,
         minLength:1,
         pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g+1-9
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Age"
            mode='outlined'
            left={<TextInput.Icon icon="calendar" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="age"
      />

      {errors.age?.type == 'required' && <Text style={{color:'red'}}>la edad es obligatoria</Text>}
      {errors.age?.type == 'maxLength' && <Text style={{color:'red'}}>la edad debe tener maximo 3 numeros</Text>}
      {errors.age?.type == 'minLength' && <Text style={{color:'red'}}>la edad debe tener minimo 1 numero</Text>}
      {errors.age?.type == 'pattern' && <Text style={{color:'red'}}>la edad solo permite numeros</Text>}

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

