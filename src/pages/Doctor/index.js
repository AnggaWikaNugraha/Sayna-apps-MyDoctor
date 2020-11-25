import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeProfile from '../../components/mollecules/HomeProfile';
import DoctorCategory from '../../components/mollecules/DoctorCategory/index';
import RatedDoctor from '../../components/mollecules/RatedDoctor';
import NewsItem from '../../components/mollecules/NewsItem';
import {fonts, colors} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import Gap from '../../components/atoms/Gap';
import Fire from '../../config/firebase';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import {showError} from '../../utils/ShowMessage';

const Doctor = ({navigation}) => {
  const [news, setnews] = useState([]);
  const [category, setcategory] = useState([]);
  const [doctors, setdoctors] = useState([]);

  useEffect(() => {
    getCategoryDoctor();
    getTopRatedDoctor();
    getNews();
  }, []);

  const getNews = () => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          setnews(res.val());
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getCategoryDoctor = () => {
    Fire.database()
      .ref('category_doctor/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          setcategory(res.val());
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getTopRatedDoctor = () => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          //data masih berupa object
          const oldData = res.val();
          //array of object karena di firebase return-nya berupa data , kita masukan ke dalam array
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setdoctors(data);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

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
                {category.map((item) => {
                  return (
                    <DoctorCategory
                      key={item.id}
                      onPress={() => navigation.navigate('ChooseDoctor')}
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
            {doctors.map((doctor) => {
              return (
                <RatedDoctor
                  key={doctor.id}
                  name={doctor.data.fullName}
                  desc={doctor.data.profession}
                  avatar={{uri: doctor.data.photo}}
                  //mengirim parameter
                  onPress={() => navigation.navigate('DoctorProfile', doctor)}
                />
              );
            })}
            <Text style={{marginTop: 16, marginBottom: 16}}>Good news</Text>
          </View>
          {news.map((item) => {
            return (
              <NewsItem
                key={item.id}
                date={item.date}
                title={item.title}
                image={item.image}
              />
            );
          })}
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
