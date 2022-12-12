import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Camera } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import list, { List } from "postcss/lib/list";
import {
  CameraType,
  Face,
  FaceDetectionResult,
} from "expo-camera/build/Camera.types";
import { fontScale } from "nativewind";
import Colors from "../constants/Colors";

export const FaceCount = () => {
  const [hasPermission, setHasPermission] = React.useState(Boolean);
  const [faceData, setFaceData] = React.useState(Number);
  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status === "granted") {
        setHasPermission(true);
      } else {
        setHasPermission(false);
      }
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function getFaceDataView() {
    if (faceData <= 0) {
      return (
        <View style={styles.faces}>
          <Text style={styles.faceDesc}>length 0</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.faces}>
          <Text style={styles.faceDesc}>{faceData}</Text>
        </View>
      );
    }
  }

  const handleFacesDetected = ({ faces }: FaceDetectionResult): void => {
    setFaceData(faces.length);
    console.log(faceData);
  };

  return (
    <>
      <Text style={{ fontSize: 50 }}>{faceData}</Text>
      <Camera
        type={CameraType.front}
        style={{ opacity: 0, flex: 1 }}
        onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
          mode: FaceDetector.FaceDetectorMode.fast,
          detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
          runClassifications: FaceDetector.FaceDetectorClassifications.none,
          minDetectionInterval: 100,
          tracking: true,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  faces: {
    backgroundColor: "#ffffff",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
  },
  faceDesc: {
    fontSize: 20,
  },
});
