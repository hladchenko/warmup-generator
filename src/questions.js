export const juniorQuestions = [
  'Які знаєте шаблони проєктування? Розкажіть про два шаблони, які використовували в роботі.',
  'Які є типи даних в Java?',
  'Чим відрізняється об’єкт від примітивних типів даних?',
  'У чому різниця передачі параметрів за посиланням і за значенням?',
  'Що таке JVM, JDK, JRE?',
  'Навіщо використовують JVM?',
  'Що таке bytecode?',
  'Які ознаки JavaBean?',
  'Що таке OutOfMemoryError?',
  'Що таке стектрейс? Як його отримати?',
  'Назвіть всі методи класу object.',
  'У чому відмінність між try-with-resources i try-catch-finally при роботі з ресурсами?',
  'Що таке конструктори? Які типи знаєте?',
  'Що таке побітові операції?',
  'Об’єкти яких стандартних класів immutable в Java?',
  'Дайте коротку характеристику immutable object. Навіщо вони потрібні?',
  'Як створити immutable object?',
  'Які переваги immutable object перед звичайними об’єктами?',
  'Що таке ООП? Назвіть принципи з прикладами.',
  'У чому переваги ООП перед процедурним програмуванням?',
  'У чому полягає головна особливість ООП?',
  'Розкажіть, які переваги ми отримуємо із застосуванням ООП?',
  'Розкажіть, які недоліки в ООП?',
  'Розкажіть про принцип успадкування в ООП? Навіщо він потрібний?',
  'Дайте визначення принципу поліморфізм в ООП? Як працює поліморфізм?',
  'Що таке статичний і динамічний поліморфізм?',
  'Дайте визначення принципу абстракції в ООП.',
  'Які елементи мови відповідають за інкапсуляцію?',
  'Які елементи мови відповідають за наслідування?',
  'Які елементи мови відповідають за поліморфізм?',
  'Що таке SOLID? Наведіть приклади.',
  'Що таке перевантаження (overloading) методу?',
  'Що таке перевизначення (override) методу?',
  'Що таке клас, об’єкт, інтерфейс?',
  'Що таке клас POJO? Наведіть приклад такого класу.',
  'Які елементи може містити клас?',
  'Дайте визначення об’єкта?',
  'Розкажіть про наслідування в Java. Які особливості використання ключового слова super?',
  'Що таке сигнатура методу? Наведіть приклади правильних і неправильних сигнатур.',
  'Чи можна в конструкторі застосовувати return?',
  'Чи можна в конструкторі виконати виняток (exception)?',
  'З яких елементів складається заголовок класу? Напишіть приклад.',
  'З яких елементів складається заголовок методу? Напишіть приклад.',
  'Створіть в об’єкті-спадкоємці конструктор за замовчуванням, якщо в базовому класі він не визначений (але визначений інший конструктор).',
  'Коли застосовується ключове слово this?',
  'Що таке ініціалізатор?',
  'Для успадкування класу public class Child extends Parent напишіть порядок ініціалізації об’єкта.',
  'Які знаєте відносини між класами (об’єктами)?',
  'Які асоціативні зв’язки між об’єктами ви знаєте?',
  'Що таке модифікатори доступу в Java? Назвіть їх. Навіщо використовуються?',
  'Назвіть основну особливість статичних змінних і методів.',
  'Які основні обмеження діють на статичні змінні й методи?',
  'Що означає ключове слово static? Чи може статичний метод бути перевизначеним або перевантаженим?',
  'Чи може бути метод статичним і абстрактним одночасно?',
  'Чи можна використовувати статичні методи всередині звичайних? Навпаки? Чому?',
  'Що означає ключове слово final?',
  'Що таке abstract? Абстрактний клас? Абстрактний метод?',
  'Що таке interface? Чи може бути final interface?',
  'У чому різниця між абстрактним класом та інтерфейсом в Java?',
  'Де можна ініціалізувати статичні поля?',
  'Що таке анонімні класи?',
  'Що таке примітивні класи?',
  'Що таке клас «обгортка» (wrapper)?',
  'Що таке Nested class? Коли використовується?',
  'Які модифікатори доступу можуть бути у класу?',
  'Що таке Hibernate? У чому різниця між JPA i Hibernate?',
  'Що таке каскадність? Як вона використовується в Hibernate?',
  'Чи може entity-клас бути абстрактним класом?',
  'Що таке entity manager? За що відповідає?',
  'Що таке клас Assert? Навіщо і як його використовувати?',
  'Дайте характеристику String у Java.',
  'Які є способи створення об’єкта String? Де він створюється?',
  'Як порівняти дві стрічки в Java і/або відсортувати їх?',
  'Запропонуйте алгоритм перетворення стрічки на символ. Напишіть відповідний код.',
  'Як перетворити стрічку в масив байтів і назад? Напишіть відповідний код.',
  'Що таке стрічковий пул і навіщо він потрібен?',
  'Які GOF-шаблони застосовуються в стрічковому пулі?',
  'Як розділити стрічку на частини? Напишіть відповідний код.',
  'Чому масив символів кращий від стрічки для зберігання пароля?',
  'Яка різниця між String, StringBuffer та StringBuilder?',
  'Дайте коротку характеристику Enum у Java.',
  'Чи може Enum реалізовувати (implement) інтерфейс?',
  'Чи може Enum розширити (extends) клас?',
  'Чи можна створити Enum без екземплярів об’єктів?',
  'Чи можемо ми перевизначити метод toString () для Enum?',
  'Що буде, якщо не будемо перевизначати метод toString () для Enum?',
  'Чи можемо ми вказати конструктор всередині Enum?',
  'У чому різниця між == і equals ()?',
  'Що робить метод ordinal () в Enum?',
  'Чи можна використовувати Enum з TreeSet або TreeMap в Java?',
  'Як пов’язані методи ordinal () і compareTo () в Enum?',
  'Напишіть приклад Enum.',
  'Чи можна використовувати Enum у switch case?',
  'Як отримати всі наявні значення в екземплярі Enum?',
  'Що таке Stream у Java?',
  'Назвіть основні властивості транзакцій.',
  'Які є рівні ізоляції транзакцій?',
  'Яка різниця між Statement i PreparedStatement?',
  'Розкажіть про ітератори та їх застосування.',
  'Яка ієрархія колекцій у Java Collection Framework?',
  'Яка внутрішня будова ArrayList?',
  'Яка внутрішня будова LinkedList?',
  'Яка внутрішня будова HashMap?',
  'Чим відрізняється ArrayList від LinkedList?',
  'Чим відрізняється ArrayList від HashSet?',
  'Навіщо в Java таке різноманіття імплементації динамічного масиву?',
  'Навіщо в Java таке різноманіття імплементації key-value storage?',
  'Як відсортувати колекцію елементів?',
  'Дайте коротку характеристику class object у Java.',
  'Для чого використовують Equals and HashCode в Java?',
  'Розкажіть про контракт між Equals and HashCode в Java?',
  'Які умови висуваються щодо перевизначення угоди при перевизначенні Equals?',
  'Що буде, якщо не перевизначити Equals and HashCode?',
  'Які значення ми отримаємо, якщо у нас не перерозподілені Equals and HashCode?',
  'Чому симетричність виконується, тільки якщо x.equals (y) повертає значення true?',
  'Що таке колізія в HashCode? Як з нею боротися?',
  'Що буде, якщо елемент, який бере участь в контракті із HashCode, змінює своє значення?',
  'Напишіть методи Equals and HashCode для класу Student, який складається з полів String name та int age.',
  'У чому різниця застосування if (obj instanceof Student) та if (getClass () == obj.getClass ())?',
  'Дайте коротку характеристику методу clone ().',
  'У чому полягає особливість роботи методу clone () з полями об’єкта типу-посилання?',
  'Дайте визначення поняттю exception (виняткова ситуація).',
  'Які знаєте особливості використання оператору try...catch?',
  'У чому різниця між error і exception?',
  'Яка різниця між checked і unchecked, exception, throw, throws.',
  'Якою є ієрархія винятків?',
  'Що таке checked і unchecked exception?',
  'Чи потрібно перевіряти checked exception?',
  'Про що говорить і як використовувати ключове слово throws?',
  'Які можливі способи обробки винятків ви знаєте?',
  'Напишіть приклад перехоплення та обробки винятку в блоці try-catch методу.',
  'Напишіть приклад перехоплення та обробки винятку в секції throws-методу і передачі викликаючому методу.',
  'Напишіть приклад перехоплення та обробки винятку з використанням власних винятків.',
  'Які є правила для перевіряння винятків під час наслідування?',
  'Чи могли б ви написати код, якщо блок finally не буде виконано?',
  'Напишіть приклад обробки декількох винятків в одному блоці catch',
  'Який оператор дозволяє примусово викинути виняток? Напишіть приклад.',
  'Чи може метод main викинути throws-виняток? Якщо так — куди передасть?',
  'Напишіть приклад try with resources.',
  'Які засоби для роботи з багатопотоковістю знаєте?',
  'Що таке процес і потік? Чим відрізняється процес від потоку?',
  'Розкажіть про синхронізацію між потоками. Для чого використовують методи wait(), notify() - notifyAll(), join()?',
  'Як зупинити потік?',
  'Як між потоками обмінюватися даними?',
  'У чому полягає відмінність класу Thread від інтерфейсу Runnable?',
  'Є потоки Т1, Т2 і Т3. Як реалізувати їхнє послідовне виконання?',
];

