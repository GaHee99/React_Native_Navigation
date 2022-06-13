import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'

//top tab네비게이터
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>홈 </Text>
    </View>
  )
}

function PopularScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>인기 </Text>
    </View>
  )
}
function NewScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>New!</Text>
    </View>
  )
}

function Sixoclock({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sixoclock </Text>
    </View>
  )
}
function Sevenclock() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sevenclock </Text>
    </View>
  )
}

function eightClock() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>eightClock!</Text>
    </View>
  )
}
function nineClock() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>nineClock!</Text>
    </View>
  )
}
function tenClock() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>tenClock!</Text>
    </View>
  )
}
function elevenClock() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>elevenClock!</Text>
    </View>
  )
}
//마이페이지 스택 구현

function MyPage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyPage!</Text>
      <Button
        title="go to my page setting "
        onPress={() => navigation.navigate('MyPageSetting')}
      ></Button>
    </View>
  )
}
function MyPageSetting({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyPageSetting!</Text>
    </View>
  )
}

const MyPageStack = createNativeStackNavigator()

function MyPageStackScreen() {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen name="MyPage" component={MyPage} />
      <MyPageStack.Screen name="MyPageSetting" component={MyPageSetting} />
    </MyPageStack.Navigator>
  )
}

//마이루틴
function MyRoutine() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyRoutine!</Text>
    </View>
  )
}

const topClock = createMaterialTopTabNavigator()

function TopClockNavigator() {
  return (
    <topClock.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          width: 100,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'rgb(255, 173, 173)',
          height: 3,
        },
      }}
      sceneContainerStyle={{ backgroundColor: 'white' }}
    >
      <topClock.Screen name="6시" component={Sixoclock} />
      <topClock.Screen name="7시" component={Sevenclock} />
      <topClock.Screen name="8시" component={eightClock} />
      <topClock.Screen name="9시" component={nineClock} />
      <topClock.Screen name="10시" component={tenClock} />
      <topClock.Screen name="11시" component={elevenClock} />
    </topClock.Navigator>
  )
}
const Tab = createMaterialTopTabNavigator()

function TopNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        tabBarItemStyle: {
          width: 100,
        },
        tabBarStyle: { marginBottom: 10 },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: 'black',
        tabBarStyle: {
          marginBottom: 10,
          backgroundColor: 'white',
        },
        tabBarIndicatorStyle: {
          backgroundColor: null,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: '600',
          letterSpacing: 0,
          lineHeight: 15,
          textAlign: 'center',
        },
      }}
    >
      <Tab.Screen
        name="홈"
        options={{
          tabBarActiveBackgroundColor: 'green',
        }}
        component={TopClockNavigator}
      />
      <Tab.Screen name="인기" component={PopularScreen} />
      <Tab.Screen name="신규" component={NewScreen} />
    </Tab.Navigator>
  )
}

//Bottom네비게이터
const BottomTab = createBottomTabNavigator()

export default function App() {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: '100%',
          height: 100,
          justifyContent: 'flex-end',
          borderBottomColor: 'rgb(204, 193, 193)',
          borderBottomWidth: 1,
          fontWeight: '700',
          bottom: 10,
          paddingBottom: 10,
        }}
      >
        <Text
          style={{
            left: 10,
            fontSize: 20,
          }}
        >
          GOD[T]Morning
        </Text>
      </View>
      <NavigationContainer>
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
          {/**  screenOptions={{ headerShown: false }}>*/}
          <BottomTab.Screen name="GOD[T] Morning" component={TopNavigator} />
          <BottomTab.Screen name="MyRoutine" component={MyRoutine} />
          <BottomTab.Screen
            name="MyPageStackScreen"
            component={MyPageStackScreen}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </View>
  )
}
