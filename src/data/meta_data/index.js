export const metaData = (fileName) => {
  var allFiles = {
    Analys_statistic: {
      title: "Статистикийн криптоанализ",
      description: "Үсэг болон үеийн давтамж ашиглан анализ хийх тухай",
    },
    Analys_caeser: {
      title: "Цезарийн шифр болон түүнд хийх довтолгоо",
      description: "Цезарийн шифрт хийх довтолгоо",
    },
    Analys_afin: {
      title: "Афины шифр түүнд хийгдэх довтолгоо",
      description:
        "Математикийн шугаман хувиргалтыг криптологийн ертөнцөд хэрхэн ашигладаг талаар болон түүн дээр хийгдэх криптоанализын талаар",
    },
    Analys_vigener: {
      title: "Вижинерийн шифр түүнд хийгдэх довтолгоо",
      description:
        "Нэгэн төрлийн олон үсэгт /polyalphabetic/ шифр алгоритм бөгөөд түүн дээр анализ хийх нь криптоанализын чиглэлийн сонгодог жишээ болдог.",
    },
    Coding_ascii: {
      title: "ASCII кодлол",
      description:"Цахим харилцааны тэмдэгт кодлолын стандарт"
    },
    Coding_base64: {
      title: "BASE64 кодлол",
      description:"Base64 нь 8 битийн тэмдэгтүүдийг 6 битийн тэмдэгт болгон кодлодог. Энэ нь SMTP и-мэйл протоколын анхны хувилбарт шаардлагатай байсан бөгөөд тэмдэгтүүдэд зөвхөн дээд тал нь 7 битийг зөвшөөрдөг."
    },
    Coding_morse: {
      title: "Морз кодлол",
      description:"Морз кодлолын талаар"
    },
    Coding_bacon: {
      title: "Bacon кодлол",
      description:"Bacon кодлолын талаар"
    },
    Crypto_enigma: {
      title: "Энигма шифр",
      description:"Энигма шифр"
    },
    Crypto_adfgvx: {
      title: "ADFGVX шифр",
      description:"ADFGVX шифр"
    },
    Crypto_feal4: {
      title: "FEAL-4 шифр",
      description:"FEAL-4 шифр"
    },
    Crypto_aes: {
      title: "AES шифр",
      description:"AES шифр"
    }
  };

  if (!allFiles[fileName]) {
    return {
      title: "Cryptology site | Криптологи сайт",
      description:
        "about cryptography and cryptoanalysis for who interested | криптограф болон криптоанализ сонирхогчдод",
    };
  }

  return allFiles[fileName];
};
