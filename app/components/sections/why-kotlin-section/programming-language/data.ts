export interface TabData {
  title: string;
  code: string;
}

export const tabs: TabData[] = [
  {
    title: "Concise",
    code: `data class Employee(
   val name: String,
   val email: String,
   val company: String
) // + automatically generated equals(), hashCode(), toString(), and copy()

object MyCompany {                                // A singleton
   const val name: String = "MyCompany"
}

fun main() {                                      // Function at the top level
   val employee = Employee("Alice",               // No \`new\` keyword
      "alice@mycompany.com", MyCompany.name)
   println(employee)
}`,
  },
  {
    title: "Safe",
    code: `fun reply(condition: Boolean): String? =          // Nullability is part of Kotlin's type system
   if (condition) "I'm fine" else null

fun error(): Nothing =                            // Always throw an exception
   throw IllegalStateException("Shouldn't be here")

fun main() {
   val condition = true
   val message = reply(condition)
   println(message?.replace("fine", "okay"))
   if (message != null) {
      println(message.uppercase())
   }

   val nonNull: String =
   reply(condition = true) ?: error()
   println(nonNull)
}`,
  },
  {
    title: "Expressive",
    code: `fun main() {
   val map = mapOf(1 to "one", 2 to "two")
   for ((k, v) in map) {
       println("$k -> $v")
   }

   fun obtainKnowledge() = Pair("The Answer", 42)

   val (description, answer) = obtainKnowledge()
   println("$description: $answer")

   getText()?.let {
      sendEmailTo("alice@example.com", it)
   }

   createEmptyWindow()
      .apply {
         width = 300
         height = 200
         isVisible = true
      }.also { w ->
         showWindow(w)
      }

   val fixedIssue = issueById["13456"]
       ?.takeIf { it.status == Status.FIXED }
   println(fixedIssue)
}`,
  },
  {
    title: "Interoperable",
    code: `@SpringBootApplication
class DemoApplication

fun main(args: Array<String>) {
   runApplication<DemoApplication>(*args)
}

@RestController
class MessageResource {
   @GetMapping
   fun index(): List<Message> = listOf(
      Message("1", "Hello!"),
      Message("2", "Bonjour!"),
      Message("3", "Privet!"),
   )
}

data class Message(val id: String?, val text: String)`,
  },
  {
    title: "Multiplatform",
    code: `expect fun randomUUID(): String

expect class PlatformSocket(
       url: String
) {
    fun openSocket(listener: PlatformSocketListener)
    fun closeSocket(code: Int, reason: String)
    fun sendMessage(msg: String)
}

interface PlatformSocketListener {
    fun onOpen()
    fun onFailure(t: Throwable)
    fun onMessage(msg: String)
    fun onClosing(code: Int, reason: String)
}`,
  },
];
