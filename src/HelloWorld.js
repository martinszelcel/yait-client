import React from 'react';

const HelloWorld = () => {
  return (
      <div className="flex items-center justify-center h-screen">
        <div className="border rounded-lg p-8 text-gray-900 shadow-lg text-center">
            <h1 className="text-2xl mb-4">Hello World!</h1>
            <span>This is a React + Taidsdslwind + Docker template!</span>
        </div>
      </div>
  );
};

export default HelloWorld;