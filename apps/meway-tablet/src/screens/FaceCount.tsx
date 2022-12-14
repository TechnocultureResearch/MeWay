import { Text } from "react-native";
import React from "react";
import { Camera } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import {
  CameraType,
  FaceDetectionResult,
} from "expo-camera/build/Camera.types";
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

  const handleFacesDetected = ({ faces }: FaceDetectionResult): void => {
    setFaceData(faces.length);
    console.log(faceData);
  };

  return (
    <>
      <Text className="text-orange-600/100 font-bold">{faceData}</Text>
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
