export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  category: 'technical' | 'systems-thinking' | 'problem-solving';
}

export const blogPosts: BlogPost[] = [
  {
    id: 'systems-thinking-101',
    title: 'Systems Thinking: Why It Matters More Than Code',
    slug: 'systems-thinking-101',
    excerpt:
      'The best engineering problems aren\'t solved with code—they\'re solved by understanding the system.',
    date: '2024-01-15',
    readTime: 8,
    category: 'systems-thinking',
    content: `
# Systems Thinking: Why It Matters More Than Code

The best engineering problems aren't solved with code—they're solved by understanding the system.

## What Is Systems Thinking?

Systems thinking is the practice of understanding how parts of a system interact with one another. It's not about individual components—it's about the relationships between them, the feedback loops, the bottlenecks, and the emergent behavior that arises from those interactions.

## Why Engineers Get This Wrong

Most engineers are trained to solve specific technical problems: "Write a function that does X." But the real world is messier. Your function might work perfectly, but if it doesn't fit into the larger system, you've wasted time.

## The Lesson from Operations

I spent years in operational roles—logistics, scheduling, customer support. These roles taught me something that no computer science degree could: systems break at the seams, not the joints.

When operations fail, it's rarely because a single component is broken. It's because:
- Information doesn't flow between teams
- Processes aren't documented
- Edge cases aren't handled
- Feedback loops are missing

## Bringing This to Engineering

When I transitioned to engineering, I brought this mindset. Instead of asking "How do I build this?", I ask "How does this fit into the larger system?"

This changes everything:
- You design better APIs
- You anticipate failure modes
- You build graceful degradation
- You reduce cascading failures

## Practical Example: Microservices

A common microservices mistake is designing services based on technical boundaries instead of business domains. You end up with services that can't communicate cleanly, require complex orchestration, and introduce distributed system complexity without solving the actual problem.

Systems thinking would have you ask first: "What are the actual independent workflows? Where do they fail? What are the feedback loops?"

## The Boring Truth

The best solutions aren't clever. They're boring. They're predictable. They fail in visible ways. They're easy to understand and modify.

Systems thinking leads to boring solutions. Code-first thinking leads to clever ones that eventually break.
    `,
  },
  {
    id: 'debugging-production',
    title: 'How to Debug Production Issues Like an Operator',
    slug: 'debugging-production',
    excerpt:
      'Production debugging is more art than science. Here\'s what I\'ve learned from years of supporting live systems.',
    date: '2024-01-08',
    readTime: 6,
    category: 'technical',
    content: `
# How to Debug Production Issues Like an Operator

Production debugging is more art than science. Here's what I've learned from years of supporting live systems.

## The Operator's Advantage

As an operations person, I learned to debug systems without access to code. You can't just grep a log file when you're on a customer support call. You have to think differently.

## Rule 1: Reproduce First

The cardinal sin of debugging is trying to fix something you don't understand. Before you change anything, you must reproduce the issue.

This seems obvious, but people skip it constantly. They see a bug report and immediately start hypothesizing about causes. Wrong. First, reproduce. Actually see the broken state.

## Rule 2: Narrow the Scope

Once you've reproduced it, narrow the scope. Is it:
- All users or specific users?
- All times or specific times?
- All regions or specific regions?
- A new issue or has it always happened?

The answers tell you where to look.

## Rule 3: Follow the Data

Most issues are data issues. A customer is confused because they saw data that contradicted their expectations. A system failed because data was in an inconsistent state.

Follow the data. Where did it come from? Where did it go? Where did it diverge?

## Rule 4: Assume Your Understanding Is Wrong

This is hard. But almost every bug I've found was because I misunderstood something fundamental about how the system actually works.

Don't trust your assumptions. Test them. Verify them. Prove them wrong.

## Rule 5: Check the Boring Things First

The glamorous bugs are rare. Most issues are:
- Wrong configuration
- Permissions issue
- Race condition under load
- Off-by-one error
- Timezone handling

Check the boring things first.
    `,
  },
  {
    id: 'complexity-is-the-enemy',
    title: 'Complexity Is the Enemy',
    slug: 'complexity-is-the-enemy',
    excerpt:
      'Every line of code you write is a liability. The best code is the code you didn\'t write.',
    date: '2023-12-28',
    readTime: 7,
    category: 'problem-solving',
    content: `
# Complexity Is the Enemy

Every line of code you write is a liability. The best code is the code you didn't write.

## The Cost of Complexity

Complexity has hidden costs:
- It takes longer to understand
- It's easier to break
- It's harder to test
- It's harder to modify
- It compounds over time

A slightly complex system today is a nightmare next year.

## Where Complexity Comes From

1. **Premature abstraction** - Building generalized solutions for specific problems
2. **Handling edge cases that don't exist yet** - "Just in case" code
3. **Mixing concerns** - Code that does too many things
4. **Poor naming** - Unclear intent requires more mental overhead
5. **Over-engineering** - Using powerful tools for simple problems

## The Single Responsibility Principle

The most underrated principle in software engineering: do one thing well.

If a function does one thing, it's:
- Easy to name
- Easy to test
- Easy to understand
- Easy to reuse
- Easy to modify

## Practical Approach

When faced with a problem, ask:
1. What's the simplest solution that solves this?
2. What complexity am I adding?
3. Is that complexity necessary today?
4. Can I defer this complexity until it's actually needed?

The answer is often "no" to question 3 and "yes" to question 4.

## The Real Skill

Writing simple code is harder than writing complex code. It requires:
- Deep understanding of the problem
- Discipline to not over-engineer
- Willingness to refactor
- Commitment to clarity

The best engineers write the least code.
    `,
  },
];
