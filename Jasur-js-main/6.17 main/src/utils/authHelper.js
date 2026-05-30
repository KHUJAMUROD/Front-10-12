import { auth, onAuthStateChanged } from "../firebaseConfig.js";

/**
 * Получает информацию о текущем авторизованном пользователе
 * @returns {Promise<{uid: string, token: string}} Объект с uid и токеном пользователя
 * @throws {Error} Если пользователь не авторизован
 * 
 * ========== UID (User ID) ==========
 * 
 * ЧТО ЭТО:
 * - Уникальный идентификатор пользователя в Firebase Authentication
 * - Генерируется автоматически Firebase при регистрации пользователя
 * - Остается постоянным на протяжении всей жизни аккаунта
 * - Нельзя изменить или удалить
 * 
 * КАК ВЫГЛЯДИТ:
 * Пример реального uid: "aBc123XyZ456DeF789GhI012JkL345MnO678"
 * - Обычно строка длиной ~28 символов
 * - Состоит из букв (латиница) и цифр
 * - Регистрозависимый (различает большие и маленькие буквы)
 * 
 * КОГДА СОЗДАЕТСЯ:
 * - При регистрации через createUserWithEmailAndPassword()
 * - Firebase автоматически генерирует уникальный uid для каждого нового пользователя
 * - Даже если два пользователя зарегистрируются с одинаковым email, их uid будут разные
 * 
 * ЗАЧЕМ НУЖЕН:
 * 1. Уникальная идентификация пользователя в системе
 * 2. Создание пути к данным пользователя в Firebase Realtime Database
 *    Пример структуры: 
 *    {
 *      "aBc123XyZ456DeF789GhI012JkL345MnO678": {
 *        "todo1": { "text": "Купить молоко", "completed": false },
 *        "todo2": { "text": "Помыть посуду", "completed": true }
 *      },
 *      "xYz789AbC012DeF345GhI678JkL901MnO234": {
 *        "todo1": { "text": "Другая задача", "completed": false }
 *      }
 *    }
 * 
 * 3. Обеспечение изоляции данных - каждый пользователь видит только свои задачи
 * 
 * ГДЕ ИСПОЛЬЗУЕТСЯ:
 * - В URL запросов: `${host}/${uid}.json` (путь к данным пользователя)
 * - В API запросах для создания, чтения, обновления, удаления задач
 * 
 * ========== TOKEN (JWT Token) ==========
 * 
 * ЧТО ЭТО:
 * - JSON Web Token (JWT) - это зашифрованная строка, содержащая информацию о пользователе
 * - Создается Firebase Authentication при успешной авторизации
 * - Доказывает, что запрос делает действительно авторизованный пользователь
 * - Имеет срок действия (обычно 1 час), после чего нужно получать новый
 * 
 * КАК ВЫГЛЯДИТ:
 * Пример реального token (упрощенно):
 * "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2NzgyMzQ1Njc4OSIsInR5cCI6IkpXVCJ9.
 *  eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG9kbzE3NzczIiwiYXVkIjoi
 *  dG9kbzE3NzczIiwiYXV0aF90aW1lIjoxNjc4MjM0NTY3LCJ1c2VyX2lkIjoiYUJjMTIzWHlaNDU2
 *  RGVGNzg5R2hJMDEySmtMMzQ1TW5PNjc4Iiwic3ViIjoiYUJjMTIzWHlaNDU2RGVGNzg5R2hJMDEy
 *  SmtMMzQ1TW5PNjc4IiwiaWF0IjoxNjc4MjM0NTY3LCJleHAiOjE2NzgyMzc5NjcsImVtYWlsIjoi
 *  dXNlckBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVu
 *  dGl0aWVzIjp7ImVtYWlsIjpbInVzZXJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIi
 *  OiJwYXNzd29yZCJ9fQ.
 *  abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567..."
 * 
 * Структура токена состоит из 3 частей, разделенных точками:
 * 1. Header (заголовок) - алгоритм шифрования
 * 2. Payload (полезная нагрузка) - данные о пользователе (uid, email, время создания)
 * 3. Signature (подпись) - криптографическая подпись для проверки подлинности
 * 
 * КОГДА СОЗДАЕТСЯ:
 * - При успешном входе через signInWithEmailAndPassword()
 * - После регистрации через createUserWithEmailAndPassword()
 * - Автоматически обновляется каждые 50-55 минут (срок действия ~1 час)
 * - Можно получить вручную через user.getIdToken()
 * 
 * ЗАЧЕМ НУЖЕН:
 * 1. БЕЗОПАСНОСТЬ - доказывает, что пользователь действительно авторизован
 * 2. АВТОРИЗАЦИЯ - Firebase проверяет токен перед доступом к данным
 * 3. ЗАЩИТА ДАННЫХ - предотвращает доступ неавторизованных пользователей к чужим данным
 * 
 * КАК РАБОТАЕТ:
 * 1. Пользователь вводит email и password
 * 2. Firebase проверяет данные и создает JWT токен
 * 3. Токен содержит: uid пользователя, email, время создания, срок действия
 * 4. При каждом запросе к Firebase Database токен передается как параметр `?auth={token}`
 * 5. Firebase расшифровывает токен, проверяет подпись и валидность
 * 6. Если токен валиден - запрос разрешен, если нет - запрос отклонен
 * 
 * ГДЕ ИСПОЛЬЗУЕТСЯ:
 * - В URL запросов: `?auth=${token}` (параметр авторизации)
 * - Пример полного запроса:
 *   https://todo17773-default-rtdb.europe-west1.firebasedatabase.app/
 *   aBc123XyZ456DeF789GhI012JkL345MnO678.json?auth=eyJhbGciOiJSUzI1NiI...
 * 
 * ВАЖНО:
 * - Токен НЕ содержит пароль пользователя
 * - Токен можно расшифровать, но изменить нельзя (есть криптографическая подпись)
 * - Если токен устарел - нужно получить новый через getIdToken()
 * - Токен уникален для каждого сеанса авторизации
 * 
 * ========== ВМЕСТЕ UID + TOKEN ==========
 * 
 * Пример использования в коде:
 * 
 * const { uid, token } = await getUserInfo();
 * // uid = "aBc123XyZ456DeF789GhI012JkL345MnO678"
 * // token = "eyJhbGciOiJSUzI1NiI..."
 * 
 * const url = `${host}/${uid}.json?auth=${token}`;
 * // Результат:
 * // https://todo17773-default-rtdb.europe-west1.firebasedatabase.app/
 * // aBc123XyZ456DeF789GhI012JkL345MnO678.json?auth=eyJhbGciOiJSUzI1NiI...
 * 
 * fetch(url, { method: "GET" })
 * 
 * Firebase проверяет:
 * 1. Токен валиден? (не истек, правильно подписан)
 * 2. В токене есть uid, который совпадает с путем в URL?
 * 3. Пользователь имеет права доступа к этим данным?
 * 
 * Если все проверки пройдены - возвращаются данные пользователя с указанным uid.
 */

