import * as React from 'react';
import { SparklesIcon } from '@heroicons/react/outline';
import { AddPost } from '@/molecules/AddPost';

export const Feed: React.FC = () => {
  return (
    <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <SparklesIcon className="h-5 text-white" />
      </div>

      <AddPost />
    </div>
  );
};
