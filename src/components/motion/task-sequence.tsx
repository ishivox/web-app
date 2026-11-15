const tasks = [
  "Ask better questions",
  "Explore the possibilities",
  "Make something meaningful",
  "Learn. Refine. Repeat.",
];
export function TaskSequence() {
  return (
    <div className="task-sequence">
      <div className="task-window" aria-hidden="true">
        <div className="task-reel">
          {[...tasks, ...tasks.slice(0, 3)].map((task, index) => (
            <div className="animated-task" key={`${task}-${index}`}>
              <span className="task-check">
                <svg viewBox="0 0 16 16">
                  <path pathLength="1" d="m4 8 3 3 5-6" />
                </svg>
              </span>
              <span className="task-name">{task}</span>
            </div>
          ))}
        </div>
      </div>
      <ol className="sr-only">
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ol>
      <div className="task-sequence-label">
        <span className="sequence-dot" /> A little progress, every day.
      </div>
    </div>
  );
}
