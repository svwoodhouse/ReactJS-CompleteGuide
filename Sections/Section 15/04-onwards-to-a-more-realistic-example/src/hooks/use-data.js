	import {useEffect, useState} from 'react'

	const useData = (props) => {
		const [isLoading, setIsLoading] = useState(false);
		const [error, setError] = useState(null);
		const [tasks, setTasks] = useState([]);

	    const enterTaskHandler = async (taskText) => {
			setIsLoading(true);
			setError(null);
			try {
			  const response = await fetch(
				'https://react-http-e4c37-default-rtdb.firebaseio.com/tasks.json',
				{
				  method: 'POST',
				  body: JSON.stringify({ text: taskText }),
				  headers: {
					'Content-Type': 'application/json',
				  },
				}
			  );
		
			  if (!response.ok) {
				throw new Error('Request failed!');
			  }
		
			  const data = await response.json();
		
			  const generatedId = data.name; // firebase-specific => "name" contains generated id
			  const createdTask = { id: generatedId, text: taskText };
		
			  props.onAddTask(createdTask);
			} catch (err) {
			  setError(err.message || 'Something went wrong!');
			}
			setIsLoading(false);
		  };

		const fetchTasks = async (taskText) => {
		  setIsLoading(true);
		  setError(null);
		  try {
			const response = await fetch(
			  'https://react-http-e4c37-default-rtdb.firebaseio.com/tasks.json'
			);
	  
			if (!response.ok) {
			  throw new Error('Request failed!');
			}
	  
			const data = await response.json();
	  
			const loadedTasks = [];
	  
			for (const taskKey in data) {
			  loadedTasks.push({ id: taskKey, text: data[taskKey].text });
			}
	  
			setTasks(loadedTasks);
		  } catch (err) {
			setError(err.message || 'Something went wrong!');
		  }
		  setIsLoading(false);
		};
	  
		useEffect(() => {
		  fetchTasks();
		}, []);
	  
		const taskAddHandler = (task) => {
		  setTasks((prevTasks) => prevTasks.concat(task));
		};

		return {error, isLoading, tasks, taskAddHandler, enterTaskHandler }
	}
export default useData