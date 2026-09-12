import { CheckpointDefinition, DayDefinition } from './types';

export const APP_VERSION = '2.0-CANDIDATE';
export const STORAGE_KEY_STATE = 'ctj.part2.state.v2';
export const STORAGE_KEY_SETTINGS = 'ctj.part2.settings.v2';

export const DAYS: DayDefinition[] = [
  {
    day: 1, week: 1, title: 'Testing Arguments',
    theme: 'Strong arguments improve when they are tested against reality. Small experiments help reveal whether evidence supports the claim or whether the reasoning needs revision.',
    frameworkName: 'Tiny Experiment',
    framework: 'State a hypothesis, take one bounded action, define what you will observe, and decide in advance what result would change your view.',
    logicTip: 'Treat an argument as a hypothesis to test, not a position to defend.',
    prompts: [
      { id: 'd1-map', kind: 'map', label: 'Map the Experiment', text: 'Choose an everyday claim you can test. State the hypothesis, the small action you would take, the outcome you would measure, and what you hope to learn.', guide: 'Up to 100 words' },
      { id: 'd1-p1', kind: 'core', label: 'Prompt 1', text: 'Write one argument or claim you want to test in real life.', guide: 'Up to 25 words' },
      { id: 'd1-p2', kind: 'core', label: 'Prompt 2', text: 'Design the experiment. What action will you take, what evidence will you collect, and what result would count against your hypothesis?', guide: '50 to 75 words' },
      { id: 'd1-p3', kind: 'core', label: 'Prompt 3', text: 'How could confirmation bias affect the way you design, observe, or interpret the experiment?', guide: '50 to 100 words' },
      { id: 'd1-bonus', kind: 'optional', label: 'Bonus', text: 'How can a failed test improve the next version of your reasoning?', guide: 'Short reflection' },
      { id: 'd1-deeper', kind: 'optional', label: 'Dig Deeper', text: 'Explain experimental reasoning to a colleague using a workplace example.', guide: '50 to 100 words' }
    ]
  },
  {
    day: 2, week: 1, title: 'Evidence in Action',
    theme: 'Evidence is only useful when its source and fit are examined. Reliable action depends on knowing what information deserves trust and what remains uncertain.',
    frameworkName: 'Source Experiment',
    framework: 'Evaluate expertise, possible bias, and verifiability, then test whether acting on the information produces the expected result.',
    logicTip: 'Act on evidence, but verify the source before increasing confidence.',
    prompts: [
      { id: 'd2-map', kind: 'map', label: 'Evaluate the Source', text: 'Choose a piece of information that shaped a recent decision. Assess the source for expertise, bias, and verifiability, then identify how that evaluation should affect your action.', guide: 'Up to 100 words' },
      { id: 'd2-p1', kind: 'core', label: 'Prompt 1', text: 'Name one source of information or advice that influenced a recent decision.', guide: 'Up to 25 words' },
      { id: 'd2-p2', kind: 'core', label: 'Prompt 2', text: 'Design a Source Experiment. What advice or claim would you act on, what result would you measure, and how credible is the source?', guide: '50 to 75 words' },
      { id: 'd2-p3', kind: 'core', label: 'Prompt 3', text: 'What would you change if the source proved unreliable, incomplete, or poorly matched to your situation?', guide: '50 to 100 words' },
      { id: 'd2-bonus', kind: 'optional', label: 'Bonus', text: 'How does source reliability change the quality of action?', guide: 'Short reflection' },
      { id: 'd2-deeper', kind: 'optional', label: 'Dig Deeper', text: 'Compare how you evaluate sources now with how you did a year ago.', guide: '50 to 100 words' }
    ]
  },
  {
    day: 3, week: 1, title: 'Correlation vs Causation',
    theme: 'Patterns can be useful, but action based on correlation can fail when the assumed cause is wrong. Testing alternatives helps separate association from cause.',
    frameworkName: 'Causal Experiment',
    framework: 'Name the suspected cause, define the outcome, identify plausible alternative causes, and design a test that helps distinguish among them.',
    logicTip: 'Correlation can suggest a question. It does not prove the answer.',
    prompts: [
      { id: 'd3-map', kind: 'map', label: 'Map the Pattern', text: 'Describe a pattern where you may have assumed one thing caused another. Name the two correlated trends and one simple test that could challenge the causal assumption.', guide: 'Up to 100 words' },
      { id: 'd3-p1', kind: 'core', label: 'Prompt 1', text: 'Write one pattern where you have assumed that one event caused another.', guide: 'Up to 25 words' },
      { id: 'd3-p2', kind: 'core', label: 'Prompt 2', text: 'Design a Causal Experiment. What will you change, what will you measure, and what alternative cause must you account for?', guide: '50 to 75 words' },
      { id: 'd3-p3', kind: 'core', label: 'Prompt 3', text: 'How could overlooking another explanation distort the result?', guide: '50 to 100 words' },
      { id: 'd3-bonus', kind: 'optional', label: 'Bonus', text: 'Propose a follow-up test that would increase or reduce confidence in your causal explanation.', guide: 'Experiment plus explanation' },
      { id: 'd3-deeper', kind: 'optional', label: 'Today’s Challenge', text: 'Ask someone else what alternative cause they would test first and why.', guide: '50 to 75 words' }
    ]
  },
  {
    day: 4, week: 1, title: 'Overcoming Decision Paralysis',
    theme: 'Indecision often persists because the choice feels too large or the uncertainty feels too expensive. A bounded test can produce information without requiring full commitment.',
    frameworkName: 'Triple Check',
    framework: 'Use Head for logic, Heart for intuition and emotion, and Hand for one small action that can generate information.',
    logicTip: 'When the full decision is too large, test the next reversible step.',
    prompts: [
      { id: 'd4-map', kind: 'map', label: 'Head, Heart, Hand', text: 'Choose a decision you are stuck on. What does the evidence suggest, what does your intuition or emotion signal, and what small action could produce useful information?', guide: 'Up to 100 words' },
      { id: 'd4-p1', kind: 'core', label: 'Prompt 1', text: 'Write one decision where you feel stuck or delayed.', guide: 'Up to 25 words' },
      { id: 'd4-p2', kind: 'core', label: 'Prompt 2', text: 'Use Triple Check to name the logical case, the emotional or intuitive signal, and one bounded action you can test.', guide: '50 to 75 words' },
      { id: 'd4-p3', kind: 'core', label: 'Prompt 3', text: 'What fear, bias, or hidden cost may be keeping you from taking even a reversible step?', guide: '50 to 100 words' },
      { id: 'd4-bonus', kind: 'optional', label: 'Bonus', text: 'What would a low-risk trial teach you that more thinking cannot?', guide: 'Short reflection' },
      { id: 'd4-deeper', kind: 'optional', label: 'Dig Deeper', text: 'Explain decision paralysis to a friend using a relatable example and one reversible next step.', guide: '50 to 100 words' }
    ]
  },
  {
    day: 5, week: 1, title: 'Learning from Failure',
    theme: 'A setback becomes useful when it is treated as evidence. Separating the failed outcome from the assumptions and actions behind it makes the next experiment stronger.',
    frameworkName: 'Failure Analysis',
    framework: 'Describe the action, identify the failed or unexpected outcome, examine causes, capture the lesson, and choose the next test.',
    logicTip: 'A failed result is data only when you extract what it actually teaches.',
    prompts: [
      { id: 'd5-map', kind: 'map', label: 'Failure Analysis Cycle', text: 'Choose a recent setback. Name the action, the unexpected result, the most plausible cause, the insight, and the next action that follows from that learning.', guide: 'Up to 100 words' },
      { id: 'd5-p1', kind: 'core', label: 'Prompt 1', text: 'Write about one recent failure or setback.', guide: 'Up to 25 words' },
      { id: 'd5-p2', kind: 'core', label: 'Prompt 2', text: 'What failed, why do you think it failed, and what evidence supports that explanation?', guide: '50 to 75 words' },
      { id: 'd5-p3', kind: 'core', label: 'Prompt 3', text: 'Design the next experiment so it tests the lesson instead of merely repeating the original action.', guide: '50 to 100 words' },
      { id: 'd5-bonus', kind: 'optional', label: 'Bonus', text: 'What useful lesson would be lost if you treated the setback only as a verdict?', guide: 'Short reflection' },
      { id: 'd5-deeper', kind: 'optional', label: 'Dig Deeper', text: 'Share the lesson in a way that separates evidence from self-judgment.', guide: '50 to 100 words' }
    ]
  },
  {
    day: 6, week: 2, title: 'Creative Experiments',
    theme: 'Creative action combines imagination with a testable next step. The goal is not merely to generate ideas, but to turn one idea into evidence.',
    frameworkName: 'Creative Prototype',
    framework: 'Choose one idea, build the smallest version that can be tried, define what success or learning would look like, and observe the result.',
    logicTip: 'Creativity becomes useful when an idea can meet reality, produce feedback, and change.',
    prompts: [
      { id: 'd6-map', kind: 'map', label: 'Prototype the Idea', text: 'Choose a creative idea for solving a problem. Define the smallest prototype or test, the action you will take, and the result you will measure.', guide: 'Up to 100 words' },
      { id: 'd6-p1', kind: 'core', label: 'Prompt 1', text: 'Write one creative idea for solving a real problem.', guide: 'Up to 25 words' },
      { id: 'd6-p2', kind: 'core', label: 'Prompt 2', text: 'Design a Creative Prototype. What will you try, what will you measure, and what result would justify another iteration?', guide: '50 to 75 words' },
      { id: 'd6-p3', kind: 'core', label: 'Prompt 3', text: 'How could routine thinking or attachment to the familiar limit the experiment?', guide: '50 to 100 words' },
      { id: 'd6-bonus', kind: 'optional', label: 'Bonus', text: 'Combine one logical constraint with one imaginative leap. What hybrid experiment results?', guide: 'Experiment plus explanation' },
      { id: 'd6-deeper', kind: 'optional', label: 'Dig Deeper', text: 'Pitch the prototype as a short proposal to someone who must decide whether it is worth testing.', guide: '50 to 100 words' }
    ]
  },
  {
    day: 7, week: 2, title: 'Lateral Action',
    theme: 'Lateral thinking creates movement by deliberately leaving the usual path. The value comes from testing a credible unconventional option, not from being unusual for its own sake.',
    frameworkName: 'IF-THEN Experiment',
    framework: 'State an unconventional action as the IF condition, name the unexpected but testable THEN outcome, and identify what evidence would tell you whether the detour helped.',
    logicTip: 'Ask what might happen if the conventional assumption were reversed.',
    prompts: [
      { id: 'd7-map', kind: 'map', label: 'Map a Lateral Move', text: 'Choose a problem you have approached conventionally. Define one unconventional action and the outcome you would expect if it worked.', guide: 'Up to 100 words' },
      { id: 'd7-p1', kind: 'core', label: 'Prompt 1', text: 'Write one unconventional solution you have considered but not tested.', guide: 'Up to 25 words' },
      { id: 'd7-p2', kind: 'core', label: 'Prompt 2', text: 'Turn it into an IF-THEN experiment. What action will you test, what result do you expect, and what would count as evidence against it?', guide: '50 to 75 words' },
      { id: 'd7-p3', kind: 'core', label: 'Prompt 3', text: 'What resistance, norm, or risk could block the test, and how can you reduce that barrier without weakening the experiment?', guide: '50 to 100 words' },
      { id: 'd7-bonus', kind: 'optional', label: 'Bonus', text: 'Test a lateral move on a current problem and capture what changed.', guide: 'Solution plus explanation' },
      { id: 'd7-deeper', kind: 'optional', label: 'Today’s Challenge', text: 'Diagram the conventional path and the lateral detour as a simple flow.', guide: '50 to 75 words or equivalent outline' }
    ]
  },
  {
    day: 8, week: 2, title: 'Adaptive Mental Models',
    theme: 'Mental models help simplify reality, but they become dangerous when they are treated as reality itself. Action creates feedback that can keep the model current.',
    frameworkName: 'Model Experiment',
    framework: 'Act on the current model, observe the result, compare the result with the prediction, and update the model when reality does not match.',
    logicTip: 'When reality repeatedly disagrees with the model, update the model.',
    prompts: [
      { id: 'd8-map', kind: 'map', label: 'Test the Model', text: 'Name a mental model you use to navigate a recurring situation. What action follows from it, what result do you expect, and how would you update the model if reality differs?', guide: 'Up to 100 words' },
      { id: 'd8-p1', kind: 'core', label: 'Prompt 1', text: 'Write one mental model or assumption you regularly use in decisions.', guide: 'Up to 25 words' },
      { id: 'd8-p2', kind: 'core', label: 'Prompt 2', text: 'Design a Model Experiment. What action follows from the model, what result will you observe, and where could reality challenge it?', guide: '50 to 75 words' },
      { id: 'd8-p3', kind: 'core', label: 'Prompt 3', text: 'What practice would help you update the model instead of defending it?', guide: '50 to 100 words' },
      { id: 'd8-bonus', kind: 'optional', label: 'Bonus', text: 'Update the model using one recent result that did not fit your expectation.', guide: 'Updated model plus explanation' },
      { id: 'd8-deeper', kind: 'optional', label: 'Dig Deeper', text: 'Compare the current model with the one you used a year ago. What evidence changed it?', guide: '50 to 100 words' }
    ]
  },
  {
    day: 9, week: 2, title: 'Actionable Analogies',
    theme: 'Analogies can make a complex idea easier to act on, but an analogy is only useful when you also know where it stops fitting.',
    frameworkName: 'Analogy Experiment',
    framework: 'Use the analogy to choose an action, observe where the comparison holds, and identify where it would mislead you.',
    logicTip: 'A good analogy clarifies. A tested analogy also reveals its limits.',
    prompts: [
      { id: 'd9-map', kind: 'map', label: 'Test the Analogy', text: 'Create an analogy for a complex problem. Name the action the analogy suggests, where the comparison fits, and where it could mislead you.', guide: 'Up to 100 words' },
      { id: 'd9-p1', kind: 'core', label: 'Prompt 1', text: 'Write one analogy for a complex idea you need to act on.', guide: 'Up to 25 words' },
      { id: 'd9-p2', kind: 'core', label: 'Prompt 2', text: 'Design an Analogy Experiment. What action follows from the analogy, and what observation would show that the analogy no longer fits?', guide: '50 to 75 words' },
      { id: 'd9-p3', kind: 'core', label: 'Prompt 3', text: 'How could the analogy improve your action, and how could it oversimplify the problem?', guide: '50 to 100 words' },
      { id: 'd9-bonus', kind: 'optional', label: 'Bonus', text: 'Write a short dialogue in which the analogy helps a group decide what to try next.', guide: 'Dialogue plus explanation' },
      { id: 'd9-deeper', kind: 'optional', label: 'Dig Deeper', text: 'Apply an analogy to a current public issue and explicitly state its limit.', guide: '50 to 100 words' }
    ]
  },
  {
    day: 10, week: 2, title: 'Breakthrough Experiments',
    theme: 'Breakthroughs often begin by challenging an assumption that has quietly defined the option set. A bold test should still be bounded enough to learn from safely.',
    frameworkName: 'Opposite Experiment',
    framework: 'Identify the assumption, flip it deliberately, define a bounded action that follows from the reversal, and measure what changes.',
    logicTip: 'Ask why the opposite could be worth testing before assuming the current frame is fixed.',
    prompts: [
      { id: 'd10-map', kind: 'map', label: 'Flip the Assumption', text: 'Choose a deeply held assumption about a problem. Flip it, define one bold but bounded action that follows, and name the result you would observe.', guide: 'Up to 100 words' },
      { id: 'd10-p1', kind: 'core', label: 'Prompt 1', text: 'Write one bold action idea that challenges the normal frame.', guide: 'Up to 25 words' },
      { id: 'd10-p2', kind: 'core', label: 'Prompt 2', text: 'Design an Opposite Experiment. What assumption are you reversing, what action will you take, and what result will you measure?', guide: '50 to 75 words' },
      { id: 'd10-p3', kind: 'core', label: 'Prompt 3', text: 'How could the experiment reshape the way you approach this class of problem even if the bold action itself does not work?', guide: '50 to 100 words' },
      { id: 'd10-bonus', kind: 'optional', label: 'Bonus', text: 'What new perspective becomes visible when you reverse the assumption?', guide: 'Short reflection' },
      { id: 'd10-deeper', kind: 'optional', label: 'Dig Deeper', text: 'Describe a historical or professional breakthrough where challenging an assumption created a new path.', guide: '50 to 100 words' }
    ]
  }
];

export const CHECKPOINTS: CheckpointDefinition[] = [
  {
    id: 'week1', afterDay: 5, title: 'Week 1 Checkpoint',
    prompt: 'Reflect on your progress in experimenting with evidence. Which mini-framework produced the most useful action, and what failed result or surprise taught you the most?',
    guide: '100 to 150 words'
  },
  {
    id: 'week2', afterDay: 10, title: 'Week 2 Checkpoint',
    prompt: 'Reflect on your creative and adaptive actions. Which mini-framework sparked the most innovation, and how has experimentation changed the way you think about movement?',
    guide: '100 to 150 words'
  }
];

export const FINAL_REFLECTION_PROMPT =
  'Review Part 2. What is your biggest action-oriented insight, how will you keep experimenting, and where could a small test create useful movement next?';
