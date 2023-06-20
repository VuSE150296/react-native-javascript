import AsyncStorage from '@react-native-async-storage/async-storage';

// Storing data
const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        console.log(' storing data:', key);
    } catch (error) {
        console.log('Error storing data:', error);
    }
};

// Retrieving data
const retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.log('Error retrieving data:', error);
    }
};

// Removing data
const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log('Error removing data:', error);
    }
};
const asyncStorage = {
    removeData, retrieveData, storeData
}
export { asyncStorage }