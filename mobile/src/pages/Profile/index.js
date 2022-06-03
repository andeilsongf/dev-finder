import React from 'react';
import { WebView } from 'react-native-webview';

export function Profile({ route, navigation }) {
  
  const { github_username } = route.params;

  return (
    <WebView source={{ uri: `https://github.com/${github_username}` }} />
  );
}