export const middleQuestions = [
  'У чому переваги та недоліки ООП, якщо порівнювати з процедурним/функціональним програмуванням?',
  'Чим відрізняється агрегація від композиції?',
  'Які патерни GoF ви використовували на практиці? Наведіть приклади.',
  'Що таке проксі-об’єкт? Наведіть приклади.',
  'Які нововведення анонсовано в Java 8?',
  'Що таке High Cohesion і Low Coupling? Наведіть приклади.',
  'Яким чином можна реалізувати множинне наслідування в Java?',
  'Яка різниця між методами final, finally та finalize()?',
  'У чому різниця між статичним і динамічним зв’язуванням у Java?',
  'Чи можна використовувати private або protected змінні в interface?',
  'Що таке Classloader і для чого використовується?',
  'Що таке Run-Time Data Areas?',
  'Що таке immutable object?',
  'В чому особливість класу String?',
  'Що таке коваріантність типів?',
  'Які є методи у класі Object?',
  'Наведіть приклади вдалого та невдалого використання Optional.',
  'Чи можна оголошувати main method як final?',
  'Чи можна імпортувати ті самі package/class двічі? Які наслідки?',
  'Що таке Casting? Коли можемо отримати виняток ClassCastException?',
  'Чому сучасні фреймворки використовують здебільшого лише unchecked exceptions?',
  'Що таке static import?',
  'Який зв’язок між методами hashCode() і equals()?',
  'Коли використовують BufferedInputStream та BufferedOutputStream класи?',
  'Яка різниця між класами java.util.Collection і java.util.Collections?',
  'Яка різниця між Enumeration і Iterator?',
  'У чому різниця між ітераторами fail-fast і fail-safe?',
  'Навіщо потрібен модифікатор transient?',
  'Як впливають на серіалізацію модифікатори static і final?',
  'Які особливості використання інтерфейсу Cloneable?',
  'Які особливості використання інтерфейсу AutoCloseable?',
  'Що таке FunctionInterface і чим він відрізняється від звичайного інтерфейсу?',
  'Що таке і навіщо потрібні Atomic types?',
  'Що таке Happens-before? Які особливості використання ключового слова volatile?',
  'Розкажіть про Heap і Stack пам’ять у Java. У чому різниця між ними? Де зберігаються примітиви?',
  'Чим відрізняється stack від heap пам’яті? Коли і яка область пам’яті резервується? Навіщо таке розділення потрібно?',
  'Які принцип роботи та області пам’яті Garbage Collector?',
  'Як працює Garbage Collector? Розкажіть про Reference counting і Tracing.',
  'Розкажіть про механізм роботи autoboxing у Java.',
  'Як реалізована серіалізація в Java? Де ми можемо її побачити?',
  'Розкажіть, у чому різниця між WeakReference та SoftReference?',
  'Що таке generics? Для чого вони потрібні? Яку проблему вирішують?',
  'Що таке PECS і як використовується? Наведіть приклади.',
  'Навіщо на практиці можуть знадобитися immutable об’єкти?',
  'Чим корисні інструменти Maven, Ant, Gradle?',
  'Що таке Unit Tests? Чим клас JUnit.Assert відрізняється від ключового слова assert?',
  'Що таке і навіщо потрібен Spring core? Розкрийте поняття Inversion of Control і Dependency Injection.',
  'Як «під капотом» працює @Transactional?',
  'Як «під капотом» працює Spring?',
  'Що таке і навіщо потрібен Hibernate? Розкрийте поняття ORM.',
  'Що таке і коли виникає LazyLoadingException?',
  'Як «під капотом» працює Hibernate? Як би ви написали власний Hibernate?',
  'Які переваги та недоліки використання багатопотоковості?',
  'Розкажіть про чотири способи роботи з багатьма потоками та чим відрізняється wait...notify...notifyAll від synchronized? Від Future?',
  'Що таке і навіщо потрібен ThreadLocal?',
  'У чому різниця між Thread.sleep() і Thread.yield()?',
  'Як працює Thread.join()?',
  'Що таке deadlock?',
  'Що таке race condition?',
  'Для чого використовувати volatile, synchronized, transient, native?',
  'Розкажіть про пріоритети потоків.',
  'Що таке і для чого встановлювати потоки-демони?',
  'Чому не бажано використовувати Thread.stop()?',
  'Як реалізувати пул потоків?',
  'Чим відрізняється List від Set?',
  'У чому різниця між HashSet, LinkedHashSet та TreeSet?',
  'Яка внутрішня структура HashMap?',
  'Який час пошуку елемента в ArrayList, HashSet?',
  'Як реалізувати свій Stack?',
  'Як працює метод put в HashMap? Чому нам потрібно вираховувати позицію бакету? У чому переваги такої операції?',
  'У чому різниця між HashMap and TreeMap? Коли та де їх потрібно використовувати?',
  'Яка внутрішня будова TreeMap? Розказати про RBT.',
  'Які є методи в інтерфейсі Stream?',
  'Чим відрізняється метод map від flatMap?',
  'Який функціональний інтерфейс використовує метод filter?',
  'У чому різниця між реляційними та нереляційними базами даних?',
  'Як зберігаються співвідношення one-to-one, one-to-many та many-to-many у вигляді таблиць?',
  'Що таке нормалізація БД? Наведіть приклади з реального проєкту.',
  'Які є види індексів у БД?',
  'Valid parentheses (задача з LeetCode).',
  'Reverse Linked List (задача з LeetCode).',
  'Дано String s, знайти довжину максимального substring без повтору символів.',
  'Визначити, чи є однозв’язний LinkedList паліндромом.',
];

