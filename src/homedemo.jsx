import React, { useState } from 'react';

function Home() {
  const [selectedList, setSelectedList] = useState('Home');

  const privateLists = [
    { name: 'Home', icon: '🏠' },
    { name: 'Completed', icon: '✅' },
    { name: 'Personal', icon: '👤' },
    { name: 'Work', icon: '💼' },
    { name: 'Diet', icon: '💪' },
    { name: 'Books', icon: '📚' },
    { name: 'Road Trip', icon: '🚗' }
  ];

  const groupProjects = [
    { name: 'Mobile Project', people: 5 },
    { name: 'Future Project', people: 4 }
  ];

  const tasks = [
    { id: 1, title: 'Read a book', time: '08:00 - 09:00' },
    { id: 2, title: 'Wireframing new product', time: '09:00 - 11:00' },
    { id: 3, title: 'Weekly meeting', time: '13:00 - 14:00' }
  ];

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4">
        <h2 className="font-bold mb-4">Private Lists</h2>
        {privateLists.map(list => (
          <div
            key={list.name}
            onClick={() => setSelectedList(list.name)}
            className={`p-2 rounded cursor-pointer mb-2 ${selectedList === list.name ? 'bg-green-200' : ''}`}
          >
            <span className="mr-2">{list.icon}</span>
            {list.name}
          </div>
        ))}
        <h2 className="font-bold mt-8 mb-4">Groups</h2>
        {groupProjects.map(group => (
          <div key={group.name} className="p-2 rounded bg-gray-200 mb-2">
            {group.name} ({group.people} people)
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to ToDo App!</h1>
        <div className="mb-6">
          <button className="bg-green-600 text-white px-4 py-2 rounded">+ Create new task</button>
        </div>
        <div>
          <h2 className="font-bold mb-2">Tasks</h2>
          {tasks.map(task => (
            <div key={task.id} className="border rounded p-3 mb-2 flex justify-between items-center">
              <span>{task.title}</span>
              <span className="text-gray-500">{task.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
