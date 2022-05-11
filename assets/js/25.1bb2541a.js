(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{459:function(t,a,s){"use strict";s.r(a);var n=s(34),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ul",[s("li",[t._v("参考 "),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/DZkGRTan2qSzJoDAx7QJag",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员小灰 博客"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("参考 "),s("a",{attrs:{href:"https://www.cnblogs.com/null-qige/p/9481900.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客园 博客"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"_1-volatile-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-volatile-是什么"}},[t._v("#")]),t._v(" 1. volatile 是什么")]),t._v(" "),s("p",[s("strong",[t._v("volatile是Java虚拟机轻量级的同步机制.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("三大特性")]),t._v(" "),s("ul",[s("li",[t._v("可见性\n"),s("ul",[s("li",[t._v("保证变量在线程之间的可见性。可见性的保证是基于CPU的内存屏障指令，被JSR-133抽象为happens-before原则。")])])]),t._v(" "),s("li",[t._v("禁止指令重排序\n"),s("ul",[s("li",[t._v("阻止编译时和运行时的指令重排。编译时JVM编译器遵循内存屏障的约束，运行时依靠CPU屏障指令来阻止重排。")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("指令重排序")]),t._v(" "),s("p",[t._v("为了提高性能,"),s("code",[t._v("编译器")]),t._v("和"),s("code",[t._v("处理器")]),t._v("常常会对代码进行指令重排序.(代码顺序改变),"),s("br"),t._v("\n在不改变程序执行结果的前提下,尽可能的保证高效的执行.")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://md.yike.link/20200709212159_IMChTj_Screenshot.jpeg",alt:"指令重排序"}})]),t._v(" "),s("p",[t._v("重排序的好处: 可以提高处理器的处理速度\n重排序的坏处:  在并发执行时并不能保证重排序后代码的正常执行")])]),t._v(" "),s("h2",{attrs:{id:"_2-jmm-java线程内存模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-jmm-java线程内存模型"}},[t._v("#")]),t._v(" 2. JMM (Java线程内存模型)")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://md.yike.link/20200709210726_2Mp7Qc_Screenshot.jpeg",alt:"JMM"}}),t._v(" "),s("img",{attrs:{src:"http://md.yike.link/20200709210832_JkSuPl_Screenshot.jpeg",alt:"JMM"}})]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("共享变量存储在主内存(Main Memory)中，每个线程都有一个私有的本地内存（Local Memory），"),s("br"),t._v("\n本地内存保存了被该线程使用到的主内存的副本拷贝，线程对变量的所有操作都必须在工作内存中进行，而不能直接读写主内存中的变量。")])]),t._v(" "),s("p",[s("strong",[t._v("这里需要解释几个概念：")])]),t._v(" "),s("p",[t._v("1.主内存（Main Memory）\n主内存可以简单理解为计算机当中的内存，但又不完全等同。主内存被所有的线程所共享，对于一个共享变量（比如静态变量，或是堆内存中的实例）来说，主内存当中存储了它的“本尊”。")]),t._v(" "),s("p",[t._v("2.工作内存（Working Memory）\n工作内存可以简单理解为计算机当中的CPU高速缓存，但又不完全等同。每一个线程拥有自己的工作内存，对于一个共享变量来说，工作内存当中存储了它的“副本”。")]),t._v(" "),s("p",[t._v("线程对共享变量的所有操作都必须在工作内存进行，不能直接读写主内存中的变量。不同线程之间也无法访问彼此的工作内存，变量值的传递只能通过主内存来进行。")]),t._v(" "),s("h3",{attrs:{id:"_2-1-内存屏障"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-内存屏障"}},[t._v("#")]),t._v(" 2.1. 内存屏障")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("内存交互操作")]),t._v(" "),s("p",[t._v("内存交互操作有8种，虚拟机实现必须保证每一个操作都是原子的，不可在分的（对于double和long类型的变量来说，load、store、read和write操作在某些平台上允许例外）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("操作")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("适用内存")]),t._v(" "),s("th",[t._v("解释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("lock（锁定）")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("主内存")]),t._v(" "),s("td",[t._v("把一个变量标识为线程独占状态")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("unlock（解锁）")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("主内存")]),t._v(" "),s("td",[t._v("它把一个处于锁定状态的变量释放出来，释放后的变量才可以被其他线程锁定")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("read（读取）")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("主内存")]),t._v(" "),s("td",[t._v("它把一个变量的值从主内存传输到线程的工作内存中，以便随后的load动作使用")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("load（载入）")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("工作内存")]),t._v(" "),s("td",[t._v("它把read操作从主存中变量放入工作内存中")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("use（使用）")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("工作内存")]),t._v(" "),s("td",[t._v("它把read操作从主存中变量放入工作内存中")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("assign（赋值）")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("工作内存")]),t._v(" "),s("td",[t._v("它把一个从执行引擎中接受到的值放入工作内存的变量副本中")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("store（存储）")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("主内存")]),t._v(" "),s("td",[t._v("它把一个从工作内存中一个变量的值传送到主内存中，以便后续的write使用")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("write（写入）")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("主内存")]),t._v(" "),s("td",[t._v("它把store操作从工作内存中得到的变量的值放入主内存的变量中")])])])]),t._v(" "),s("p",[s("strong",[t._v("JMM对这八种指令的使用，制定了如下规则：")])]),t._v(" "),s("ul",[s("li",[t._v("不允许read和load、store和write操作之一单独出现。即使用了read必须load，使用了store必须write")]),t._v(" "),s("li",[t._v("不允许线程丢弃他最近的assign操作，即工作变量的数据改变了之后，必须告知主存")]),t._v(" "),s("li",[t._v("不允许一个线程将没有assign的数据从工作内存同步回主内存")]),t._v(" "),s("li",[t._v("一个新的变量必须在主内存中诞生，不允许工作内存直接使用一个未被初始化的变量。就是怼变量实施use、store操作之前，必须经过assign和load操作")]),t._v(" "),s("li",[t._v("一个变量同一时间只有一个线程能对其进行lock。多次lock后，必须执行相同次数的unlock才能解锁")]),t._v(" "),s("li",[t._v("如果对一个变量进行lock操作，会清空所有工作内存中此变量的值，在执行引擎使用这个变量前，必须重新load或assign操作初始化变量的值")]),t._v(" "),s("li",[t._v("如果一个变量没有被lock，就不能对其进行unlock操作。也不能unlock一个被其他线程锁住的变量")]),t._v(" "),s("li",[t._v("对一个变量进行unlock操作之前，必须把此变量同步回主内存")])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("内存屏障共分为四种类型")]),t._v(" "),s("p",[s("strong",[t._v("LoadLoad屏障：")]),t._v("\n抽象场景：Load1; LoadLoad; Load2\nLoad1 和 Load2 代表两条读取指令。在Load2要读取的数据被访问前，保证Load1要读取的数据被读取完毕。")]),t._v(" "),s("p",[s("strong",[t._v("StoreStore屏障：")]),t._v("\n抽象场景：Store1; StoreStore; Store2\nStore1 和 Store2代表两条写入指令。在Store2写入执行前，保证Store1的写入操作对其它处理器可见")]),t._v(" "),s("p",[s("strong",[t._v("LoadStore屏障：")]),t._v("\n抽象场景：Load1; LoadStore; Store2\n在Store2被写入前，保证Load1要读取的数据被读取完毕。")]),t._v(" "),s("p",[s("strong",[t._v("StoreLoad屏障：")]),t._v("\n抽象场景：Store1; StoreLoad; Load2\n在Load2读取操作执行前，保证Store1的写入对所有处理器可见。StoreLoad屏障的开销是四种屏障中最大的。")])]),t._v(" "),s("h2",{attrs:{id:"_3-happens-before-先行发生规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-happens-before-先行发生规则"}},[t._v("#")]),t._v(" 3. happens-before (先行发生规则)")]),t._v(" "),s("blockquote",[s("p",[t._v("JDK5引入Happens-before规则, 一个线程的操作如果要被其他线程可见,那么一定要存在Hanppens-before关系;\nhappens-before 原则主要是为解决线程直接的可见性")])]),t._v(" "),s("p",[s("strong",[t._v("简单理解: 前一个操作的结果需要对后续的操作可见;")])]),t._v(" "),s("h3",{attrs:{id:"_3-1-happens-before规则🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-happens-before规则🔥"}},[t._v("#")]),t._v(" 3.1. happens-before规则🔥")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("程序次序规则（Program Order Rule）")]),t._v("：在一个线程内，程序的执行规则跟程序的书写规则是一致的，从上往下执行。")]),t._v(" "),s("li",[s("strong",[t._v("管程锁定规则（Monitor Lock Rule）")]),t._v("：一个Unlock的操作肯定先于下一次Lock的操作。这里必须是同一个锁。同理我们可以认为在synchronized同步同一个锁的时候，锁内先行执行的代码，对后续同步该锁的线程来说是完全可见的。\nvolatile变量规则（volatile Variable Rule）：对同一个volatile的变量，先行发生的写操作，肯定早于后续发生的读操作")]),t._v(" "),s("li",[s("strong",[t._v("线程启动规则（Thread Start Rule）")]),t._v("：Thread对象的start()方法先行发生于此线程的没一个动作")]),t._v(" "),s("li",[s("strong",[t._v("线程中止规则（Thread Termination Rule）")]),t._v("：Thread对象的中止检测（如：Thread.join()，Thread.isAlive()等）操作，必行晚于线程中所有操作")]),t._v(" "),s("li",[s("strong",[t._v("线程中断规则（Thread Interruption Rule）")]),t._v("：对线程的interruption（）调用，先于被调用的线程检测中断事件(Thread.interrupted())的发生")]),t._v(" "),s("li",[s("strong",[t._v("对象中止规则（Finalizer Rule）")]),t._v("：一个对象的初始化方法先于一个方法执行Finalizer()方法\n传递性（Transitivity）：如果操作A先于操作B、操作B先于操作C,则操作A先于操作C")])])]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("程序顺序规则(单线程)")])]),t._v(" "),s("ul",[s("li",[t._v("同一个线程中所有的写操作对后续操作可见")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("锁规则(Sync,Lock)")])]),t._v(" "),s("ul",[s("li",[t._v("如果线程A解锁了Monitor,那么后续获取锁的线程必须要对之前的操作可见")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("volatile变量规则")])]),t._v(" "),s("ul",[s("li",[t._v("一个变量如果被volatile所修饰,这个变量的所有写操作都需要对其他线程可见(多线程)")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("传递性")])]),t._v(" "),s("ul",[s("li",[t._v("如果A happens-before B, B happens-before C, 那么可以认为 A happens-before C")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("start() 规则")])]),t._v(" "),s("ul",[s("li",[t._v("如果A线程启动了线程B,那么A线程的对共享变量的修改,对应启动的线程B可见..(B启动后A的修改B不一定可见)")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"6"}},[s("li",[t._v("join() 规则")])]),t._v(" "),s("ul",[s("li",[t._v("线程A写入的所有变量.在任意其他线程B调用"),s("code",[t._v("A.join()")]),t._v(" 或"),s("code",[t._v("A.isAlive()")]),t._v("时,都对B可见")])])])]),t._v(" "),s("h2",{attrs:{id:"_4-volatile做了什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-volatile做了什么"}},[t._v("#")]),t._v(" 4. volatile做了什么?")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("在一个变量被volatile修饰后，JVM会为我们做两件事")]),t._v(" "),s("ul",[s("li",[t._v("1.在每个volatile写操作前插入StoreStore屏障，在写操作后插入StoreLoad屏障。")]),t._v(" "),s("li",[t._v("2.在每个volatile读操作前插入LoadLoad屏障，在读操作后插入LoadStore屏障。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://md.yike.link/20200709223003_0EgYKC_Screenshot.jpeg",alt:"volatile做了什么"}})])]),t._v(" "),s("h2",{attrs:{id:"_5-volatile-与-synchronized-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-volatile-与-synchronized-的区别"}},[t._v("#")]),t._v(" 5. volatile 与 synchronized 的区别")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("区别")]),t._v(" "),s("ul",[s("li",[t._v("volatile 只能修饰变量")]),t._v(" "),s("li",[t._v("volatile 可以用于禁止指令重排序")]),t._v(" "),s("li",[t._v("synchronized 可以修饰代码块/方法")]),t._v(" "),s("li",[t._v("volatile不保证原子性,synchronized保证原子性.. 对于一个共享变量的操作,完全可以用volatile替代synchronized")]),t._v(" "),s("li")])]),t._v(" "),s("h2",{attrs:{id:"_6-单利-volatile-中的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-单利-volatile-中的应用"}},[t._v("#")]),t._v(" 6. 单利 volatile 中的应用")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DclSingleton")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DclSingleton")]),t._v(" INSTANCE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DclSingleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DclSingleton")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("INSTANCE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*  如果变量没加volatile 并发情况下假如有A,B两个线程在此等待\n             * 1. A先获取锁,完成实例创建->释放锁\n             * 2.此时B线程并不可见A线程的创建的对象,导致对象再次创建\n             * 以上情况可能会出现多例\n             */")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DclSingleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("INSTANCE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    INSTANCE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DclSingleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" INSTANCE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_6-1-最优单例写法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-最优单例写法"}},[t._v("#")]),t._v(" 6.1. 最优单例写法")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 静态内部类的实现方式(懒汉式)\n *\n * 优点:\n * 1.可以懒加载, 在加载单利类的时候并不会加载其中的静态内部类,只有在getInstance的时候才会加载\n * 2.保证线程安全\n * 3.JMV保证单利唯一性\n *\n * @author Alex   2020/3/9 1:28 上午\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InnerClassSingleton")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InnerClassSingleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InnerClassSingleton")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InnerClassSingletonHold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("INSTANCE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InnerClassSingletonHold")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InnerClassSingleton")]),t._v(" INSTANCE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InnerClassSingleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);