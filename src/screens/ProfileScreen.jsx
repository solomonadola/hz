import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { CameraIcon } from "react-native-heroicons/outline";

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("Anastasia Markos");
  const [occupation, setOccupation] = useState("Student");
  const [address, setAddress] = useState(
    "King George IV street, Addis Ababa, Ethiopia"
  );
  const [phone, setPhone] = useState("+251976 457 453");
  const [email, setEmail] = useState("anstesiaG@mail.com");

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel="Edit Profile Screen"
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 36,
          width: "100%",
        }}
      >
        <TouchableOpacity style={styles.backButton}>
          <Ionicons
            name="chevron-back-outline"
            size={25}
            color="white"
            onPress={() => navigation.navigate("HomeScreen")}
            accessibilityLabel="back button"
            accessibilityHint="double tap to go back"
          />
        </TouchableOpacity>

        <Text
          style={styles.title}
          accessibilityHint="double tap to open the menu"
        >
          Edit Profile
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <View
            style={styles.imageWrapper}
            accessibilityLabel="profile picture"
          >
            <Image
              source={require("../../assets/images/alex.jpg")}
              style={styles.profileImage}
              accessibilityLabel="profile picture"
            />
            <TouchableOpacity
              style={styles.cameraButton}
              accessibilityLabel="change profile picture"
              accessibilityHint="double tap to change profile picture"
            >
              <CameraIcon name="camera" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Your Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Occupation</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={occupation}
              onValueChange={setOccupation}
              style={styles.picker}
              dropdownIconColor={"white"}
              dropdownIconRippleColor={"white"}
              mode="dialog"
              prompt="occupation"
            >
              <Picker.Item label="Student" value="Student" />
              <Picker.Item label="Engineer" value="Engineer" />
              <Picker.Item label="Designer" value="Designer" />
              <Picker.Item label="Developer" value="Developer" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E18",
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  backButton: {
    alignSelf: "flex-start",
  },
  title: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    alignSelf: "center",
    width: "85%",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  imageWrapper: {
    position: "relative",
    marginBottom: 12,
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#1C2230",
    padding: 8,
    borderRadius: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    color: "#A0AEC0",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#1C2230",
    color: "white",
    padding: 12,
    borderRadius: 8,
  },
  pickerWrapper: {
    backgroundColor: "#1C2230",
    borderRadius: 8,
  },
  picker: {
    color: "white",
  },
  saveButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  saveButtonText: {
    color: "#0A0E18",
    fontWeight: "bold",
    fontSize: 18,
  },
});
