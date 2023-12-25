// 1. Фільтрація масиву
// Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.

// 2. Узагальнений стек
// Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.

// 3. Узагальнений словник
// Створіть узагальнений клас Dictionary, який являє собою словник (асоціативний масив) з методами set, get і has. Обмежте ключі тільки валідними типами для об'єкта

/*1.*/
type FilterCondition<TType> = (item: TType) => boolean;

function filterArray<TType>(
  array: TType[],
  condition: FilterCondition<TType>
): TType[] {
  return array.filter(condition);
}

/*2.*/
class Stack<TItem> {
  private items: TItem[] = [];

  constructor(...items: TItem[]) {
    this.items = [...items];
  }

  push(...items: TItem[]): void {
    this.items.push(...items);
  }

  pop(): TItem | undefined {
    return this.items.pop();
  }

  peek(): TItem | undefined {
    return this.items.length > 0
      ? this.items[this.items.length - 1]
      : undefined;
  }
}

/*3.*/
class Dictionary<TKey extends string | number, TValue> {
  private readonly data: Record<TKey, TValue>;

  constructor(initialData?: Record<TKey, TValue>) {
    this.data = initialData || ({} as Record<TKey, TValue>);
  }

  public set(key: TKey, value: TValue): void {
    this.data[key] = value;
  }

  public get(key: TKey): TValue | undefined {
    return this.data[key];
  }

  public has(key: TKey): boolean {
    return key in this.data;
  }
}
