import React, { createContext, useContext, useState } from 'react';
import Dialog from 'react-native-dialog';

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
      <Dialog.Container visible={isVisible}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{description}</Dialog.Description>
        {showCancel && <Dialog.Button label={cancelText} onPress={handleCancel} />}
        <Dialog.Button label={okText} onPress={handleOk} />
      </Dialog.Container>

      {children}
    </dialogContext.Provider>
  );
};

export const useDialog = () => useContext(dialogContext);
