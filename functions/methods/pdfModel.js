function getFireStore() {

  const config = {
   project_id: "ttrpgoverlays",
   private_key : "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDKVDhyE2grYfxw\nIwDHomUHASi1zBf2fOaXWrnUaCH9WRLTTsq2oDuJeD1yaxKEUx9n8lqTqWl3uJf4\n3M5JwxEYBnFkUx741tnhRrpZK88m9OCoDBm2iXJsE6UkEbyKDlxPaOEXh4zgdZ3L\n4ZkV6W2Xrq41fnJfDOlpUzqlfgTMTQ3BGRNaJSUjUFMXkxRrzG65mNDNup1efi7k\noOhWdQ+ySKoiONkLVpJ9OLhBpefFB2ItHuIP9iP1Pw9CFbZURVemXSn4A3jzzO53\npxG8GdslRGJE9SsqJZtYWlyaX25DwaxW+TY/C3S9+KpKjnFacvDyKNxdyHH9KUa9\nlSbHgBl7AgMBAAECggEAKgk1cP33Now1FlcvYkqrErl668prcBqjDe8bjLXV2f0X\nnC9Sjn7b38PLgGoefr+GVuJTTzpzXxxK9rlpYonUk1lDVcSvOqPowJUhQkWH1GAs\nDL322aXUz/+E3+mPcl9pblYr7eeLrVbCYgmM9LB6xHjWWObcfEMCe49/L8Lu3EMH\nZP/skiABHnI4e+q/h6nAUsHnGVPGpKkxUhQF/VCinJRObokuODOkPEcwKc1ZBTe+\nA9GRNac4xMKTaNAqjbzA1bQFskLgdmpcoh0pjidi4xCM0qStGc9h12AXQd1opEn7\nczAAgSEKmrQpaJ4F0e7BNvVQpFfXE7glYRFhz1DdgQKBgQDsgJ+UXOqIqzYfMTBJ\nFOVFppY0cKGxBQMJKGBOBEsvykL9m5G1QTr1HMRLjRl1BPGgdYzJvEnGK7rsgqMj\nGU4yhNOORGGmqQLsgm0rO0Ke4lRXObj96c6MCWgTzUYCweoNhffYhFvq8iPi2wDm\nV+hJQPv/qcMjRsA/EvT80NRvpwKBgQDbAl4Xd7pmWagPiRH1aMcfg3naHzlpokh/\nKyfIn1m08OqxlicM5qapaUPCHskpTSgLzYng1vloFzdFut40z7w17k5uwtAYz4yV\nIFxGjcIogvLArkCxpEd/sGBpQNQIgTD4NsTU1W4KBtDKgSlmAnSixYInIChJ+50z\nttUN+VPiDQKBgQDli33XqUt19P9lzP85n49cR/D32u4E+4FTzR2T+3TiYKUes3T8\nAODxcMdRMRUpT/AZtp48W4UbU+xsi+s9MN2GCQewyMwiz13oIjtFP5JM1g3YT00v\nHVR89NBQj+dI29+I2qORQf5ZDkYodDnuWBo7p1gvcBzXS19imMqx6xqVdwKBgADu\nrqXc7Z837H48cCYiTw60SZWDIoRvm21nKqExBHm/uNAOupXUeYspFo/B/8s8N9pt\nApRBdghaaPLUC9QfukZkgFL6Y1Zns8qCu8HVIql3fT8SvtXCxEcn4hEwpHZwzluQ\nKCBb1D8YrlTeXeXARuzWeGpgOauu9Yld0uRfVlsVAoGATG5VqaeP+VtTJ0f8WwYj\n05Yes7y1oSMAqdRcGMIHxWkdbIfpWOszhU+R8syBZvPP30mSHHsC1UVwEd1F3o1c\nWF3LI8Uob8LYi5hxsBpkAoY5tpfRfsoo5hadJE3fYgPaSBkVbzFzVCrzJs2EnKUe\n9KG1LysvwlV+m2OpsdHoyUc=\n-----END PRIVATE KEY-----\n",
   client_email : "ttrpgoverlays@appspot.gserviceaccount.com",
   spreadsheetID: "https://docs.google.com/spreadsheets/1vbM0xW6MhRnQAGPYsdtRu9R1cc-MQYqvFcVGJ1BRG64/edit#gid=1987042339/edit#gid=0",
  };
 
 
 const firestore = FirestoreApp.getFirestore(config.client_email, config.private_key, config.project_id);
 
 const ss = SpreadsheetApp.getActiveSpreadsheet();
 
 const sheet = ss.getActiveSheet();
 

 
  //firestore.createDocument("CSRSheet",data);
 }
 