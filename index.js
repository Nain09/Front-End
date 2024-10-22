import { messages } from './modules/messages.js';
import { ambilDataUser } from './modules/fetchUsers.js';
import { ambilDataUserAsync } from './modules/fetchUsersAsync.js';
import { ambilDataUserAxios } from './modules/axiosUsers.js';

messages();           // Memanggil fungsi messages dari messages.js
ambilDataUser();       // Memanggil fungsi ambilDataUser dari fetchUsers.js
ambilDataUserAsync();  // Memanggil fungsi ambilDataUserAsync dari fetchUsersAsync.js
ambilDataUserAxios();  // Memanggil fungsi ambilDataUserAxios dari axiosUsers.js