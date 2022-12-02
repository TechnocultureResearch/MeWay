import React from "react";
import { Text, View } from "react-native";

interface WidgetShellProps {
  title: string;
  content: string;
  text: string;
}

const WidgetShell = ({ title, content, text }: WidgetShellProps) => {
  return (
    <View className="flex flex-col justify-center items-center w-[180px] h-[180px] bg-stone-900 border border-solid border-white rounded-2xl">
      <View className="flex flex-col items-start w-[133px] h-36 p-0 gap-2">
        <Text className="text-white w-16 font-inter font-normal font-light text-2xl">
          {title}
        </Text>

        <Text className="text-white w-32 text-base font-normal font-inter">
          {content}
        </Text>

        <Text className="w-[90px] h-6 font-bold font-inter text-base text-white">
          {text}
        </Text>
      </View>
    </View>
  );
};

export default WidgetShell;
