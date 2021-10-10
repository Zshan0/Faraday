Now, to give a preface, let me state this as clearly as possible. I am neither a mathematician nor a computer scientist and nor can I consider myself a philosopher. I am just a young guy with a laptop and a lot of time. However, I indeed love each of those fields, and given that thinking is not a monopoly of the old and experienced — I decided to explore as much as I can into two questions that have been grappling my mind for quite some time.

The two questions are:

1. Do mathematicians, physicists and computer scientists approach a given problem differently? Is mathematical thinking different from algorithmic thinking? I love the word algorithmic rather than computational because the latter presents an erroneous scope of considering computational thinking an equivalent of thinking/working as a computer.
2. Are some really generalizable heuristics that can be used or applied to any formal problem?

Both of the questions are very dear to my heart, and I will try my best to put forward several ideas I have come across and as they have been filtered and modified by my own point of view.

## Mathematical Thinking and Algorithmic Thinking

Mathematical Thinking and Algorithmic Thinking have a lot in common. It shall be easier to first define what we consider Mathematical Thinking to be and what it means to be a mathematician.

## Mathematical Thinking

Mathematical Thinking involves the skills of modeling a given problem formally and rigorously arguing about the formal statement.

- Here, the point of rigor is not to destroy all intuition; instead, it should be used to eliminate bad intuition while clarifying and elevating good intuition.
- Even though rigor is merely the instrument of demonstration, just as intuition and curiosity are the instruments of invention, there is no denying that it alone can provide us with certainty.

Moreover, in mathematics, there are two cultures involved. They differ based on the following two ideologies.

1. The point of understanding mathematics is to become better able to solve problems.
2. The point of solving problems is to understand mathematics better.

I subscribe more towards the second culture, probably because I have a greater passion for theory building. After all, you really can't deny that there is something truly romantic about extracting underlying structures and generalizing them to create a much bigger, expressive, and beautiful framework.

## Differences

There are two major differences between Mathematical and Algorithmic Thinking. These involve two basic notions inherent to Computer Science and are totally absent (to a large extent in mathematics).

- notion of complexity and economy of operation (complexity theories)
- dynamic notion of the state of any process (data structures)

These notions are inherently associated with the idea of implementability, which can be used to put forward the following picture — is computer science implementable mathematics? And if it were so, then computer science is rooted in physics as much as we believe it is rooted in mathematics. After all, it is the nature of our universe and existence which determines what is implementable and what is not.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/12bbe961-1cf9-4c4f-80ec-47ea769b637b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/12bbe961-1cf9-4c4f-80ec-47ea769b637b/Untitled.png)

Footnote: The more I read about this, the more I can't help thinking about whether Computer Science isn't just a whole new way of understanding Physics.

## On Heuristics

- Proofs are Programs: Often, we find that the approaches we make (both mathematical and psychological) while trying to prove some statement or construct an algorithm are similar.
    
    This became even clearer when I started reading more about the correspondence between proofs, programs, and algebraic structures. Such a trinity allows me to say with certainty that proofs and algorithms are complementary and analogous to a great extent. Furthermore, thinking about proofs and programs in this manner often gives me a clearer perspective while approaching any given problem.
    
- Wishful Thinking and Modularity: This is basically a modular approach to the idea of constructing an algorithm or proving a theorem. You start off by wishing for simplifications in your problem. You achieve simplifications by breaking it down or transforming it into a simpler problem and try your hand at that.
    
    Moreover, on a similar note, you might keep stringing lemmas (or functions or data structures) together with speculation that has been cleaned and sharpened with rigor to construct a proof (or algorithm).
    
- Speculations, Questions and Partial Progress: While solving a problem it is vital to keep changing your perspective. You need to look at it and attack it differently (using different tools with different tricks). For example, try contradictions, then maybe induction, then maybe something else and so on.
    
    Likewise, never hesitate to keep asking questions, no matter how dumb they might seem. Don't take anything you don't really understand for granted! Where's the fun in that?
    
    Also, you need to realize how crucial partial progress is. Failures are often crucial advances. In fact, people should write about their failures and speculations while writing a paper. Because well, if we don't at all have any insight into what made someone come up with an argument or construction, then what is the fricking point at all?
    
- Grothendieck and Abstraction: "While looking at a problem through different lenses ideally you would want to find the natural world for the problem, express it cohomologically and often the cohomology of that world may solve your problem, like a ripe avocado bursts in your hand."
    
    Grothendieck was a guy who literally rebuilt algebraic geometry from scratch. His unique skill was to burrow into an area so deeply that its inner patterns on the most abstract level revealed themselves, and solutions to old problems fell out in straightforward ways quite naturally to fit into a larger conceptual framework.
    
    > From Grothendieck, I have also learned not to take glory in the difficulty of a proof: difficulty means we have not understood. The idea is to be able to paint a landscape in which the proof is obvious.
    > 
    
    Moreover, in computer science, abstraction is fundamentally how we approach the most exciting problems. Or do you want to write optimizations in binary (a horrible example but you do get it)?
    
- Formalism and Writing: Formalism is arguably the most important and constant step towards solving any problem. This is something I learned while studying functional programming. Often, the act of describing a problem and stating it formally reveals what you need to solve it.
    
    And in case you are dealing with an algorithm or a computer system, formalism through programming is literally both the crux and beauty of it.
    
    Similarly, on a broader note, writing too is hugely essential. In fact, ideally, it is the primary mechanism for doing research and not just for reporting it.
    

## **Conclusion**

Heuristics, as mentioned above, serve as more of a psychological strategy than a tangible cut out path for solving problems. Almost all major problems that lurk in the horizon of human understanding are mainly solved by "knowledge (of your own field and of other fields), experience, patience and hard work".

Furthermore, we don't really understand how a human being thinks. We do have some understanding that our linguistic capabilities serve as the operating system of our minds supporting abstraction other cognitive abilities. However, that being said, there is so much more that we don't understand. But, don't let this lack of understanding reflect any kind of unimportance of the subject -- for if we don't even understand how we think, how could we possibly make machines that can truly think like and for us?

## References

1. [The Two Cultures of Mathematics](https://www.dpmms.cam.ac.uk/~wtg10/2cultures.pdf) by Gowers
2. [On Proof and Progress in Mathematics](https://arxiv.org/pdf/math/9404236.pdf) by Thurston
3. Poincaré on [Intuition in Mathematics](https://mathshistory.st-andrews.ac.uk/Extras/Poincare_Intuition/)
4. [Algorithmic Thinking and Mathematical Thinking](https://sci-hub.do/https://doi.org/10.1080/00029890.1985.11971572) by Knuth
5. [There’s more to mathematics than rigor and proofs](https://terrytao.wordpress.com/career-advice/theres-more-to-mathematics-than-rigour-and-proofs/) by Tao
6. [Ask yourself dumb questions](https://terrytao.wordpress.com/career-advice/ask-yourself-dumb-questions-and-answer-them/) by Tao
7. [Solving mathematical problems](https://terrytao.wordpress.com/career-advice/solving-mathematical-problems/) by Tao
8. [How to write a great research paper](https://www.youtube.com/watch?v=WP-FkUaOcOM)