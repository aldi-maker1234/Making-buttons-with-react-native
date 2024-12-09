import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

export default App = () => {
  const [tombol, setTombol] = useState("");

  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight, gap: 10, backgroundColor: 'skyblue', alignItems: 'center' }}>
      <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 20 }}>TOUCHABLE OPACITY (TOMBOL CUSTOM)</Text>
      <Text>{tombol || "(Tombol belum ditekan)"}</Text>

      {/* Tombol Home */}
      <TouchableOpacity 
        onPress={() => setTombol('Tombol HOME ditekan')} 
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: 'row', borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10, backgroundColor: '#000' }}>
          <Entypo name="home" size={24} color="white" />
          <Text style={{ marginLeft: 10, color: 'white' }}>HOME</Text>
        </View>
      </TouchableOpacity>

      {/* Tombol Search */}
      <TouchableOpacity 
        onPress={() => setTombol('Tombol SEARCH ditekan')} 
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: 'row', borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10, backgroundColor: '#000' }}>
          <FontAwesome name="search" size={24} color="white" />
          <Text style={{ marginLeft: 10, color: 'white' }}>SEARCH</Text>
        </View>
      </TouchableOpacity>
            {/* Tombol Collections */}
            <TouchableOpacity 
        onPress={() => setTombol('Tombol koleksi ditekan')} 
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: 'row', borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10, backgroundColor: '#000' }}>
        <MaterialIcons name="collections" size={24} color="white" />
          <Text style={{ marginLeft: 10, color: 'white' }}>COLLECTIONS</Text>
        </View>
      </TouchableOpacity>
                  {/* Tombol Tambahkan */}
                  <TouchableOpacity 
        onPress={() => setTombol('Tombol Tambahkan ditekan')} 
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: 'row', borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10, backgroundColor: '#000' }}>
        <FontAwesome6 name="add" size={24} color="white" />
          <Text style={{ marginLeft: 10, color: 'white' }}>ADD</Text>
        </View>
      </TouchableOpacity>
                        {/* Tombol Toko */}
                        <TouchableOpacity 
        onPress={() => setTombol('Tombol Toko ditekan')} 
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: 'row', borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10, backgroundColor: '#000' }}>
        <AntDesign name="shoppingcart" size={24} color="white" />
          <Text style={{ marginLeft: 10, color: 'white' }}>SHOP</Text>
        </View>
      </TouchableOpacity>
                        {/* Tombol Tambahkan */}
                        <TouchableOpacity 
        onPress={() => setTombol('Tombol tutup ditekan')} 
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: 'row', borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10, backgroundColor: '#000' }}>
        <EvilIcons name="close" size={24} color="white" />
          <Text style={{ marginLeft: 10, color: 'white' }}>CLOSE</Text>
        </View>
      </TouchableOpacity>
      
                  {/* Tombol Tambahkan */}
                  <TouchableOpacity 
        onPress={() => setTombol('Tombol Jam ditekan')} 
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: 'row', borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10, backgroundColor: '#000' }}>
        <Feather name="clock" size={24} color="white" />
          <Text style={{ marginLeft: 10, color: 'white' }}>CLOCK</Text>
        </View>
      </TouchableOpacity>
      
                  {/* Tombol Tambahkan */}
                  <TouchableOpacity 
        onPress={() => setTombol('Tombol Notif ditekan')} 
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: 'row', borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10, backgroundColor: '#000' }}>
        <Ionicons name="notifications" size={24} color="white" />
          <Text style={{ marginLeft: 10, color: 'white' }}>NOTIFICATIONS</Text>
        </View>
      </TouchableOpacity>
      
                  {/* Tombol Tambahkan */}
                  <TouchableOpacity 
        onPress={() => setTombol('Tombol Bahasa ditekan')} 
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: 'row', borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10, backgroundColor: '#000' }}>
        <FontAwesome name="language" size={24} color="white" />
          <Text style={{ marginLeft: 10, color: 'white' }}>LANGUANGES</Text>
        </View>
      </TouchableOpacity>
      
                  {/* Tombol Tambahkan */}
                  <TouchableOpacity 
        onPress={() => setTombol('Tombol pengaturan ditekan')} 
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: 'row', borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10, backgroundColor: '#000' }}>
        <Feather name="settings" size={24} color="white" />
          <Text style={{ marginLeft: 10, color: 'white' }}>SETTINGS</Text>
        </View>
      </TouchableOpacity>
      
                  {/* Tombol Tambahkan */}
                  <TouchableOpacity 
        onPress={() => setTombol('Tombol favorit ditekan')} 
        activeOpacity={0.7}
      >
        <View style={{ flexDirection: 'row', borderColor: '#000', borderWidth: 1, padding: 10, borderRadius: 10, backgroundColor: '#000' }}>
        <MaterialIcons name="favorite" size={24} color="white" />
          <Text style={{ marginLeft: 10, color: 'white' }}>FAVOURITES</Text>
        </View>
      </TouchableOpacity>      
    </View>
  );
};
