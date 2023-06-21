void bubbleSort(List<int> list) {
  int length = list.length;

  for (int i = 0; i < length; i++) {
    for (int j = 0; j < length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        // Swap
        int temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
}
