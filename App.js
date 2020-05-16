import React from 'react'
import { StyleSheet, View } from 'react-native'

import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

import WeatherViews from './views/WeatherViews'

i18n.translations = {
  ko: { welcome: '안녕하세요' },
  en: { welcome: 'Hello' },
  ja: { welcome: 'こんにちは' }
};

i18n.locale = Localization.locale

i18n.fallbacks = true

const App = () => {
  const { t } = i18n

  return (
    <View style={styles.container}>
      <WeatherViews textData={t('welcome')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
