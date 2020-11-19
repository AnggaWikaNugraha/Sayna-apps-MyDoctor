import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeProfile from '../../components/mollecules/HomeProfile';
import DoctorCategory from '../../components/mollecules/DoctorCategory';
import RatedDoctor from '../../components/mollecules/RatedDoctor';
import NewsItem from '../../components/mollecules/NewsItem';
import {fonts, colors} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import Gap from '../../components/atoms/Gap';

import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  JSONCategoryDoctor,
} from '../../assets';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau Konsultasi dengan siapa hari ini ?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {JSONCategoryDoctor.data.map((item) => {
                  return (
                    <DoctorCategory
                      onPress={() => navigation.navigate('ChooseDoctor')}
                      key={item.id}
                      category={item.category}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top rated doctors</Text>
            <RatedDoctor
              name="alexa rachel"
              desc="Pediatrician"
              avatar={DummyDoctor1}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              name="sunny frank"
              desc="dentist"
              avatar={DummyDoctor2}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              name="Peo Min"
              desc="Podiatrist"
              avatar={DummyDoctor3}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <Text style={{marginTop: 16, marginBottom: 16}}>Good news</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  wrapperSection: {paddingHorizontal: 16},
  wrapperScroll: {
    marginHorizontal: -16,
  },
  category: {
    flexDirection: 'row',
  },
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 219,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
