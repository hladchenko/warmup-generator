export const questions = [
  {
    title: '👉 Implement a findMin method',
    description: 'Implement a new method that accepts a list of ints and returns a min value (don\'t use any libraries)',
  },
  {
    title: '👉 Sort an array',
    description: 'Implement a method that accepts an array of numbers (int) and sorts that array',
    hints: [
      'You can choose any algorithm you want',
      'Please don\'t use any libraries',
    ],
    star: 'Implement a similar method using another language and/or another algorithm',
  },
  {
    title: '👉 Implement the Insertion Sort',
    description: 'Implement the Insertion Sort algorithm from scratch',
    star: 'Implement the Merge Sort algorithm for a list (not an array) of integers',
  },
  {
    title: '👉 Implement a Linked List',
    description: 'Create a simple version of Linked List implementing the following static methods:',
    hints: [
      'createLinkedList – accepts varargs of elements, creates a linked list based on them and returns the head node',
      'addToLinkedList – accepts the head of the list, an index, and a new element and adds a new node of the given element by the given index',
      'printLinkedList – accepts the head node and prints list in the following format 1 -> 2 -> 3 -> 4 -> 5',
    ],
  },
  {
    title: '👉 Implement the Merge Sort',
    description: 'Implement the Merge Sort algorithm for a generic list of comparable elements',
    star: '👉 Implement the Merge Sort using another language',
  },
  {
    title: '👉 Implement a simple Binary Search Tree',
    description: 'Create a simple version of a Binary Search Tree implementing the following static methods:',
    hints: [
      'createBinarySearchTree – accepts varargs of elements, creates a binary search tree based on them and returns the root node',
      'inOrderTraversal – accepts the root node, and an element consumer. Process each node in ascending order using the given consumer',
    ],
    star: 'Refactor your inOrderTraversal method. If you\'ve used recursion, then make it iterative. Otherwise make it recursive',
  },
  {
    title: '👉 Say hello from the other thread [10 min]',
    description: 'Create a code snippet for each option executing the following statement in the other thread:',
    hints: [
      'System.out.println("Hello from " + Thread.currentThread().getName());',
    ],
  },
  {
    title: '👉 Build a Heterogeneous container',
    description: 'Do the Heterogeneous Max Holder exercise',
    link: 'https://github.com/bobocode-projects/java-fundamentals-exercises/tree/main/1-0-java-basics/1-3-2-heterogeneous-max-holder',
  },
  {
    title: '👉 Implement a Parallel Merge Sort',
    description: 'Implement a parallel Merge Sort  for a generic list of comparable elements using the Fork/Join framework',
    hints: [
      'Please note that it should sort a given list (not create a new sorted list)',
    ],
  },
  {
    title: '👉  Build the Astronomy Picture of the Day endpoint',
    description: 'Build an HTTP GET endpoint that shows the Picture of the Day',
    hints: [
      'Find the picture data using this endpoint:  https://api.nasa.gov/planetary/apod (make sure you specify your api_key)',
      'Load the picture file',
      'Respond with the actual file so the browser displays the image when opening  your endpoint',
    ],
  },
  {
    title: '👉  Implement a custom method comparing',
    description: 'Checkout the following code snippet',
    hints: [
      ' var theRichestPerson = Accounts.generateAccountList(10)\n'
      + '.stream()\n'
      + '.max(comparing(Account::getBalance))\n'
      + '.orElseThrow();',
      'Implement a custom method comparing',
      'Make sure it works'
    ],
    star: 'Implement an additional custom method thenComparing',
  },
  {
    title: '👉 Implement a simple Linked List in JS',
    description: 'Create a simple version of Linked List implementing the following methods:',
    hints: [
      'createLinkedList – accepts an array of elements, creates a linked list based on them and returns the head node',
      'printLinkedList – accepts the head node and prints list in the following format 1 -> 2 -> 3 -> 4 -> 5',
    ],
    star: 'Implement an additional method for the Linked List: reverseLinkedList – accepts the head node, reversers all next references and returns a new head (old tail) node',
  },
  {
    title: '👉 Build a Reflection-based comparator',
    description: 'Do the Random field comparator exercise',
    link: 'https://github.com/bobocode-projects/java-fundamentals-exercises/tree/main/3-0-java-core/3-6-4-random-field-comparator',
  },
  {
    title: '👉 Build a simple version of a HashMap',
    description: 'Create a custom HashMap with the following API:',
    hints: [
        'put(key, value) – accepts a key, and a value, stores the value by the given key and returns the old value (or null if there is no old value)',
        'get(key) – accepts a key, returns the corresponding value by the given key (or null if such key does not exist)',
    ],
    star: 'Optimize your HashMap: Implement the table resize logic that automatically doubles the table size when number of elements equals the table capacity',
  },
  {
    title: '👉 Implement your sorting algorithms',
    description: 'Implement all sorting algorithms you can recall',
    hints: [
        'create simple methods accepting an int array for each algorithms',
        'add javadoc specifying algorithm features, like time complexity and other details',
    ],
  },
  {
    title: '👉 Build a URL Shortener REST API',
    description: 'Build a REST API for URL Shortener 🌐',
    hints: [
        'if you don\'t know what a URL Shortener is, please take a look at this example: https://www.shorturl.at/',
        'the API  should at least shorten URLs and handle shortened URLs',
        'additional features like URL stats is not mandatory',
    ],
  },
];