export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    // onAuthStateChanged отслеживает изменения состояния авторизации пользователя
    // Вызывается автоматически когда:
    // 1. Пользователь входит в систему (signInWithEmailAndPassword)
    // 2. Пользователь выходит из системы (signOut)
    // 3. Страница загружается и уже есть авторизованный пользователь
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // user - объект Firebase User, содержит информацию о текущем пользователе:
        // user.uid - уникальный идентификатор пользователя (строка ~28 символов)
        // user.email - email пользователя
        // user.emailVerified - подтвержден ли email
        // и другие свойства

        try {
          // user.getIdToken() - асинхронная функция, которая:
          // 1. Получает текущий JWT токен (если он еще валиден)
          // 2. Или автоматически обновляет токен, если он истек
          // 3. Возвращает строку с JWT токеном для авторизации запросов
          // Токен содержит: uid, email, время создания, срок действия и криптографическую подпись
          const token = await user.getIdToken();

          // Возвращаем объект с:
          // uid - для создания пути к данным пользователя в Firebase Database
          // token - для авторизации запросов к Firebase Database
          // Пример: { uid: "aBc123XyZ456...", token: "eyJhbGciOiJSUzI1NiI..." }
          resolve({ uid: user.uid, token });
        } catch (error) {
          // Если не удалось получить токен (например, проблемы с сетью или Firebase)
          reject(new Error("Не удалось получить token"));
        }
      } else {
        // user === null означает, что пользователь НЕ авторизован
        // Возможно:
        // 1. Пользователь еще не вошел в систему
        // 2. Пользователь вышел из системы
        // 3. Сессия истекла
        reject(new Error("Пользователь не авторизован"));
      }
    });
  });
};
