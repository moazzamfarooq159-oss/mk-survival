import React from 'react';
import QRCode from 'qrcode.react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
  },
  qrContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 20,
    textAlign: 'center',
  },
  url: {
    fontSize: 12,
    color: '#FFD700',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

const QRCodeGenerator: React.FC = () => {
  const repoUrl = 'https://github.com/moazzamfarooq159-oss/mk-survival';
  const qrRef = React.useRef();

  const downloadQR = () => {
    Alert.alert('QR Code', 'QR Code saved! Share this with players to download MK-Survival.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 MK-Survival QR Code</Text>
      
      <View style={styles.qrContainer}>
        <QRCode
          ref={qrRef}
          value={repoUrl}
          size={250}
          bgColor={'#FFFFFF'}
          fgColor={'#000000'}
          logoBackgroundColor={'white'}
        />
      </View>

      <Text style={styles.subtitle}>📱 Scan to access the repository</Text>
      <Text style={styles.url}>{repoUrl}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={downloadQR}>
          <Text style={styles.buttonText}>💾 Save QR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Share', 'QR Code ready to share!')}>
          <Text style={styles.buttonText}>📤 Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QRCodeGenerator;
