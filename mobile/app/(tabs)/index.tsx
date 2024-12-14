import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const MobilLogin = () => {
  return (
    <View style={styles.container}>
      {/* Fondo principal */}
      <View style={styles.background}></View>

      {/* Título "Attenzio" */}
      <Text style={styles.title}>
        <Text style={styles.titlePrimary}>Atten</Text>
        <Text style={styles.titleSecondary}>zio</Text>
      </Text>

      {/* Campo de correo */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Correo</Text>
        <TextInput style={styles.inputField} placeholder="Correo electrónico" placeholderTextColor="#888" />
      </View>

      {/* Campo de contraseña */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Contraseña</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Contraseña"
          secureTextEntry={true}
          placeholderTextColor="#888"
        />
        <Text style={styles.createUser}>Crear usuario</Text>
      </View>

      {/* Botón "Iniciar sesión" */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#FFDAA4",
  },
  title: {
    textAlign: "center",
    fontSize: 48,
    fontFamily: "SpaceMono-Regular",
    marginBottom: 40,
  },
  titlePrimary: {
    color: "#000000",
  },
  titleSecondary: {
    color: "#FF9900",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  inputLabel: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "SpaceMono-Regular",
    marginBottom: 5,
  },
  inputField: {
    backgroundColor: "#D9D9D9",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    fontFamily: "SpaceMono-Regular",
  },
  createUser: {
    color: "#6A21E0",
    fontSize: 12,
    fontFamily: "SpaceMono-Regular",
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: "#FF9900",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontFamily: "SpaceMono-Regular",
  },
});

export default MobilLogin;
