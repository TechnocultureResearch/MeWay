import React from "react";
import { SafeAreaView, View, Image } from "react-native";

const MinimalUi = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-col items-start w-[1336px] h-[1024px] p-3.4 gap-4 bg-violet-100">
        <View className="flex-1">
          <Image
            source={require("../../assets/rectangle.png")}
            className="w-[1320px] h-[794px]"
            resizeMode="stretch"
          />
          <Image />
        </View>
        <View className="flex flex-row bg-violet-100 h-[180px] w-[1320px]"></View>
      </View>
    </SafeAreaView>
  );
};

export default MinimalUi;
