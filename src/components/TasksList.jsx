import { useRef, useState } from "react";

export function TasksList() {
	const [tasks, setTasks] = useState([]);

	const titleRef = useRef(null);

	const handleAddTask = () => {
		const newTasks = [...tasks];
		newTasks.push({
			title: titleRef.current.value,
			description: "Wash the dish",
			completed: false,
		});
		setTasks(newTasks);
	};

	const handleToggleTaskState = index => {
		const newTasks = [...tasks];
		newTasks[index].completed = !newTasks[index].completed;
		setTasks(newTasks);
	};

	const handleDeleteTask = index => {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	};


	return (
		<>
			<input type="text" id="title" ref={titleRef} />
			<button onClick={handleAddTask}>
				Add new task
			</button>
			{tasks.length === 0 ? (
				<div>Empty tasks list.</div>
			) : (
				<ul>
					{tasks.map(({ title, completed }, index) => (
						<li
							key={index}
							style={{
								textDecoration: completed ? "line-through" : "none",
							}}>
							{title}
							<button onClick={() => handleToggleTaskState(index)}>
								{completed ? "Undo" : "Complete"}
							</button>
							<button onClick={() => handleDeleteTask(index)}>Delete</button>
						</li>
					))}
				</ul>
			)}
		</>
	);
}
