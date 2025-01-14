import { Client, Account, ID, Messaging } from 'react-native-appwrite';

const client = new Client()
    .setProject('677fedab00354096368e')
    .setPlatform('com.lokma.app');

const account = new Account(client);
const messaging = new Messaging(client);

export { client, account, ID, messaging };