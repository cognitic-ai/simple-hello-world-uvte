import { ScrollView, Text, View } from "react-native";
import * as AC from "@bacons/apple-colors";

export default function IndexRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        flex: 1,
        backgroundColor: AC.systemBackground,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 32,
        }}
      >
        <View
          style={{
            backgroundColor: AC.secondarySystemBackground,
            borderRadius: 24,
            borderCurve: "continuous",
            padding: 32,
            shadowColor: AC.label,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 8,
          }}
        >
          <Text
            selectable
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: AC.label,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Hello World! 👋
          </Text>
          <Text
            selectable
            style={{
              fontSize: 18,
              color: AC.secondaryLabel,
              textAlign: "center",
              lineHeight: 24,
            }}
          >
            Welcome to your Expo app
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