export const seniorQuestions = [
  'Коли краще використовувати наслідування, а не агрегацію?',
  'Розкажіть про принципи роботи Kubernetes.',
  'У чому різниця між Java NIO та Java IO?',
  'Чим відрізняється Lambda від анонімного класу?',
  'Розкажіть про Java Memory Model.',
  'Які є типи пам’яті у JVM?',
  'Опишіть життєвий цикл Java-об’єкта. Яким чином об’єкт переходить з однієї області пам’яті Garbage Collector до іншої? Що є тригером такого переходу?',
  'Яким чином можна змусити JVM запустити Garbage Collector?',
  'Які існують Garbage Collectors у JVM і навіщо їх стільки?',
  'Які різновиди Garbage Collector є в HotSpot? Як працюють?',
  'Що буде з Garbage Collector, якщо finalize() буде довго виконуватись або в процесі виконання отримаємо виняток?',
  'Чим ForkJoinPool відрізняється від ScheduledThreadPoolExecutor та ThreadPoolExcutor?',
  'Яка різниця між HashMap, WeakHashMap, Hashtable, IdentityHashMap?',
  'Що таке LinkedHashMap?',
  'Що таке EnumSet? Для чого використовувати? Як реалізувати?',
  'Розкажіть про особливості серіалізації у Java. Навіщо serialVersionUID та InvalidClassException?',
  'У чому проблема серіалізації Singleton?',
  'Які бувають алгоритми обходу дерев і чому вони різні?',
  'Що таке deadlock? Які типи існують? Намалюйте схематично, як може статися.',
  'Що таке ACID?',
  'Що означає CAP-теорема?',
  'Які є рівні ізоляції транзакцій?',
  'Чи є сенс відмовлятися від використання ORM?',
  'Що таке n+1 проблема?',
  'Що таке cartesian product проблема?',
  'Яким чином побудувати monitoring в Java? Розкажіть про особливості використання Java micrometrics або DropWizard, або Prometheus frameworks.',
  'Опишіть механізм роботи ORM.',
  'Які способи вибірки даних у Hibernate ви знаєте?',
  'Які ізоляції транзакцій існують в Hibernate?',
  'Що таке IoC та DI?',
  'Який життєвий цикл об’єктів, які створює Spring?',
  'Які є види контекстів?',
  'Як створити та підняти контекст з метою тестування застосунку?',
  'Які можливості Spring надає для комунікації з базою даних?',
  'Які ознаки того, що клас — Java Bean? Чим POJO відрізняється від Java Bean?',
  'Опишіть механізм ін’єкції залежності в Spring.',
  'Чому всі залежності Spring є Java Beans? Чи можливо використовувати Spring для керування залежностями між не Java Beans класами?',
  'Чим Spring singleton відрізняється від prototype?',
  'Чи є сенс відмовлятися від використання Dependency Injection?',
  'Що таке race-condition?',
  'Які елементи є в java.util.concurrent пакеті?',
  'Що таке optimistic та pessimistic locking?',
  'Які особливості багатопотоковості в Java EE та Spring?',
  'Які основні засади Stream API?',
];