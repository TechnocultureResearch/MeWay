import React from "react";
import { SafeAreaView, View, Image } from "react-native";
import WidgetShell from "./WidgetShell";

const MinimalUi = () => {
  return (
    <SafeAreaView>
      <View className="sm:flex flex-col items-start w-full h-full p-3.4 gap-4 bg-violet-100">
        <View className="w-[1336px] h-[750px] shadow-[0_0px_100px_10px_rgba(0_0_0_0.4)] gap-4">
          <Image
            source={require("../../assets/RectangleImage.png")}
            className="w-[1300px] h-[730px]"
            resizeMode="stretch"
          />
          <Image />
        </View>

        <View className="flex-1 flex-row items-center justify-center gap-4  h-[190px] w-[1336px]">
          <View className="w-[180px] h-180px]">
            <WidgetShell
              title="Setup"
              content="Get a discount on first ride of upto INR 50."
              footer="Start →"
            />
          </View>

          <View className="w-[180px] h-[180px]">
            <WidgetShell
              title="Wifi"
              content="Scan QR Code to connect to get free Wifi."
              footer="Show QR →"
            />
          </View>

          <View className="w-16 h-16">
            <Image
              source={require("../../assets/plus-round-icon.png")}
              className="w-16 h-16 border border-solid border-white rounded-full"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MinimalUi;
