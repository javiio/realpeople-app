import React, { createContext, useContext, useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import tw from 'twrnc';

const dialogContext = createContext();

export const ProvideDialog = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [cancelText, setCancelText] = useState();
  const [okText, setOkText] = useState();
  const [onOk, setOnOk] = useState();
  const [showCancel, setShowCancel] = useState();

  const showDialog = ({
    title = '',
    description = '',
    cancelText = 'Cancelar',
    okText = 'Aceptar',
    onOk = () => {},
    showCancel = false,
  } = {}) => {
    setTitle(title);
    setDescription(description);
    setCancelText(cancelText);
    setOkText(okText);
    setOnOk(() => onOk);
    setShowCancel(showCancel);

    setIsVisible(true);
  };

  const handleCancel = () => setIsVisible(false);
  const handleOk = () => {
    setIsVisible(false);
    onOk();
  };

  const value = { showDialog };

  return (
    <dialogContext.Provider value={value}>
      <Modal
        animationType="slide"
        transparent
        visible={isVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalText}>{description}</Text>
            <View style={tw`flex-row justify-between`}>
              {showCancel && (
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setIsVisible(false)}
                >
                  <Text style={styles.textStyle}>{cancelText}</Text>
                </Pressable>
              )}

              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={handleOk}
              >
                <Text style={styles.textStyle}>{okText}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {children}
    </dialogContext.Provider>
  );
};

export const useDialog = () => useContext(dialogContext);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginRight: 16,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginBottom: 12,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
