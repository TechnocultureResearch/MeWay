import React from "react";
import { SafeAreaView, View, Image } from "react-native";
import WidgetShell from "./WidgetShell";

const MinimalUi = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-col items-start w-full h-full p-4 gap-1 gap-y-4 bg-violet-100">
        <View className="w-full h-[794px] shadow-2xl">
          <Image
            source={require("../../assets/rectangleimg.png")}
            className="w-full h-[794px] border-8 border-solid border-white rounded-2xl"
            resizeMode="stretch"
          />
        </View>

        <View className="flex flex-row items-center justify-center gap-x-5 p-0 h-[180px] w-full">
          <View>
            <WidgetShell
              title="Setup"
              content="Get a discount on first ride of upto INR 50."
              text="Start →"
            />
          </View>

          <View>
            <WidgetShell
              title="Wifi"
              content="Scan QR Code to connect to get free Wifi."
              text="Show QR →"
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
