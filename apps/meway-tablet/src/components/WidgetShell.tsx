import React from "react";
import { Text, View } from "react-native";

interface WidgetShellProps {
  title: string;
  content: string;
  footer: string;
}

const WidgetShell = ({ title, content, footer }: WidgetShellProps) => {
  return (
    <View className="flex-0.3 flex-col justify-center items-center w-[180px] h-[180px]  bg-black border border-solid border-white rounded-2xl">
      <View className="flex flex-col items-start w-[133px] h-[140px] bg-black p-0 gap-2">
        <Text className="text-white  w-[60px] font-inter font-normal font-light text-[24px]">
          {title}
        </Text>

        <Text className="text-white w-[133px] text-base font-normal leading font-inter">
          {content}
        </Text>
        <Text className="w-[90px] h-[25px] font-bold font-inter text-base text-white">
          {footer}
        </Text>
      </View>
    </View>
  );
};

export default WidgetShell;
