import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Text } from "react-native";
import * as Clipboard from "expo-clipboard";

//icons ========
import { Octicons } from "@expo/vector-icons";

//////components--------
import {
  StyledContainer,
  Colors,
  MainContainer,
  ScreenTitles,
  WalletAddressContainer,
  WalletAddressTitle,
  WalletAddressQrCode,
  DownloadQrCode,
  DownloadQrCodeText,
  CryptoInputContainer,
  CryptoCopyBtn,
  CryptoAddressInput,
  ButtonText,
  CryptoAddressDetails,
  StyledButtonVarient,
  ButtonTextBlue,
} from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { generateUsdt } from "../util/auth";
import { Context } from "../store/context";

const { backgroundColor, inputPlaceholder, white } = Colors;

const GenerateUsdtWallet = ({ navigation }) => {
  const [isError, setisError] = useState("");
  //copy to clipboard function
  const ctx = useContext(Context);
  const { token } = ctx;
  const [inputText, setInputText] = useState("");
  generateUsdt(token)
    .then((response) => {
      // set Wallet Address here to the result response from the api
      // set Wallet Address here to the result response from the api
      // set Wallet Address here to the result response from the api
      // setUsdtAddress()
      console.log(response);
    })
    .catch((error) => {
      setisError(error.message);
    });

  const handleCopy = () => {
    Clipboard.setStringAsync(inputText);
    alert("Copied");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledContainer>
        <StatusBar style="light" backgroundColor={backgroundColor} />
        <MainContainer>
          <ScreenTitles>USDT Wallet</ScreenTitles>
          <WalletAddressContainer>
            <WalletAddressTitle>USDT Wallet Address</WalletAddressTitle>
            <WalletAddressQrCode
              source={require("../assets/images/qrcode.png")}
            />
            <DownloadQrCode>
              <Octicons name="download" size={18} color={white} />
              <DownloadQrCodeText>Downlaod QR Code</DownloadQrCodeText>
            </DownloadQrCode>
            <CryptoInputContainer>
              <CryptoAddressInput />
              <CryptoCopyBtn>
                <ButtonText>Copy</ButtonText>
              </CryptoCopyBtn>
            </CryptoInputContainer>
            <CryptoAddressDetails>
              You can receive USDT with the QR code or address above. It would
              automatically be converted and added to your account balance.
            </CryptoAddressDetails>
            <StyledButtonVarient>
              <ButtonTextBlue>View USDT rates</ButtonTextBlue>
            </StyledButtonVarient>
          </WalletAddressContainer>
        </MainContainer>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default GenerateUsdtWallet;