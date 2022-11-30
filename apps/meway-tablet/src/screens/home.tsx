import React from "react";

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FlashList } from "@shopify/flash-list";

export const HomeScreen = () => {
  const [showPost, setShowPost] = React.useState<string | null>(null);

  return (
    <SafeAreaView>
      <View className="h-full w-full p-4">
        <Text className="text-5xl font-bold mx-auto pb-2">
          Create <Text className="text-indigo-500">MEWAY</Text> tablet
        </Text>

        <View className="py-2">
          {showPost ? (
            <Text>
              <Text className="font-semibold"></Text>
              {showPost}
            </Text>
          ) : (
            <Text className="italic font-semibold">Meway-Button</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
