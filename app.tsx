import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.heading}>Your Balance:</Text>
          <Text style={styles.balance}>$500.00</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <TouchableOpacity style={styles.buttonSend}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <TouchableOpacity style={styles.buttonRequest}>
            <Text style={styles.buttonText}>Request</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.heading}>All Activity</Text>
          <View style={styles.tableContainer}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.table}>
                <View style={styles.tableHeader}>
                  <Text style={styles.tableHeaderCell}>Date</Text>
                  <Text style={styles.tableHeaderCell}>Description</Text>
                  <Text style={styles.tableHeaderCell}>Amount</Text>
                </View>
                <View style={styles.tableBody}>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>4/22/2023</Text>
                    <Text style={styles.tableCell}>Payment Received</Text>
                    <Text style={styles.tableCell}>$100.00</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>4/21/2023</Text>
                    <Text style={styles.tableCell}>Payment Sent</Text>
                    <Text style={styles.tableCell}>-$50.00</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>4/20/2023</Text>
                    <Text style={styles.tableCell}>Payment Received</Text>
                    <Text style={styles.tableCell}>$250.00</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={styles.navbar}>
        <View style={styles.navbarRow}>
          <TouchableOpacity style={styles.navbarCol}>
            <Text style={styles.navbarIcon}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarCol}>
            <Text style={styles.navbarIcon}>Credit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarCol}>
            <Text style={styles.navbarIcon}>Bell</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarCol}>
            <Text style={styles.navbarIcon}>User</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(`{
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  balance: {
    fontSize: 32,
    marginTop: 10,
  },
  buttonSend: {
    backgroundColor: '#337ab7',
  }`);
