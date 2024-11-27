

const pids = [
    {
      "date": "27/07/2024",
      "from_product_id": "3chag501",
      "to_product_id": "3chag505",
      "product_type": "3CHAG",
      "no_of_boards": 5,
      "ide": "UNO",
      "location": "INSTALLATION",
      "product_type_out": "3CHAG",
      "out_boards": 158
    },
    {
      "date": "29/07/2024",
      "from_product_id": "3chag506",
      "to_product_id": "3chag510",
      "product_type": "3CHAG",
      "no_of_boards": 5,
      "ide": "UNO",
      "location": "INSTALLATION",
      "product_type_out": "3CHSG",
      "out_boards": 64
    },
    {
      "date": "29/07/2024",
      "from_product_id": "3chsg301",
      "to_product_id": "3chsg502",
      "product_type": "3CHSG",
      "no_of_boards": 2,
      "ide": "UNO",
      "location": "INSTALLATION",
      "product_type_out": "3CHRB",
      "out_boards": 118
    },
    {
      "date": "30/07/2024",
      "from_product_id": "3chag511",
      "to_product_id": "3chag520",
      "product_type": "3CHAG",
      "no_of_boards": 10,
      "ide": "ESP-IDF",
      "location": "INSTALLATION",
      "product_type_out": "3CH1FRB",
      "out_boards": 0
    },
    {
      "date": "30/07/2024",
      "from_product_id": "3chsg503",
      "to_product_id": "-",
      "product_type": "3CHSG",
      "no_of_boards": 1,
      "ide": "ESP-IDF",
      "location": "INSTALLATION",
      "product_type_out": "3L1FTC",
      "out_boards": 16
    },
    {
      "date": "26/07/2024",
      "from_product_id": "3chrb005",
      "to_product_id": "-",
      "product_type": "3CHRB",
      "no_of_boards": 1,
      "ide": "ESP-IDF",
      "location": "OFC",
      "product_type_out": "4LTC",
      "out_boards": 4
    },
    {
      "date": "31/07/2024",
      "from_product_id": "3chsg504",
      "to_product_id": "3chsg510",
      "product_type": "3CHSG",
      "no_of_boards": 7,
      "ide": "ESP-IDF",
      "location": "INSTALLATION",
      "product_type_out": "6LTC",
      "out_boards": 10
    },
    {
      "date": "31/07/2024",
      "from_product_id": "3chrb480",
      "to_product_id": "-",
      "product_type": "3CHRB",
      "no_of_boards": 1,
      "ide": "UNO",
      "location": "INSTALLATION",
      "product_type_out": "1HTC",
      "out_boards": 15
    },
    {
      "date": "09/08/2024",
      "from_product_id": "3chrb501",
      "to_product_id": "3chrb505",
      "product_type": "3CHRB",
      "no_of_boards": 5,
      "ide": "ESP-IDF",
      "location": "OFC",
      "product_type_out": "3CHCT",
      "out_boards": 14
    },
    {
      "date": "09/08/2024",
      "from_product_id": "3l1ftc270",
      "to_product_id": "-",
      "product_type": "3L1FTC",
      "no_of_boards": 1,
      "ide": "ESP-IDF",
      "location": "OFC",
      "product_type_out": "3CH",
      "out_boards": 354
    },
    {
      "date": "09/08/2024",
      "from_product_id": "4l2ftc261",
      "to_product_id": "-",
      "product_type": "4L2FTC",
      "no_of_boards": 1,
      "ide": "UNO",
      "location": "OFC"
    },
    {
      "date": "12/08/2024",
      "from_product_id": "3chrb506",
      "to_product_id": "3chrb510",
      "product_type": "3CHRB",
      "no_of_boards": 5,
      "ide": "UNO",
      "location": "INSTALLATION"
    },
    {
      "date": "12/08/2024",
      "from_product_id": "3chrb511",
      "to_product_id": "3chrb513",
      "product_type": "3CHRB",
      "no_of_boards": 3,
      "ide": "UNO",
      "location": "INSTALLATION"
    },
    {
      "date": "13/08/2024",
      "from_product_id": "3chag521",
      "to_product_id": "3chag523",
      "product_type": "3CHAG",
      "no_of_boards": 3,
      "ide": "UNO",
      "location": "INSTALLATION"
    },
    {
      "date": "14/08/2024",
      "from_product_id": "3chag524",
      "to_product_id": "3chag533",
      "product_type": "3CHAG",
      "no_of_boards": 10,
      "ide": "UNO",
      "location": "INSTALLATION"
    },
    {
      "date": "15/08/2024",
      "from_product_id": "3chrb514",
      "to_product_id": "3chrb515",
      "product_type": "3CHRB",
      "no_of_boards": 2,
      "ide": "UNO",
      "location": "INSTALLATION"
    },
    {
      "date": "16/08/2024",
      "from_product_id": "3chsg511",
      "to_product_id": "3chsg520",
      "product_type": "3CHSG",
      "no_of_boards": 10,
      "ide": "UNO",
      "location": "INSTALLATION"
    },
    {
      "date": "24/08/2024",
      "from_product_id": "4ltc308",
      "to_product_id": "-",
      "product_type": "4LTC",
      "no_of_boards": 1,
      "ide": "ESP-IDF",
      "location": "INSTALLATION"
    },
    {
      "date": "26/08/2024",
      "from_product_id": "3chsg521",
      "to_product_id": "-",
      "product_type": "3CHSG",
      "no_of_boards": 1,
      "ide": "UNO",
      "location": "INSTALLATION"
    },
    {
      "date": "26/08/2024",
      "from_product_id": "3chag534",
      "to_product_id": "-",
      "product_type": "3CHAG",
      "no_of_boards": 1,
      "ide": "UNO",
      "location": "INSTALLATION"
    },
    {
      "date": "26/08/2024",
      "from_product_id": "3chrb516",
      "to_product_id": "-",
      "product_type": "3CHRB",
      "no_of_boards": 1,
      "ide": "UNO",
      "location": "INSTALLATION"
    },
    {
      "date": "26/08/2024",
      "from_product_id": "3chag535",
      "to_product_id": "3chag544",
      "product_type": "3CHAG",
      "no_of_boards": 10,
      "ide": "UNO",
      "location": "INSTALLATION"
    },
    {
      "date": "28/08/2024",
      "from_product_id": "3chrb517",
      "to_product_id": "-",
      "product_type": "3CHRB",
      "no_of_boards": 1,
      "ide": "UNO",
      "location": "INSTALLATION"
    },
    {
      "date": "29/08/2024",
      "from_product_id": "3chsg522",
      "to_product_id": "3chsg531",
      "product_type": "3CHSG",
      "no_of_boards": 10,
      "ide": "UNO",
      "location": "INSTALLATION"
    },  
    {
        "date": "02/09/2024",
        "from_product_id": "3chct501",
        "to_product_id": "3chct510",
        "product_type": "3CHCT",
        "no_of_boards": 10,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "02/09/2024",
        "from_product_id": "3chrb518",
        "to_product_id": "3chrb532",
        "product_type": "3CHRB",
        "no_of_boards": 15,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "03/09/2024",
        "from_product_id": "3chrb533",
        "to_product_id": "3chrb534",
        "product_type": "3CHRB",
        "no_of_boards": 2,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "05/09/2024",
        "from_product_id": "3chag545",
        "to_product_id": null,
        "product_type": "3CHAG",
        "no_of_boards": 1,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "10/09/2024",
        "from_product_id": "3chag546",
        "to_product_id": "3chag547",
        "product_type": "3CHAG",
        "no_of_boards": 2,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "10/09/2024",
        "from_product_id": "3chsg532",
        "to_product_id": "3chsg536",
        "product_type": "3CHSG",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "13/09/2024",
        "from_product_id": "3l1ftc501",
        "to_product_id": "3l1ftc503",
        "product_type": "3L1FTC",
        "no_of_boards": 2,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "13/09/2024",
        "from_product_id": "4l2ftc501",
        "to_product_id": null,
        "product_type": "4L2FTC",
        "no_of_boards": 1,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "13/09/2024",
        "from_product_id": "3chag548",
        "to_product_id": "3chag557",
        "product_type": "3CHAG",
        "no_of_boards": 10,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "13/09/2024",
        "from_product_id": "3chsg537",
        "to_product_id": "3chsg546",
        "product_type": "3CHSG",
        "no_of_boards": 10,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "13/09/2024",
        "from_product_id": "3chrb535",
        "to_product_id": null,
        "product_type": "3CHRB",
        "no_of_boards": 1,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "16/09/2024",
        "from_product_id": "3chag558",
        "to_product_id": null,
        "product_type": "3CHAG",
        "no_of_boards": 1,
        "ide": "UNO",
        "location": "OFC"
    },
    {
        "date": "16/09/2024",
        "from_product_id": "3chsg547",
        "to_product_id": null,
        "product_type": "3CHSG",
        "no_of_boards": 1,
        "ide": "UNO",
        "location": "OFC"
    },
    {
        "date": "16/09/2024",
        "from_product_id": "3chrb536",
        "to_product_id": null,
        "product_type": "3CHRB",
        "no_of_boards": 1,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "19/09/2024",
        "from_product_id": "3chag559",
        "to_product_id": null,
        "product_type": "3CHRB",
        "no_of_boards": 1,
        "ide": "UNO",
        "location": "OFC"
    }, 
    {
        "date": "19/09/2024",
        "from_product_id": "3chsgsl003",
        "to_product_id": null,
        "product_type": "3CHSG",
        "no_of_boards": 1,
        "ide": "UNO",
        "location": "OFC"
    },
    {
        "date": "19/09/2024",
        "from_product_id": "3chag560",
        "to_product_id": "3chag564",
        "product_type": "3CHAG",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "19/09/2024",
        "from_product_id": "3chsg548",
        "to_product_id": "3chsg552",
        "product_type": "3CHSG",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "20/09/2024",
        "from_product_id": "3chrb537",
        "to_product_id": "3chrb540",
        "product_type": "3CHRB",
        "no_of_boards": 4,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "21/09/2024",
        "from_product_id": "3chsg553",
        "to_product_id": "3chsg556",
        "product_type": "3CHSG",
        "no_of_boards": 4,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "21/09/2024",
        "from_product_id": "3chag565",
        "to_product_id": "3chag567",
        "product_type": "3CHAG",
        "no_of_boards": 3,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "23/09/2024",
        "from_product_id": "3chrb541",
        "to_product_id": "3chrb550",
        "product_type": "3CHRB",
        "no_of_boards": 10,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "24/09/2024",
        "from_product_id": "6ltc001",
        "to_product_id": "6ltc109",
        "product_type": "6LTC",
        "no_of_boards": 9,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "23/09/2024",
        "from_product_id": "3chrb001",
        "to_product_id": null,
        "product_type": "3CHRB",
        "no_of_boards": 1,
        "ide": "UNO",
        "location": "OFC"
    },
    {
        "date": "24/09/2024",
        "from_product_id": "3chrb551",
        "to_product_id": "3chrb552",
        "product_type": "3CHRB",
        "no_of_boards": 2,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "26/09/2024",
        "from_product_id": "3l1ftc504",
        "to_product_id": "3l1ftc507",
        "product_type": "3L1FTC",
        "no_of_boards": 4,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "26/09/2024",
        "from_product_id": "4ltc311",
        "to_product_id": "4ltc312",
        "product_type": "4LTC",
        "no_of_boards": 2,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "27/09/2024",
        "from_product_id": "3chag568",
        "to_product_id": "3chag570",
        "product_type": "3CHAG",
        "no_of_boards": 3,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "28/09/2024",
        "from_product_id": "3chsg557",
        "to_product_id": "3chsg561",
        "product_type": "3CHSG",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "01/10/2024",
        "from_product_id": "3chag571",
        "to_product_id": "3chag574",
        "product_type": "3CHAG",
        "no_of_boards": 4,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "01/10/2024",
        "from_product_id": "3chsgsl501",
        "to_product_id": "3chsgsl504",
        "product_type": "3CHSGSL",
        "no_of_boards": 4,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "02/10/2024",
        "from_product_id": "3chag575",
        "to_product_id": "3chag576",
        "product_type": "3CHAG",
        "no_of_boards": 2,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "02/10/2024",
        "from_product_id": "3chsg562",
        "to_product_id": "3chsg563",
        "product_type": "3CHSG",
        "no_of_boards": 2,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "03/10/2024",
        "from_product_id": "3chsgsl505",
        "to_product_id": "3chsgsl511",
        "product_type": "3CHSGSL",
        "no_of_boards": 7,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "03/10/2024",
        "from_product_id": "3chag577",
        "to_product_id": "3chag582",
        "product_type": "3CHAG",
        "no_of_boards": 6,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "04/10/2024",
        "from_product_id": "3ch1frb301",
        "to_product_id": "3ch1frb303",
        "product_type": "3CH1FRB",
        "no_of_boards": 3,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    }, 
    {
        "date": "05/10/2024",
        "from_product_id": "3chrb553",
        "to_product_id": "3chrb562",
        "product_type": "3CHRB",
        "no_of_boards": 10,
        "ide": "ESP-IDF",
        "location": "OFC"
    },
    {
        "date": "07/10/2024",
        "from_product_id": "3chag583",
        "to_product_id": null,
        "product_type": "3CHAG",
        "no_of_boards": 1,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "08/10/2024",
        "from_product_id": "3chag584",
        "to_product_id": "3chag588",
        "product_type": "3CHAG",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "08/10/2024",
        "from_product_id": "3chsgsl512",
        "to_product_id": "3chsgsl514",
        "product_type": "3CHSGSL",
        "no_of_boards": 3,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "08/10/2024",
        "from_product_id": "3chag589",
        "to_product_id": null,
        "product_type": "3CHAG",
        "no_of_boards": 1,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "09/10/2024",
        "from_product_id": "3chrb563",
        "to_product_id": "3chrb572",
        "product_type": "3CHRB",
        "no_of_boards": 10,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "09/10/2024",
        "from_product_id": "3chct09",
        "to_product_id": null,
        "product_type": "3CHCT",
        "no_of_boards": 1,
        "ide": "UNO",
        "location": "OFC"
    },
    {
        "date": "09/10/2024",
        "from_product_id": "1hrb101",
        "to_product_id": "1hrb105",
        "product_type": "1HTC",
        "no_of_boards": 5,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "12/10/2024",
        "from_product_id": "3chrb573",
        "to_product_id": "3chrb574",
        "product_type": "3CHRB",
        "no_of_boards": 2,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "12/10/2024",
        "from_product_id": "3chrb575",
        "to_product_id": null,
        "product_type": "3CHRB",
        "no_of_boards": 1,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "14/10/2024",
        "from_product_id": "3chrb576",
        "to_product_id": "3chrb585",
        "product_type": "3CHRB",
        "no_of_boards": 10,
        "ide": "ESP-IDF",
        "location": "OFC"
    },
    {
        "date": "14/10/2024",
        "from_product_id": "3chrb586",
        "to_product_id": "3chrb590",
        "product_type": "3CHRB",
        "no_of_boards": 5,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "14/10/2024",
        "from_product_id": "3ch1frb304",
        "to_product_id": "3ch1frb305",
        "product_type": "3CH1FRB",
        "no_of_boards": 2,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "15/10/2024",
        "from_product_id": "3chag590",
        "to_product_id": "3chag595",
        "product_type": "3CHAG",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "15/10/2024",
        "from_product_id": "3chsgsl515",
        "to_product_id": "3chsgsl520",
        "product_type": "3CHSGSL",
        "no_of_boards": 6,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "17/10/2024",
        "from_product_id": "3chsgsl521",
        "to_product_id": "3chsgsl522",
        "product_type": "3CHSGSL",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "17/10/2024",
        "from_product_id": "3chag595",
        "to_product_id": "3chag599",
        "product_type": "3CHAG",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "19/10/2024",
        "from_product_id": "1hrb106",
        "to_product_id": "1hrb115",
        "product_type": "1HTC",
        "no_of_boards": 10,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    }, 
    {
        "date": "21/10/2024",
        "from_product_id": "3chct511",
        "to_product_id": "3chct513",
        "product_type": "3CHCT",
        "no_of_boards": 3,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "21/10/2024",
        "from_product_id": "3ch1frb306",
        "to_product_id": "3ch1frb313",
        "product_type": "3CH1FRB",
        "no_of_boards": 8,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "21/10/2024",
        "from_product_id": "3chsgsl525",
        "to_product_id": "3chsgsl526",
        "product_type": "3CHSGSL",
        "no_of_boards": 2,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "22/10/2024",
        "from_product_id": "3chag600",
        "to_product_id": "3chag604",
        "product_type": "3CHAG",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "22/10/2024",
        "from_product_id": "3chsgsl527",
        "to_product_id": "3chsgsl531",
        "product_type": "3CHSGSL",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "22/10/2024",
        "from_product_id": "3chrb591",
        "to_product_id": "3chrb598",
        "product_type": "3CHRB",
        "no_of_boards": 8,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "22/10/2024",
        "from_product_id": "3chrb599",
        "to_product_id": "3chrb600",
        "product_type": "3CHRB",
        "no_of_boards": 2,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "22/10/2024",
        "from_product_id": "3l1ftc509",
        "to_product_id": null,
        "product_type": "3L1FTC",
        "no_of_boards": 1,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "22/10/2024",
        "from_product_id": "3chsgsl532",
        "to_product_id": "3chsgsl534",
        "product_type": "3CHSGSL",
        "no_of_boards": 3,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "24/10/2024",
        "from_product_id": "3chsgsl535",
        "to_product_id": null,
        "product_type": "3CHSGSL",
        "no_of_boards": 1,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "24/10/2024",
        "from_product_id": "3chag605",
        "to_product_id": null,
        "product_type": "3CHAG",
        "no_of_boards": 1,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "25/10/2024",
        "from_product_id": "3chag606",
        "to_product_id": "3chag610",
        "product_type": "3CHAG",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "25/10/2024",
        "from_product_id": "3chsgsl536",
        "to_product_id": "3chsgsl540",
        "product_type": "3CHSGSL",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "25/10/2024",
        "from_product_id": "3chrb601",
        "to_product_id": "3chrb602",
        "product_type": "3CHRB",
        "no_of_boards": 2,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "28/10/2024",
        "from_product_id": "3chag611",
        "to_product_id": null,
        "product_type": "3CHAG",
        "no_of_boards": 1,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "07/11/2024",
        "from_product_id": "3chsgsl542",
        "to_product_id": "3chsgsl545",
        "product_type": "3CHSGSL",
        "no_of_boards": 4,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "28/10/2024",
        "from_product_id": "3chag612",
        "to_product_id": "3chag615",
        "product_type": "3CHAG",
        "no_of_boards": 4,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "04/11/2024",
        "from_product_id": "4ltc313",
        "to_product_id": null,
        "product_type": "4LTC",
        "no_of_boards": 1,
        "ide": "ESP-IDF",
        "location": "OFC"
    },
    {
        "date": "04/11/2024",
        "from_product_id": "6ltc110",
        "to_product_id": null,
        "product_type": "6LTC",
        "no_of_boards": 1,
        "ide": "ESP-IDF",
        "location": "OFC"
    },
    {
        "date": "04/11/2024",
        "from_product_id": "3chsgsl580",
        "to_product_id": "3chsgsl584",
        "product_type": "3CHSGSL",
        "no_of_boards": 5,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "04/11/2024",
        "from_product_id": "3chag616",
        "to_product_id": "3chag619",
        "product_type": "3CHAG",
        "no_of_boards": 4,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "05/11/2024",
        "from_product_id": "3chag620",
        "to_product_id": "3chag623",
        "product_type": "3CHAG",
        "no_of_boards": 4,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "06/11/2024",
        "from_product_id": "3chag624",
        "to_product_id": "3chag632",
        "product_type": "3CHAG",
        "no_of_boards": 9,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "07/11/2024",
        "from_product_id": "3chrb603",
        "to_product_id": null,
        "product_type": "3CHRB",
        "no_of_boards": 1,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    }, 
    {
        "date": "09/11/2024",
        "from_product_id": "3l1ftc511",
        "to_product_id": "3l1ftc519",
        "product_type": "3L1FTC",
        "no_of_boards": 7,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "09/11/2024",
        "from_product_id": "3chag633",
        "to_product_id": "3chag638",
        "product_type": "3CHAG",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "09/11/2024",
        "from_product_id": "3chsgsl585",
        "to_product_id": "3chsgsl589",
        "product_type": "3CHSGSL",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "12/11/2024",
        "from_product_id": "3chrb604",
        "to_product_id": "3chrb614",
        "product_type": "3CHRB",
        "no_of_boards": 11,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "13/11/2024",
        "from_product_id": "3chsgsl590",
        "to_product_id": "3chsgsl593",
        "product_type": "3CHSGSL",
        "no_of_boards": 4,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "13/11/2024",
        "from_product_id": "3chsgsl594",
        "to_product_id": "3chsgsl600",
        "product_type": "3CHSGSL",
        "no_of_boards": 5,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "13/11/2024",
        "from_product_id": "3chsgsl546",
        "to_product_id": "3chsgsl548",
        "product_type": "3CHSGSL",
        "no_of_boards": 3,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "15/11/2024",
        "from_product_id": "3chsgsl549",
        "to_product_id": "3chsgsl551",
        "product_type": "3CHSGSL",
        "no_of_boards": 3,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "16/11/2024",
        "from_product_id": "3chsgsl552",
        "to_product_id": "3chsgsl557",
        "product_type": "3CHSGSL",
        "no_of_boards": 6,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "18/11/2024",
        "from_product_id": "3chag639",
        "to_product_id": "3chag642",
        "product_type": "3CHAG",
        "no_of_boards": 4,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "18/11/2024",
        "from_product_id": "3chag643",
        "to_product_id": "3chag644",
        "product_type": "3CHAG",
        "no_of_boards": 2,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "19/11/2024",
        "from_product_id": "3chag645",
        "to_product_id": "3chag648",
        "product_type": "3CHAG",
        "no_of_boards": 4,
        "ide": "",
        "location": "INSTALLATION"
    },
    {
        "date": "19/11/2024",
        "from_product_id": "3chsgsl558",
        "to_product_id": "3chsgsl559",
        "product_type": "3CHSGSL",
        "no_of_boards": 2,
        "ide": "ESP-IDF",
        "location": "INSTALLATION"
    },
    {
        "date": "20/11/2024",
        "from_product_id": "3chag649",
        "to_product_id": "3chag651",
        "product_type": "3CHAG",
        "no_of_boards": 3,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "20/11/2024",
        "from_product_id": "3chsgsl560",
        "to_product_id": "3chsgsl568",
        "product_type": "3CHSGSL",
        "no_of_boards": 9,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "21/11/2024",
        "from_product_id": "3chag652",
        "to_product_id": "3chag654",
        "product_type": "3CHAG",
        "no_of_boards": 3,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "22/11/2024",
        "from_product_id": "3chsgsl569",
        "to_product_id": "3chsgsl571",
        "product_type": "3CHSGSL",
        "no_of_boards": 3,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "23/11/2024",
        "from_product_id": "3chsgsl572",
        "to_product_id": "3chsgsl574",
        "product_type": "3CHSGSL",
        "no_of_boards": 3,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
    {
        "date": "25/11/2024",
        "from_product_id": "3chag655",
        "to_product_id": "3chag660",
        "product_type": "3CHAG",
        "no_of_boards": 6,
        "ide": "UNO",
        "location": "INSTALLATION"
    },
 // stopped at 131
    
    
] 

console.log(pids.length)  
let count = 0  

function print(obj) {
    console.log(obj)
}

let new_list = []
 
const type_map = [
    ["3l1ftc", 6],
    ["4ltc", 4],
    ["4l2ftc", 6], 
    ["6ltc", 4], 
    ["1htc", 4],
    ["3ch1frb", 7],
    ["1hrb", 4], 
    ["3chag", 5],
    ["3chsgsl", 7],
    ["3chsg", 5],
    ["3chct", 5],
    ["3chrb", 5],
] 

function giveFullNum(num) {
    if (`${num}`.length == 1) {
        return '00' + num
    } 
    else if (`${num}`.length == 2){
        return '0' + num
    } 
    else return num
}

for (let i = 0; i < pids.length; i++) {
    let date = pids[i].date.split('/'); 
    let formattedDate; 
    if (date.length === 3) { 
        formattedDate = `${date[2]}-${date[1].padStart(2, '0')}-${date[0].padStart(2, '0')}`;
    }  
    
    if (!pids[i].to_product_id) { 
        let num_for_n; 
        for (let k=0; k<type_map.length; k++) {
            if(pids[i].from_product_id.startsWith(type_map[k][0])) {
                num_for_n = pids[i].from_product_id.slice(type_map[k][1], pids[i].from_product_id.length) 
                break; 
            }
        }
        new_list.push({
            date: formattedDate, 
            user: 'shibil@onwords.in', 
            ide: pids[i].ide, 
            product_type: pids[i].product_type.toLowerCase(),  
            product_id_number: num_for_n,
            full_product_id: pids[i].from_product_id,
        })  
        //print(pids[i])
    }
    else if (pids[i].to_product_id) {
        for (let j=0; j<type_map.length; j++) {  
            if (pids[i].from_product_id.startsWith(type_map[j][0])) {  
                const type_name = type_map[j][0]
                //console.log(pids[i].from_product_id, pids[i].from_product_id.slice(0, type_map[j][1]), pids[i].from_product_id.slice(type_map[j][1], pids[i].from_product_id.length)) 
                let start_id = pids[i].from_product_id.slice(type_map[j][1], pids[i].from_product_id.length) 
                let end_id = pids[i].to_product_id.slice(type_map[j][1], pids[i].to_product_id.length) 
                // console.log(start_id, end_id, type_name) 
                let current_id = start_id 
                while(current_id < Number(end_id) + 1 ) {
                    new_list.push({
                        date: formattedDate, 
                        user: 'shibil@onwords.in', 
                        ide: pids[i].ide, 
                        product_type: pids[i].product_type.toLowerCase(), 
                        product_id_number: giveFullNum(current_id), 
                        full_product_id: type_name + giveFullNum(current_id),
                    }) 
                    current_id++; 
                }
                break; 
            }
        }
    } 
    
    else {
        print(pids[i])
    }
}
 
console.log(count);    
console.log(new_list) 
export default new_list


// "date": "25/11/2024",
// "from_product_id": "3chag655",
// "to_product_id": "3chag660",
// "product_type": "3CHAG",
// "no_of_boards": 6,
// "ide": "UNO",
// "location": "INSTALLATION"