"use client";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import {
  withAuthenticator,
  Button,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import config from "../../../src/amplifyconfiguration.json";
Amplify.configure(config);

function App({ signOut }: WithAuthenticatorProps) {
  return (
    <View className="App">
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
