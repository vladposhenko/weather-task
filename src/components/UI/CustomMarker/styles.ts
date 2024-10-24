import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  markerContainer: {
    width: 120,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 15,
  }
});

export default styles;
