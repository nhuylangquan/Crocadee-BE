import { Difficulty } from './rearrange.schema';

interface SeedRearrangeQuestion {
  q: string;
  difficulty: Difficulty;
}

export const seedRearrangeQuestions: SeedRearrangeQuestion[] = [
  // ===== EASY (25 questions) =====
  ...([
    {
      q: `Rearrange to get the output 15:
fun main() {
    val a = 5
    val b = 3
    val c = a * b
    println(c)
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output "HelloWorld":
fun main() {
    val s1 = "Hello"
    val s2 = "World"
    val result = s1 + s2
    println(result)
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output true:
fun main() {
    val x = 10
    val y = 5
    println(x > y)
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 3:
fun main() {
    val numbers = listOf(1, 2, 3)
    println(numbers.size)
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 25:
fun main() {
    val x = 5
    val y = x * x
    println(y)
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output "kotlin":
fun main() {
    val text = "KOTLIN"
    println(text.lowercase())
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 6:
fun main() {
    val list = listOf(1, 2, 3)
    val sum = list.sum()
    println(sum)
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output "abcabc":
fun main() {
    val s = "abc"
    println(s.repeat(2))
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 9:
fun main() {
    val a = 3
    val b = a.toDouble()
    val c = b * b
    println(c.toInt())
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output false:
fun main() {
    val flag = true
    println(!flag)
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 1:
fun main() {
    val nums = listOf(10, 20, 30)
    println(nums.indexOf(20))
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 7:
fun main() {
    val text = "Kotlin"
    println(text.length)
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output "e":
fun main() {
    val word = "hello"
    println(word[1])
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 0:
fun main() {
    val a = 10
    val b = 5
    println(a % b)
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 2.5:
fun main() {
    val a = 5
    val b = 2
    println(a.toDouble() / b)
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 0:
fun main() {
    val x = -5
    println(x.sign)
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 30:
fun main() {
    val a = 10
    val b = 20
    val c = a + b
    println(c)
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output "olleh":
fun main() {
    val word = "hello"
    println(word.reversed())
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output "K":
fun main() {
    val lang = "Kotlin"
    println(lang.first())
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 4:
fun main() {
    val numbers = listOf(1, 2, 3, 4)
    println(numbers.count())
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 5:
fun main() {
    val a = 2
    val b = 3
    println(a + b)
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 1:
fun main() {
    val numbers = setOf(1, 2, 2, 3)
    println(numbers.first())
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output "ABC":
fun main() {
    val text = "abc"
    println(text.uppercase())
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 8:
fun main() {
    val a = 16
    val b = 2
    println(a / b)
}`,
      difficulty: 'easy',
    },
    {
      q: `Rearrange to get the output 2:
fun main() {
    val a = 7
    val b = 5
    println(a - b)
}`,
      difficulty: 'easy',
    },
  ] as SeedRearrangeQuestion[]),

  // ===== MEDIUM (25 questions) =====
  ...([
    {
      q: `Rearrange to get the output 15:
fun main() {
    var sum = 0
    for (i in 1..5) {
        sum += i
    }
    println(sum)
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 55:
fun main() {
    val numbers = listOf(10, 20, 25)
    println(numbers.sum())
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output "kotlin is fun":
fun main() {
    val parts = listOf("kotlin", "is", "fun")
    println(parts.joinToString(" "))
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 2:
fun main() {
    val numbers = listOf(1, 2, 3, 4, 5)
    val evens = numbers.filter { it % 2 == 0 }
    println(evens.size)
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 3:
fun main() {
    val numbers = listOf(1, 2, 3)
    val doubled = numbers.map { it * 2 }
    println(doubled[0])
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output "Kotlin":
fun main() {
    val sentence = "I love Kotlin"
    val words = sentence.split(" ")
    println(words.last())
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 120:
fun main() {
    var fact = 1
    for (i in 1..5) {
        fact *= i
    }
    println(fact)
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 3:
fun main() {
    val a = 10
    val b = 3
    println(a % b)
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 6:
fun main() {
    val numbers = listOf(3, 1, 4, 1, 5)
    val max = numbers.maxOrNull()
    println(max)
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 1:
fun main() {
    val numbers = listOf(3, 1, 4, 1, 5)
    val min = numbers.minOrNull()
    println(min)
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 10:
fun main() {
    val list = listOf(1, 2, 3, 4)
    println(list.reduce { acc, i -> acc + i })
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output "[1, 2, 3, 4, 5]":
fun main() {
    val range = 1..5
    println(range.toList())
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 4:
fun main() {
    val text = "hello"
    println(text.count { it == 'l' })
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output "a":
fun main() {
    val items = listOf("apple", "banana", "cherry")
    println(items.first()[0])
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 25:
fun main() {
    val numbers = listOf(1, 3, 5, 7, 9)
    println(numbers.size)
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 15:
fun main() {
    val a = 10
    val b = 5
    val max = if (a > b) a else b
    println(max + 5)
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output "b":
fun main() {
    val a = 1
    val b = 2
    val c = if (a < b) "yes" else "no"
    println(c[1])
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 2:
fun main() {
    var count = 0
    for (ch in "Kotlin") {
        if (ch == 't') count++
    }
    println(count)
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output "olleh":
fun main() {
    val s = "hello"
    var rev = ""
    for (ch in s) rev = ch + rev
    println(rev)
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 8:
fun main() {
    val numbers = listOf(1, 2, 3, 4)
    println(numbers.fold(0) { acc, i -> acc + i })
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output "Ktln":
fun main() {
    val word = "Kotlin"
    val result = word.filter { it !in "oi" }
    println(result)
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 3:
fun main() {
    val setA = setOf(1, 2, 3, 4)
    val setB = setOf(3, 4, 5, 6)
    println(setA.intersect(setB).size)
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 1:
fun main() {
    val numbers = listOf(1, 2, 2, 3, 3, 3)
    val unique = numbers.toSet()
    println(unique.first())
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 24:
fun main() {
    val numbers = (1..4).toList()
    println(numbers.reduce { a, b -> a * b })
}`,
      difficulty: 'medium',
    },
    {
      q: `Rearrange to get the output 100:
fun main() {
    var x = 1
    repeat(10) {
        x *= 2
    }
    println(x / 10)
}`,
      difficulty: 'medium',
    },
  ] as SeedRearrangeQuestion[]),

  // ===== HARD (25 questions) =====
  ...([
    {
      q: `Rearrange to get the output 6:
fun main() {
    fun factorial(n: Int): Int {
        return if (n <= 1) 1 else n * factorial(n - 1)
    }
    println(factorial(3))
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 20:
fun main() {
    val numbers = listOf(1, 2, 3, 4, 5)
    val sum = numbers.filter { it % 2 == 0 }.map { it * it }.sum()
    println(sum)
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 6:
fun main() {
    fun fibonacci(n: Int): Int {
        return if (n <= 2) 1 else fibonacci(n - 1) + fibonacci(n - 2)
    }
    println(fibonacci(5))
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output "[1, 2, 3, 2, 3, 4]":
fun main() {
    val numbers = listOf(1, 2, 3)
    val result = numbers.flatMap { listOf(it, it + 1) }
    println(result)
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 9:
fun main() {
    fun sum(x: Int, y: Int) = x + y
    fun apply(a: Int, b: Int, f: (Int, Int) -> Int) = f(a, b)
    println(apply(4, 5, ::sum))
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 2:
fun main() {
    val list = listOf(1, 1, 2, 2, 3, 3)
    val distinct = list.distinct()
    println(distinct[1])
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 5:
fun main() {
    val numbers = listOf(1, 2, 3, 4, 5, 6, 7)
    val result = numbers.takeWhile { it < 6 }.count()
    println(result)
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 8:
fun main() {
    val numbers = listOf(1, 2, 3, 4, 5)
    val result = numbers.dropLast(1).drop(1).sum()
    println(result)
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output "HELLO":
fun main() {
    val text = "hello"
    val transformed = text.uppercase().reversed()
    println(transformed)
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 0:
fun main() {
    val a = "123"
    val b = "abc"
    println(a.toIntOrNull() ?: 0 + b.toIntOrNull() ?: 0)
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 3:
fun main() {
    val numbers = listOf(1, 2, null, 4, null, 6)
    val result = numbers.filterNotNull().count()
    println(result)
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 55:
fun main() {
    val sum = (1..10).fold(0) { acc, i -> acc + i }
    println(sum)
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 4:
fun main() {
    val numbers = listOf(listOf(1, 2), listOf(3, 4))
    val flat = numbers.flatten()
    println(flat.last())
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output false:
fun main() {
    val text = "race"
    println(text == text.reversed())
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output "I love coding in Kotlin!":
fun main() {
    val parts = listOf("I", "love", "coding", "in", "Kotlin!")
    println(parts.joinToString(" "))
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 10:
fun main() {
    val numbers = (1..5).toList()
    println(numbers.map { it * 2 }.average().toInt())
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 6:
fun main() {
    val numbers = listOf(5, 3, 8, 1, 9, 2)
    val sorted = numbers.sorted()
    println(sorted[2])
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 3:
fun main() {
    data class Person(val name: String, val age: Int)
    val people = listOf(Person("A", 20), Person("B", 30), Person("C", 25))
    println(people.count { it.age > 22 })
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 9:
fun main() {
    fun mystery(n: Int): Int = if (n <= 0) 0 else n + mystery(n - 2)
    println(mystery(5))
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 3:
fun main() {
    val text = "a1b2c3d4"
    val digits = text.filter { it.isDigit() }
    println(digits.count())
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 8:
fun main() {
    val numbers = (1..10).toList()
    val evens = numbers.filter { it % 2 == 0 }
    println(evens.sum())
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output "one":
fun main() {
    val map = mapOf(1 to "one", 2 to "two", 3 to "three")
    val result = map[1]
    println(result)
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 5:
fun main() {
    val numbers = listOf(1, 2, 3, 4, 5)
    val result = numbers.slice(1..3)
    println(result.sum())
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output 10:
fun main() {
    fun Int.isEven() = this % 2 == 0
    val count = (1..10).count { it.isEven() }
    println(count)
}`,
      difficulty: 'hard',
    },
    {
      q: `Rearrange to get the output "[1, 3, 5, 7, 9]":
fun main() {
    val odds = (1..10).filter { it % 2 != 0 }
    println(odds)
}`,
      difficulty: 'hard',
    },
  ] as SeedRearrangeQuestion[]),

  // ===== NIGHTMARE (25 questions) =====
  ...([
    {
      q: `Rearrange to get the output 120:
fun main() {
    fun factorial(n: Int): Int {
        tailrec fun go(n: Int, acc: Int): Int {
            return if (n <= 1) acc else go(n - 1, acc * n)
        }
        return go(n, 1)
    }
    println(factorial(5))
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 42:
fun main() {
    val numbers = listOf(1, 2, 3, 4, 5, 6)
    val result = numbers.chunked(2).map { it.sum() }.sum()
    println(result)
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 0:
fun main() {
    val list = (1..10).toList()
    val shuffled = list.shuffled()
    val sorted = shuffled.sorted()
    println(sorted.indexOf(5) - 4)
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 3:
fun main() {
    data class Node(val value: Int, val left: Node? = null, val right: Node? = null)
    fun height(n: Node?): Int = if (n == null) 0 else 1 + maxOf(height(n.left), height(n.right))
    val leaf = Node(3)
    val tree = Node(1, Node(2, leaf), Node(4))
    println(height(tree))
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 6:
fun main() {
    fun <T> List<T>.second(): T = this[1]
    val list = listOf(10, 20, 30, 40, 50)
    val result = list.second() + list.last()
    println(result)
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 25:
fun main() {
    val numbers = (1..10).toList()
    val result = numbers.filter { it % 2 == 1 }.map { it * it }.sum()
    println(result)
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 60:
fun main() {
    val numbers = listOf(2, 3, 5, 7, 11)
    val result = numbers.mapIndexed { idx, value -> value * (idx + 1) }.sum()
    println(result)
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 4:
fun main() {
    fun sumDigits(n: Int): Int = if (n == 0) 0 else n % 10 + sumDigits(n / 10)
    println(sumDigits(2024))
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 0:
fun main() {
    val a = arrayOf(1, 2, 3)
    val b = arrayOf(1, 2, 3)
    println(a.contentEquals(b).compareTo(false))
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output "helloHELLO":
fun main() {
    val original = "Hello"
    val upper = original.uppercase()
    val lower = original.lowercase()
    val result = lower + upper
    println(result)
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 26:
fun main() {
    fun compose(f: (Int) -> Int, g: (Int) -> Int): (Int) -> Int = { x -> f(g(x)) }
    val add1 = { x: Int -> x + 1 }
    val times2 = { x: Int -> x * 2 }
    val h = compose(add1, times2)
    println(h(12))
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 12:
fun main() {
    val nested = listOf(
        listOf(1, 2, 3),
        listOf(4, 5, 6),
        listOf(7, 8, 9)
    )
    val sum = nested.flatMap { it.filter { it % 2 == 0 } }.sum()
    println(sum)
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 21:
fun main() {
    val list = (1..6).toList()
    val (first, second, rest) = Triple(list[0], list[1], list.drop(2))
    val result = first + second + rest.sum()
    println(result)
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 1:
fun main() {
    fun Int.isPrime(): Boolean {
        if (this < 2) return false
        return (2 until this).none { this % it == 0 }
    }
    println((1..10).count { it.isPrime() })
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 5:
fun main() {
    val numbers = listOf(1, 2, 3, 4, 5)
    val result = numbers.runningFold(0) { acc, i -> acc + i }
    println(result.last())
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 0:
fun main() {
    val x = 5
    val y = 3
    val z = (x xor y) and (x.inv())
    println(z)
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 3628800:
fun main() {
    fun factorial(n: Int, acc: Long = 1): Long {
        return if (n <= 1) acc else factorial(n - 1, acc * n)
    }
    println(factorial(10))
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 3:
fun main() {
    fun gcd(a: Int, b: Int): Int = if (b == 0) a else gcd(b, a % b)
    println(gcd(18, 27))
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 1:
fun main() {
    val numbers = listOf(2, 4, 6, 8, 10)
    val result = numbers.fold(0) { acc, i -> if (i % 3 == 0) acc + 1 else acc }
    println(result)
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output "kotlin":
fun main() {
    val text = "kotlin"
    val result = text.map { it.plus(1) }.joinToString("")
    println(result)
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 12:
fun main() {
    fun Int.reverse(): Int = this.toString().reversed().toInt()
    val x = 21
    println(x + x.reverse())
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 8:
fun main() {
    val numbers = listOf(1, 2, 3, 4, 5)
    val result = numbers.windowed(2).map { it.sum() }.maxOrNull()
    println(result)
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 15:
fun main() {
    fun sumOfSquares(n: Int): Int = if (n == 0) 0 else n * n + sumOfSquares(n - 1)
    println(sumOfSquares(3))
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 33:
fun main() {
    val numbers = listOf(5, 12, 8, 3, 10)
    val result = numbers.sortedDescending().take(3).sum()
    println(result)
}`,
      difficulty: 'nightmare',
    },
    {
      q: `Rearrange to get the output 3:
fun main() {
    fun countBits(n: Int): Int {
        var x = n
        var count = 0
        while (x > 0) {
            count += x and 1
            x = x shr 1
        }
        return count
    }
    println(countBits(7))
}`,
      difficulty: 'nightmare',
    },
  ] as SeedRearrangeQuestion[]),
];
